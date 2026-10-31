-- BrainBlooms D1 query reference.
-- Run one query at a time in Cloudflare > D1 > brainblooms-stats > Console.
-- The saved data contains daily aggregates by page/file path, not referrer sources or unique visitors.

-- Page requests by day and page path.
SELECT day, resource, count AS page_requests
FROM daily_stats
WHERE metric = 'page_request'
ORDER BY day DESC, resource ASC;

-- Page requests grouped by day.
SELECT day, SUM(count) AS page_requests
FROM daily_stats
WHERE metric = 'page_request'
GROUP BY day
ORDER BY day DESC;

-- Download requests by day and PDF path.
SELECT day, resource, count AS download_requests
FROM daily_stats
WHERE metric = 'download_request'
ORDER BY day DESC, resource ASC;

-- Total download requests per PDF over the retained period.
SELECT resource, SUM(count) AS download_requests
FROM daily_stats
WHERE metric = 'download_request'
GROUP BY resource
ORDER BY download_requests DESC, resource ASC;
