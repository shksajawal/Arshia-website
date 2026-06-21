# Arshia Akhtar — Personal Site

World-class personal brand site for Arshia Akhtar — first Pakistani woman with an
FIA racing license, cancer researcher, and owner of Box Motorsports.

**Stack:** Next.js 16 (App Router, static export) · Tailwind CSS v4 · Framer Motion · Lenis
**Hosting:** Netlify (static) · **Repo:** GitHub

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs a static site to /out
```

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from GitHub** → pick the repo.
3. Netlify reads `netlify.toml` automatically (build: `npm run build`, publish: `out`).
4. The contact form uses **Netlify Forms** — submissions appear in the Netlify
   dashboard under *Forms* with no backend code. (Set up notification emails there.)

## Editing content

**All copy lives in [`src/lib/content.ts`](src/lib/content.ts).** Change text there —
never inside components. Items marked `TODO` need real numbers/links before launch.

## Assets to drop in before launch

| File | What | Where it's used |
|------|------|-----------------|
| `public/hero.jpg` | High-res hero photo of Arshia | Uncomment the `<img>` layer in `src/components/Hero.tsx` |
| `public/og.jpg` | 1200×630 social share card | Auto-used by Open Graph / Twitter meta |
| `public/favicon.ico` | Favicon | Already wired |
| Press logos | Replace text outlet names in `recognition.press` | `src/components/Recognition.tsx` |

Also update in `content.ts`: real email, social handles, the live domain (`site.url`),
and confirm the stat numbers in `proof.stats`.

## Design system

Defined in [`src/app/globals.css`](src/app/globals.css): carbon-black canvas, bone
text, single racing-red accent (`--accent`), Anton display + Inter body. Mobile-first,
reduced-motion aware, accessible focus states.

## Structure

```
src/
  app/
    layout.tsx     # fonts, SEO metadata, Person JSON-LD, smooth scroll
    page.tsx       # composes the homepage sections
    globals.css    # design system
  components/       # one file per section + Nav, Footer, Reveal, SmoothScroll
  lib/content.ts    # ALL copy & data
```
