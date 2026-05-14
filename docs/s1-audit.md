# S1 Detail Audit — D:\notion-sale-page

## Color Palette (S1 originals — ไม่ใช้ใน v2)

| Token | Hex | Usage |
|---|---|---|
| `--navy` | #233149 | borders, text, frames, shadows |
| `--teal` | #2f8588 | brand-mark, badge bg, icons, trust elements |
| `--amber` | #ddb049 | step labels, pricing highlights, proof accents |
| `--cream` | #fbf5e8 | card backgrounds |
| `--paper` | #fffdf7 | near-white surface, highest contrast |
| `--line` | #00b900 | LINE CTA button |

## Typography Scale

| Element | Size | Line-height | Weight | Font |
|---|---|---|---|---|
| H1 | clamp(40px, 6.4vw, 84px) | 0.98 | 800 | IBM Plex Sans Thai |
| H2 (section) | clamp(30px, 4vw, 54px) | 1.05 | 800 | IBM Plex Sans Thai |
| H3 (card) | 22px | inherit | 800 | IBM Plex Sans Thai |
| Body | 16px (base) | 1.55–1.7 | 400–700 | IBM Plex Sans Thai |
| Badge/frame-tab | 12px | inherit | 800 | Space Grotesk (uppercase) |
| Nav links | 13px | inherit | 800 | Space Grotesk (uppercase) |
| Trust strip | 14px | inherit | 800 | IBM Plex Sans Thai |
| Hero subtitle | clamp(17px, 2vw, 22px) | 1.55 | 600 | IBM Plex Sans Thai |
| Price strong | clamp(52px, 8vw, 82px) | 0.9 | 800 | IBM Plex Sans Thai |

## Border & Shadow Patterns

| Usage | Border | Shadow |
|---|---|---|
| Section frames, Hero | 1.5px solid navy | 5px 5px 0 rgba(35,49,73,.62) |
| Cards (pain, step, curriculum) | 1.5px solid rgba(35,49,73,.92) | 3px 3px 0 rgba(35,49,73,.48) |
| TopNav | 1.5px solid navy | 4px 4px 0 rgba(35,49,73,.72) |
| FAQ details | 1.5px solid navy | 2px 2px 0 rgba(35,49,73,.5) |
| Sticky CTA | 1.5px solid navy | 4px 4px 0 rgba(35,49,73,.58) |
| Hero CTA button | 1.5px solid navy | 3px 3px 0 rgba(35,49,73,.74) |

## Border Radius
- Global: `--radius: 0.38rem` (nearly square — brutalist aesthetic)
- No rounded-lg/xl used in main sections

## Breakpoints

| Name | Max-width | Changes |
|---|---|---|
| Tablet | 1000px | Hero/Mechanism/Outcome/Offer → 1fr; Pain → 2-col; Steps → 1fr |
| Mobile | 720px | site-shell padding 12px; TopNav static; Hero padding reduced; Pain/Fit → 1fr; Instructor → 1fr; Sticky CTA span hidden |

## Section Layout Table

| Section | Class | Grid template | Gap | Padding | BG | Notable |
|---|---|---|---|---|---|---|
| TopNav | `.top-rail` | flex space-between | 16px | 10px 12px | rgba(255,253,247,.96) | sticky top:12px, z:20, backdrop — no hamburger in S1 (mobile: static, nav flex-end) |
| Hero | `.hero-grid` | .93fr 1.07fr | 24px | 36px | rgba(255,253,247,.94) | overflow:hidden, grid overlay ::before, max-w:1180px |
| Pain Points | `.pain-grid` | repeat(4,1fr) → 2fr → 1fr | 18px | section-inner 38px 28px 30px | rgba(255,253,247,.94) | frame-tab absolute -top-4 left-22px |
| Mechanism | `.mechanism-layout` | 1.1fr .9fr → 1fr | 18px | " | " | steps = repeat(3,1fr), framework-card has image |
| Outcome+Proof | `.outcome-grid` | .9fr 1.1fr → 1fr | 18px | " | " | outcome-list + testimonial-stack dark bg |
| Fit Filter | `.fit-grid` | 1fr 1fr → 1fr | 18px | " | " | is-fit bg #ecf8f3, is-not-fit bg #fff3ec |
| Curriculum | `.curriculum-grid` | repeat(7, minmax(210px,1fr)) | 14px | " | " | ⚠️ overflow-x:auto, scroll-snap-type:x mandatory |
| Instructor | `.instructor-card` | 160px 1fr → 1fr | 22px | 20px | rgba(255,253,247,.98) | portrait 150px square |
| Offer | `.offer-layout` | .95fr 1.05fr → 1fr | 18px | section-inner | rgba(255,253,247,.94) | offer-visual + price-card |
| FAQ | `.faq-section` | vertical stack | — | section-inner | " | guarantee-card + details accordion |
| Final CTA | `.final-cta` | center stack | — | 48px 24px | #253751 (dark navy) | text-align center, cream text |
| Sticky CTA | `.sticky-cta` | flex space-between | 12px | 10px | rgba(255,253,247,.96) | fixed bottom:16px, max-w:760px, z:50 |

## Notable Complex Elements

- **Curriculum horizontal scroll**: `overflow-x: auto`, `scroll-snap-type: x mandatory`, cards `scroll-snap-align: start`, `min-height: 180px` — ⚠️ complex on mobile
- **Grid overlay**: `::before` pseudo on hero/sections — 18px grid, mask-image fade 80%
- **Frame tabs**: `position: absolute; top: -16px; left: 22px` on section wrapper
- **S1 TopNav**: NO hamburger menu — mobile just makes nav static + links flex-end. v2 will add hamburger per order spec.
