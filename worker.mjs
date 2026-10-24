// BrainBlooms: server-side aggregate counters. No cookies or browser script.
const HOSTS = new Set(["brainblooms.de", "www.brainblooms.de"]);
const PAGES = new Set([
  "/", "/play/", "/impressum/", "/datenschutz-website/", "/datenschutz/",
  "/terms/", "/daten-loeschen/", "/delete-data/"
]);

// There are currently no first-party downloads on the website.
// Add only real downloadable files here and to assets.run_worker_first.
// A click to an app store is not a completed download or installation.
const DOWNLOADS = new Set([]);

export function berlinDay(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const part = (type) => parts.find((item) => item.type === type).value;
  return part("year") + "-" + part("month") + "-" + part("day");
}

export function canonicalPage(pathname) {
  if (pathname.endsWith("/index.html")) pathname = pathname.slice(0, -10);
  if (pathname !== "/" && !pathname.endsWith("/")) pathname += "/";
  return PAGES.has(pathname) ? pathname : null;
}

export function classifyRequest(request, url, response) {
  if (request.method !== "GET" || !HOSTS.has(url.hostname)) return null;
  const header = (name) => request.headers.get(name) || "";
  if (header("dnt") === "1" || header("sec-gpc") === "1") return null;
  if (/prefetch|prerender/i.test(header("purpose") + " " + header("sec-purpose"))) return null;
  // Coarse filtering only, not reliable bot identification. No user agent is stored.
  if (/bot|crawler|spider|slurp|bingpreview|headless|curl|wget/i.test(header("user-agent"))) return null;

  if (DOWNLOADS.has(url.pathname) && (response.status === 200 || response.status === 206)) {
    return { metric: "download_request", resource: url.pathname };
  }
  const resource = canonicalPage(url.pathname);
  if (!resource || response.status !== 200) return null;
  if (!/^text\/html(?:;|$)/i.test(response.headers.get("content-type") || "")) return null;
  const destination = header("sec-fetch-dest");
  if (destination && destination !== "document") return null;
  if (!destination && !/text\/html/i.test(header("accept"))) return null;
  return { metric: "page_request", resource };
}

export async function recordCount(db, event, day = berlinDay()) {
  await db.prepare(
    "INSERT INTO daily_stats (day, metric, resource, count) VALUES (?, ?, ?, 1) " +
    "ON CONFLICT(day, metric, resource) DO UPDATE SET count = count + 1"
  ).bind(day, event.metric, event.resource).run();
}

export default {
  async fetch(request, env, ctx) {
    const response = await env.ASSETS.fetch(request);
    // Disabled until hosting/privacy information and live checks are ready.
    if (env.STATS_ENABLED !== "true" || !env.STATS_DB) return response;
    try {
      const event = classifyRequest(request, new URL(request.url), response);
      if (event) {
        // Storage errors must not change the website response. No request details logged.
        ctx.waitUntil(recordCount(env.STATS_DB, event).catch(() => {}));
      }
    } catch {
      // Telemetry must never prevent an otherwise valid asset response.
    }
    return response;
  }
};
