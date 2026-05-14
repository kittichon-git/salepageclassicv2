# S1 Visual Audit — D:\notion-sale-page

> **Audit date:** 2026-05-14
> **Purpose:** Design reverse-engineering — extract every visual token from S1 for faithful port into V2
> **Rule:** V2 takes ALL visual/layout/decoration from S1, tech stack from S2, content from spec.md

---

## §0 File Inventory

| File | Role |
|------|------|
| `client/package.json` | Dependencies (Tailwind v4, framer-motion, lucide-react, shadcn/ui) |
| `client/src/index.css` | **All design tokens** — CSS variables, bg pattern, typography, component classes |
| `client/src/pages/Home.tsx` | **Main sale page** — all 10+ sections in one component |
| `client/src/App.tsx` | Router root (renders Home) |
| `client/src/components/ui/button.tsx` | shadcn/ui Button primitive |
| `client/src/lib/utils.ts` | `cn()` via clsx + tailwind-merge |
| `client/index.html` | Google Fonts link tag (IBM Plex Sans Thai + Space Grotesk) |
| `client/public/` | Only `__manus__/` debug files — no SVG patterns, no images (images CDN-loaded) |
| `client/vite.config.ts` | Vite + @tailwindcss/vite |

**CDN images (hardcoded in Home.tsx):**
```
https://d2xsxph8kpxj0f.cloudfront.net/.../sale-page-hero-command-board-gYg7zAuwi3cRr8Naw3hBWk.webp
https://d2xsxph8kpxj0f.cloudfront.net/.../r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp
https://d2xsxph8kpxj0f.cloudfront.net/.../offer-stack-value-cards-cpikbfLJ269Kz4vfj84DHL.webp
```

---

## §1 Palette (all hex values from index.css)

| Token | Hex | OKLCH (source) | Usage |
|-------|-----|----------------|-------|
| `--paper` | `#fffdf7` | oklch(0.99 0.01 86.5) | Card backgrounds, section frames |
| `--cream` | `#fbf5e8` | oklch(0.975 0.018 86.2) | Body background |
| `--navy` | `#233149` | oklch(0.255 0.032 255) | Borders (1.5px), headings, shadows, foreground |
| `--teal` | `#2f8588` | oklch(0.50 0.073 200) | Brand pill, eyebrow badge, icons, .is-fit bg tint |
| `--amber` | `#ddb049` | oklch(0.77 0.145 82.5) | Step/curriculum badges, VSL shadow, accent strip |
| `--line` | `#00b900` | — | CTA button background |
| `--dark-navy` | `#253751` | — | VSL card, testimonials, bonus strip, final CTA bg |
| `--teal-light-bg` | `#eef8f4` | — | Guarantee card bg, outcome row bg |
| `--is-fit-bg` | `#ecf8f3` | — | Fit panel (positive) |
| `--is-not-fit-bg` | `#fff3ec` | — | Fit panel (negative) |
| `--amber-credential` | `#e8c56d` | — | Credential badge bg |
| `--amber-price-tag` | `#ddb049` | — | Today price tag bg |
| `--muted-text` | `#415068` | oklch(0.43 0.025 253.8) | Hero subtitle, body secondary |
| `--price-anchor-text` | `#62470c` | — | Anchor price label color |
| `--final-cta-sub` | `#f6d88b` | — | Final CTA sub-text (amber variant) |
| `--not-fit-icon` | `#b13a2c` | — | X icon in not-fit panel |
| border (default) | `rgba(35, 49, 73, 0.92)` | — | card/component borders (near-solid navy) |
| border (subtle) | `rgba(35, 49, 73, 0.16)` | — | outcome row, subtle dividers |
| border (dashed) | `rgba(35, 49, 73, 0.24)` | — | offer list dashed rows |
| shadow (frames) | `rgba(35, 49, 73, 0.62)` | — | Section frame 5px shadow |
| shadow (cards) | `rgba(35, 49, 73, 0.48)` | — | Card 3px shadow |
| shadow (TopNav) | `rgba(35, 49, 73, 0.72)` | — | TopNav 4px shadow |
| shadow (CTA) | `rgba(35, 49, 73, 0.74)` | — | CTA button 3px shadow |
| shadow (amber-VSL) | `rgba(221, 176, 73, 0.90)` | — | VSL card amber shadow |
| shadow (amber-portrait) | `rgba(221, 176, 73, 0.85)` | — | Portrait placeholder amber shadow |

