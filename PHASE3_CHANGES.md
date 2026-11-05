# Phase 3 changes (images)

ZIP contains only files that are new or changed compared with `normlee-main.zip`.

## Changed
* `components/sections/Hero.tsx`: framed hero photo (`preload`, native size), decorative pattern.
* `components/sections/ServicesOverview.tsx`: genuine photo on each of the 4 cards.
* `components/sections/WhyChooseUs.tsx`: placeholder replaced by the fleet photo.
* `components/shared/PhotoPlaceholder.tsx`: branded dark placeholder, clearly labelled "Photo coming soon".
* `app/services/page.tsx`: benefits image, decorative hero pattern.
* `app/products/page.tsx`: sand stockpile photo in sidebar.

## New
* `lib/images.ts` (registry with exact dimensions and alt text), `components/shared/PavingPattern.tsx`
* `public/images/{home,services,products}/*.webp` (6 images)
* `IMAGE_ASSET_GUIDE.md`, `IMAGE_EDITING_REPORT.md`, `image-production-prompts/` (6 files)

## Verified
`tsc --noEmit` and `eslint .` pass. A full `next build` could not run in my sandbox (no access to Google Fonts), so run `npm run build` locally.

## Still needed
See section D of `IMAGE_ASSET_GUIDE.md`. Nothing else in the code needs to change when you add them: replace the three `PhotoPlaceholder` calls in `app/services/page.tsx` with `next/image`, or send me the files and I'll wire them in.
