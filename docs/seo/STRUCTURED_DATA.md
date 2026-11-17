# Structured data: decisions and validation

## What is emitted

| Schema | Where | Source of every value |
| --- | --- | --- |
| `Organization` (`@id` `/#organization`) | Every page (layout) | name, legal name, URL, description, founding year (owner-verified), `areaServed` Country Zimbabwe |
| `WebSite` (`/#website`) | Every page | name, URL, publisher reference |
| `BreadcrumbList` | Every inner page, mirrors the visible breadcrumb | page titles and URLs |
| `BlogPosting` | Each article | headline, description, `datePublished`, `dateModified`, author/publisher references |
| `Service` (x2) | `/services` | Delivery and Paving installation. Text copied from the visible page. No area, price or offer. |
| `LocalBusiness` | **Not emitted** | Built by `localBusinessJsonLd()` but returns `null` until `verifiedBusinessDetails` in `lib/site.ts` has address, phones and hours all set to `true` |

## What is deliberately not emitted, and why

* **Product / Offer:** published prices are "confirmed when you order", availability is "not guaranteed until we confirm it", and several prices are flagged `priceNeedsConfirmation`. Product markup would assert price and availability the page itself disclaims. No product has a verified specification.
* **AggregateRating / Review:** no verified reviews exist.
* **FAQPage:** Google limits FAQ rich results to well-known government and health sites, so it would add nothing. The Q&A on Products, Services and articles is visible text only.
* **Address, telephone, opening hours, geo, logo, `sameAs`:** unverified or not supplied.
* **`SearchAction`:** the site has no search.

## Validation performed

Run by `scripts/seo-check.mjs` against the production build (all executed, 327 checks, 0 failures):

* every JSON-LD block parses as JSON and has `@context` `https://schema.org`;
* exactly one `Organization` and one `WebSite` per page (no duplicates or contradictions);
* `BreadcrumbList` on every non-home page; `BlogPosting` on every article;
* no `Product`, `Offer`, `Review`, `Rating`, `AggregateRating` or `FAQPage` anywhere;
* no `LocalBusiness` while the verification flags are false.

A separate scratch build with the three flags set to `true` was made to confirm that exactly one `LocalBusiness` block then appears (it did), and was discarded.

**Not performed:** Google's Rich Results Test and the Schema Markup Validator (`validator.schema.org`) are web tools and were not reachable from the build environment. Management or the developer should paste each URL into both after deployment and record the result in the launch checklist.
