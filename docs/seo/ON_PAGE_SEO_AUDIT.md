# On-page SEO audit

Audit and changes of 17 November 2026. All "after" values were read from the rendered HTML of the production build and checked by `scripts/seo-check.mjs`. Titles include the " | Normlee Investments" suffix where the template adds it.

Copy rule applied throughout: no new product specifications, prices, certifications, delivery capabilities, reviews, project history, warranties or achievements. Every sentence added is either already on the site, general information that is true regardless of supplier, or a statement that something is confirmed per enquiry.

## Titles and descriptions

| Page | Title before (chars) | Title after (chars) | Description after (chars) |
| --- | --- | --- | --- |
| `/` | Normlee Investments \| Construction Aggregates & Paving Services in Zimbabwe (75) | Building Materials & Paving in Zimbabwe \| Normlee Investments (61) | 160 |
| `/about` | About Us \| Normlee Investments (30) | About Normlee Investments \| Supplying Materials Since 2010 (58) | 148 |
| `/products` | Products & Prices \| Normlee Investments (39) | Stones, Sand & Crusher Run: Prices \| Normlee Investments (56) | 159 |
| `/services` | Services: Material Supply, Delivery & Paving \| Normlee Investments (66) | Material Supply, Delivery & Paving \| Normlee Investments (56) | 165 |
| `/projects` | Projects \| Normlee Investments (30) | Projects and Delivery Photographs \| Normlee Investments (55), **noindex** | 138 |
| `/testimonials` | Customer Testimonials \| Normlee Investments (43) | unchanged (43), **noindex** | 89 |
| `/blog` | Guides & Advice \| Normlee Investments (37) | Guides on Stones, Sand & Paving Prep \| Normlee Investments (58) | 152 |
| `/contact` | Contact Us \| Normlee Investments (32) | Contact & Quote Requests \| Normlee Investments (46) | 151 |
| Articles (7) | 54 to 87 chars | 54 to 61 chars (see `lib/blog.ts` `seoTitle`) | 134 to 155 |

Descriptions are written as plain sentences. They name materials once and end with a fact or a call to action. "Harare" is absent from every title and description because the address and delivery areas are unconfirmed (see `LOCAL_SEO_STRATEGY.md`).

## Per-page review

### Home (`/`)
* **Intent:** brand and broad "building materials and paving in Zimbabwe".
* **H1:** "Build With Confidence." plus screen-reader topic text (Decision, see `SEO_AUDIT.md` #5). H2s: What We Offer, Why Normlee, Get to Know Normlee, Published Prices, Ready to Build. No skipped levels.
* **Changes:** new title and description; Delivery card now links to `/services#delivery` (was `/contact`) so the delivery intent reaches the right page; hero photograph no longer preloaded on mobile.
* **Images:** 4 distinct genuine photos with factual alt text; two placeholders labelled "Photo coming soon".
* **Remaining:** the H1 slogan carries no topic words visibly. Placeholder tiles for paving and building materials remain until real photos exist.

### About (`/about`)
* **H1/H2:** one H1; H2s "Construction materials for builders, contractors and homeowners", "Operating since 2010", "Products and services", "Our approach to enquiries". Fine.
* **Changes:** title and description rewritten; breadcrumb added.
* **Remaining:** the "Operating since 2010" section still reads "We will add more of the company's story here as it is confirmed". Placeholder text on a public page is a weak quality signal, and nothing can be invented to replace it. Needs management's company story, names and certifications.

### Products (`/products`)
* **Intent:** specific material terms and prices.
* **H1** changed from "Products & Prices" to "Construction Materials & Published Prices". H2s: Product categories, Full price list and calculator, Need Help?, Frequently asked questions; H3 category names; H4 product names.
* **Changes:** title, description, breadcrumb; each category links to the matching guide; six visible questions (materials sold, how prices are shown, delivery not included, what 3/4 means, availability, working out cubic metres); category anchors (`#category-Sand` etc.) now have scroll offset and are used by article links; contrast fix.
* **Remaining:** descriptions stay generic because no specifications were supplied. Only the sand category has a photograph. Prices flagged `priceNeedsConfirmation` (7mm, 10mm) and Top Soil/Black Top Soil still need management's answer. Prices were **not** changed.

### Services (`/services`)
* **Intent:** delivery and paving installation, kept distinct from material supply.
* **H1** changed from "Services" to "Material Supply, Delivery & Paving". Sections keep ids `#supply`, `#delivery`, `#paving`.
* **Changes:** title, description, breadcrumb, `Service` JSON-LD for Delivery and Paving installation, four visible questions, no new claims. The page still says delivery coverage is not stated until confirmed.
* **Remaining:** paving types (driveways, industrial, walkways) have placeholder images and no verified detail (types, finishes, installer). Contact page says "Areas we serve include Borrowdale, Hatcliffe" which conflicts with this page (see `SEO_AUDIT.md` #18).

### Projects (`/projects`) and Testimonials (`/testimonials`)
* Both contain only placeholders or a "coming soon" message. They are `noindex, follow` and excluded from the sitemap, and flip to indexable automatically once real entries exist in `lib/projects.ts` / `lib/testimonials.ts`. Both remain in the navigation so users and crawlers can still reach them.
* The Projects page keeps four genuine delivery photographs, captioned as deliveries, never as completed projects.

### Blog index and articles
* Index: H1 "Guides on Construction Materials & Paving"; each card links to its guide.
* Articles: breadcrumb now matches markup; "Updated" date shown; related-product pills are links to the matching product category; "Related guides" are chosen by topic; visible questions on five articles; closing line links to products, delivery and contact. See `CONTENT_STRATEGY.md` for the per-article audit.

### Contact (`/contact`)
* **H1** "Contact Normlee Investments"; breadcrumb added; description lists the ways to get in touch.
* **Remaining:** address, hours and delivery areas unconfirmed; visible "Map placeholder" tile. The three phone numbers and WhatsApp are consistent across header, footer, contact page and structured data sources (all read from `lib/site.ts`).

## Cross-site checks (automated, all passed)

One H1 per page; no skipped heading levels; titles 15 to 70 characters and descriptions 70 to 165; canonical equals the page URL; `og:title`, `twitter:title` and `<title>` agree; `og:url` equals canonical; every image has alt, width and height; every sitemap page is linked from another page.

## Readability and mobile

Copy is short sentences in plain language. Layout was checked in headless Chromium at 375, 820 and 1366 px on 10 routes (including the 404): no horizontal overflow in 30 checks, breadcrumb present on all eight inner pages. Not tested: real devices, screen readers, the live domain.
