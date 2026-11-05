# Phase 2 change log (safe to delete after applying)

## Delete these files from your repo (they were removed or moved)

```bash
rm -f app/catalog/page.tsx && rmdir app/catalog
rm -f tailwind.config.ts
rm -f public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

* `app/catalog/page.tsx` moved to `app/products/page.tsx`. `/catalog` now permanently redirects (308) to `/products`.
* `tailwind.config.ts` was dead code: Tailwind v4 ignores it unless referenced with `@config`, so its palette, fonts and plugins never applied. It also caused 2 ESLint errors. Theme tokens now live in `app/globals.css`.
* `public/*.svg` were unused create-next-app template files.

## Still awaiting owner confirmation (search the code for `TODO(owner)`)

* 7mm and 10mm stone prices ($18.00, same as 3/4 stones): `lib/pricing.ts`
* "Top Soil" listed as available-on-request while "Black Top Soil" is priced: `lib/pricing.ts`
* Phone numbers, WhatsApp number, address, business hours, delivery areas: `lib/site.ts`
* Google Maps location (embed removed; placeholder shown): `app/contact/page.tsx`
* Real photographs (all stock photos removed; placeholders shown)
* Service list and feature wording: `app/services/page.tsx`
* Benefit wording ("Quality Materials", "Clear Pricing"): `components/sections/WhyChooseUs.tsx`
