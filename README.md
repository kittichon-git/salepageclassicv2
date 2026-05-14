# salepageclassicv2

Sales landing page for **แค่เปลี่ยนคำ ก็ทำเงิน** — phachara.com (book_id=1)

## Tech Stack

- Next.js 16.2.6 (App Router)
- React 19.2
- TypeScript (strict + noUncheckedIndexedAccess)
- Tailwind CSS v4 (`@theme inline`)
- Framer Motion 12 (ScrollReveal)
- Lucide React (icons)
- Fonts: Kanit + Bai Jamjuree + JetBrains Mono via `next/font/google`

## Design System

- Palette v2 — warm cream (#f2ecdd) + charcoal (#3a3530) + coral accent (#d27355)
- 10-section R-MOTRA layout (mobile-first)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

→ http://localhost:3000

## Scripts

```bash
npm run dev          # development
npm run build        # production build
npm run start        # serve production
ANALYZE=true npm run build  # bundle analyzer
node scripts/download-assets.mjs  # re-download CDN images
```

## Project Structure

```
src/
  app/              # App Router pages + metadata routes
  components/
    sections/       # 10 page sections + TopNav + StickyCTA + Footer
    ui/             # Container, Section, CTAButton, ScrollReveal, Eyebrow
    seo/            # JsonLd (Organization + Product + FAQPage + Person)
  lib/              # data.ts, cn.ts, imageMap.ts
docs/
  spec.md           # Sales Page Spec V.2 (single source of truth สำหรับ copy)
  s1-audit.md       # S1 layout audit
  p8-perf.md        # Performance audit
  p8-a11y.md        # Accessibility audit
public/
  images/           # Downloaded assets from CDN
scripts/
  download-assets.mjs
```

## Three-Source Rule (build reference)

- Layout/DOM → `D:\notion-sale-page` (CDN images downloaded to public/images)
- Tech stack + fonts → `D:\salepageclassic` (Palette v1 NOT used)
- Content → `docs/spec.md` (Sales Page Spec V.2)

## TODO (pre-launch)

- [ ] Confirm LINE OA ID → update `cta.lineUrl` in `src/lib/data.ts`
- [ ] Replace placeholder testimonials in `src/lib/data.ts` → `outcome.testimonials`
- [ ] Add 3 specific credentials → `instructor.credentials`
- [ ] Add instructor portrait image → `/public/images/instructor.jpg` + update `instructor.portrait`
- [ ] Record VSL 60–90s + wire video player in Hero
- [ ] Setup GA4 + FB Pixel + CAPI (events: `sp_view`, `sp_cta_line_click`, `sp_cta_buy_click`, `sp_video_25/50/75/100`)
- [ ] Final Lighthouse audit (mobile, incognito)

## License

Proprietary — All rights reserved.
