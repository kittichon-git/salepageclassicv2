# S2 Tech Audit — D:\salepageclassic

> **Audit date:** 2026-05-14
> **Purpose:** Verify exact versions + patterns to copy into V2 rebuild
> **Rule:** V2 takes ALL tech stack, fonts, animation patterns from S2

---

## §1 Stack Versions (from package.json)

### Dependencies
| Package | Version |
|---------|---------|
| `next` | `16.2.6` |
| `react` | `19.2.4` |
| `react-dom` | `19.2.4` |
| `framer-motion` | `^12.38.0` |
| `lucide-react` | `^1.14.0` |
| `clsx` | `^2.1.1` |

### DevDependencies
| Package | Version |
|---------|---------|
| `tailwindcss` | `^4` |
| `@tailwindcss/postcss` | `^4` |
| `typescript` | `^5` |
| `@types/node` | `^20` |
| `@types/react` | `^19` |
| `@types/react-dom` | `^19` |
| `eslint` | `^9` |
| `eslint-config-next` | `16.2.6` |

**Note:** No `tailwind-merge` — uses `clsx` only. No `class-variance-authority`.

---

## §2 Font Setup Pattern

### Import location
`app/layout.tsx` — `next/font/google`

### Font config (exact)
```typescript
import { Kanit, Bai_Jamjuree, JetBrains_Mono } from "next/font/google"

const kanit = Kanit({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-kanit",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-bai-jamjuree",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700", "800"],
})
```

### Applied on `<html>`
```tsx
<html lang="th"
  className={`${kanit.variable} ${baiJamjuree.variable} ${jetbrainsMono.variable}`}>
```

### CSS variables
```css
--font-heading: var(--font-kanit), system-ui, sans-serif;
--font-body: var(--font-bai-jamjuree), system-ui, sans-serif;
--font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
```

---

## §3 Tailwind v4 Setup

### @import
```css
@import "tailwindcss";
```

### @theme block
```css
@theme {
  /* tokens declared as CSS custom properties */
  --color-bg-deep: #f0ebdf;
  /* ... etc */
}
```

> **Note:** S2 uses `@theme` (not `@theme inline`). In Tailwind v4, `@theme` exports tokens as Tailwind utilities AND CSS variables. `@theme inline` only declares CSS variables without generating utilities. Either works for V2 rebuild.

### postcss.config.mjs
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

### Tailwind class usage pattern
- All Tailwind utility classes reference CSS variables via `var()`:
  ```
  bg-[var(--color-bg-deep)]
  text-[var(--color-text-primary)]
  border-[var(--color-border-default)]
  ```
- No hardcoded hex in Tailwind classes
- Arbitrary values used for tokens not in @theme

---

## §4 Animation Pattern (ScrollReveal — port to V2)

### File: `components/shared/ScrollReveal.tsx`
```typescript
"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
  duration?: number
}

const viewport = { once: true, margin: "-80px" }

export function ScrollReveal({ children, delay = 0, duration = 0.5 }: Props) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
    >
      {children}
    </motion.div>
  )
}
```

### Key parameters
| Param | Value |
|-------|-------|
| initial | `opacity: 0, y: 24` |
| whileInView | `opacity: 1, y: 0` |
| viewport.once | `true` |
| viewport.margin | `"-80px"` (triggers before element is fully visible) |
| duration | `0.5s` (default) |
| ease | `[0.21, 0.47, 0.32, 0.98]` (cubic-bezier) |
| delay | `0` (default, caller passes `i * 0.06` for stagger) |
| a11y | `useReducedMotion()` — skips animation if user prefers |

### Usage stagger pattern
```typescript
{items.map((item, i) => (
  <ScrollReveal key={i} delay={i * 0.06}>
    ...
  </ScrollReveal>
))}
```

---

## §5 Project Structure

```
D:\salepageclassic
├── app/
│   ├── globals.css          ← @theme tokens + base styles
│   ├── layout.tsx           ← font config + metadata + PageFrame + TopNav + StickyCTA
│   ├── page.tsx             ← section imports
│   ├── opengraph-image.tsx  ← edge runtime OG image
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/
│   │   ├── S1Hero.tsx
│   │   ├── S2Relevance.tsx
│   │   ├── S3Mechanism.tsx
│   │   ├── S4Outcome.tsx
│   │   ├── S5TrustFilter.tsx
│   │   ├── S6WhatsInside.tsx
│   │   ├── S7Instructor.tsx
│   │   ├── S8OfferStack.tsx
│   │   ├── S9FAQ.tsx
│   │   ├── S9Guarantee.tsx
│   │   └── S10FinalCTA.tsx
│   ├── shared/
│   │   ├── PageFrame.tsx    ← max-w container shell
│   │   ├── ScrollReveal.tsx ← framer-motion wrapper
│   │   ├── StickyCTA.tsx    ← fixed bottom bar
│   │   └── TopNav.tsx       ← sticky nav with scroll-spy
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── SectionEyebrow.tsx
└── lib/
    └── data.ts              ← all copy/content as const
```

### Key architectural patterns
- **App Router** (Next.js 16 App Router)
- **Sections** named `S1Hero`, `S2Relevance`… matching R-MOTRA order
- **shared/** for layout primitives (PageFrame, TopNav, StickyCTA, ScrollReveal)
- **ui/** for design primitives (Button, Card, Badge, Container, SectionEyebrow)
- **lib/data.ts** — single source of truth for all copy (as const objects)
- **"use client"** only on interactive components (ScrollReveal, StickyCTA, TopNav)
- No `src/` prefix — files live at project root level under `app/`, `components/`, `lib/`

### TypeScript config note
S2 uses `"strict": false` — V2 rebuild can use strict mode if preferred (no conflict with S2 code patterns).