**Background radial gradients (body):**
- Teal: `rgba(75, 154, 157, 0.07)` centered at 12% 18%, radius 30rem
- Amber: `rgba(226, 178, 64, 0.09)` centered at 88% 10%, radius 26rem

---

## §2 Typography (S1 reference — V2 will use Kanit + Bai Jamjuree at matched sizes)

### Fonts loaded (Google Fonts link in index.html)
```
IBM Plex Sans Thai: wght@400;500;600;700;800
Space Grotesk: wght@500;700;800
```

### Font assignments
| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Body | IBM Plex Sans Thai | 400–700 | All body copy |
| Heading (h1/h2/h3) | IBM Plex Sans Thai | 800 | Heavy display |
| Brand/label/badge | Space Grotesk | 800 | `.brand-mark`, `.micro-badge`, `.frame-tab`, `.vsl-label` |
| Step/curriculum numbers | Space Grotesk | 800 | Amber badge spans |
| Portrait placeholder | Space Grotesk | 800 | "KC" initial |

### Size scale (fluid with clamp)
| Element | Size | Line-height | Tracking | Weight |
|---------|------|-------------|----------|--------|
| h1 | `clamp(40px, 6.4vw, 84px)` | 0.98 | -0.035em | 800 |
| h2 | `clamp(30px, 4vw, 54px)` | 1.05 | -0.035em | 800 |
| h3 | 22px | — | -0.035em | 700 |
| Hero subtitle | `clamp(17px, 2vw, 22px)` | 1.55 | — | 600 |
| Micro-badge/labels | 12px | — | 0.06em | 800 |
| Today price | `clamp(52px, 8vw, 82px)` | 0.9 | — | 800 |

> **V2 mapping note:** Use Kanit 800 for h1/h2/h3. h1 `letter-spacing: -0.035em` maps directly. Match tight line-height (0.98–1.05). Body uses Bai Jamjuree 400–700.

---

## §3 Spacing & Layout

### Container
- `max-width: 1180px` — used on `.top-rail`, `.hero-grid`, every `.section-frame`, `.final-cta`
- `margin: 0 auto 28px` — 28px gap between sections
- `.site-shell` padding: `18px 18px 112px` (desktop), `12px 12px 110px` (mobile ≤720px)

### Section vertical padding
- `.section-inner`: `padding: 38px 28px 30px` (desktop)
- `.section-inner` mobile (≤720px): `padding: 34px 16px 20px`
- `.hero-grid`: `padding: 36px` (desktop), `padding: 26px 18px` (mobile)
- `.final-cta`: `padding: 48px 24px`

### Grid columns per section
| Section | Grid columns | Gap |
|---------|-------------|-----|
| Hero | `.93fr 1.07fr` | 24px |
| Mechanism | `1.1fr .9fr` (steps left, image right) | — |
| Mechanism steps | `repeat(3, 1fr)` | 14px |
| Pain/Relevance | `repeat(4, 1fr)` → 2-col tablet → 1-col mobile | 18px |
| Outcome | `.9fr 1.1fr` | — |
| Fit Filter | `1fr 1fr` → 1-col mobile | — |
| Curriculum | `repeat(7, minmax(210px, 1fr))` horizontal scroll | 14px |
| Bonus strip | `auto 1fr auto` | 14px |
| Instructor | `160px 1fr` → 1-col mobile | 22px |
| Offer | `.95fr 1.05fr` → 1-col mobile | — |

### Gap scale
- Between sections: 28px (`margin-bottom: 28px` on each `.section-frame`)
- Within cards: 14–18px
- CTA group gap: 10px
- Badge-to-content: 12–18px

---

## §4 Decorations (Critical — missed in V2 round 1)

### Grid paper background
**Technique:** 4-layer CSS `background-image` on `body` + radial accent circles

```css
background-image:
  radial-gradient(circle at 12% 18%, rgba(75,154,157,.07), transparent 30rem),
  radial-gradient(circle at 88% 10%, rgba(226,178,64,.09), transparent 26rem),
  linear-gradient(rgba(42,56,77,.022) 1px, transparent 1px),
  linear-gradient(90deg, rgba(42,56,77,.02) 1px, transparent 1px);
background-size: auto, auto, 42px 42px, 42px 42px;
```

