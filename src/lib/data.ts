export const meta = {
  brand: "phachara.com",
  productName: "แค่เปลี่ยนคำ ก็ทำเงิน",
  productTagline: "สูตรเปลี่ยน 'คำ' 7 ภาค 24 บท",
  readers: "1,200+",
  rating: "4.8/5",
} as const;

export const cta = {
  lineUrl: "https://line.me/ti/p/@phachara", // TODO: confirm OA id
  primaryLabel: "เริ่มอ่านฟรี",
  finalLabel: "อ่านฟรี 2 บทแรกผ่าน LINE",
  vslLabel: "ดู VSL 60 วินาที",
  buyLabel: "จ่าย 990฿ ผ่าน LINE",
  inlineLabel: "อ่านบทนำ + บท 1 ฟรีใน LINE",
  stickyLabel: "เริ่มอ่านฟรี",
} as const;

export const nav = {
  brand: "แค่เปลี่ยนคำ",
  links: [
    { id: "content", label: "เนื้อหา", href: "#inside" },
    { id: "price", label: "ราคา", href: "#offer" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ],
} as const;

export const hero = {
  eyebrow: "R-MOTRA SALE PAGE · MOBILE-FIRST",
  preHeadline: "สำหรับคนที่ต้องใช้ social media หารายได้",
  painHeadline: "โพสต์ของคุณ ไม่มีคนหยุดดู เลยไม่มีคนซื้อ ใช่ไหม?",
  headline: "เปลี่ยนคำให้คนหยุดดู\nเปลี่ยนคนดูให้เป็นคนซื้อ",
  headlineAmber: ["คำ", "คนซื้อ"],
  body: "คู่มือ Copywriting ฉบับ \u201cแค่เปลี่ยนคำ ก็ทำเงิน\u201d \u2014 7 ภาค 24 บท \u00b7 อ่านจบใน 1 ชั่วโมง \u00b7 ใช้ได้กับโพสต์เดิมที่คุณมีอยู่ ไม่ต้องเป็นนักเขียน",
  vsl: {
    label: "VSL 60 วินาที",
    script:
      "คนสองคนขายเซรั่มตัวเดียวกัน คนแรกเขียน 500 คำ ยอดเป็นศูนย์ คนที่สองเขียน 3 บรรทัด ขายร้อยออเดอร์ต่อวัน — ต่างกันที่ตรงไหน?",
  },
  trustStrip: ["ผู้อ่าน 1,200+", "4.8/5", "เนื้อหาตลาดไทยล้วน"],
} as const;

export const relevance = {
  heading: "หน้านี้สำหรับคุณ ถ้า...",
  pains: [
    {
      icon: "scroll",
      text: "โพสต์ขายของแล้วคนเลื่อนผ่าน ไม่มีใครหยุดอ่าน",
    },
    {
      icon: "package",
      text: "มีของดีจริง แต่ขายไม่ออกเหมือนคู่แข่ง",
    },
    {
      icon: "globe",
      text: "เคยซื้อคอร์ส copywriting ฝรั่ง — ใช้กับลูกค้าไทยไม่ได้",
    },
    {
      icon: "pencil",
      text: "เขียนได้ แต่ไม่รู้ว่าคำไหน \u201cปิดการขาย\u201d คำไหน \u201cแค่ฟังดูสวย\u201d",
    },
  ],
} as const;

export const mechanism = {
  heading: "สูตรนี้ทำงานยังไง — 3 ขั้น",
  tagline: "เปลี่ยนคำในจุดที่ถูก = เปลี่ยนผลลัพธ์ทั้งโพสต์",
  steps: [
    {
      number: "1",
      title: "หยุดสมอง",
      body: "Hook 12 ตระกูล (ภาค 3) ทำให้คนหยุดเลื่อนใน 1.3 วินาที",
    },
    {
      number: "2",
      title: "สร้างความเชื่อ",
      body: "โครง 4 ส่วน (ภาค 4) พาคนจากสงสัย → เชื่อ → อยากได้",
    },
    {
      number: "3",
      title: "ปิดด้วยคำ",
      body: "12 ประโยคปิด (ภาค 6) ที่ไม่ต้องพูดว่า \u201cซื้อเลย\u201d",
    },
  ],
} as const;

export const outcome = {
  heading: "สิ่งที่คุณจะทำได้หลังอ่านจบ",
  outcomes: [
    "เขียน Hook ที่หยุดคนได้ใน 3 วินาทีแรก — 50+ สูตรพร้อมใช้",
    "เขียน Sales Page ที่ปิดยอดได้จริง — 15 เทมเพลตกรอกคำ",
    "ใช้ AI ช่วยเขียนแทนการนั่งคิดเอง — Prompt Library 30 ชุด",
    "รู้ว่าคำไหนทำให้คนกล้าจ่ายแพง — ตาราง 200+ คำต้องห้าม vs คำควรใช้",
  ],
  testimonials: [
    {
      quote:
        "ปรับ Hook ตามสูตรภาค 3 — engagement โพสต์เพิ่ม 4 เท่าใน 7 วัน",
      author: "คุณ A",
      role: "ร้านเสื้อผ้า IG",
    },
    {
      quote: "เปลี่ยนคำ CTA บน Landing — conversion จาก 1.2% → 3.8%",
      author: "คุณ B",
      role: "คอร์สออนไลน์",
    },
    {
      quote: "ทำตามภาค 6 — ลูกค้าทักไลน์เพิ่มจาก 5 → 23 คน/วัน",
      author: "คุณ C",
      role: "ร้านเครื่องสำอาง",
    },
  ],
  disclaimer: "testimonial ปัจจุบันเป็น placeholder — ต้อง collect จริงก่อน launch",
} as const;

export const fit = {
  heading: "เหมาะกับใคร และไม่เหมาะกับใคร",
  positive: {
    heading: "เหมาะกับคุณ ถ้า",
    items: [
      "ขายของออนไลน์อยู่แล้ว แต่ยอดไม่ขึ้น",
      "พร้อมลงมือเขียน-แก้-ลองจริง",
      "ขายในตลาดไทย (FB, IG, TikTok, LINE)",
      "อยากมีสูตร + เทมเพลตพร้อมใช้",
    ],
  },
  negative: {
    heading: "ไม่เหมาะ ถ้า",
    items: [
      "ยังไม่มีสินค้า/บริการของตัวเอง",
      "คาดหวังว่าอ่านจบแล้วเงินไหลเข้าเอง",
      "ขายในตลาดต่างประเทศ B2B SaaS",
      "อยากเรียนทฤษฎี copywriting เชิงวิชาการ",
    ],
  },
} as const;

export const curriculum = {
  heading: "ข้างในมีอะไร — 7 ภาค 24 บท",
  chapters: [
    {
      number: "1",
      title: "จิตวิทยาผู้ซื้อ",
      body: "เข้าใจว่า \u201cปม\u201d ไหนทำให้คนกดซื้อ",
    },
    {
      number: "2",
      title: "วัดผลคำ",
      body: "ตรวจคำด้วยตัวเลข ไม่เดา (5 metric)",
    },
    {
      number: "3",
      title: "Hook 12 ตระกูล",
      body: "50+ สูตรพร้อมกรอก",
    },
    {
      number: "4",
      title: "โครงสร้างเต็มฟอร์แมต",
      body: "โพสต์ / สคริปต์คลิป / Landing Page",
    },
    {
      number: "5",
      title: "คำที่ทรงพลัง",
      body: "Call-out words",
    },
    {
      number: "6",
      title: "ปิดการขาย",
      body: "12 ประโยคปิดท้ายไม่ต้องพูดว่า \u201cซื้อเลย\u201d",
    },
    {
      number: "7",
      title: "AI ผู้ช่วย",
      body: "Prompt 5 ขั้น + Workflow ครบลูป",
    },
  ],
  bonus: {
    heading: "ภาคผนวก (รวมในเล่ม)",
    items: [
      "100+ Template ครบทุกฟอร์แมต",
      "50+ Hook Formulas พร้อมตัวอย่างไทย",
      "Prompt Library 30 ชุด",
      "ตาราง 200+ คำต้องห้าม vs คำควรใช้",
      "แผนลงมือทำ 30 วัน",
    ],
  },
  inlineCta: "อ่านบทนำ + บท 1 ฟรีใน LINE",
} as const;

export const instructor = {
  heading: "จากคนที่เคยเขียนสวย แต่ไม่มีคนซื้อ",
  name: "Kittichon",
  initial: "KC",
  story: [
    "ผม Kittichon — ขายของออนไลน์มา X ปี เคยเขียนโพสต์สวยจนคนชม แต่ไม่มีคนซื้อ",
    "วันที่เลิกเขียนเพื่อให้คน \u201cชม\u201d แล้วเริ่มเขียนเพื่อให้คน \u201cทำตาม\u201d — ทุกอย่างเปลี่ยน",
    "หนังสือเล่มนี้คือสิ่งที่ผมอยากให้ตัวเอง 5 ปีก่อนได้อ่าน",
  ],
  credentials: [
    "placeholder credential 1",
    "placeholder credential 2",
    "placeholder credential 3",
  ],
} as const;

export const offer = {
  heading: "ทั้งหมดนี้ในราคาเดียว",
  items: [
    { label: "หนังสือ 7 ภาค 24 บท", value: "1,500 ฿" },
    { label: "100+ Template กรอกคำ", value: "990 ฿" },
    { label: "50+ Hook Formulas", value: "590 ฿" },
    { label: "Prompt Library 30 ชุด", value: "790 ฿" },
    { label: "แผนลงมือทำ 30 วัน", value: "390 ฿" },
  ],
  totalValue: "4,260 ฿",
  priceAnchor: "1,990",
  priceToday: "990",
  priceSuffix: "฿",
  assurances: [
    "ครั้งเดียว",
    "ตลอดชีพ",
    "เปิดอ่านบน LINE",
  ],
} as const;

export const faq = {
  heading: "รับประกัน 7 วัน คืนเงิน 100%",
  guarantee:
    "อ่าน 3 บทแรกแล้วไม่ตรง ทักไลน์ คืนทันที ไม่ถาม",
  items: [
    {
      q: "ไม่เคยเขียน copy เลย ใช้ได้ไหม?",
      a: "ใช้ได้ ทุกบทมีเทมเพลตให้กรอก",
    },
    {
      q: "ภาษาไทยทั้งหมดใช่ไหม?",
      a: "ใช่ ตัวอย่างเป็นแบรนด์ไทย ตลาดไทยล้วน",
    },
    {
      q: "อ่านบนมือถือได้ไหม?",
      a: "ได้ ผ่าน LINE ไม่ต้องโหลดแอป",
    },
    {
      q: "เปลี่ยนเครื่องอ่านได้ไหม?",
      a: "ได้ ผูกกับ LINE account",
    },
    {
      q: "มี community ไหม?",
      a: "ทักไลน์ OA ได้ ตอบใน 24 ชม.",
    },
    {
      q: "ถ้ามีข้อสงสัย ถามได้ที่ไหน?",
      a: "ทักไลน์ OA ตอบใน 24 ชม.",
    },
  ],
} as const;

export const finalCta = {
  painHeadline: "โพสต์ของคุณ ไม่มีคนหยุดดู เลยไม่มีคนซื้อ ใช่ไหม?",
  heading: "เปลี่ยนคำให้คนหยุดดู\nเปลี่ยนคนดูให้เป็นคนซื้อ",
  headingAmber: ["คำ", "คนซื้อ"],
  body: "เริ่มจาก 2 บทแรกฟรี — ไม่ต้องจ่ายอะไรเพื่อตัดสินใจ",
  trustStrip: ["ผู้อ่าน 1,200+", "4.8/5", "เนื้อหาตลาดไทยล้วน"],
} as const;

export const footer = {
  brand: "phachara.com",
  links: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
    { label: "ข้อกำหนด", href: "/legal/terms" },
    { label: "คืนเงิน", href: "/legal/refund" },
    { label: "คุกกี้", href: "/legal/cookie" },
    { label: "ติดต่อ", href: "/contact" },
  ],
} as const;
