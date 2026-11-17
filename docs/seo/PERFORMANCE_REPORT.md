# Performance report

17 November 2026. **Every number below was measured in this phase; nothing is estimated.** Read the limitations: lab results from a sandbox are indicative only and are not Core Web Vitals field data.

## Test environment

| Item | Value |
| --- | --- |
| Tool | Lighthouse 13.6.0 (CLI) |
| Browser | Headless Chromium 153 (Playwright build 1243) |
| Runtime | Node 22.23, Next.js 16.2.2 production build served with `next start` on localhost |
| Throttling | Lighthouse defaults: simulated mobile (slow 4G, CPU slowdown) and the "desktop" preset |
| Host | A shared sandbox; Lighthouse reported a CPU benchmark index of about 2,955 on one run. Results vary a lot between identical runs |
| **Fonts** | **Stubbed.** The sandbox cannot reach Google Fonts, so the build used system fonts. Font loading, the font-swap layout shift and font bytes were **not** measured |
| Network | Localhost: no CDN, no real compression or caching behaviour of the future host |
| Field data | None. The site is not known to be live and has no Chrome UX Report data |

Baseline = the Phase 4 code, built and measured the same way. After = the Phase 4.5 code.

## What can and cannot be measured

* **LCP, CLS, FCP, TBT:** measured in the lab.
* **INP:** cannot be measured by Lighthouse (it needs real interactions). Total Blocking Time is the lab proxy. INP must come from Search Console's Core Web Vitals report or real-user monitoring after launch.
* **Real-device performance, the live host, TTFB behind a CDN:** not measured.

## Results

### Home page, three runs each, medians (mobile and desktop)

| | Baseline | After |
| --- | --- | --- |
| Mobile performance score (3 runs) | 87 / 86 / 89 | 78 / 86 / 87 |
| Mobile FCP (median) | 925 ms | 926 ms |
| Mobile LCP (median) | 925 ms | 926 ms |
| Mobile TBT (median) | 511 ms | 554 ms |
| Mobile CLS | 0 / 0 / 0 | 0 / 0 / 0 |
| **Mobile bytes transferred** | **338 KB** | **300 KB** |
| Desktop performance score (3 runs) | 100 / 86 / 85 | 91 / 96 / 88 |
| Desktop LCP (median) | 588 ms | 516 ms |
| Desktop TBT (median) | 302 ms | 238 ms |
| Desktop CLS | 0.015 / 0 / 0 | 0 / 0 / 0 |
| Desktop bytes transferred | 406 KB | 409 KB |

**Interpretation, honestly:**

* The only reliable, repeatable difference is **38 KB less data on mobile**. The cause is deterministic: the hero photograph is hidden below 1024 px but was preloaded, so every phone downloaded it for nothing. The preload was removed.
* LCP is unchanged on mobile (text is the largest element) and not worse on desktop.
* Performance scores swing by up to about 15 points between identical runs here (for example the baseline desktop scored 100, 86 and 85), so **no score improvement or regression can be claimed.** TBT medians moved in both directions across the two form factors, within that noise.
* CLS is 0 on every page measured, apart from one 0.015 baseline run.

### Final build, one mobile run per page, all categories

Run on the near-final build (before two small copy and class changes that do not affect load).

| Page | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS | Transferred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 89 | 100 | 100 | 100 | 931 ms | 435 ms | 0 | 300 KB |
| `/products` | 92 | 97 then **100** after the contrast fix | 100 | 100 | 917 ms | 355 ms | 0 | 333 KB |
| `/blog/types-of-construction-sand` | 92 | 100 | 100 | 100 | 759 ms | 338 ms | 0 | 224 KB |
| `/contact` | 93 | 100 | 100 | 100 | 767 ms | 328 ms | 0 | 215 KB |

`/products` was re-run after the fix: accessibility 100, SEO 100. Lighthouse's "SEO" category checks basics (title, description, crawlability, links); it is not a ranking score.

### Payload

Home page JavaScript transferred is about 160 KB and CSS about 8 KB, unchanged by this phase. No new client-side dependencies were added; all new components are server-rendered.

## Changes made for performance

1. Removed the hero image `preload` (it fetched a hidden image on mobile). The image still loads lazily on desktop.
2. Renamed four photographs (SEO, not speed); old URLs redirect.
3. Nothing else was changed. AVIF output was tried and **reverted** because no benefit was measured (the saving was about 2 KB per image) and AVIF encoding costs more server CPU on first request.

## Not done, and why

* **Fonts:** the site loads Inter (variable) and Poppins in five weights (400 to 800) through `next/font`, self-hosted at build time with `display: swap`. Trimming unused Poppins weights could save a few tens of KB, but the saving could not be measured without the real fonts, so nothing was changed. Re-test on the real build.
* **Image dimensions:** every `<img>` already has explicit width and height (checked on all pages), which is why CLS is 0.
* **Responsive images:** Next.js already serves resized WebP at several widths via `/_next/image`.

## Next measurements (management or developer, after launch)

1. Run PageSpeed Insights on `/`, `/products`, `/services`, `/blog/...` for mobile and desktop and paste the results here with the date.
2. Watch the Search Console Core Web Vitals report for LCP, INP and CLS once there is enough traffic (field data takes weeks to appear).
3. Re-test after any new photographs or scripts (analytics, chat widgets) are added.
