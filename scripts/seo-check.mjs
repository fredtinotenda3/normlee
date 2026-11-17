#!/usr/bin/env node
/**
 * Offline SEO checks against a RUNNING server (npm run build && npm start).
 *   node scripts/seo-check.mjs [baseUrl]        default http://localhost:3000
 * Checks status codes, titles, descriptions, canonicals, robots meta, headings, JSON-LD, images,
 * internal links, sitemap and robots.txt. Exits 1 if any check fails.
 * The canonical origin is read from the sitemap itself, so it works with any NEXT_PUBLIC_SITE_URL.
 */
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");
let fails = 0;
let passes = 0;
const ok = (cond, msg) => {
  if (cond) passes++;
  else {
    fails++;
    console.log(`FAIL  ${msg}`);
  }
};
const get = (path, init) => fetch(base + path, { redirect: "manual", ...init });
const attr = (html, re) => (html.match(re) ?? [])[1];
const decode = (t = "") => t.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

// ---- sitemap and robots
const smRes = await get("/sitemap.xml");
ok(smRes.status === 200, "sitemap.xml returns 200");
const sm = await smRes.text();
const locs = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => decode(m[1]));
ok(locs.length > 0, "sitemap has URLs");
ok(new Set(locs).size === locs.length, "sitemap has no duplicate URLs");
const origin = new URL(locs[0]).origin;
ok(locs.every((l) => new URL(l).origin === origin), "all sitemap URLs share one origin");
ok(locs.every((l) => l.startsWith("https://")), "all sitemap URLs use https");
ok(locs.every((l) => !l.endsWith("/") || new URL(l).pathname === "/" ), "no trailing slashes in sitemap URLs");
ok(locs.every((l) => !l.includes("?") && !l.includes("#")), "no query strings or fragments in sitemap URLs");
const robots = await (await get("/robots.txt")).text();
ok(/Sitemap:\s*\S+\/sitemap\.xml/i.test(robots), "robots.txt references the sitemap");
ok(robots.includes(origin + "/sitemap.xml"), "robots.txt sitemap URL matches the sitemap origin");
ok(!/Disallow:\s*\/\s*$/m.test(robots), "robots.txt does not block the whole site");

const paths = locs.map((l) => new URL(l).pathname);
const forbiddenTypes = ["Product", "Offer", "AggregateRating", "Review", "FAQPage", "Rating"];
const internal = new Set();
const jsonldTypes = {};

for (const path of paths) {
  const res = await get(path);
  ok(res.status === 200, `${path} returns 200 (got ${res.status})`);
  const html = await res.text();
  const title = decode(attr(html, /<title>(.*?)<\/title>/s));
  const desc = decode(attr(html, /<meta name="description" content="(.*?)"/s));
  const canon = decode(attr(html, /<link rel="canonical" href="(.*?)"/s));
  const robotsMeta = attr(html, /<meta name="robots" content="(.*?)"/s) ?? "";
  ok(title && title.length >= 15 && title.length <= 70, `${path}: title length 15-70 (got ${title?.length}: "${title}")`);
  ok(desc && desc.length >= 70 && desc.length <= 165, `${path}: description length 70-165 (got ${desc?.length})`);
  ok(canon === origin + (path === "/" ? "" : path), `${path}: canonical is self (got ${canon})`);
  ok(!/noindex/.test(robotsMeta), `${path}: indexable (robots meta "${robotsMeta}")`);
  const ogTitle = decode(attr(html, /<meta property="og:title" content="(.*?)"/s));
  const twTitle = decode(attr(html, /<meta name="twitter:title" content="(.*?)"/s));
  ok(ogTitle === twTitle && ogTitle === title, `${path}: og:title, twitter:title and <title> agree`);
  ok(/<meta property="og:site_name"/.test(html), `${path}: og:site_name present`);
  ok(attr(html, /<meta property="og:url" content="(.*?)"/s) === canon, `${path}: og:url equals canonical`);

  // headings
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  ok(levels.filter((l) => l === 1).length === 1, `${path}: exactly one h1 (got ${levels.filter((l) => l === 1).length})`);
  let prev = 0, skip = false;
  for (const l of levels) {
    if (prev && l > prev + 1) skip = true;
    prev = l;
  }
  ok(!skip, `${path}: no skipped heading levels (${levels.join("")})`);

  // images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    ok(/ alt="[^"]+"/.test(tag), `${path}: image has non-empty alt (${tag.slice(0, 80)})`);
    ok(/ width="\d+"/.test(tag) && / height="\d+"/.test(tag), `${path}: image has width and height`);
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1]);
  const types = [];
  for (const b of blocks) {
    let data;
    try {
      data = JSON.parse(b);
    } catch {
      ok(false, `${path}: JSON-LD parses`);
      continue;
    }
    ok(data["@context"] === "https://schema.org", `${path}: JSON-LD has schema.org @context`);
    types.push(data["@type"]);
  }
  jsonldTypes[path] = types;
  ok(types.filter((t) => t === "Organization").length === 1, `${path}: exactly one Organization block`);
  ok(types.filter((t) => t === "WebSite").length === 1, `${path}: exactly one WebSite block`);
  ok(!types.includes("LocalBusiness"), `${path}: no LocalBusiness block until details are verified`);
  ok(!types.some((t) => forbiddenTypes.includes(t)), `${path}: no Product/Offer/Review/Rating/FAQPage markup`);
  if (path !== "/") ok(types.includes("BreadcrumbList"), `${path}: BreadcrumbList present`);
  if (path.startsWith("/blog/")) ok(types.includes("BlogPosting"), `${path}: BlogPosting present`);

  // links
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = decode(m[1]);
    if (href.startsWith("/") && !href.startsWith("//")) internal.add(href.split("#")[0] || path);
  }
}

