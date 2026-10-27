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

test("daily maintenance deletes old aggregates and respects the off switch", async () => {
  let sql, runs = 0;
  const pending = [];
  const db = { prepare: (statement) => {
    sql = statement;
    return { run: async () => { runs++; } };
  } };
  const ctx = { waitUntil: (p) => pending.push(p) };
  await worker.scheduled({}, { STATS_ENABLED: "false", STATS_DB: db }, ctx);
  assert.equal(pending.length, 0);
  await worker.scheduled({}, { STATS_ENABLED: "true", STATS_DB: db }, ctx);
  await Promise.all(pending);
  assert.equal(runs, 1);
  assert.equal(sql, "DELETE FROM daily_stats WHERE day < date('now', '-13 months')");
});

const downloadPaths = ["/site-assets/downloads/weihnachtsbrief-kleinkinder.pdf","/site-assets/downloads/weihnachtsbrief-kindergarten.pdf","/site-assets/downloads/weihnachtsbrief-schulkinder.pdf"];
const downloadPath = downloadPaths[0];
test('only an offered PDF counts as a download, including partial requests and opt-outs', () => {
  const fileRequest = request({ accept: '*/*', 'sec-fetch-dest': 'empty' });
  for (const status of [200, 206]) {
    assert.deepEqual(classify(fileRequest, { ...url, pathname: downloadPath }, { ...response, status }), {
      metric: 'download_request', resource: downloadPath
    });
  }
  for (const status of [301, 304, 404, 500]) assert.equal(classify(fileRequest, { ...url, pathname: downloadPath }, { ...response, status }), null);
  assert.equal(classify(fileRequest, { ...url, pathname: '/site-assets/downloads/unknown.pdf' }), null);
  assert.equal(classify(request({ dnt: '1' }), { ...url, pathname: downloadPath }), null);
  assert.equal(classify({ ...fileRequest, method: 'HEAD' }, { ...url, pathname: downloadPath }), null);
  assert.equal(classify(fileRequest, { hostname: 'preview.workers.dev', pathname: downloadPath }), null);
});
test('PDF is delivered as an attachment with unchanged bytes even when counting is disabled', async () => {
  const bytes = new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52]);
  const env = {
    ASSETS: { fetch: async () => new Response(bytes, { headers: { 'Content-Type': 'application/pdf' } }) },
    STATS_ENABLED: 'false'
  };
  for (const path of downloadPaths) {
    const result = await worker.fetch(new Request('https://brainblooms.de' + path), env, {});
    assert.equal(result.headers.get('content-disposition'), 'attachment; filename="' + path.split('/').at(-1) + '"');
    assert.equal(result.headers.get('content-type'), 'application/pdf');
    assert.deepEqual(new Uint8Array(await result.arrayBuffer()), bytes);
  }
});
test('a failed PDF request remains a normal error response and is not counted', async () => {
  const original = new Response('Not found', { status: 404 });
  const env = { ASSETS: { fetch: async () => original }, STATS_ENABLED: 'true', STATS_DB: {} };
  const result = await worker.fetch(new Request('https://brainblooms.de' + downloadPath), env, {
    waitUntil: () => { throw new Error('Must not count errors'); }
  });
  assert.equal(result, original);
  assert.equal(result.headers.has('content-disposition'), false);
});

test('a successful PDF request records one aggregate without query parameters', async () => {
  const pending = [];
  const bound = [];
  const env = {
    ASSETS: { fetch: async () => new Response('%PDF-1.4', { headers: { 'Content-Type': 'application/pdf' } }) },
    STATS_ENABLED: 'true',
    STATS_DB: { prepare: () => ({ bind: (...values) => ({ run: async () => { bound.push(values); } }) }) }
  };
  const req = new Request('https://brainblooms.de' + downloadPath + '?source=banner', {
    headers: { Accept: '*/*', 'Sec-Fetch-Dest': 'empty', 'User-Agent': 'Mozilla/5.0' }
  });
  const result = await worker.fetch(req, env, { waitUntil: (p) => pending.push(p) });
  await Promise.all(pending);
  assert.equal(result.status, 200);
  assert.equal(bound.length, 1);
  assert.deepEqual(bound[0].slice(1), ['download_request', downloadPath]);
  assert.equal(await result.text(), '%PDF-1.4');
});

test('three templates are counted separately; the retired file is excluded', () => {
 for(const path of downloadPaths) assert.deepEqual(classify(request(), {...url, pathname:path}), {metric:'download_request', resource:path});
 assert.equal(classify(request(), {...url, pathname:'/site-assets/downloads/brief-an-den-weihnachtsmann.pdf'}), null);
});
