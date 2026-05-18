# CLAUDE.md — salepageclassicv2
> Last audited: 19 May 2026 · Commit `bf6d977`

---

## 1. Project Snapshot

| Item | Value |
|---|---|
| Product | หนังสือ "แค่เปลี่ยนคำ ก็ทำเงิน" (book_id=1, 890฿) |
| Owner | กิตติชน สนิทเชื้อ (บุคคลธรรมดา, ไม่จด VAT) |
| Framework | Next.js **16.2.6** (App Router, Turbopack) |
| React | 19.2.4 |
| TypeScript | 6.0.3 — strict + noUncheckedIndexedAccess |
| Styling | Tailwind CSS v4.3.0 (`@theme inline`, `@plugin`) |
| Animation | Framer Motion 12.38.0 |
| Icons | Lucide React 1.14.0 |
| Package manager | npm (pnpm-lock.yaml present but npm is canonical) |
| Deployment | Vercel (salepageclassicv2.vercel.app → phachara.com) |
| Repo | github.com/kittichon-git/salepageclassicv2 |

### Scripts

```bash
npm run dev      # next dev (Turbopack)
npm run build    # next build
npm run start    # next start
npm run lint     # next lint — NOTE: no ESLint config; may error in Next.js 16
npx tsc --noEmit # typecheck (use this, not lint)
```

---

## 2. Architecture

### App Router tree

```
src/app/
├── layout.tsx          # Root layout — fonts, metadata, viewport
├── page.tsx            # Landing page (/ route) — assembles all sections
├── globals.css         # Tailwind @theme tokens + base styles
├── manifest.ts         # PWA manifest
├── robots.ts           # robots.txt
├── sitemap.ts          # sitemap.xml
├── icon.tsx            # /icon (favicon)
├── apple-icon.tsx      # /apple-icon
├── opengraph-image.tsx # /opengraph-image (OG card)
├── contact/
│   └── page.tsx        # /contact — Server Component
└── legal/
    ├── privacy/page.tsx  # /legal/privacy
    ├── terms/page.tsx    # /legal/terms
    ├── refund/page.tsx   # /legal/refund
    └── cookie/page.tsx   # /legal/cookie
```

### Component graph (landing page)

```
page.tsx
├── TopNav          sections/TopNav.tsx         sticky header + brand pill + nav links
├── Hero            sections/Hero.tsx           S1 — PAS headline + VSL box + CTA
├── Relevance       sections/Relevance.tsx      S2 — 4 pain cards
├── Mechanism       sections/Mechanism.tsx      S3 — R-MOTRA steps + diagram
├── Outcome         sections/Outcome.tsx        S4 — outcomes + text testimonials
├── Fit             sections/Fit.tsx            S5 — for/not-for 2-col cards
├── Curriculum      sections/Curriculum.tsx     S6 — 7 chapters carousel + bonus strip  ["use client"]
├── Instructor      sections/Instructor.tsx     S7 — bio + placeholder portrait
├── Offer           sections/Offer.tsx          S8 — value stack + price card
├── FAQ             sections/FAQ.tsx            S9 — guarantee + accordion <details>
├── FinalCTA        sections/FinalCTA.tsx       S10 — pain+solution + LINE CTA
├── Footer          sections/Footer.tsx         legal links
├── StickyCTABar    sections/StickyCTABar.tsx   sticky bottom bar  ["use client"]
└── JsonLd          seo/JsonLd.tsx              JSON-LD: Product, FAQPage, Org, Person

UI primitives:
├── Section         ui/Section.tsx    — outer frame (border, shadow, tone bg)
├── ScrollReveal    ui/ScrollReveal.tsx — framer-motion fade-in wrapper
├── CTAButton       ui/CTAButton.tsx  — LINE/primary/secondary variants
├── BrandPill       ui/BrandPill.tsx  — teal brand label
└── Eyebrow         ui/Eyebrow.tsx    — mono uppercase label (unused by sections currently)

Legal shared:
└── LegalLayout     legal/LegalLayout.tsx — prose wrapper for /legal/* + /contact
```

