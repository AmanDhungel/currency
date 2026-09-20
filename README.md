# YEM Ecosystem — Landing Page

A single-page Next.js landing site styled after a USD banknote: engraved green ink,
aged cotton paper, guilloche rosettes and a gold seal. It does one job — send visitors
to the five official YEM destinations.

## Running it

```bash
npm install     # already done
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## The links

All five live in one file — [lib/links.ts](lib/links.ts):

| Card | Destination |
| --- | --- |
| YEM Chain | https://yemchain.com |
| YEM Scan | https://yemscan.com |
| YEM Foundation | https://yem.foundation |
| YEM Pay | https://yempay.com |
| Digital Chain Center | https://digitalchain.center |

The footer's **Powered by Deswits** badge links to https://deswits.com and opens in a
new tab, as do all five cards (`target="_blank" rel="noopener noreferrer"`).

## Swapping in your real pictures

Every card currently shows a banknote-styled placeholder from `public/images/`.
When your photos are ready:

1. Drop the file into `public/images/` (e.g. `yemchain.jpg`).
2. Open [lib/links.ts](lib/links.ts) and change that entry's `image` field:

   ```ts
   image: "/images/yemchain.jpg",
   ```

That is the only edit needed — nothing else references the image paths.

**Recommended size:** 1200 × 750 px (16:10). Cards crop with `object-fit: cover`, so
keep the subject near the centre. Current placeholders:

- `yemchain.svg`
- `yemscan.svg`
- `yem-foundation.svg`
- `yempay.svg`
- `digitalchain.svg`

Cards use a plain `<img>` tag so any format works with zero config. If you later want
Next.js image optimisation, swap `<img>` for `next/image` in
[components/NoteCard.tsx](components/NoteCard.tsx) — note that serving `.svg` through
the optimiser also needs `images.dangerouslyAllowSVG` in `next.config.mjs`.

## Structure

```
app/
  layout.tsx      metadata, fonts, header + footer shell
  page.tsx        hero, card grid, facts strip
  globals.css     the whole banknote theme
  icon.svg        favicon
components/
  SiteHeader.tsx  sticky header with seal logo
  NoteCard.tsx    one banknote card
  SiteFooter.tsx  footer + "Powered by Deswits"
  Rosette.tsx     decorative hero watermark
lib/
  links.ts        single source of truth for all links and images
public/images/    placeholder artwork
```

## Theme notes

Colours are CSS custom properties on `:root` in `app/globals.css` — change
`--green`, `--gold` and `--paper` there to retune the whole site. A dark variant is
defined under `prefers-color-scheme: dark`. Headings use Playfair Display and body
text uses Inter, loaded from Google Fonts with Georgia / system-sans fallbacks, so
the page still reads correctly offline.
