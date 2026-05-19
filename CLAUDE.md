# CLAUDE.md — salepageclassicv2
> Last audited: 19 May 2026 · Commit `1c7b157`

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
npm run lint     # ⚠️ next lint REMOVED in Next.js 16 · script now prints TODO · ESLint not a direct dep
npx tsc --noEmit # typecheck — use this as primary safety net (0 errors required before commit)
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
├── Offer           sections/Offer.tsx          S8 — value stack + price card
├── FAQ             sections/FAQ.tsx            S9 — guarantee + accordion <details>
├── FinalCTA        sections/FinalCTA.tsx       S10 — pain+solution + LINE CTA
├── Footer          sections/Footer.tsx         legal links
├── StickyCTABar    sections/StickyCTABar.tsx   sticky bottom bar  ["use client"]
└── JsonLd          seo/JsonLd.tsx              JSON-LD: Product, FAQPage, Org, Person

UI primitives:
├── Section         ui/Section.tsx         — outer frame (border, shadow, tone bg) · p-6 md:p-12
├── SectionHeading  ui/SectionHeading.tsx  — shared heading component · size lg/md/sm · tone dark/light
├── ScrollReveal    ui/ScrollReveal.tsx    — framer-motion fade-in wrapper
├── CTAButton       ui/CTAButton.tsx       — LINE/primary/secondary variants
├── BrandPill       ui/BrandPill.tsx       — teal brand label
└── Eyebrow         ui/Eyebrow.tsx         — mono uppercase label (unused by sections currently)

