export const meta = {
  brand: "phachara.com",
  productName: "แค่เปลี่ยนคำ ก็ทำเงิน",
} as const;

export const cta = {
  primaryLabel: "เริ่มอ่านฟรี 2 บทแรก",
  buyLabel: "จ่าย 990฿ ผ่าน LINE",
  inlinePreviewLabel: "อ่านบทนำ + บท 1 ฟรีใน LINE",
  finalLabel: "อ่านฟรี 2 บทแรกผ่าน LINE",
  // TODO: confirm LINE OA id
  lineUrl: "https://line.me/R/ti/p/@phachara",
} as const;

export const topNav = {
  brand: "phachara.com",
  links: [
    { label: "หลักสูตร", href: "#curriculum" },
    { label: "ผู้สอน", href: "#instructor" },
    { label: "ราคา", href: "#offer" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export const hero = {
  headline: "เขียน 1 ประโยค ขายของได้มากกว่าเขียน 100 ประโยค",
  sub: 'สูตรเปลี่ยน "คำ" 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น — ไม่ต้องเป็นนักเขียน แค่กรอกคำตามสูตร',
  vslScript: [
    "Hook 3 วิ: คนสองคนขายเซรั่มตัวเดียวกัน คนแรกเขียน 500 คำ ยอดเป็นศูนย์ คนที่สองเขียน 3 บรรทัด ขายร้อยออเดอร์ต่อวัน — ต่างกันที่ตรงไหน?",
    "Promise — สูตรเปลี่ยนคำที่ทำให้คนหยุดเลื่อน + กดสั่ง",
    "Proof — โชว์ผลลัพธ์ลูกค้า 2–3 ราย",
    "CTA — กดดูตัวอย่าง 2 บทแรกฟรีใน LINE",
  ],
  trustStrip: ["ผู้อ่าน 1,200+", "4.8/5", "เนื้อหาตลาดไทยล้วน"],
  heroImage: "/images/sale-page-hero-command-board-gYg7zAuwi3cRr8Naw3hBWk.webp",
  frameworkImage: "/images/r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp",
} as const;

export const relevance = {
  title: "หน้านี้สำหรับคุณ ถ้า...",
  bullets: [
    "โพสต์ขายของแล้วคนเลื่อนผ่าน ไม่มีใครหยุดอ่าน",
    "มีของดีจริง แต่ขายไม่ออกเหมือนคู่แข่ง",
    "เคยซื้อคอร์ส copywriting ฝรั่ง — ใช้กับลูกค้าไทยไม่ได้",
    'เขียนได้ แต่ไม่รู้ว่าคำไหน "ปิดการขาย" คำไหน "แค่ฟังดูสวย"',
  ],
} as const;

export const mechanism = {
  title: "สูตรนี้ทำงานยังไง — 3 ขั้น",
  tagline: "เปลี่ยนคำในจุดที่ถูก = เปลี่ยนผลลัพธ์ทั้งโพสต์",
  image: "/images/r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp",
  steps: [
    { num: "1", title: "หยุดสมอง", body: "Hook 12 ตระกูล (ภาค 3) ทำให้คนหยุดเลื่อนใน 1.3 วินาที" },
    { num: "2", title: "สร้างความเชื่อ", body: "โครง 4 ส่วน (ภาค 4) พาคนจากสงสัย → เชื่อ → อยากได้" },
    { num: "3", title: "ปิดด้วยคำ", body: '12 ประโยคปิด (ภาค 6) ที่ไม่ต้องพูดว่า "ซื้อเลย"' },
  ],
} as const;

export const outcome = {
  title: "สิ่งที่คุณจะทำได้หลังอ่านจบ",
  bullets: [
    "เขียน Hook ที่หยุดคนได้ใน 3 วินาทีแรก — 50+ สูตรพร้อมใช้",
    "เขียน Sales Page ที่ปิดยอดได้จริง — 15 เทมเพลตกรอกคำ",
    "ใช้ AI ช่วยเขียนแทนการนั่งคิดเอง — Prompt Library 30 ชุด",
    "รู้ว่าคำไหนทำให้คนกล้าจ่ายแพง — ตาราง 200+ คำต้องห้าม vs คำควรใช้",
  ],
  // TODO: collect real testimonials before launch (placeholder ตาม spec)
  testimonials: [
    { quote: "ปรับ Hook ตามสูตรภาค 3 — engagement โพสต์เพิ่ม 4 เท่าใน 7 วัน", author: "คุณ A, ร้านเสื้อผ้า IG" },
    { quote: "เปลี่ยนคำ CTA บน Landing — conversion จาก 1.2% → 3.8%", author: "คุณ B, คอร์สออนไลน์" },
    { quote: "ทำตามภาค 6 — ลูกค้าทักไลน์เพิ่มจาก 5 → 23 คน/วัน", author: "คุณ C, ร้านเครื่องสำอาง" },
  ],
} as const;

export const fit = {
  fitTitle: "เหมาะกับคุณ ถ้า",
  fitBullets: [
    "ขายของออนไลน์อยู่แล้ว แต่ยอดไม่ขึ้น",
    "พร้อมลงมือเขียน-แก้-ลองจริง",
    "ขายในตลาดไทย (FB, IG, TikTok, LINE)",
    "อยากมีสูตร + เทมเพลตพร้อมใช้",
  ],
  notTitle: "ไม่เหมาะ ถ้า",
  notBullets: [
    "ยังไม่มีสินค้า/บริการของตัวเอง",
    "คาดหวังว่าอ่านจบแล้วเงินไหลเข้าเอง",
    "ขายในตลาดต่างประเทศ B2B SaaS",
    "อยากเรียนทฤษฎี copywriting เชิงวิชาการ",
  ],
} as const;

export const curriculum = {
  title: "ข้างในมีอะไร — 7 ภาค 24 บท",
  chapters: [
    { id: 1, title: "ภาค 1 · จิตวิทยาผู้ซื้อ", summary: '"ปม" ไหนทำให้คนกดซื้อ' },
    { id: 2, title: "ภาค 2 · วัดผลคำ", summary: "ตรวจคำด้วยตัวเลข ไม่เดา ผ่าน 5 metric หลัก" },
    { id: 3, title: "ภาค 3 · Hook 12 ตระกูล", summary: "50+ สูตรพร้อมกรอก + เทคนิคผสม Hook" },
    { id: 4, title: "ภาค 4 · โครงสร้างเต็มฟอร์แมต", summary: "โพสต์ / สคริปต์คลิป / Landing Page" },
    { id: 5, title: "ภาค 5 · คำที่ทรงพลัง", summary: 'Call-out words ที่ทำให้คนรู้สึก "พูดถึงฉัน"' },
    { id: 6, title: "ภาค 6 · ปิดการขาย", summary: '12 ประโยคปิด ไม่ต้องพูดว่า "ซื้อเลย"' },
    { id: 7, title: "ภาค 7 · AI ผู้ช่วย", summary: "Prompt 5 ขั้น + Workflow ครบลูป" },
  ],
  bonus: [
    "100+ Template ครบทุกฟอร์แมต (กรอกคำได้ทันที)",
    "50+ Hook Formulas พร้อมตัวอย่างไทย",
    "Prompt Library 30 ชุด",
    "ตาราง 200+ คำต้องห้าม vs คำควรใช้",
    "แผนลงมือทำ 30 วัน",
  ],
} as const;

export const instructor = {
  name: "Kittichon",
  // TODO: portrait image — ใช้รูปจริงของ instructor
  portrait: "/images/instructor.jpg",
  story: [
    "ผม Kittichon — ขายของออนไลน์มา X ปี เคยเขียนโพสต์สวยจนคนชม แต่ไม่มีคนซื้อ",
    'วันที่เลิกเขียนเพื่อให้คน "ชม" แล้วเริ่มเขียนเพื่อให้คน "ทำตาม" — ทุกอย่างเปลี่ยน',
    "หนังสือเล่มนี้คือสิ่งที่ผมอยากให้ตัวเอง 5 ปีก่อนได้อ่าน",
  ],
  // TODO: 3 specific credentials (ตัวเลขจริง ไม่ใช่ "expert with X years")
  credentials: [
    "TODO: credential #1 (ตัวเลข)",
    "TODO: credential #2 (ตัวเลข)",
    "TODO: credential #3 (ตัวเลข)",
  ],
} as const;

export const offer = {
  title: "สิ่งที่ได้ทั้งหมด",
  items: [
    { label: "หนังสือ 7 ภาค 24 บท (เนื้อหาหลัก)", value: 1500 },
    { label: "100+ Template กรอกคำ", value: 990 },
    { label: "50+ Hook Formulas", value: 590 },
    { label: "Prompt Library 30 ชุด", value: 790 },
    { label: "แผนลงมือทำ 30 วัน", value: 390 },
  ],
  offerImage: "/images/offer-stack-value-cards-cpikbfLJ269Kz4vfj84DHL.webp",
  totalValue: 4260,
  anchorPrice: 1990,
  price: 990,
  priceNote: "ครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่",
} as const;

export const faq = {
  guaranteeTitle: "รับประกัน 7 วัน คืนเงิน 100%",
  guaranteeBody:
    "ถ้าอ่าน 3 บทแรกแล้วไม่ตรงกับที่คุณต้องการ ทักไลน์ คืนเงินทันที ไม่ถาม",
  items: [
    { q: "ไม่เคยเขียน copy เลย ใช้ได้ไหม?", a: "ใช้ได้ เพราะทุกบทมีเทมเพลตให้กรอก แค่เปลี่ยนคำในช่องว่างให้ตรงกับสินค้าของคุณ" },
    { q: "เนื้อหาเป็นภาษาไทยทั้งหมดใช่ไหม?", a: "ใช่ ตัวอย่างเป็นแบรนด์ไทย ตลาดไทยล้วน ไม่ใช่ทฤษฎีฝรั่งแปล" },
    { q: "อ่านบนมือถือได้ไหม?", a: "ได้ เข้าผ่าน LINE ได้ทันที ไม่ต้องโหลดแอปเพิ่ม" },
    { q: "เปลี่ยนเครื่องอ่านได้ไหม?", a: "ได้ ผูกกับ LINE account ของคุณ" },
    { q: "มี community / กลุ่มถามตอบไหม?", a: "ทักไลน์ OA ได้ ตอบภายใน 24 ชั่วโมง" },
    { q: "ถ้าเจอข้อสงสัย ถามได้ที่ไหน?", a: "ทักไลน์ OA ได้เลย ตอบภายใน 24 ชั่วโมง" },
  ],
} as const;

export const finalCta = {
  headline: "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค",
  sub: "เริ่มจาก 2 บทแรกฟรี — ไม่ต้องจ่ายอะไรเพื่อตัดสินใจ",
} as const;

export const stickyCta = {
  label: "เริ่มอ่านฟรี →",
  showAfterSelector: "#relevance",
  hideOnSelectors: ["#hero", "#final-cta"],
} as const;

export const footer = {
  brand: "phachara.com",
  copy: "© 2026 phachara.com — All rights reserved.",
  // TODO: privacy / terms / contact pages
  links: [] as { label: string; href: string }[],
} as const;
