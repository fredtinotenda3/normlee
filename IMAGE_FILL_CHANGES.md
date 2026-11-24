# Filling the image placeholders

17 November 2026.

## What was asked, and what was possible

The owner asked for the missing images to be filled with the best free online images, or with images created for the site if that was not possible.

* **Free online stock images: not possible here.** The working environment cannot reach any stock-photo site (Unsplash, Pexels, Wikimedia and similar were all unreachable), so nothing could be downloaded. Separately, stock photography of "completed paving projects" or "the Normlee team" would misrepresent the business, which the site's own image rules forbid.
* **Original illustrations: done.** Seven illustrations were drawn for the site in its orange and charcoal palette. Each is shown with a visible "Illustration" label so it cannot be mistaken for Normlee work.
* **Genuine photographs where a good one already existed.** Two slots now use existing owner-supplied photographs instead.

## What changed, slot by slot

| Slot | Before | Now |
| --- | --- | --- |
| Services: materials supplied | placeholder | Genuine sand-stockpile photograph |
| Services: residential driveways | placeholder | Illustration (driveway and house) |
| Services: industrial and commercial paving | placeholder | Illustration (warehouse yard) |
| Services: decorative walkways | placeholder | Illustration (garden walkway) |
| Projects: Residential, Commercial, Industrial, Walkways, Material supply | five placeholders | Five illustrations; the intro text now says "illustrations" |
| Homepage: Paving Services card | placeholder | Illustration (paving being laid) |
| Homepage: Building Materials card | placeholder | Illustration (bricks, soil, gravel) |
| About: "Photograph of the Normlee team" | placeholder | Genuine operations photograph (tipper truck) |

**Not done on purpose:** no illustrated or stock team. The About slot shows a real operations photograph until the owner supplies a team photograph.

## Tests run on the finished build

* `tsc --noEmit` and ESLint: clean.
* `npm run seo:check`: 341 checks, 0 failures (every image still has alt text, width and height).
* Layout at 390 px and 1366 px on the five changed pages: no horizontal overflow; screenshots inspected.

Illustration source files (SVG) are in `design/illustrations-source/`; rules for using them are in `IMAGE_ASSET_GUIDE.md`.