// ---- internal links resolve to 200 (or a single redirect to a 200)
for (const link of internal) {
  const res = await get(link);
  let status = res.status;
  if (status >= 300 && status < 400) status = (await get(new URL(res.headers.get("location"), base).pathname)).status;
  ok(status === 200, `internal link ${link} resolves (got ${res.status})`);
  ok(!link.endsWith("/") || link === "/", `internal link ${link} has no trailing slash`);
}
// ---- every sitemap page is linked from somewhere
for (const p of paths) ok(p === "/" || internal.has(p), `${p} is linked internally`);

// ---- status codes and redirects
const notFound = await get("/this-page-does-not-exist");
ok(notFound.status === 404, "unknown URL returns 404");
const nfHtml = await notFound.text();
ok(/noindex/.test(attr(nfHtml, /<meta name="robots" content="(.*?)"/s) ?? ""), "404 page is noindex");
ok(!/<link rel="canonical"/.test(nfHtml), "404 page has no canonical");
const ts = await get("/about/");
ok(ts.status === 308 && new URL(ts.headers.get("location"), base).pathname === "/about", "/about/ redirects (308) to /about");
const cat = await get("/catalog");
ok(cat.status === 308 && new URL(cat.headers.get("location"), base).pathname === "/products", "/catalog redirects (308) to /products");
const unknownBlog = await get("/blog/not-a-real-article");
ok(unknownBlog.status === 404, "unknown blog slug returns 404");
for (const old of [
  "/images/home/aggregate-loading-scania-excavator.webp",
  "/images/home/tipper-spreading-fill-material.webp",
  "/images/home/paving-blocks-delivery-detail.webp",
  "/images/services/paving-blocks-delivery-crane-truck.webp",
]) {
  const r = await get(old);
  ok(r.status === 308, `renamed image ${old} redirects (got ${r.status})`);
}

// ---- noindex pages (empty projects/testimonials) must be excluded from the sitemap
for (const p of ["/projects", "/testimonials"]) {
  const html = await (await get(p)).text();
  const noindex = /noindex/.test(attr(html, /<meta name="robots" content="(.*?)"/s) ?? "");
  ok(noindex === !paths.includes(p), `${p}: noindex status agrees with sitemap membership (noindex=${noindex}, in sitemap=${paths.includes(p)})`);
}

console.log(`\nSEO check: ${passes} passed, ${fails} failed, ${paths.length} sitemap URLs, ${internal.size} distinct internal links checked`);
process.exit(fails ? 1 : 0);
