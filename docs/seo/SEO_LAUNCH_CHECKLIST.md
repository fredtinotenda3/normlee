# SEO launch checklist

17 November 2026. `[x]` = done and verified in this phase. `[ ]` = still to do. Nothing in sections 2 and 3 has been done, because those need management or a Google account.

## 1. Developer tasks

Done and tested in Phase 4.5:

- [x] Canonical URL set per page; no stray canonical on the 404 page
- [x] `og:title`, `twitter:title`, `<title>` consistent; `og:site_name` and locale on all pages
- [x] Sitemap lists only canonical, indexable, 200 pages; no ignored fields; real dates only
- [x] robots.txt allows crawling and names the sitemap; staging switch (`NEXT_PUBLIC_SITE_INDEXABLE=false`) tested
- [x] Unknown URLs return 404 with noindex; `/about/` redirects 308 to `/about`; `/catalog` redirects to `/products`
- [x] Single H1 per page, no skipped heading levels
- [x] Structured data: Organization, WebSite, BreadcrumbList, BlogPosting, Service; LocalBusiness gated off; no Product, Review or FAQPage
- [x] Images: alt text, width and height on all; four files renamed with redirects; hero preload removed
- [x] Internal links all resolve; no orphan pages
- [x] `tsc`, ESLint, production build, `npm run seo:check` (327 checks), layout check at 3 widths, Lighthouse runs recorded in `PERFORMANCE_REPORT.md`

To do before or at launch:

- [ ] Set `NEXT_PUBLIC_SITE_URL` in the production environment to the confirmed domain; rebuild
- [ ] Do **not** set `NEXT_PUBLIC_SITE_INDEXABLE` in production
- [ ] Confirm the host redirects `http` to `https` and the non-canonical host (www or bare) to the canonical host with a single 301/308 hop
- [ ] Confirm the host serves gzip or brotli and long-cache headers for `/_next/static`
- [ ] Run `npm run build && npm start && npm run seo:check` against the final deployment URL: `node scripts/seo-check.mjs https://<production domain>`
- [ ] Re-run Lighthouse/PageSpeed on the live URL with the real fonts; record in `PERFORMANCE_REPORT.md`
- [ ] Paste each page type into Google's Rich Results Test and the Schema Markup Validator; record results
- [ ] Add the 1200x630 share image and logo when supplied; add `images` to Open Graph metadata and `logo` to Organization
- [ ] Delete the four old image files if still present (`aggregate-loading-scania-excavator.webp`, `tipper-spreading-fill-material.webp`, `paving-blocks-delivery-detail.webp`, `paving-blocks-delivery-crane-truck.webp`); the redirects stay
- [ ] After management answers, update `lib/site.ts`, then flip `verifiedBusinessDetails` and validate the LocalBusiness output
- [ ] When projects or testimonials exist, add entries to the data files (the pages become indexable and enter the sitemap automatically)

## 2. Management tasks

See `MANAGEMENT_INFORMATION_REQUIRED.md` for the full numbered list. Minimum before launch:

- [ ] Confirm the production domain
- [ ] Confirm address wording, phones, WhatsApp and hours
- [ ] Confirm delivery areas (resolve the Contact vs Services conflict)
- [ ] Confirm the 7mm and 10mm products and prices, and Top Soil naming
- [ ] Provide the company story, logo and share image
- [ ] Have a trade-knowledgeable person review the seven guides and sign them off
- [ ] Provide truck capacities, delivery terms and paving details if they are to be published
- [ ] Decide on a privacy policy before any analytics
- [ ] Appoint who owns the Google account(s)

## 3. Google account configuration

See `GOOGLE_SEARCH_CONSOLE_AND_ANALYTICS.md` and `LOCAL_SEO_STRATEGY.md`. None has been started.

- [ ] Create and verify a Search Console property for the production domain
- [ ] Submit `/sitemap.xml`; confirm 13 URLs discovered
- [ ] URL Inspection on `/`, `/products`, `/services` and an article; request indexing
- [ ] Add a second Search Console owner
- [ ] Decide on and, if agreed, set up GA4 with consent and a privacy policy
- [ ] Create or claim the Google Business Profile (only with an authorised account and a confirmed address and category)
- [ ] Link Search Console and GA4

## 4. Ongoing SEO activities

- [ ] Weekly for the first month, then monthly: Search Console Pages, Performance and Core Web Vitals reports
- [ ] Monthly: check that published prices on `/products` are current; update the `updated` date of an article when its content is revised
- [ ] Monthly: publish one verified guide when facts are available (`CONTENT_STRATEGY.md`)
- [ ] Quarterly: re-run `npm run seo:check`, Lighthouse, a broken-link check, and directory-listing consistency checks
- [ ] Continuous: ask real customers for reviews; add real photographs and projects with permission
- [ ] Follow `OFF_PAGE_SEO_STRATEGY.md` for legitimate listings and partner links, with approval each time
- [ ] After 8 to 12 weeks of Search Console data: revisit `KEYWORD_RESEARCH.md` with real queries and impressions
- [ ] No ranking position or timeline is guaranteed
