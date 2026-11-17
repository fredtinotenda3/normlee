# Phase 4.5: SEO implementation and Google Search visibility

Completed 17 November 2026. Phase 5 has **not** been started.

This document says what was genuinely done, how it was tested, and what remains. Nothing here claims a ranking, a Google integration, a verified account or a measured performance gain that was not measured. The live site and any Google account were not accessible from the working environment.

## Summary

* Fixed three real defects in the Phase 4 metadata (404 canonical pointing at the homepage; homepage `twitter:title` on every page; missing `og:site_name`) and rebuilt metadata so it cannot recur.
* Rewrote titles, descriptions and key headings for all 8 pages and 7 articles with no new product, price, delivery or company claims.
* Added visible breadcrumbs, BreadcrumbList and Service structured data, topical internal links, visible Q&A, and an offline SEO test script.
* Kept thin or unverified content out of the index (empty Projects and Testimonials pages; LocalBusiness markup gated off).
* Wrote the strategy and audit documentation. Search-volume data does not exist in this deliverable; none was invented.
* Several items cannot be finished without management or a Google account. They are listed below and in `docs/seo/`.

## Files created

* `lib/seo.ts`: `pageMetadata()` helper; indexability rules for empty pages
* `components/shared/Breadcrumbs.tsx`: visible breadcrumb plus matching JSON-LD
* `components/shared/FaqList.tsx`: visible Q&A (no FAQ markup)
* `scripts/seo-check.mjs`: offline SEO checker (`npm run seo:check`)
* `public/images/home/truck-on-dirt-road-with-machinery.webp`, `tipper-truck-emptying-load-dirt-road.webp`, `blocks-on-flatbed-truck-grab-crane.webp`, `public/images/services/blocks-delivery-truck-grab-crane.webp` (renamed copies of existing photographs; pixels unchanged)
* `PHASE4_5_SEO_CHANGES.md` (this file)
* `docs/seo/`: `SEO_AUDIT.md`, `KEYWORD_RESEARCH.md`, `ON_PAGE_SEO_AUDIT.md`, `CONTENT_STRATEGY.md`, `LOCAL_SEO_STRATEGY.md`, `STRUCTURED_DATA.md`, `PERFORMANCE_REPORT.md`, `GOOGLE_SEARCH_CONSOLE_AND_ANALYTICS.md`, `OFF_PAGE_SEO_STRATEGY.md`, `MANAGEMENT_INFORMATION_REQUIRED.md`, `SEO_LAUNCH_CHECKLIST.md`

## Files modified

`app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/products/page.tsx`, `app/services/page.tsx`, `app/projects/page.tsx`, `app/testimonials/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/contact/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `components/sections/Hero.tsx`, `components/sections/ServicesOverview.tsx`, `components/shared/PageHeader.tsx`, `lib/blog.ts`, `lib/images.ts`, `lib/site.ts`, `lib/structuredData.ts`, `next.config.ts`, `package.json` (one script added), `README.md` (SEO config section), `IMAGE_ASSET_GUIDE.md` and `IMAGE_EDITING_REPORT.md` (file names updated).

## Files to delete after unzipping (the ZIP cannot delete)

`public/images/home/aggregate-loading-scania-excavator.webp`, `public/images/home/tipper-spreading-fill-material.webp`, `public/images/home/paving-blocks-delivery-detail.webp`, `public/images/services/paving-blocks-delivery-crane-truck.webp`. Old URLs redirect to the new names, so leaving them does no harm. `package-lock.json` was not changed.

## SEO improvements delivered

1. **Metadata:** one helper produces canonical, title, description, Open Graph and Twitter data for every page, fixing nested-object overwriting. Titles 43 to 61 characters including the brand (previously 30 to 87).
2. **Indexability:** `/projects` and `/testimonials` are noindex and out of the sitemap while empty (reversible: Decision 6 in `SEO_AUDIT.md`). Staging switch via `NEXT_PUBLIC_SITE_INDEXABLE=false`.
3. **Domain:** `NEXT_PUBLIC_SITE_URL` replaces the hard-coded domain. The default is still the unconfirmed `https://www.normlee.net`.
4. **Sitemap and robots:** 13 canonical URLs; removed fields Google ignores; real dates only.
5. **Structured data:** BreadcrumbList on inner pages, BlogPosting with dateModified, Service for delivery and paving, LocalBusiness built but off, no Product/Review/FAQPage. See `STRUCTURED_DATA.md`.
6. **Content:** product category links to matching guides; six visible product questions and four service questions; five articles gained Q&A; topical related guides; related-product pills are links; the river/pit sand claim removed as unsupported; one sentence in the paving guide softened.
7. **Headings:** H1 changed on Products, Services, Contact and Blog; homepage H1 gets topic text for assistive technology (Decision 5).
8. **Images:** four photographs renamed to neutral descriptions; redirects added; hero no longer preloaded where it is hidden.
9. **Accessibility:** contrast fix on `/products` (Lighthouse accessibility 97 to 100).
10. **Search Console:** optional verification tag via environment variable; nothing verified.

