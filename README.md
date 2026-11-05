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
