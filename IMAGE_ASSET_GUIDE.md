# Image asset guide

Every image the site uses or still needs. **Documentary** = real Normlee photo or video frame, only cropped. **Decorative** = pure CSS/SVG artwork (no file), never presented as a project. **Placeholder** = clearly labelled "Photo coming soon" tile.

All images use `next/image` with explicit width/height. Dimensions and alt text are registered in `lib/images.ts`. None of the photographs shows a completed paving installation.

## A. Integrated (genuine photographs)

| File | Placement | Content | Dimensions | Alt text |
|---|---|---|---|---|
| `home/truck-on-dirt-road-with-machinery.webp` | Home hero (lg+); `/projects` "From the field" | Truck on a dirt road, machinery behind | 368x490 | A white and blue truck on a dirt road with earth-moving machinery behind it |
| `home/earth-heap-dirt-road.webp` (new) | Home "Bulk Aggregates" card; `/projects` | Heap of loose material beside a dirt road | 368x490 | A raised heap of loose material along the edge of a dirt road, with trees and a tower in the distance |
| `home/tipper-truck-emptying-load-dirt-road.webp` | Home "Delivery" card; `/projects` | Tipper emptying a load on a dirt road | 368x490 | A tipper truck emptying its load onto a dirt road beside a tree |
| `home/truck-fleet-yard-dusk.webp` (re-edited) | Home "Why Normlee"; `/about` | Trucks parked at dusk | 484x364 | A row of trucks parked side by side on open ground at dusk, with a small car at the right |
| `services/blocks-delivery-truck-grab-crane.webp` | `/services` Delivery section; `/projects` | Stacked blocks on a truck, grab crane above (a delivery, not an installation) | 368x490 | A truck loaded with stacked grey blocks beside a dirt track, with a yellow grab crane above the load |
| `products/sand-stockpile-lawn.webp` | `/products` Sand category card | Pile of sand on a lawn | 720x835 | A large pile of sand on a lawn, with trees in the background |

## B. Retired from use
* `home/blocks-on-flatbed-truck-grab-crane.webp`: near-identical to the `/services` crane frame. File kept in `public/images/home/` but no longer referenced. Delete it if you wish.

## C. Decorative artwork (no file)
`components/shared/PavingPattern.tsx`: faint block pattern behind banners and placeholders.

## D. Placeholders still on the site
| Where | Replace with |
|---|---|
| Home "Paving Services" card | A completed-paving photo |
| Home "Building Materials" card | Genuine photo of bricks/fill |
| `/services` three paving cards | `projects/residential-driveway-01.webp`, `industrial-paving-01.webp`, `decorative-walkway-01.webp` |
| `/services` material supply | Photo of materials supplied |
| `/about` team | `about/team-photo.webp` (with consent) |
| `/projects` five categories | Real project photos via `lib/projects.ts` |

## E. Still needed from you
Original-resolution photos (hero landscape 1920x1080, project photos 1200x800, team photo, one photo per material). Prompts are in `image-production-prompts/`. Keep originals outside `public/`.

## F. Supplied but not used
* Video 10.20.10: shows a tipper branded "Aggregate Industries". Not used until you confirm whether it is Normlee's or a supplier's. A brick-stack frame from it was also rejected (blurred, overexposed).

## Illustrations (added after Phase 4.5)

Where no genuine photograph exists, the site uses original vector illustrations instead of a "Photo coming soon" tile. They live in `public/images/illustrations/` (1200x900 WebP), their editable SVG sources are in `design/illustrations-source/`, and they are registered in `lib/images.ts` under `illustrations`.

Rules:

* They are artwork, not photographs and not Normlee projects. Always render them with `components/shared/IllustrationImage.tsx`, which adds the visible "Illustration" label. Alt text must begin "Illustration of".
* They are drawn in the brand palette and contain no logos, text, vehicle branding or people.
* Replace an illustration with a genuine photograph whenever the owner supplies one. Do not replace one with stock photography presented as Normlee work.
* A team photograph is still wanted for the About page. No illustrated or stock substitute was used, to avoid inventing a team; the slot shows a genuine operations photograph meanwhile.

| Illustration | Used on |
| --- | --- |
| `paving-residential-driveway` | Services (Residential driveways), Projects (Residential) |
| `paving-commercial-forecourt` | Projects (Commercial) |
| `paving-industrial-yard` | Services (Industrial and commercial paving), Projects (Industrial) |
| `paving-garden-walkway` | Services (Decorative walkways), Projects (Decorative walkways) |
| `material-supply-stockpiles` | Projects (Material supply) |
| `building-materials-bricks-soil-gravel` | Homepage (Building Materials card) |
| `paving-installation-in-progress` | Homepage (Paving Services card) |
