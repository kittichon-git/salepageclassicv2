# Rebuild Plan — V2 Round 2

> **Created:** 2026-05-14 after R-0 audit
> **Status:** STOP-GATE — waiting for R-1 order

---

## Three-Source Rule (V2 Round 2)

| Layer | Source | Role |
|-------|--------|------|
| Visual — palette, decoration, shadow, layout, section style | S1 `D:\notion-sale-page` | ลอกทั้งหมด (audit: s1-visual-audit.md) |
| Tech stack — Next.js 16, Tailwind v4, deps, PostCSS | S2 `D:\salepageclassic` | ลอกทั้งหมด (audit: s2-tech-audit.md) |
| Fonts — Kanit + Bai Jamjuree + JetBrains Mono | S2 | คงจาก S2 (S1 ใช้ IBM Plex + Space Grotesk — ไม่ใช้) |
| Animation — ScrollReveal, framer-motion pattern | S2 | port ScrollReveal.tsx ตรงๆ |
| Section ordering — R-MOTRA 10 sections | S1 + spec.md | ลำดับตาม spec.md, visual style ตาม S1 |
| Content / copy | `docs/spec.md` (V.2) | copy back ใน R-1 |

---

## What V2 Round 1 Got Wrong vs S1

| Area | S1 (correct) | V2 Round 1 (wrong) | Severity | Fix in R-1 |
|------|-------------|-------------------|----------|-----------|
| **Background** | 42×42px grid lines + teal/amber radial gradients on body | Plain cream `#f2ecdd`, no pattern | HIGH | Add CSS bg-image pattern to `body` |
| **Border style** | 1.5px solid navy `#233149` everywhere | Light beige border `var(--color-beige-300)` | HIGH | Replace all borders with navy 1.5px |
| **Shadow style** | Hard offset `5px 5px 0 rgba(navy,.62)` — zero blur | Soft blur `shadow-[0 1px 2px ...]` | HIGH | Replace all shadows with hard offset |
| **Border-radius** | 0px — square, brutalist | 1.5rem `--radius-xl` everywhere | HIGH | Remove all radius, use 0 |
| **TopNav brand** | Teal pill (`.brand-mark`) teal bg + cream text | Plain text brand + LINE CTA button in nav | HIGH | Replace with teal pill, remove LINE button from nav |
| **TopNav links** | 3 links only: เนื้อหา / ราคา / FAQ | 4 links + LINE CTA button | HIGH | Reduce to 3 links, remove CTA from nav |
| **Section frame** | `.section-frame` — navy border + hard shadow + `.frame-tab` dark label overlapping top | Soft shadow + radius + plain eyebrow | HIGH | Add frame border, hard shadow, frame-tab |
| **Eyebrow / labels** | `.frame-tab` — dark navy pill positioned above border (absolute, top:-16px) | `<Eyebrow>` — plain small-caps text | HIGH | Replace with frame-tab pattern |
| **Palette** | Teal `#2f8588` + Navy `#233149` + Amber `#ddb049` + Cream + LINE | Coral `#d27355` + Charcoal + Cream | HIGH | Swap all palette tokens |
| **VSL card** | Dark navy `#253751` with amber offset shadow, script text, LINE CTA inside | Aspect-ratio wrapper with next/image + play button overlay | HIGH | Rebuild VSL as dark navy card with text script |
| **CTA button** | LINE green + 1.5px navy border + 3px hard shadow + `MessageCircle` icon + hover lift | LINE green + no navy border, soft shadow, no icon | MEDIUM | Add navy border, hard shadow, MessageCircle icon, hover transform |
| **Testimonials** | Dark navy cards `.testimonial-card` (`#253751`, amber author color) | White/cream cards with quote icon | MEDIUM | Rebuild as dark navy with amber figcaption |
| **Curriculum** | amber badge span + no radius | coral badge span + 1.5rem radius | MEDIUM | Swap badge color, remove radius |
| **Step cards** | amber badge + no radius | coral circle number + radius | MEDIUM | Swap to amber badge |
| **Fit panels** | is-fit `#ecf8f3` / is-not-fit `#fff3ec`, no radius | coral ring / beige ring, 1.5rem radius | MEDIUM | Use teal/peach bg, square |
| **Instructor portrait** | Teal `#4a9798` bg + amber shadow + "KC" initial | Coral gradient + "K" initial | LOW | Swap to teal bg + amber shadow |
| **Credential badges** | Amber `#e8c56d` bg pill | `BadgeCheck` icon text | LOW | Rebuild as amber pill badges |
| **Footer** | **S1 has no footer** | Footer component existed | LOW | Can add minimal footer or omit |

---

## Section Mapping: S1 → V2

