# Rivera Gifting

A premium corporate gifting brochure site for Rivera Gifting — built with Next.js 15, React 19, TypeScript and Tailwind v4.

## Stack
- Next.js 15.5 (App Router) · React 19
- TypeScript · Tailwind CSS v4
- Motion (motion/react) for animation
- Lenis for smooth scroll
- All pages prerender as static

## Pages
- `/` — Home (hero, stats, categories, services, featured hamper, process, recent deliveries, story, sectors, CTA)
- `/about` — Story, principles, sectors served
- `/services` — Six services expanded
- `/products` — Full 10-category catalogue with enquiry CTAs
- `/contact` — Editorial split + enquiry form

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run start    # serve the production build
```

## Imagery

All product photography is sourced from Unsplash under the free [Unsplash License](https://unsplash.com/license). Photos are loaded via `images.unsplash.com` and served through the Next.js `<Image>` component.

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── products/
│   ├── services/
│   ├── globals.css       # Design tokens (palette, type, motion)
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable UI components
│   ├── UnwrapHero.tsx
│   ├── CategoryStrip.tsx
│   ├── ServicesSection.tsx
│   ├── ProcessSection.tsx
│   ├── FeaturedHamper.tsx
│   ├── RecentDeliveries.tsx
│   └── ...
└── data/                 # Content
    ├── site.ts           # Brand info, nav, stats
    ├── products.ts       # Catalogue taxonomy
    ├── services.ts       # Services, process, deliveries
    └── media.ts          # Image manifest
```