Legal shared:
└── LegalLayout     legal/LegalLayout.tsx — prose wrapper for /legal/* + /contact
```

### Data / state model

- **All copy** lives in `src/lib/data.ts` — exported `as const` objects.
- **Server components by default** — no `"use client"` unless state/effect needed.
- **Exceptions**: `Curriculum.tsx` (useRef scroll + IntersectionObserver dots), `StickyCTABar.tsx` (useScrollDirection + IntersectionObserver S10 hide).
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
--color-terracotta:      #c2542a   /* pain hook highlight + solution promise */
--color-terracotta-soft: #e8a890   /* wavy underline + dashed notebook border */
--color-line:            #00b900   /* LINE green */
--color-text-muted:      #5a6478   /* secondary text */
```

### Typography

| Token | Font | Google Font |
|---|---|---|
| `--font-heading` | Kanit | weights 400–900, thai+latin |
| `--font-body` | Bai Jamjuree | weights 300–700, thai+latin |
| `--font-mono` | JetBrains Mono | weights 400–600 |

Typography scale (current after `1c7b157`):

**Hero S1:**
- Pain Hook H2: `text-xl sm:text-2xl md:text-3xl` · `leading-[1.3]` · `font-extrabold` · `text-balance`
- Highlight span: `text-terracotta underline decoration-wavy decoration-terracotta-soft decoration-[2px]`

**Section headings — use `<SectionHeading>` component (no inline H2):**

| size | Tailwind class | Used at |
|------|---------------|---------|
| `lg` | `text-2xl sm:text-3xl md:text-4xl` | S4 Outcome, S10 FinalCTA |
| `md` | `text-xl sm:text-2xl md:text-3xl` | S2 Relevance, S3 Mechanism, S5 Fit (as h3) |
| `sm` | `text-lg sm:text-xl md:text-2xl` | S6 Curriculum, S8 Offer |

tone="dark" → `text-navy-900` (default) · tone="light" → `text-cream` (S10 on navy bg)

**Body:** `text-[17px] leading-[1.6]` (hero desc) · `text-base leading-[1.55]` (cards/FAQ)
**Mono label:** `text-xs uppercase tracking-[0.18em]`

⚠️ S9 FAQ guarantee heading: inline H2 `text-2xl sm:text-3xl lg:text-4xl` — intentionally NOT using SectionHeading

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
| S1 | Hero — preHeadline + painHook + solutionPromise + notebook frame + CTA + micro-copy | ✅ exists | Hero.tsx | Pain-first redesign · no VSL · no eyebrow · terracotta highlights |
| S2 | Relevance — ปัญหา 4 cards | ✅ exists | Relevance.tsx | 4 pain cards with amber number badges |
| S3 | Mechanism — R-MOTRA framework | ✅ exists | Mechanism.tsx | Steps list + brutalist diagram. Labels partially hardcoded in JSX |
| S4 | Outcome & Proof — 5 chat screenshots | ⚠️ partial | Outcome.tsx | Text testimonials only. No real chat screenshot images |
| S5 | Fit — who it's for / not for | ✅ exists | Fit.tsx | 2-col positive/negative callout cards |
| S6 | What You Get — 7 ภาค 24 บท + โบนัส A–E | ✅ exists | Curriculum.tsx | Chapter carousel + bonus strip. No chapter thumbnails |
| S7 | Instructor | ~~deprecated~~ | — | Removed per Spec V.2 (commit `0076264`) |
| S8 | Offer Stack & Price | ✅ exists | Offer.tsx | 6-item value stack (book + A–E). Anchor 2,490 → 890฿ |
| S9 | Risk Reversal — FAQ + 7-day guarantee | ✅ exists | FAQ.tsx | Guarantee callout + 6-item accordion |
| S10 | Final CTA | ✅ exists | FinalCTA.tsx | Pain+solution PAS headline + LINE CTA |
| — | Sticky CTA bar | ✅ exists | StickyCTABar.tsx | Bottom sticky bar, mobile-first |
| — | Footer + legal links | ✅ exists | Footer.tsx | 5 links: privacy/terms/refund/cookie/contact |
| — | Legal pages | ✅ exists | legal/*/page.tsx | PDPA-compliant, lawyer-reviewed v2 (17 May 2026) |
| — | Contact page | ✅ exists | contact/page.tsx | LINE OA + email + provider info |

**Summary: 9/11 sections active · S7 deprecated · Outcome waiting on proof images**

---

## 5. Gaps & Refactor Plan

### Missing / incomplete

1. **Proof images (S4)** — `outcome.testimonials` are text quotes. Spec V.2 calls for 5 real LINE chat screenshots. Need actual images in `public/images/proof-*.webp`.
2. **Analytics** — No GA4 / Meta Pixel wired. Env vars not defined.

### Assets needed

| Asset | Count | Slot | Notes |
|---|---|---|---|
| LINE chat screenshots | 5 | `public/images/proof-*.webp` | Real customer results for S4 Outcome |

### Components to refactor

| Component | Issue | Action |
|---|---|---|
| `Outcome.tsx` | Text testimonials → image proofs | Swap placeholder div for `<figure><Image/></figure>` when proof images ready |

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
✅ Section headings → use `<SectionHeading size="lg|md|sm" tone="dark|light">` · ❌ no new inline H2 with manual Tailwind size classes
✅ CTAButton size="lg" → `px-6 py-4 text-base sm:text-lg` (prevents button text wrap on 360px)
✅ All CTA labels unified → "เริ่มอ่านฟรี 2 บทแรก (ผ่าน LINE)" + href https://lin.ee/6rOdCZg
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

### CTA copy (unified — as of `1c7b157`)

All primary CTAs use a single label + href:
```
Label: "เริ่มอ่านฟรี 2 บทแรก (ผ่าน LINE)"
href:  https://lin.ee/6rOdCZg
```
Keys in data.ts: `hero.cta.label`, `cta.buyLabel`, `finalCta.ctaLabel` — ต้องตรงกันเสมอ

### LINE OA

```
Handle : @049vlbwy
Deeplink: https://lin.ee/6rOdCZg   ← canonical URL for ALL CTAs
```

### Drift Guard

**Rule:** ทุก commit ที่กระทบ copy / visual hierarchy / component structure → sync CLAUDE.md + Notion Spec V.2 ภายใน 1 working session
ห้ามปล่อย CLAUDE.md ล้าหลัง code นานกว่า 1 commit

---

## 8. Pending Assets

| Asset | Status | Notes |
|---|---|---|
| Proof images (S4) | ⏳ waiting on owner | 5 LINE chat screenshots → `public/images/proof-*.webp` |
| Analytics IDs | ⏳ waiting on owner | GA4 Measurement ID + Meta Pixel ID for production wiring |

---

## 9. Phase Status

### Phase 2 ✅ DONE (19 May 2026)

Tasks 0–7: data.ts sync · VSL removed · Instructor removed · Outcome placeholders · R-MOTRA to data.ts · H2 style unified · CTA audit · build pass.

### Copy Revision + Hero Redesign + Layout Polish ✅ DONE (19 May 2026)

- **a7f062d** — Copy Revision Batch: 10 fixes from Spec V.2 (section leads, contrast, curriculum subtitle, offer heading, R-MOTRA removal)
- **b3a0b57** — Hero pain-first redesign: terracotta tokens, painHook schema, notebook frame, wavy underline
- **1c7b157** — Layout Refinement Pass: SectionHeading component, sticky CTA IntersectionObserver, 14 files changed

### Phase 3 D — Lighthouse Audit ✅ PASS (19 May 2026)

Localhost mobile (Chrome DevTools, 400×832 viewport):

| Metric | Score | Target |
|---|---|---|
| Performance | 99 | ≥ 95 |
| Accessibility | 96 | ≥ 95 |
| Best Practices | 96 | ≥ 95 |
| SEO | 100 | ≥ 95 |
| FCP | 0.9s | < 1.8s |
| LCP | 2.2s | < 2.5s |

Commit chain: d12563c → 7b411ff → (hotfix)

Outstanding for "Phase 3 Done":
- Sub-task A — 5 proof images (waiting on user)
- Sub-task B — GA4 + Meta Pixel IDs (waiting on user)
- Production deploy + re-run Lighthouse on prod URL

---

## 10. Commit History Reference

```
1c7b157  refactor(salepage): tighten hierarchy + introduce SectionHeading + fix sticky CTA
b3a0b57  feat(hero): pain-first redesign + retro notebook frame
a7f062d  copy: revision batch — 10 fixes from Spec V.2
bf2fca9  fix(typography): bump small body text to text-base across key sections
7b411ff  perf: phase 3 lighthouse pre-audit fixes
d12563c  feat(seo): finalize metadata, OG image, JSON-LD schemas
d3a8820  chore: phase 2 refactor complete
f98d373  refactor(outcome): swap blockquotes for image placeholder slots
0076264  refactor: remove instructor section (not in spec v2)
42b455e  feat(data): sync all copy from Sales Page Spec V.2 (Task 0)
bf6d977  fix(cta+header): LINE deeplink → lin.ee/6rOdCZg, brand label, FAQ hide
89343f8  refactor(offer): value stack 2,490 (book + 5 bonuses), tighten spacing
06c2a93  fix(hero): Thai typography redesign (leading-[1.15], text-balance)
dafff48  chore(price): 990→890, anchor 1,990→2,490
b8658b1  feat(legal): lawyer-reviewed v2 + rename บทเรียนออนไลน์
```