## Keyword research findings

Details and limits in `docs/seo/KEYWORD_RESEARCH.md`. **No search-volume, difficulty or trend data was available, and none is stated.** Qualitative findings from four dated searches (17 Nov 2026): competitors name products "quarry stones", "3/4" or "34 stones", and "riversand/pitsand"; they use Harare, Ruwa and Chitungwiza modifiers; paving results are mostly contractor and directory pages; supplier guides and SME directories exist. **No 7mm stone was seen on any competitor page**, so the 7mm product name needs confirming. Keyword-to-page mapping is one primary page per intent. Harare and "paving blocks" terms are blocked until management confirms the address, delivery areas and whether Normlee sells pavers.

## Tests executed and results

All executed in this phase against a production build (`next build` then `next start`). Fonts from Google Fonts were stubbed in the scratch build used for testing because the sandbox cannot reach Google; the delivered code uses the original `next/font/google`.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Passed (no errors), re-run after the final change |
| `npx eslint .` | Passed (no output), re-run after the final change |
| Production build (`next build`) | Compiled; 20 static pages generated; run four times during the work |
| Baseline capture of the Phase 4 build | Found the three metadata defects above |
| `node scripts/seo-check.mjs` on the final build | **327 passed, 0 failed**: 13 sitemap URLs, 15 distinct internal links, statuses, titles, descriptions, canonicals, noindex agreement with the sitemap, og/twitter agreement, headings, images, JSON-LD parse and forbidden types, 404 behaviour, redirects (`/about/`, `/catalog`, four renamed images) |
| An earlier run of that script found one failure (a 171-character description on `/products`); fixed and re-run clean | |
| Layout at 375, 820 and 1366 px on 10 routes (30 checks) | No horizontal overflow; breadcrumbs on all 8 inner pages; contact page screenshot inspected |
| LocalBusiness gating | Scratch build with flags `true` emitted exactly one block; real build emits none |
| Staging switch and domain variable | Scratch build with `NEXT_PUBLIC_SITE_INDEXABLE=false` and a different `NEXT_PUBLIC_SITE_URL`: `robots.txt` disallowed all, `noindex` meta, canonical and sitemap used the new domain |
| Lighthouse 13.6.0 (headless Chromium 153) | SEO 100, accessibility 100 and best practices 100 on the four pages tested (after the fix for `/products`); performance and CLS in `PERFORMANCE_REPORT.md` |
| Performance comparison | Mobile page weight 338 KB to 300 KB on the home page; LCP unchanged; scores too noisy to claim a gain |

Not run: Google Rich Results Test, Schema Markup Validator, PageSpeed Insights or any test against the live domain (not reachable); real-device and screen-reader testing; any test framework suite (the repository has none). `scripts/seo-check.mjs` is the only automated SEO test.

## Remaining limitations

* The production domain, address, phones, hours, delivery areas, 7mm product and several other facts are unconfirmed. LocalBusiness markup, Harare wording and a richer Services page wait on them (`MANAGEMENT_INFORMATION_REQUIRED.md`).
* The About page still contains the placeholder "We will add more of the company's story here". The Contact page still shows a map placeholder and a delivery-area list that conflicts with the Services page.
* No share image or logo exists, so social previews show text only.
* Real fonts, the live host, Core Web Vitals field data and INP were not measured.
* No individual product pages were created, because no verified product specifications exist.
* Domain redirects (http to https, www to canonical host) are host settings and were not testable.
* Search visibility cannot be promised. Indexing and ranking depend on Google, competition and time.

## Management information required

See `docs/seo/MANAGEMENT_INFORMATION_REQUIRED.md` (23 items). The most urgent: the production domain, the exact address, the delivery areas, and the 7mm product.

## Google account actions still required

All of them. Nothing was created, verified, submitted or connected. See `docs/seo/GOOGLE_SEARCH_CONSOLE_AND_ANALYTICS.md` and `docs/seo/SEO_LAUNCH_CHECKLIST.md` section 3: Search Console property and sitemap submission, URL inspection, optional GA4 (with consent and a privacy policy), and Google Business Profile (only by an authorised owner with a confirmed address).

## Decisions for management

1. Keep the topic text in the homepage H1 hidden (current) or show it.
2. Keep Projects and Testimonials noindex until they have real content.
3. Confirm the article edits, especially the softened sand statement.

Phase 5 will start only after this phase has been reviewed and approved.
