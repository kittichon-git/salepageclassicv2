# CLAUDE.md — salepageclassicv2

## Project Overview
Landing page ขาย e-book **"แค่เปลี่ยนคำ ก็ทำเงิน"** (book_id=1, 890฿)
ดำเนินการโดย **กิตติชน สนิทเชื้อ** (บุคคลธรรมดา, ไม่จด VAT)

- **Repo**: D:\salepageclassicv2 → github.com/kittichon-git/salepageclassicv2
- **Deploy**: salepageclassicv2.vercel.app (จะกลายเป็น phachara.com หลัง domain swap)
- **Funnel**: TikTok/FB → Landing → LINE OA (@049vlbwy) → Stripe Checkout

## Tech Stack
- Next.js **16.2.6** (App Router, RSC default)
- React 19
- TypeScript strict
- Tailwind v4 (`@theme` ใน globals.css + `@plugin "@tailwindcss/typography"`)
- Framer Motion (landing page sections)
- Lucide React (icons)
- Fonts: Kanit + Bai Jamjuree + JetBrains Mono (next/font/google)

## Project Rules (กฎเหล็ก ห้ามละเมิด)
- ❌ ห้ามใช้ `any` / `@ts-ignore` / `@ts-nocheck` เด็ดขาด
- ❌ ห้าม `'use client'` ในหน้า `/legal/*` และ `/contact` (ต้องเป็น Server Component)
- ❌ ห้าม hardcode ข้อความใน component (landing page) — ดึงจาก `lib/data.ts` เสมอ
- ❌ ห้ามใช้ `<img>` — ใช้ `next/image` เสมอ
- ✅ ใช้ `import type` สำหรับ type-only imports
- ✅ ทุก `<Link>` ต้องมี type-safe href
- ✅ Server components by default · `'use client'` เฉพาะที่มี state/effect
- ✅ ภาษาเนื้อหา: ไทย — Claude **ห้ามแก้คำ/เรียงประโยคใหม่** ในเนื้อหา legal หรือ copy

## Current Task: Legal & Contact Pages (Phase 1-6)
สร้าง 5 หน้า static server components:
- `/legal/privacy` — นโยบายความเป็นส่วนตัว (PDPA)
- `/legal/terms` — ข้อกำหนดการใช้งาน
- `/legal/refund` — นโยบายคืนเงิน (7 วัน, ≤3 บท)
- `/legal/cookie` — นโยบายคุกกี้
- `/contact` — ติดต่อเรา (LINE OA + email)

ทั้งหมดใช้ `components/legal/LegalLayout.tsx` shared component

## Folder Structure
```
app/
├── layout.tsx, page.tsx, globals.css  (เดิม)
├── sitemap.ts, robots.ts, manifest.ts (เดิม)
├── legal/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── refund/page.tsx
│   └── cookie/page.tsx
└── contact/page.tsx

components/
├── sections/   (13 ไฟล์ — landing page เดิม)
├── seo/        (1 ไฟล์)
├── ui/         (5 ไฟล์)
└── legal/      ← เพิ่มใหม่
    └── LegalLayout.tsx
```

## Quality Gates
- `npx tsc --noEmit` → 0 errors
- `npm run lint` → 0 errors, 0 warnings
- `npm run build` → success
- Lighthouse mobile: Performance ≥ 90, A11y ≥ 95, SEO ≥ 95

## Business Facts (ห้ามแก้)
- ผู้ให้บริการ: กิตติชน สนิทเชื้อ (บุคคลธรรมดา)
- ที่อยู่: 999/58 หมู่ 9 pshome2 ต.บ้านเป้ด อ.เมือง จ.ขอนแก่น 40000
- LINE OA: @049vlbwy (https://lin.ee/oMmZLf7Z)
- Email: phachara.elearning@gmail.com
- เวลาทำการ: จ-ศ 09:00-18:00 ICT
- Payment: Stripe TH (acct_1AznvcAYSr451BBL)
- ราคา: 890฿ (anchor 2,490฿) · ไม่จด VAT
- Refund: 100% ภายใน 7 วัน ถ้าเปิดอ่าน ≤3 บท (จาก 24 บท)
- Free preview: 2 บท

## Future Reference
รายละเอียดเต็มของ landing page build (sections, design tokens, content) อยู่ใน Notion:
- Sales Page Spec V.2 (parent spec)
- Three-Source Rule (D:\notion-sale-page + D:\salepageclassic + Spec V.2)

ดึงมาจาก Notion เมื่อต้องการเริ่ม phase landing page redesign (อนาคต)

## Out of Scope (เฟสนี้)
- Landing page sections (ทำไปแล้วเฟสก่อน)
- Payment integration (Stripe checkout — เฟสถัดไป)
- LINE LIFF integration (อยู่ในแอปแยก phachara-app)
- Multi-language (ไทยเท่านั้น)
