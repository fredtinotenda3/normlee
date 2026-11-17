# Normlee Investments website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

`npm run build` downloads Inter and Poppins from Google Fonts via `next/font`, so it needs internet access.

## Where things live

| What | File |
| --- | --- |
| Business details (phones, WhatsApp, address, hours, delivery areas) | `lib/site.ts` |
| Product prices (catalogue, homepage list and calculator all read this) | `lib/pricing.ts` |
| Brand colours and fonts | `app/globals.css` (`@theme`) |
| Placeholder for missing photos | `components/shared/PhotoPlaceholder.tsx` |

Brand orange `#FF6600` is `primary`. It is kept for decoration and for text on dark backgrounds. Use
`primary-strong` for orange text on white and for buttons with white text (WCAG AA), and `primary-light`
for small orange text on dark grey.

## Content rules

* Never publish stock photography as Normlee work. Use `PhotoPlaceholder` until real photos are supplied.
* Do not add prices, claims, guarantees, testimonials or statistics that the owner has not confirmed.
* Search the code for `TODO(owner)` to find every detail awaiting confirmation:

```bash
grep -rn "TODO(owner)" app components lib
```

## Routes

`/`, `/products`, `/services`, `/contact`, custom 404 (`app/not-found.tsx`) and error page (`app/error.tsx`).
`/catalog` permanently redirects (308) to `/products` (see `next.config.ts`).

## SEO configuration (Phase 4.5)

Set these in the hosting environment. None of them is a secret, and none is committed to the repository.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production origin used for canonical URLs, the sitemap, robots.txt and structured data, e.g. `https://www.example.com` (https, no trailing slash). Defaults to `https://www.normlee.net`, which is **not yet confirmed**. |
| `NEXT_PUBLIC_SITE_INDEXABLE` | Set to `false` on staging and preview deployments to block all indexing. Leave unset in production. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token for Google Search Console HTML-tag verification, supplied by whoever owns the Search Console property. |

Run the SEO checks against a running production build:

```bash
npm run build && npm start
npm run seo:check            # or: node scripts/seo-check.mjs http://localhost:3000
```

See `docs/seo/` for the SEO documentation and `docs/seo/SEO_LAUNCH_CHECKLIST.md` before going live.
