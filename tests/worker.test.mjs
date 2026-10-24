import test from "node:test";
import assert from "node:assert/strict";
import worker, { berlinDay, canonicalPage, classifyRequest, recordCount } from "../worker.mjs";

const headers = (values = {}) => ({ get: (name) => values[name.toLowerCase()] ?? null });
const request = (values = {}) => ({
  method: "GET", url: "https://brainblooms.de/?private=never-store-this",
  headers: headers({ accept: "text/html", "sec-fetch-dest": "document", "user-agent": "Mozilla/5.0", ...values })
});
const response = { status: 200, headers: headers({ "content-type": "text/html; charset=utf-8" }) };
const url = { hostname: "brainblooms.de", pathname: "/" };
const classify = (req = request(), target = url, res = response) => classifyRequest(req, target, res);

test("day buckets follow Berlin time across the daylight saving change", () => {
  assert.equal(berlinDay(new Date("2026-10-24T22:30:00Z")), "2026-10-25");
  assert.equal(berlinDay(new Date("2026-10-25T23:30:00Z")), "2026-10-26");
});
test("page aliases normalize, arbitrary paths are not stored", () => {
  assert.equal(canonicalPage("/index.html"), "/");
  assert.equal(canonicalPage("/play/index.html"), "/play/");
  assert.equal(canonicalPage("/play"), "/play/");
  assert.equal(canonicalPage("/unknown-private-path/"), null);
  assert.equal(classify().metric, "page_request");
  assert.equal(classify(request(), { hostname: "www.brainblooms.de", pathname: "/play/" }).resource, "/play/");
});
test("preview, opted-out, prefetch and obvious bot requests are excluded", () => {
  assert.equal(classify(request(), { hostname: "brainblooms.brainblooms-official.workers.dev", pathname: "/" }), null);
  for (const override of [
    { dnt: "1" }, { "sec-gpc": "1" }, { purpose: "prefetch" },
    { "sec-purpose": "prefetch;prerender" }, { "user-agent": "Googlebot" },
    { "sec-fetch-dest": "image" }, { "sec-fetch-dest": "empty" }
  ]) assert.equal(classify(request(override)), null);
});
test("redirects, errors, HEAD, POST, assets and non-HTML are not page requests", () => {
  for (const status of [301, 302, 304, 404, 500]) {
    assert.equal(classify(request(), url, { ...response, status }), null);
  }
  assert.equal(classify({ ...request(), method: "HEAD" }), null);
  assert.equal(classify({ ...request(), method: "POST" }), null);
  assert.equal(classify(request(), { ...url, pathname: "/site-assets/style.css" }), null);
  assert.equal(classify(request(), url, { ...response, headers: headers({ "content-type": "application/json" }) }), null);
  assert.equal(classify(request({ "sec-fetch-dest": "", accept: "text/html" })).resource, "/");
  assert.equal(classify(request({ "sec-fetch-dest": "", accept: "*/*" })), null);
});
test("database receives only the aggregate day, kind and canonical resource", async () => {
  let sql, values;
  const db = { prepare: (statement) => {
    sql = statement;
    return { bind: (...args) => { values = args; return { run: async () => ({ success: true }) }; } };
  } };
  await recordCount(db, { metric: "page_request", resource: "/play/" }, "2026-10-24");
  assert.deepEqual(values, ["2026-10-24", "page_request", "/play/"]);
  assert.equal(sql.includes("ON CONFLICT") && sql.includes("count = count + 1"), true);
});
test("disabled or missing storage leaves the original website response untouched", async () => {
  const env = { ASSETS: { fetch: async () => response }, STATS_ENABLED: "false" };
  const ctx = { waitUntil: () => { throw Error("Must not count"); } };
  assert.equal(await worker.fetch(request(), env, ctx), response);
  assert.equal(await worker.fetch(request(), { ...env, STATS_ENABLED: "true" }, ctx), response);
});
test("enabled counter writes once without modifying the response", async () => {
  let writes = 0;
  const db = { prepare: () => ({ bind: () => ({ run: async () => { writes++; } }) }) };
  const pending = [];
  const env = { ASSETS: { fetch: async () => response }, STATS_ENABLED: "true", STATS_DB: db };
  assert.equal(await worker.fetch(request(), env, { waitUntil: (p) => pending.push(p) }), response);
  await Promise.all(pending);
  assert.equal(writes, 1);
});
test("database failure is swallowed without changing website availability", async () => {
  const pending = [];
  const env = {
    ASSETS: { fetch: async () => response }, STATS_ENABLED: "true",
    STATS_DB: { prepare: () => { throw Error("Database unavailable"); } }
  };
  assert.equal(await worker.fetch(request(), env, { waitUntil: (p) => pending.push(p) }), response);
  await Promise.all(pending);
  assert.equal(pending.length, 1);
});
