# Phase 4 changes (corporate website completion)

The ZIP contains only files that are new or changed compared with `normlee-main.zip`. Unzip over the project root.

## New
* Pages: `app/about`, `app/projects`, `app/testimonials`, `app/blog`, `app/blog/[slug]`, `app/sitemap.ts`, `app/robots.ts`
* Data: `lib/nav.ts`, `lib/blog.ts` (7 guides), `lib/projects.ts` (empty), `lib/testimonials.ts` (empty), `lib/productInfo.ts`, `lib/structuredData.ts`
* Components: `PageHeader`, `CtaBanner`, `JsonLd`, `ExploreLinks`
* Image: `public/images/home/earth-heap-dirt-road.webp`

## Changed
* `app/layout.tsx` (metadata, Open Graph, canonical, Organization/WebSite JSON-LD), `app/page.tsx`, `app/products/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`, `app/not-found.tsx`
* `components/layout/Navigation.tsx` (8 links; mobile menu below 1024px), `Footer.tsx`
* `components/sections/Hero.tsx`, `ServicesOverview.tsx`, `WhyChooseUs.tsx`
* `lib/images.ts` (new alt text, new image), `lib/site.ts` (extra WhatsApp messages, description)
* `public/images/home/truck-fleet-yard-dusk.webp` (redone, no colour cast)
* `IMAGE_ASSET_GUIDE.md`, `IMAGE_EDITING_REPORT.md`

## Not touched
`lib/pricing.ts`, `ProductTable`, `PriceCalculator`, `FloatingWhatsApp`, `next.config.ts` (`/catalog` redirect), `globals.css`.

## Image corrections (Phase 3 findings)
1. Sand photo removed from Building Materials card (placeholder instead); sand photo now sits on the Sand category card.
2. Fleet photo redone from the original with no contrast/colour edits.
3. Near-duplicate paving frame: homepage Paving card uses a placeholder; the crane frame appears on `/services` and `/projects` only.
4. Alt text no longer names machinery brands, site or material types.
5. Homepage now shows 4 different photos, none repeated.
6. Nothing generated or composited. 7. All via `next/image` with exact dimensions.

## Content audit
Removed: "Experienced Team", "Quality Materials", "Installation by skilled professionals", "Industrial-grade materials", "Slip-resistant finish", "Custom designs", "Multiple finish options", "Colour options", "Low maintenance", "Clean and professional workmanship", "Specialist" paving wording, "Built on Trust, Delivered with Pride". Replaced with statements limited to the founding year, the product list, published prices and delivery confirmed per location.

## Outstanding information for management (TODO(owner))
1. Company story, owner/management names to publish, team size, certifications.
2. Confirm address, phone numbers (which is primary), WhatsApp number, business hours. Supply the Google Maps location.
3. Confirm delivery areas, charges, truck capacities and lead times.
4. Confirm which paving types are offered, materials and finishes, who installs, any workmanship terms or warranty.
5. Confirm prices flagged for review (7mm and 10mm stones equal 3/4 stones at $18.00; Top Soil vs Black Top Soil).
6. Product specifications: size ranges, source, grade, brick dimensions.
7. Confirm whether the "Aggregate Industries" tipper (video 10.20.10) is Normlee's or a supplier's.
8. Real project photos with permission, location and year; genuine customer testimonials with permission.
9. Original-resolution photos (see `IMAGE_ASSET_GUIDE.md` section E); a share image for Open Graph.
10. Management review of the 7 blog articles before launch.
11. Confirm the `https://www.normlee.net` domain used in canonicals and the sitemap.

## Testing report
* `tsc --noEmit`: pass. `eslint .`: pass.
* `next build`: pass in a scratch copy with the Google Fonts imports stubbed (my sandbox cannot reach Google Fonts). Run `npm run build` locally to confirm. 20 pages generated.
* Routes: `/`, `/about`, `/products`, `/services`, `/projects`, `/testimonials`, `/blog`, `/contact` and all 7 `/blog/[slug]` return 200; `/catalog` redirects to `/products`; unknown URL returns 404. All 18 internal link targets resolve; `/services#supply|delivery|paving` anchors exist.
* SEO: unique title and canonical per page, Open Graph tags, one h1 per page, sitemap (15 URLs), robots.txt, JSON-LD limited to verified facts.
* Images: all 62 optimised image URLs load; every image has alt text; no repeats on the homepage.
* Layout (headless Chromium at 375, 820, 1366 px): no horizontal overflow on any page; header fits at 1024 px; mobile menu opens and lists all 8 links.
* Claims scan: no remaining "skilled", "experienced", "slip-resistant", "industrial-grade", warranty or guarantee wording.
* Not tested: real devices, screen readers, the live domain.