### Data / state model

- **All copy** lives in `src/lib/data.ts` — exported `as const` objects.
- **Server components by default** — no `"use client"` unless state/effect needed.
- **Exceptions**: `Curriculum.tsx` (useRef scroll), `StickyCTABar.tsx`.
- **No database, no API routes, no server actions** — fully static SSG.

### Env vars required

| Var | Used in | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | layout.tsx, JsonLd.tsx | Defaults to `https://phachara.com` |

No Stripe, LINE LIFF, or analytics env vars are wired yet.

---

## 3. Design Tokens

### Colors (`@theme inline` in globals.css)

```css
--color-paper:      #fffdf7   /* page background */
--color-cream:      #fbf5e8   /* section bg alt */
--color-navy-500:   #233149   /* primary text + border */
--color-navy-600:   #253751   /* dark card bg */
--color-navy-900:   #141d33   /* darkest (h1, price card) */
--color-teal-500:   #2f8588   /* accent — eyebrow, check icons */
--color-amber-400:  #e5be63   /* soft amber — highlights (FinalCTA) */
--color-amber-500:  #ddb049   /* primary amber — highlights (Hero) */
--color-line:       #00b900   /* LINE green */
--color-text-muted: #5a6478   /* secondary text */
```

### Typography

| Token | Font | Google Font |
|---|---|---|
| `--font-heading` | Kanit | weights 400–900, thai+latin |
| `--font-body` | Bai Jamjuree | weights 300–700, thai+latin |
| `--font-mono` | JetBrains Mono | weights 400–600 |

Typography scale (Hero example):
- H1: `text-[2.25rem] sm:text-5xl lg:text-[3.75rem]` · `leading-[1.15]` · `tracking-normal`
- H2 (pain): `text-xl sm:text-2xl lg:text-3xl` · `leading-[1.3]` · `font-medium`
- H2 (section): `clamp(1.875rem, 4vw, 3.375rem)` (legacy — being migrated)
- Body: `text-[15px] sm:text-base lg:text-lg` · `leading-[1.6]`
- Mono label: `text-xs uppercase tracking-[0.08em]`

**Thai typography rules (enforced):**
- ❌ Never `leading-none` / `leading-tight` / `tracking-tight` on Thai text
- ✅ `text-balance` on all headings
- ✅ `leading-[1.15]` minimum for H1, `leading-[1.3]` for H2

### Shadows (brutalist, zero blur)

```css
--shadow-hard-sm:    3px 3px 0 var(--color-navy-500)
--shadow-hard-md:    5px 5px 0 var(--color-navy-500)
--shadow-hard-lg:    8px 8px 0 var(--color-navy-500)
--shadow-hard-amber: 5px 5px 0 var(--color-amber-500)
```

### Borders & radius

- Border width: `1.5px` everywhere (--border-frame)
- Border radius: `0px` (neo-brutalist — no rounded corners)

### Motion (Framer Motion)

`ScrollReveal` component wraps elements with:
- Initial: `opacity: 0, y: 24`
- Animate: `opacity: 1, y: 0`
- Duration: ~0.45s ease-out
- Delay: incremental per section (0, 0.06, 0.08, 0.1, 0.14, 0.18…)

---

## 4. Current vs Target Section Map