- **Grid spacing:** 42px × 42px
- **Line opacity:** 0.02–0.022 (very subtle — near invisible navy lines)
- **Line color:** `rgba(42, 56, 77, ~.02)` (navy at 2% opacity)
- No SVG, no external file — pure CSS

### Hero grid inner grid overlay
`.hero-grid::before` — additional 18px × 18px finer grid, faded out bottom:
```css
background-image:
  linear-gradient(90deg, rgba(35,49,73,.022) 1px, transparent 1px),
  linear-gradient(rgba(35,49,73,.022) 1px, transparent 1px);
background-size: 18px 18px;
mask-image: linear-gradient(to bottom, black, transparent 80%);
```

### Section frame ("brutalist frame")
```css
.section-frame {
  border: 1.5px solid var(--navy);           /* #233149 */
  background: rgba(255,253,247,.94);          /* paper near-opaque */
  box-shadow: 5px 5px 0 rgba(35,49,73,.62);  /* HARD OFFSET — no blur */
  max-width: 1180px;
  margin: 0 auto 28px;
}
```

**No border-radius** — square/brutalist, `border-radius: 0`

### Frame-tab (section label overlapping top border)
```css
.frame-tab {
  position: absolute;
  top: -16px;
  left: 22px;
  background: #253751;                       /* dark navy */
  color: #fff9ec;
  padding: 7px 13px;
  font-size: 12px;
  font-weight: 800;
  font-family: "Space Grotesk";
  letter-spacing: .06em;
  text-transform: uppercase;
}
```

Text examples: "S2 / RELEVANCE", "S3 / MECHANISM", "S8 / OFFER STACK", "S10 / ACTION"

> **V2 mapping:** Frame-tab replaces `<Eyebrow>` component. Use JetBrains Mono or Bai Jamjuree 800 with uppercase tracking.

### Micro-badge (eyebrow pill on Hero)
```css
.micro-badge {
  background: var(--teal);                   /* #2f8588 */
  color: var(--paper);                       /* #fffdf7 */
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 800;
  font-family: "Space Grotesk";
  letter-spacing: .06em;
  text-transform: uppercase;
  /* NO border-radius — square */
}
```

Text: `"R-MOTRA SALE PAGE · MOBILE-FIRST"`

### Brand pill (TopNav)
```css
.brand-mark {
  background: var(--teal);                   /* #2f8588 */
  color: var(--paper);                       /* #fffdf7 */
  padding: 8px 12px;
  font-weight: 800;
  font-family: "Space Grotesk";
  letter-spacing: .06em;
  text-transform: uppercase;
  /* NO border-radius */
}
```

Text: `"แค่เปลี่ยนคำ"` (brand name only, no site URL)

### Shadow style — HARD OFFSET (brutalist)
All shadows use `X Y 0 rgba()` — **zero blur radius**:

| Element | Shadow |
|---------|--------|
| Section frame | `5px 5px 0 rgba(35,49,73,.62)` |
| TopNav | `4px 4px 0 rgba(35,49,73,.72)` |
| Cards (pain, instructor, curriculum, FAQ) | `3px 3px 0 rgba(35,49,73,.48)` |
| VSL card | `3px 3px 0 rgba(221,176,73,.90)` (amber!) |
| CTA button | `3px 3px 0 rgba(35,49,73,.74)` |
| Sticky CTA | `4px 4px 0 rgba(35,49,73,.58)` |
| Final CTA | `5px 5px 0 rgba(35,49,73,.62)` |

### Border-radius scale
**None** — `border-radius: 0` everywhere. Pure square brutalist. No rounded corners on any element.

### Amber accent
- Used as badge background (step numbers, curriculum labels): `background: var(--amber)` `color: var(--navy)`
- Used as shadow on VSL card: `3px 3px 0 rgba(221, 176, 73, .90)`
- Used as portrait shadow: `3px 3px 0 rgba(221, 176, 73, .85)`
- NOT a strip/bar — it's applied as shadow color on the VSL card (the "yellow" visual comes from the amber offset shadow peeking out below)

---

## §5 CTA Buttons

