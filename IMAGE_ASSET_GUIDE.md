# Image asset guide

Every image the site uses or still needs. **Documentary** = real Normlee photo/video frame, only cropped and tone-corrected. **Decorative** = pure CSS/SVG artwork (no file), never presented as a project. **Placeholder** = clearly labelled "Photo coming soon" tile.

All images use `next/image` with explicit width/height (no layout shift). Dimensions are registered in `lib/images.ts`. Below-the-fold images lazy-load by default; the hero image uses `preload`.

## A. Integrated (genuine photographs)

| Filename | Website location | Purpose | Status | Dimensions | Aspect | Alt text |
|---|---|---|---|---|---|---|
| `public/images/home/aggregate-loading-scania-excavator.webp` | Home: hero (right, lg+); Home: "Bulk Aggregates" card | Shows real material handling | Integrated, documentary | 368×490 | 3:4 | A Scania tipper truck waiting on a dirt access road while an excavator loads material beside it |
| `public/images/home/paving-blocks-delivery-detail.webp` | Home: "Specialist Paving" card | Paving blocks being delivered (not installation) | Integrated, documentary | 368×460 | 4:5 | A flatbed truck carrying stacked grey paving blocks, with a grab crane lifting them at a building site |
| `public/images/home/tipper-spreading-fill-material.webp` | Home: "Delivery" card | Tipper delivering fill to a road/site | Integrated, documentary | 368×490 | 3:4 | A tipper truck spreading fill material along a red-earth road while a grader works in the background |
| `public/images/home/truck-fleet-yard-dusk.webp` | Home: "Why Normlee" section | Scale of haulage capacity | Integrated, documentary (number plate blurred) | 484×364 | 4:3 | A row of heavy haulage trucks parked side by side in a yard at dusk |
| `public/images/services/paving-blocks-delivery-crane-truck.webp` | `/services`, "Why Choose Our Paving Services" | Paving block delivery by grab crane | Integrated, documentary | 368×490 | 3:4 | A truck loaded with stacked paving blocks being offloaded by a yellow grab crane at a residential site |
| `public/images/products/sand-stockpile-lawn.webp` | `/products`, sidebar | Delivered sand stockpile | Integrated, documentary | 720×835 | ~6:7 | A large stockpile of fine sand delivered onto a lawn, with trees in the background |

## B. Decorative artwork (no file)

| Component | Where | Notes |
|---|---|---|
| `components/shared/PavingPattern.tsx` | Home hero, `/services` hero, placeholder tiles | Faint interlocking-block pattern. Decorative only. |

## C. Placeholders still on the site

| Where | Component | Replace with |
|---|---|---|
| `/services`, card 1 | `PhotoPlaceholder` | `public/images/projects/residential-driveway-01.webp` |
| `/services`, card 2 | `PhotoPlaceholder` | `public/images/projects/industrial-paving-01.webp` |
| `/services`, card 3 | `PhotoPlaceholder` | `public/images/projects/decorative-walkway-01.webp` |

## D. Still needed from you

| Filename (exact) | Folder | Placement | Recommended size | Aspect | Source | Prompt file |
|---|---|---|---|---|---|---|
| `hero-landscape.webp` | `public/images/home/` | Home hero full-bleed background | 1920×1080 | 16:9 | Original-resolution genuine landscape photo | `homepage-hero.md` |
| `residential-driveway-01.webp` | `public/images/projects/` | `/services` card 1 | 1200×800 | 3:2 | Completed Normlee driveway | `residential-paving.md` |
| `industrial-paving-01.webp` | `public/images/projects/` | `/services` card 2 | 1200×800 | 3:2 | Completed Normlee commercial/industrial paving | `industrial-paving.md` |
| `decorative-walkway-01.webp` | `public/images/projects/` | `/services` card 3 | 1200×800 | 3:2 | Completed Normlee walkway | `decorative-walkway.md` |
| `team-photo.webp` | `public/images/about/` | About page (when built) | 1600×1067 | 3:2 | Genuine team photo (with consent) | `about-team-photo.md` |
| `stones-3-4.webp`, `river-sand.webp`, `pit-sand.webp`, `crusher-run.webp`, `quarry-dust.webp` | `public/images/products/` | Product catalogue | 1000×750 each | 4:3 | Photo of the actual material | `aggregate-products.md` |

Keep untouched originals in `source-assets/` (outside `public/`) so they are not shipped to visitors.

## E. Supplied but not used

* `WhatsApp Video … 10.20.10.mp4`: a tipper offloading sand beside a fence with a worker. Not integrated (would duplicate the delivery card). Available for the blog or a product page.
