# Local SEO strategy: Zimbabwe

17 November 2026. This is a plan and a gap list. **Nothing has been created or claimed on any Google or third-party platform.** No address, phone number, opening hours or service area was invented, and no location pages exist.

## What the site currently states (single source: `lib/site.ts`)

| Item | Value on the site | Verified by management? |
| --- | --- | --- |
| Trading name | Normlee Investments | Yes (owner-supplied) |
| Legal name | Normlee Investments (Pvt) Ltd | Yes |
| Founded | 2010 | Yes |
| Address | 610-11th Street, Hatcliffe, Borrowdale, Zimbabwe | **No** (`TODO(owner)`). Names two different suburbs; needs confirming as written |
| Phones | 0774 130 626, 0714 491 705, 0733 835 798 | **No** |
| WhatsApp | +263 774 130 626 (same as the first phone) | **No** |
| Opening hours | Monday to Saturday, 7:00 AM to 5:00 PM | **No** |
| Delivery areas | Contact page lists Borrowdale, Hatcliffe, "surrounding areas"; Services page says no area is stated | **No**, and the two pages conflict |

## Consistency review (NAP)

* **Name:** consistent. The brand name "Normlee Investments" appears in the header, footer, titles, and structured data. The legal name appears in the footer and Organization markup.
* **Phones and WhatsApp:** the same three numbers come from one data file and appear in the header, footer, Contact page, call buttons and WhatsApp links. They cannot drift apart on the site. They have not been compared with any external listing because none was accessible.
* **Address:** appears in the footer and Contact page only, from the same data file. Verification flag is off.
* **Result:** on-site consistency is good by construction. External consistency (Google Business Profile, directories, letterheads, social pages) cannot be checked until those exist. When they do, every listing must use exactly the same name, address format and primary number as the site.

## Structured data status

`LocalBusiness` markup is **implemented but switched off.** `localBusinessJsonLd()` in `lib/structuredData.ts` returns nothing until all three flags in `verifiedBusinessDetails` (`lib/site.ts`) are set to `true`. A scratch build with the flags set was tested and emitted exactly one block; the real build emits none. To enable: management confirms address, phones and hours in writing, a developer sets the flags and replaces the free-text address with structured fields, and the output is validated.

## Geographic targeting approach

* **Now:** target Zimbabwe-wide terms that the verified content supports (see `KEYWORD_RESEARCH.md`). The site says "Zimbabwe" in titles and descriptions.
* **After confirmation:** if management confirms the physical location and genuine delivery areas, the Contact page can name the suburb and the areas actually served, and the homepage and delivery copy can mention Harare. These are small edits to existing pages.
* **Never:** pages for places Normlee does not serve, a fake "branch" or address, or a service-area list stuffed with suburb names.

## Google Business Profile readiness

Nothing may be created without someone authorised to claim it. A Profile is created or claimed by the business owner, signing in with a Google account the business controls, and is then verified by Google (commonly by postcode or phone). Verification requirements vary, and Google may ask for proof of a real location.

Before creating one, management needs to decide:

1. Is customer-facing premises (yard or office) open to the public, or is it a delivery-only / service-area business? The answer changes how the address is shown. Google restricts what may be listed for businesses without a public location.
2. Which category fits? (Candidates to evaluate in the Profile interface, not assumptions: building materials supplier or similar; paving contractor; the choice must reflect what the business mainly is.)
3. Which one phone number and the exact address wording will be used everywhere.
4. Who owns the Google account and who else needs manager access.

Prepared content, ready once confirmed: business name, description (reuse the site's description, about 750 characters maximum), the real photographs already on the site (trucks and deliveries only; never label a photo as a completed project), product list matching `/products`, hours, services (delivery, paving installation as stated on `/services`).

Reviews: ask genuine customers to review after real transactions. Never buy, fabricate, incentivise-with-discount or gate reviews. Reply to every review.

## Management information checklist (local)

See `MANAGEMENT_INFORMATION_REQUIRED.md` items 1 to 8 for the full list: exact address wording, which suburb, public premises or not, phone numbers to publish, WhatsApp number, hours and holidays, delivery areas (named), and Google account ownership.

## Ongoing local activity (after launch)

* Add the confirmed delivery areas to Services and Contact in plain text.
* Keep hours current, including holidays.
* Post real photographs and genuine updates to the Profile monthly.
* Ask for reviews from real customers; reply to all.
* Track "calls" and "direction requests" in the Profile and "Search Console queries" for local phrasing (no numbers exist yet).
* Check directory listings quarterly for consistent name, address and phone.