| # | Section (Spec V.2) | Status | File | Notes |
|---|---|---|---|---|
| S1 | Hero — eyebrow + pain H2 + solution H1 + VSL + CTA | ✅ exists | Hero.tsx | PAS structure complete. VSL = text script box, no actual video |
| S2 | Relevance — ปัญหา 4 cards | ✅ exists | Relevance.tsx | 4 pain cards with amber number badges |
| S3 | Mechanism — R-MOTRA framework | ✅ exists | Mechanism.tsx | Steps list + brutalist diagram. Labels partially hardcoded in JSX |
| S4 | Outcome & Proof — 5 chat screenshots | ⚠️ partial | Outcome.tsx | Text testimonials only. No real chat screenshot images |
| S5 | Fit — who it's for / not for | ✅ exists | Fit.tsx | 2-col positive/negative callout cards |
| S6 | What You Get — 7 ภาค 24 บท + โบนัส A–E | ✅ exists | Curriculum.tsx | Chapter carousel + bonus strip. No chapter thumbnails |
| S7 | Instructor — bio + photo | ⚠️ partial | Instructor.tsx | Bio paragraphs exist. Portrait = gradient placeholder. Credentials = placeholder text |
| S8 | Offer Stack & Price | ✅ exists | Offer.tsx | 6-item value stack (book + A–E). Anchor 2,490 → 890฿ |
| S9 | Risk Reversal — FAQ + 7-day guarantee | ✅ exists | FAQ.tsx | Guarantee callout + 6-item accordion |
| S10 | Final CTA | ✅ exists | FinalCTA.tsx | Pain+solution PAS headline + LINE CTA |
| — | Sticky CTA bar | ✅ exists | StickyCTABar.tsx | Bottom sticky bar, mobile-first |
| — | Footer + legal links | ✅ exists | Footer.tsx | 5 links: privacy/terms/refund/cookie/contact |
| — | Legal pages | ✅ exists | legal/*/page.tsx | PDPA-compliant, lawyer-reviewed v2 (17 May 2026) |
| — | Contact page | ✅ exists | contact/page.tsx | LINE OA + email + provider info |

**Summary: 10/12 sections complete · 2 partial (Outcome proof images, Instructor photo+credentials)**

---

## 5. Gaps & Refactor Plan

### Missing / incomplete

1. **VSL** — S1 has a navy text-script box but no actual video embed. Need real video URL or decision to keep as text.
2. **Proof images (S4)** — `outcome.testimonials` are text quotes. Spec V.2 calls for 5 real LINE chat screenshots. Need actual images in `public/images/`.
3. **Instructor photo** — `Instructor.tsx` renders a gradient placeholder div. Need real portrait image (use `next/image`).
4. **Instructor credentials** — `data.ts` has `"placeholder credential 1/2/3"` and `"X ปี"` in story — needs real copy.
5. **Analytics** — No GA4 / Meta Pixel / PostHog wired. Env vars not defined.
6. **Mechanism.tsx copy** — R-MOTRA step labels `["Relevance","Mechanism","Outcome","Trust","Risk Reversal","Action"]` hardcoded in JSX (violates CLAUDE.md rule: text must be in data.ts).

### Assets needed

| Asset | Count | Slot | Notes |
|---|---|---|---|
| LINE chat screenshots | 5 | `public/images/proof-*.webp` | Real customer results for S4 Outcome |
| Instructor portrait | 1 | `public/images/instructor.webp` | Use `next/image` with explicit width/height |
| VSL video | 1 | iframe or `<video>` in Hero.tsx | URL TBD |

### Components to refactor

| Component | Issue | Action |
|---|---|---|
| `Mechanism.tsx` | R-MOTRA labels hardcoded in JSX | Move to `mechanism` in data.ts |
| `Outcome.tsx` | Text testimonials → image proofs | Swap `<blockquote>` for `<figure><Image/></figure>` |
| `Instructor.tsx` | Gradient div → real photo | Add `next/image` component |
| All section H2 | Mix of `clamp()` style + Tailwind classes | Unify to Tailwind responsive scale (migration ongoing) |

---

## 6. Non-negotiable Quality Rules

```
❌ No `any` · No `@ts-ignore` · No `@ts-nocheck`
❌ No `"use client"` in /legal/* or /contact (Server Components only)
❌ No `<img>` — use `next/image` with explicit width + height
❌ No hardcoded hex colors — use CSS var tokens only
❌ No hardcoded Thai copy in components — all text from src/lib/data.ts
❌ No `leading-none` / `leading-tight` / `tracking-tight` on Thai headings
✅ TypeScript strict + noUncheckedIndexedAccess — handle array[i] undefined case
✅ Mobile-first breakpoints: base → sm:640 → md:768 → lg:1024
✅ `text-balance` on all h1/h2 headings
✅ `<span className="block">` for explicit H1 line breaks (no browser auto-wrap)
✅ Server components by default · "use client" only for useRef/useEffect/useState
✅ All images via next/image with explicit width/height + alt text
✅ Semantic HTML: <header>, <main>, <section>, <footer>, <nav>, <figure>
✅ Focus-visible rings defined (amber outline in globals.css)
✅ Import types with `import type`
✅ Lighthouse mobile: Performance ≥ 95 · LCP < 2.5s · CLS < 0.1 · A11y ≥ 95
```

---

## 7. Copy Source of Truth

- **Notion**: "Sales Page Spec V.2 — R-MOTRA" (parent spec, Thai copy)
- **data.ts**: `src/lib/data.ts` — single source for all component copy
- **Legal pages**: Lawyer-reviewed v2, 17 May 2026 — do not rewrite without legal sign-off
- **Product name**: "บทเรียนออนไลน์" (not "คอร์ส" / "e-book" / "หนังสือ") — พรบ.คุ้มครองผู้บริโภค ม.22
- **Price**: 890฿ today · 2,490฿ anchor · Non-VAT

### Footer legal slugs

```
/legal/privacy   นโยบายความเป็นส่วนตัว (PDPA)
/legal/terms     ข้อกำหนดการใช้งาน
/legal/refund    นโยบายการคืนเงิน (7 วัน, ≤3 บท)
/legal/cookie    นโยบายคุกกี้
/contact         ติดต่อเรา
```

### LINE OA

```
Handle : @049vlbwy
Deeplink: https://lin.ee/6rOdCZg   ← canonical URL for ALL CTAs
```

---

## 8. Open Questions (must answer before Phase 2)

1. **VSL video** — มี video URL จริงหรือไม่? ถ้าไม่มี → ตัดสินใจ: (a) ลบกล่อง VSL ออก (b) เก็บ text-script box ไว้ (c) embed YouTube/Vimeo
2. **Proof images (S4)** — มี LINE chat screenshots จริง 5 รูปไหม? ถ้าไม่มี → ใช้ text testimonials ต่อไปหรือรอ?
3. **Instructor photo** — มีรูปจริงที่จะ export เป็น .webp ไหม?
4. **Instructor credentials** — "placeholder credential 1/2/3" และ "X ปี" ต้องการ copy จริง
5. **Analytics** — GA4 Measurement ID / Meta Pixel ID / PostHog key สำหรับ production?
6. **Stripe payment flow** — Primary CTA ปัจจุบัน link ไป LINE OA ตลอด แผนถัดไปจะมี Stripe Checkout URL หรือยังคง LINE-only?
7. **LINE LIFF** — แอป phachara-app (D:\phachara-app) เป็น LIFF แยก ต้องการ deep-link จาก landing page ไป LIFF URL ไหม?

---

## 9. Commit History Reference

```
bf6d977  fix(cta+header): LINE deeplink → lin.ee/6rOdCZg, brand label, FAQ hide
89343f8  refactor(offer): value stack 2,490 (book + 5 bonuses), tighten spacing
06c2a93  fix(hero): Thai typography redesign (leading-[1.15], text-balance)
dafff48  chore(price): 990→890, anchor 1,990→2,490
abacd29  feat(seo): update metadata to new headline
257fb2a  feat(cta): FinalCTA PAS headline
94981bf  feat(hero): PAS headline (pre-head + pain + solution)
b8658b1  feat(legal): lawyer-reviewed v2 + rename บทเรียนออนไลน์
```