### Primary LINE CTA (`.cta-command`)
```css
.cta-command {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 14px 20px;
  color: white;
  background: var(--line);                   /* #00b900 */
  border: 1.5px solid var(--navy);           /* navy border! */
  box-shadow: 3px 3px 0 rgba(35,49,73,.74);  /* hard offset */
  font-weight: 800;
}
.cta-command:hover {
  transform: translate(-2px, -2px);           /* lifts on hover */
  box-shadow: 5px 5px 0 rgba(35,49,73,.78);  /* shadow grows */
  filter: saturate(1.05);
}
```

**Icon used:** `MessageCircle` from lucide-react (chat bubble icon — confirms chat icon IS present)

**Label examples:**
- `"จ่าย 990฿ ผ่าน LINE"` (buy button)
- `"อ่านบทนำ + บท 1 ฟรีใน LINE"` (inline preview)
- `"อ่านฟรี 2 บทแรกผ่าน LINE"` (final CTA)
- `"เริ่มอ่านฟรี"` (sticky CTA)

**Width:** Varies — full-width in final CTA (`width: 100%`), inline in Hero

### Secondary / ghost button
None found — only LINE green CTA exists.

---

## §6 Section-by-Section Style Table

| # | Section | Wrapper / class | Heading | Card/Decoration | CTA | Notes |
|---|---------|-----------------|---------|-----------------|-----|-------|
| 1 | **TopNav** | `.top-rail` — sticky top:12px, max-w-1180px, border 1.5px navy, bg paper/96, shadow `4px 4px 0 navy/.72` | — | `.brand-mark` (teal pill left) + `.nav-links` 3 links: เนื้อหา / ราคา / FAQ | No CTA in nav | No LINE button in nav. 3 links only. Square corners. |
| 2 | **Hero** | `.hero-grid` — border 1.5px navy, shadow `5px 5px 0`, grid `.93fr 1.07fr`, inner 18px grid overlay | h1 `clamp(40px–84px)` IBM 800, lh 0.98, tracking -.035em | `.micro-badge` (teal pill "R-MOTRA SALE PAGE · MOBILE-FIRST") + `.vsl-card` (dark navy, amber shadow) | `.cta-command` full-width + `MessageCircle` icon | h1 has `<br />` after "ประโยค" — manual line break |
| 3 | **Relevance (Pain)** | `.section-frame` + `.frame-tab` "S2 / RELEVANCE" | h2 `clamp(30–54px)` 800, "หน้านี้สำหรับคุณ ถ้า..." | `.pain-grid` 4-col, `.pain-card` (border navy, shadow `3px 3px`, teal icons `Target` size=22) | None in section | Stagger via inline, not framer |
| 4 | **Mechanism** | `.section-frame` + `.frame-tab` "S3 / MECHANISM" | h2 "สูตรนี้ทำงานยังไง — 3 ขั้น" | `.mechanism-steps` 3-col: `.step-card` with amber span badge + teal icon + h3 + detail text. Framework image right. | None | tagline inline style `color:#2f8588 font-size:20px font-weight:800` |
| 5 | **Outcome+Proof** | `.section-frame` + `.frame-tab` "S4 / OUTCOME PROOF" | h2 "สิ่งที่คุณจะทำได้หลังอ่านจบ" | `.outcome-list` (`.outcome-row` light-teal bg `#eef8f4`, check icons) + `.testimonial-stack` (`.testimonial-card` dark navy, amber figcaption) | None | Testimonials are dark navy cards |
| 6 | **Fit Filter** | `.section-frame` + `.frame-tab` "S5 / TRUST FILTER" | h2 "เหมาะกับใคร และไม่เหมาะกับใคร" | `.fit-grid` 2-col: `.fit-panel.is-fit` (`#ecf8f3`, teal Check icons) + `.fit-panel.is-not-fit` (`#fff3ec`, red X icons `#b13a2c`) | None | h3 inside each panel |
| 7 | **Curriculum** | `.section-frame` + `.frame-tab` "S6 / WHAT'S INSIDE" | h2 "ข้างในมีอะไร — 7 ภาค 24 บท" | `.curriculum-grid` — horizontal scroll `repeat(7, minmax(210px,1fr))`, snap-x. `.curriculum-card` (border navy, amber span badge, shadow 3px). `.bonus-strip` below (dark navy, amber icon `Sparkles`) | `.cta-command` inline inside bonus-strip | Grid ID is `#inside` not `#curriculum` |
| 8 | **Instructor** | `.section-frame` + `.frame-tab` "S7 / INSTRUCTOR" | h2 "จากคนที่เคยเขียนสวย แต่ไม่มีคนซื้อ" | `.instructor-card` 2-col `160px 1fr`, `.portrait-placeholder` (teal bg `#4a9798`, amber shadow, "KC"), `.credential-row` (amber bg `#e8c56d` pill badges) | None | `.lead-copy` 23px 800 weight |
| 9 | **Offer+Price** | `.section-frame` + `.frame-tab` "S8 / OFFER STACK" | h2 "ทั้งหมดนี้ในราคาเดียว" | `.offer-layout` 2-col: offer-visual-card (image left) + `.price-card` (offer-list dashed rows, total-row solid, `.today-price` with amber tag + huge price, `.price-anchor` strikethrough) | `.cta-command` full-width "จ่าย 990฿ ผ่าน LINE" | No dark card around price |
| 10 | **Risk+FAQ** | `.section-frame` + `.frame-tab` "S9 / RISK REVERSAL" | h2 "รับประกัน 7 วัน คืนเงิน 100%" | `.guarantee-card` (light teal `#eef8f4`, `ShieldCheck` size=36 teal) + `.faq-list` (`<details>` with navy border, 2px shadow, `ChevronDown` rotates) | None | FAQ uses native `<details>` |
| 11 | **Final CTA** | `.final-cta` — dark navy `#253751`, border 1.5px navy, shadow 5px, text-center, `frame-tab "S10 / ACTION"` | h2 max-w-780px "เขียน 1 ประโยค..." | `LineChart` amber icon (size=42), sub `color:#f6d88b` | `.cta-command` center | No Section wrapper — standalone element |
| 12 | **Sticky CTA** | `.sticky-cta` — fixed bottom:16px, border 1.5px navy, bg paper/96, backdrop-blur, shadow 4px | — | `<span>` with `CircleDollarSign` icon + "2 บทแรกฟรี" text (teal color) | `.cta-command` min-h 44px | Text hidden on mobile (`.sticky-cta > span`). Show/hide: JS `scrollY` based (IntersectionObserver not confirmed — V2 used IntersectionObserver) |
| 13 | **Footer** | **No footer component found in S1.** The page ends at sticky-cta. | — | — | — | S1 has no footer section |

