# Google Search Console and Analytics: readiness

17 November 2026. **No Google account was accessed, no property was created or verified, no tracking code was installed, and nothing in this document claims a successful integration.** It lists exactly what the code supports and what management must do.

## What the code supports now

| Capability | State |
| --- | --- |
| Search Console HTML-tag verification | Implemented and **off**. Setting `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the token Google supplies adds `<meta name="google-site-verification">`. The token is public by design but belongs to the property owner, so it is read from the environment and never committed |
| Sitemap | Served at `/sitemap.xml`, referenced from `/robots.txt`, 13 URLs, validated by `scripts/seo-check.mjs` |
| Staging protection | `NEXT_PUBLIC_SITE_INDEXABLE=false` blocks crawling on non-production deployments |
| Google Analytics 4 | **Not implemented**, deliberately (see below) |

## Search Console steps (management, with a Google account that will own the data)

1. Confirm the production domain and that it redirects to one canonical host over HTTPS.
2. Go to Search Console and add a property. A **Domain property** (DNS TXT verification) covers http/https and all subdomains and is the better choice if management controls DNS. A **URL-prefix property** can use the HTML tag: copy the token, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the host, redeploy, then click Verify.
3. Submit `<production origin>/sitemap.xml` under Sitemaps. Expect "Success" and 13 discovered URLs (6 pages plus 7 articles; `/projects` and `/testimonials` are noindex and left out until they have content, then the count rises).
4. Use URL Inspection on `/`, `/products`, `/services` and one article. Check "URL is on Google" or request indexing. Record the date.
5. Add at least one more owner or user so access is not lost with one person.
6. After 2 to 4 weeks check: Pages (indexing) report, Performance (queries, pages, countries), Core Web Vitals, Enhancements (breadcrumbs, and any structured-data warnings).

Monitoring routine: weekly for the first month, then monthly. Investigate any "Crawled, currently not indexed" or "Duplicate, Google chose different canonical" entry.

## Google Analytics 4: why it is not implemented, and how to add it

Missing: a GA4 Measurement ID (an account decision) and a consent decision. Analytics cookies and identifiers raise privacy questions: Zimbabwe's Cyber and Data Protection Act applies to personal data processing, and many visitors may be in other jurisdictions. This is not legal advice; management should take advice on whether a consent banner is required and on the privacy-policy wording. The site currently has **no privacy policy and no cookie banner**.

When management is ready:

1. Create a GA4 property; copy the Measurement ID (`G-XXXXXXXXXX`).
2. Decide on consent: a banner that loads analytics only after the visitor agrees is the cautious option.
3. Add a privacy policy page that describes the analytics used.
4. A developer adds the ID as `NEXT_PUBLIC_GA_MEASUREMENT_ID` and loads the script with `next/script` (`strategy="afterInteractive"`) only after consent. The ID must be an environment variable, not committed. Do not enable "Google Signals" or advertising features without a decision.
5. Re-run Lighthouse: analytics adds JavaScript and affects TBT.
6. Link GA4 and Search Console in the GA4 admin once both exist.

Suggested events later: clicks on WhatsApp links, clicks on call links, contact page views and calculator use. Define them before building.