| V2 spec.md Section | S1 Component/id | Notes |
|---------------------|-----------------|-------|
| S0 TopNav | `.top-rail` | S1: 3 links, brand pill, no LINE CTA in nav |
| S1 Hero | `#hero` `.hero-grid` | h1 + micro-badge + VSL card + LINE CTA |
| S2 Relevance (Pain) | `.section-frame` "S2 / RELEVANCE" | 4-col pain-grid |
| S3 Mechanism | `.section-frame` "S3 / MECHANISM" | 3-col steps + image right |
| S4 Outcome+Proof | `.section-frame` "S4 / OUTCOME PROOF" | outcomes left + testimonials (dark navy) right |
| S5 Fit Filter | `.section-frame` "S5 / TRUST FILTER" | 2-col fit/not-fit panels |
| S6 Curriculum | `.section-frame` "S6 / WHAT'S INSIDE" | horizontal scroll + bonus-strip with inline CTA |
| S7 Instructor | `.section-frame` "S7 / INSTRUCTOR" | 2-col: portrait + story + credential badges |
| S8 Offer+Price | `.section-frame` "S8 / OFFER STACK" | 2-col: image+offer-list left, price-card right |
| S9 Risk+FAQ | `.section-frame` "S9 / RISK REVERSAL" | guarantee-card + faq-list (native details) |
| S10 Final CTA | `.final-cta` (standalone, dark navy) | center, no section-frame wrapper |
| StickyCTABar | `.sticky-cta` (fixed bottom) | S1: always visible, no JS show/hide. V2: keep IntersectionObserver from S2 |
| Footer | **Not in S1** | V2 can add minimal footer or omit |

---

## R-1 Build Priorities (for architect reference)

### New globals.css tokens needed (replacing V2 round 1 palette)
```css
/* Palette from S1 */
--color-paper: #fffdf7
--color-cream: #fbf5e8
--color-navy: #233149
--color-dark-navy: #253751
--color-teal: #2f8588
--color-teal-light: #4a9798
--color-amber: #ddb049
--color-amber-light: #e8c56d
--color-line-green: #00b900
--color-muted-text: #415068
/* Tint backgrounds */
--color-outcome-row: #eef8f4
--color-is-fit: #ecf8f3
--color-is-not-fit: #fff3ec

/* Shadows — hard offset */
--shadow-frame: 5px 5px 0 rgba(35,49,73,.62)
--shadow-card: 3px 3px 0 rgba(35,49,73,.48)
--shadow-nav: 4px 4px 0 rgba(35,49,73,.72)
--shadow-cta: 3px 3px 0 rgba(35,49,73,.74)
--shadow-amber: 3px 3px 0 rgba(221,176,73,.90)

/* Borders */
--border-standard: 1.5px solid var(--color-navy)
```

### New component primitives needed
1. `SectionFrame` — `border: 1.5px navy, shadow 5px hard, bg paper, relative` + `FrameTab` child
2. `FrameTab` — `absolute top:-16px left:22px, dark navy bg, cream text, JetBrains Mono 800 uppercase`
3. `MicroBadge` (Hero eyebrow) — teal bg, cream text, no radius, Space Grotesk/JetBrains 800
4. `BrandPill` (TopNav) — teal bg, cream text, no radius (same style as MicroBadge)
5. `CTAButton` — LINE green + 1.5px navy border + 3px hard shadow + MessageCircle icon + hover lift
6. Body bg pattern — CSS `background-image` with 42×42px grid + radial gradients

---

## Open Questions for Architect

1. **Font size matching:** S1 uses `clamp(40px, 6.4vw, 84px)` for h1. V2 uses Kanit 800. What Tailwind size classes to use? Suggest: `text-5xl sm:text-6xl lg:text-7xl` (48/60/72px) + `-tracking-[0.035em]`

2. **frame-tab vs eyebrow:** S1 uses `.frame-tab` (dark navy absolute-positioned pill overlapping top border). This is a different pattern from V2 round 1's `<Eyebrow>` (inline text above heading). Which to implement — exact S1 pattern (requires `relative` parent and CSS absolute positioning) or simplified eyebrow above the section heading?

3. **Footer:** S1 has no footer. V2 round 1 had a footer. Include footer in rebuild or omit to match S1 exactly?

4. **Palette completely swapped:** V2 round 1 used coral/charcoal/cream. V2 round 2 will use navy/teal/amber. All section copy in `spec.md` refers to the content only (not colors) so this is purely visual. Confirm: full palette swap from coral to teal/navy/amber?

5. **VSL card rebuild:** S1's VSL card is a dark navy box with static script text (placeholder copy). V2 spec.md mentions VSL video player. For V2 round 2, implement as S1 dark navy card with script text (no video player logic for now), or keep next/image hero visual?

6. **StickyCTA behavior:** S1 has always-visible sticky CTA (no IntersectionObserver). V2 round 1 had show-after-relevance logic. Keep V2's smart show/hide or simplify to S1's always-visible?

7. **TopNav scroll-spy:** S1 has none. V2 round 1 had scroll-spy. Keep or drop scroll-spy in rebuild?

8. **Testimonials:** S1 testimonials are dark navy cards. spec.md has placeholder testimonials. Keep dark navy card style from S1?