---

## §7 Interaction / Animation

### Framer Motion / ScrollReveal
- **S1 does NOT use framer-motion** — no import found in Home.tsx or index.css
- Animations in S1 are limited to CSS transitions only
- **V2 will bring ScrollReveal from S2** (confirmed approach)

### Hover transitions
```css
/* CTA button */
transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
/* Hover: translate(-2px,-2px), shadow grows from 3px to 5px */

/* FAQ chevron */
transition: transform .18s ease;
/* details[open] summary svg: rotate(180deg) */

/* Nav links */
.nav-links a:hover { border-color: var(--amber); }  /* amber underline on hover */
```

### TopNav scroll-spy
- **S1 does NOT have scroll-spy** — plain anchor links only
- **V2 will bring scroll-spy from S2** (confirmed approach)

### StickyCTA show/hide
- **S1 StickyCTA is always visible** — no intersection observer, no hide logic
- Hard-coded `position: fixed`, no JS toggle
- **V2's IntersectionObserver logic** comes from S2 (V2 original implementation)

### Curriculum scroll
- `.curriculum-grid` uses CSS `overflow-x: auto; scroll-snap-type: x mandatory` — no JS
- **V2's arrow buttons + scroll state** come from S2 (V2 original implementation)

---

## Design Philosophy Summary

**"Editorial Tech Brutalism ผสาน Thai Creator Commerce"**

Core visual principles:
1. **Zero border-radius** — every element is square
2. **Hard offset shadows** — 3–5px cast, zero blur, near-black navy
3. **Teal system color** — brand pill, eyebrow, icons, check marks
4. **Amber accent** — numbers, badges, proof highlights, VSL amber shadow
5. **Grid paper bg** — 42px×42px faint navy lines on cream, no external file
6. **Frame-tab** — dark navy label overlapping top border of each section
7. **ONE CTA** — LINE green only, with MessageCircle icon, navy border + hard shadow
8. **Dark navy content zones** — testimonials, VSL, bonus strip, final CTA use `#253751`
