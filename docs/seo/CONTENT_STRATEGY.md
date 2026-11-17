# Content strategy and blog audit

17 November 2026. Companion to `KEYWORD_RESEARCH.md` (no search-volume data exists, so the priorities below are judgement, not measurement).

## Principles

1. Help the customer first. A guide earns links and trust only if a builder or homeowner could act on it.
2. General guidance only. Nothing here is engineering advice, a specification or a certified mix design, and every guide says to ask the contractor or engineer for job-specific decisions.
3. No invented facts. Where a useful answer needs a Normlee fact that has not been supplied (truck capacity, delivery area, product grades), the article says it has not been published and tells the reader to ask.
4. One topic per article, one article per question. Transactional terms belong to `/products` and `/services`.

## Audit of the seven existing articles

All seven were reviewed for intent, claims, structure and links. All were last edited 17 Nov 2026 (`updated` in `lib/blog.ts`); original publication date 5 Nov 2026 is unchanged.

| Article (slug) | Search intent served | Changes made | Still missing / needs management |
| --- | --- | --- | --- |
| Understanding aggregate sizes: what 3/4, 10mm and 7mm stones mean (`understanding-aggregate-sizes`) | "What is 3/4 stone", "19mm stone" | SEO title "3/4, 10mm & 7mm Stones Explained"; new description; 3 Q&A (3/4 = about 19 mm nominal, concrete size left to the designer, which sizes Normlee lists); related guides chosen by topic | Confirm the 7mm product exists and its correct name. Real typical uses per size from the owner |
| River sand vs pit sand (`types-of-construction-sand`) | "River sand vs pit sand" | Title and H1 now state the comparison; **removed the unsupported claim** that river sand is used for plaster/mortar/concrete and pit sand for bedding/fill (local practice varies and Normlee has not confirmed it); 2 Q&A | Management's view on which sand customers use for which job, and why prices differ |
| What is crusher run and where is it used? (`crusher-run-and-its-applications`) | "What is crusher run", "crusher run vs quarry dust" | H1 rewritten as the question people ask; 2 Q&A (not the same as quarry dust; normally compacted when used as a base) | Layer thickness is deliberately not given. Owner's list of typical customer uses |
| Choosing suitable construction materials (`choosing-suitable-construction-materials`) | Planning / pre-order checklist | Shorter SEO title and a description that says what the reader gets | Could carry a Q&A once real customer questions are collected |
| Preparing a site for paving (`preparing-a-site-for-paving`) | "What goes under paving", how paving is prepared | Softened an over-confident opening sentence ("most of the performance comes from underneath") to a defensible one | Normlee's own paving method is unknown and is not described. Paver types and finishes are not mentioned because none are confirmed |
| Estimating material quantities in cubic metres (`estimating-material-quantities`) | "How to calculate m3", "how much sand do I need" | 2 Q&A including honest "truck sizes are not published" | **Truck capacities in m3** (highest-value missing fact) |
| Planning a material delivery (`planning-material-delivery`) | "Before a delivery truck arrives" | 2 Q&A: delivery is confirmed per location and is not included in the product price (both already stated on the site) | Delivery areas, lead times and tipping requirements, if management wants to publish them |

Every article now ends with a line linking to products, delivery and contact, shows a visible "Updated" date, and links to three topically related guides. Related-product pills link to the matching category on `/products`.

Statements removed or softened: the river/pit sand uses claim (above); "most of the performance of a paved surface" (softened). Statements retained because they are general and checkable: 3/4 inch is about 19 mm; volume is length x width x depth; compaction of base layers is normal practice.

## Future articles

Priority is judgement. "Fact needed" means the article cannot be published until management supplies it. No volumes are claimed.

| Proposed article | Search intent | Audience | Priority | Fact needed from management |
| --- | --- | --- | --- | --- |
| How many cubic metres are in a truckload? | Informational | Homeowners, builders | High | Truck capacities |
| How to order bulk sand and stones: from enquiry to delivery | Informational / process | First-time buyers | High | Ordering and payment process, lead times |
| How much stone, sand or crusher run do I need for a driveway? | Informational with worked example | Homeowners | High | None (maths only); price calculator link |
| Quarry dust vs crusher run vs gravel: which is which? | Informational | Homeowners, contractors | Medium | Normlee's definitions of each listed product |
| What affects the cost of delivered materials? | Informational | Buyers comparing quotes | Medium | Delivery pricing logic, if shareable |
| Choosing a base for a paved driveway | Informational | Homeowners | Medium | Normlee's paving practice (or keep general) |
| Bricks: how many do I need for a wall? | Informational | Builders | Low | Brick size and any "per 1,000" detail beyond the price list |
| Topsoil for lawns and gardens | Informational | Homeowners | Low | Top Soil vs Black Top Soil definitions |
| Safe stockpiling and storage of sand and stone on site | Informational | Builders | Low | None (general) |
| Customer questions answered (a running FAQ built from WhatsApp enquiries) | Informational | All | High after 3 months | Management permission to reuse real questions |

Planned cadence: one article a month once the missing facts arrive. Quality over volume.

## Content that is not recommended

* Location pages ("sand in [suburb]") or doorway pages: none exist and none are proposed until real service areas are confirmed.
* Individual product pages: no verified specifications exist; they would be thin duplicates of the category rows.
* Comparison or "best supplier" content naming competitors.
* Price commentary or market claims: prices change, and unmaintained price claims damage trust.

## Review before launch

Management or a qualified builder should read each article once and sign off (`TODO(owner)` at the top of `lib/blog.ts`). Record the reviewer's name and date in the launch checklist.
