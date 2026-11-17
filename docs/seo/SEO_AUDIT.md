# Phase 4.5: Prioritised SEO audit

Audit date: 17 November 2026. Scope: the Phase 4 code in `normlee-main.zip` (Next.js 16.2.2, 12 static routes plus 7 articles). The audit was done by reading every route and data file, then building the Phase 4 code and inspecting the rendered HTML, headers and status codes of the running production build (fonts stubbed, see `PERFORMANCE_REPORT.md`). The live site was not reachable from the audit environment, so nothing here describes what is currently deployed or indexed.

Status key: **Fixed** = changed and verified in this phase. **Open** = needs management or a Google account. **Decision** = a judgement call for management to confirm or reverse.

## P0: defects that actively harmed SEO

| # | Finding (evidence from the Phase 4 build) | Status |
| --- | --- | --- |
| 1 | The 404 page declared `<link rel="canonical" href="https://www.normlee.net">`, i.e. it pointed at the homepage. The site-wide `alternates.canonical: "/"` in `app/layout.tsx` leaked onto every page that did not set its own, including the error page. | **Fixed.** Canonical removed from the layout; every page sets its own via `lib/seo.ts`. Test: 404 has `noindex` and no canonical. |
| 2 | Every inner page emitted `twitter:title` equal to the **homepage** title. Next.js replaces nested `openGraph`/`twitter` objects instead of merging them, and pages only overrode `openGraph`. | **Fixed.** `pageMetadata()` sets title, description and URL consistently in `<title>`, `og:title`, `twitter:title`. Test: all three agree on every page. |
| 3 | Inner pages had no `og:site_name` or `og:locale` (same cause as #2). | **Fixed.** |
| 4 | The production domain `https://www.normlee.net` is hard-coded and unconfirmed. If it is wrong, every canonical, sitemap URL and structured-data `@id` is wrong. A web search on 17 Nov 2026 found no page for it, which proves nothing either way. | **Open.** Now configurable with `NEXT_PUBLIC_SITE_URL`. Management must confirm. |

## P1: significant

| # | Finding | Status |
| --- | --- | --- |
| 5 | Homepage H1 was the slogan "Build With Confidence." with no topic words. | **Fixed (Decision).** Slogan kept visually. The topic ("Construction aggregates, bricks and paving services in Zimbabwe") is appended as screen-reader text, which duplicates the visible sub-heading. If management prefers a visible keyword H1, change `components/sections/Hero.tsx`. |
| 6 | `/projects` and `/testimonials` are indexable but thin: no real projects, no testimonials, placeholders only. Thin pages dilute the site. | **Fixed (Decision).** Both are `noindex, follow` and omitted from the sitemap while `lib/projects.ts` / `lib/testimonials.ts` are empty. They become indexable automatically when data is added. Reverse in `lib/seo.ts` if management disagrees. |
| 7 | Titles carried the brand twice or were generic ("Products & Prices", "Contact Us", "About Us"); inner H1s were generic ("Services", "Products & Prices"). Titles were 30 to 87 characters; six exceeded 65 characters and are likely to be truncated in results. | **Fixed.** Natural titles, 43 to 61 characters including the brand. See `ON_PAGE_SEO_AUDIT.md`. |
| 8 | Blog: article "related products" were plain text, not links; "More guides" showed the first three other articles regardless of topic; no questions answered; article 2 asserted which sand is used for plaster and mortar, which is not verified and may not match Zimbabwean practice. | **Fixed.** Links, topical related guides, visible Q&A, and the sand claim softened. See `CONTENT_STRATEGY.md`. |
| 9 | Structured data: no BreadcrumbList on inner pages (only articles, where the markup listed 3 levels but the page showed 2), `Article` instead of `BlogPosting`, no `dateModified`. | **Fixed.** Visible breadcrumbs on every inner page with matching markup. |
| 10 | Product images had misleading or unverified file names exposed in URLs (`aggregate-loading-scania-excavator.webp` names a machinery brand the alt text deliberately avoids; `tipper-spreading-fill-material.webp` names a material not verified). | **Fixed.** Four files renamed; old URLs 308-redirect. |
| 11 | The hero photograph is `display:none` below 1024 px but was preloaded and downloaded on mobile (about 38 KB wasted per mobile visit). | **Fixed.** Preload removed; photo now lazy-loads. Measured: mobile page weight 338 KB to 300 KB, LCP unchanged. |

## P2: moderate

| # | Finding | Status |
| --- | --- | --- |
| 12 | Sitemap had `changefreq`/`priority` (Google ignores both) and no `lastModified` for static pages. | **Fixed.** Removed the ignored fields; `lastModified` only where a real date exists (articles). Static pages get none rather than an invented date. |
| 13 | No staging protection: a preview deployment would be indexable. | **Fixed.** `NEXT_PUBLIC_SITE_INDEXABLE=false` blocks crawling and adds noindex. |
| 14 | No FAQ or question coverage on Products or Services. | **Fixed.** Visible Q&A using only facts already on the site. No FAQPage markup (see `STRUCTURED_DATA.md`). |
| 15 | Contrast failure on `/products` ("delivery information" link in the tinted note, ratio 4.04, WCAG needs 4.5). Pre-existing. | **Fixed.** Lighthouse accessibility on `/products` 97 to 100. |
| 16 | Search Console verification tag not supported. | **Fixed.** Optional env var; nothing is verified or claimed. |

## P3: open items needing management or Google accounts

| # | Item | Status |
| --- | --- | --- |
| 17 | The address "610-11th Street, Hatcliffe, Borrowdale, Zimbabwe" names two different suburbs. Phone numbers, hours and delivery areas are all unconfirmed (`TODO(owner)`). LocalBusiness markup is therefore deliberately off. | **Open.** See `MANAGEMENT_INFORMATION_REQUIRED.md`. |
| 18 | The Contact page lists "Areas we serve include Borrowdale, Hatcliffe, surrounding areas" while Services says no delivery area is stated until confirmed. The two statements conflict. | **Open.** Management to confirm delivery coverage. |
| 19 | The 7mm stone product is unusual: none of the Zimbabwean supplier pages found in research listed 7mm (they listed 10mm, 19/20mm, 25mm). It may be a naming or typing error. | **Open.** Management to confirm. |
| 20 | No Open Graph share image; no logo file for Organization markup. | **Open.** Supply a 1200x630 image and a logo. |
| 21 | www/non-www and http to https redirects are host-level and could not be tested. | **Open.** Verify on the live host. |
| 22 | Search Console, Analytics, Google Business Profile: no access. | **Open.** See `SEO_LAUNCH_CHECKLIST.md`. |
| 23 | Product pages for individual items: not created. No verified specification exists for any product, so each would be thin. | **Decision.** Revisit when sizes, sources and grades are supplied. |

## Things checked and found correct

Single H1 per page; no skipped heading levels; every `<img>` has non-empty alt and explicit width and height; HTTP status codes (200 for real pages, 404 for unknown URLs and unknown blog slugs, 308 for `/about/` to `/about` and `/catalog` to `/products`); trailing-slash policy consistent; `robots.txt` allows everything and names the sitemap; all internal links resolve; no orphan pages; no duplicate content between pages beyond shared navigation and footer.
