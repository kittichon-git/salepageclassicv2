import Link from "next/link"
import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal/LegalLayout"

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | phachara.com",
  description:
    "นโยบายคุ้มครองข้อมูลส่วนบุคคลตาม PDPA — กิตติชน สนิทเชื้อ (บุคคลธรรมดา)",
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="นโยบายความเป็นส่วนตัว"
      lastUpdated="16 พฤษภาคม 2569"
    >
      <p>
        phachara.com (&quot;เรา&quot;) ดำเนินการโดย{" "}
        <strong>กิตติชน สนิทเชื้อ</strong> ในรูปแบบ
        <strong>บุคคลธรรมดา</strong>{" "}
        เราให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
        นโยบายนี้อธิบายข้อมูลที่เราเก็บ วิธีใช้ และสิทธิของคุณตาม
        พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
      </p>

      <h2>1. ผู้ควบคุมข้อมูลส่วนบุคคล</h2>
      <p>
        <strong>กิตติชน สนิทเชื้อ</strong> (บุคคลธรรมดา)
        ที่อยู่: 999/58 หมู่ 9 pshome2 ต.บ้านเป้ด อ.เมือง จ.ขอนแก่น 40000
      </p>

      <h2>2. ข้อมูลที่เราเก็บรวบรวม</h2>
      <p>เราเก็บข้อมูลเท่าที่จำเป็นในการให้บริการบทเรียนผ่าน LINE OA เท่านั้น:</p>
      <ul>
        <li>
          <strong>LINE User ID</strong> — รหัสจาก LINE Platform
          ที่ใช้ระบุตัวคุณภายในระบบของเรา
        </li>
        <li>
          <strong>ชื่อที่แสดงใน LINE (Display Name)</strong> — สำหรับใช้ทักทายในข้อความ
        </li>
        <li>
          <strong>รูปโปรไฟล์ LINE (URL)</strong> — แสดงในหน้าผู้ใช้ของแอปเรียน
        </li>
        <li>
          <strong>ข้อมูลการเรียน</strong> — บทที่เปิดอ่าน เวลาที่ใช้ ความคืบหน้า
        </li>
        <li>
          <strong>ข้อมูลการชำระเงิน</strong> — ประวัติการซื้อ จำนวนเงิน วันเวลา
          (Stripe จัดเก็บข้อมูลบัตรเครดิตทั้งหมด เราไม่เห็นหมายเลขบัตรของคุณ)
        </li>
        <li>
          <strong>ข้อมูลเทคนิค</strong> — IP address, ประเภทอุปกรณ์, เบราว์เซอร์
          (เก็บผ่าน analytics เท่านั้น)
        </li>
      </ul>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
        <p className="font-bold text-red-900">❌ สิ่งที่เราไม่เก็บ</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-red-900">
          <li>อีเมล (เว้นกรณีคุณส่งคำขอคืนเงินมาเอง)</li>
          <li>เบอร์โทรศัพท์</li>
          <li>บัตรประชาชน / ที่อยู่จัดส่ง</li>
          <li>หมายเลขบัตรเครดิตเต็มหมายเลข (Stripe เก็บแบบ tokenized ทั้งหมด)</li>
        </ul>
      </aside>

      <h2>3. วัตถุประสงค์การใช้ข้อมูล</h2>
      <ol>
        <li>ระบุตัวตนผู้สมัครเรียนและเชื่อมต่อบัญชี LINE กับใบสั่งซื้อ</li>
        <li>ส่งมอบเนื้อหาบทเรียนและบันทึกความคืบหน้าการอ่าน</li>
        <li>ส่งใบเสร็จและข้อความยืนยันการชำระเงินผ่าน LINE</li>
        <li>ตอบคำถามและให้บริการสนับสนุนผ่าน LINE OA</li>
        <li>พิจารณาคำขอคืนเงินตามนโยบายการคืนเงิน</li>
        <li>วิเคราะห์การใช้งานเพื่อปรับปรุงบริการ (รูปแบบรวมไม่ระบุตัวตน)</li>
      </ol>

      <h2>4. ฐานทางกฎหมายในการประมวลผล (มาตรา 24 PDPA)</h2>
      <ul>
        <li>
          <strong>การปฏิบัติตามสัญญา</strong> — ส่งมอบบทเรียนที่คุณซื้อ
        </li>
        <li>
          <strong>ประโยชน์โดยชอบด้วยกฎหมาย</strong> — การให้บริการ support
          และการปรับปรุงคุณภาพ
        </li>
        <li>
          <strong>ความยินยอม</strong> — สำหรับ analytics และ marketing cookies
          (คุณเลือกได้ผ่าน cookie banner)
        </li>
        <li>
          <strong>พันธกรณีทางกฎหมาย</strong> —
          เก็บข้อมูลการเงินตามกฎหมายภาษีและบัญชี
        </li>
      </ul>

      <h2>5. การเปิดเผยข้อมูลแก่บุคคลที่สาม</h2>
      <p>
        เรา<strong>ไม่ขาย</strong>ข้อมูลส่วนบุคคลของคุณ
        เราเปิดเผยข้อมูลเฉพาะกับผู้ให้บริการที่จำเป็นเท่านั้น:
      </p>

      | ผู้ให้บริการ | วัตถุประสงค์ | ข้อมูลที่ส่ง |
      | --- | --- | --- |
      | <strong>Stripe Payments</strong> (สหรัฐอเมริกา/ไทย) | ประมวลผลการชำระเงิน | จำนวนเงิน, รหัสคำสั่งซื้อ, อีเมล (ถ้ามี) |
      | <strong>LINE Corporation</strong> (ญี่ปุ่น) | ส่งข้อความและยืนยันตัวตน | LINE User ID, ข้อความที่ส่ง |
      | <strong>Supabase</strong> (สิงคโปร์) | โฮสต์ฐานข้อมูล | ทุกข้อมูลในระบบ (เข้ารหัส at-rest) |
      | <strong>Vercel</strong> (สหรัฐอเมริกา) | โฮสต์เว็บไซต์ | request logs, IP address |
      | <strong>Google Analytics 4</strong> | วิเคราะห์การใช้งาน | pseudonymized event data (ขอ consent ก่อน) |
      | <strong>Meta</strong> (Facebook Pixel/CAPI) | วัดประสิทธิภาพโฆษณา | event data, hashed identifiers (ขอ consent ก่อน) |

      <p className="text-sm text-slate-600">
        ผู้ให้บริการเหล่านี้มีนโยบายคุ้มครองข้อมูลของตัวเอง
        และอยู่ภายใต้ข้อกำหนด Data Processing Agreement (DPA) กับเรา
      </p>

      <h2>6. ระยะเวลาเก็บรักษาข้อมูล</h2>
      <ul>
        <li><strong>ข้อมูลบัญชีและการเรียน</strong> — ตลอดระยะเวลาที่บัญชี active</li>
        <li><strong>ข้อมูลการชำระเงิน</strong> — 7 ปี ตามกฎหมายบัญชีไทย (พรบ. การบัญชี พ.ศ. 2543)</li>
        <li><strong>ข้อมูล analytics</strong> — สูงสุด 26 เดือน (GA4 default)</li>
        <li><strong>Audit log</strong> — 2 ปี เพื่อตรวจสอบความปลอดภัย</li>
        <li><strong>หลังร้องขอให้ลบ</strong> — soft-delete ภายใน 30 วัน · ข้อมูลทางการเงินยังต้องเก็บตามกฎหมายข้างต้น</li>
      </ul>

      <h2>7. สิทธิของคุณตาม PDPA</h2>
      <p>คุณมีสิทธิดังต่อไปนี้:</p>
      <ol>
        <li><strong>สิทธิเข้าถึง</strong> — ขอสำเนาข้อมูลของคุณ</li>
        <li><strong>สิทธิแก้ไข</strong> — ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
        <li><strong>สิทธิลบ (Right to Erasure)</strong> — ขอให้ลบข้อมูล (ยกเว้นที่ต้องเก็บตามกฎหมาย)</li>
        <li><strong>สิทธิคัดค้าน</strong> — คัดค้านการประมวลผลเพื่อ marketing</li>
        <li><strong>สิทธิถอนความยินยอม</strong> — ถอนได้ตลอดเวลา (unfollow LINE OA = สิ้นสุดการประมวลผลส่วนใหญ่)</li>
        <li><strong>สิทธิรับโอนข้อมูล (Portability)</strong> — ขอข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง</li>
      </ol>

      <p>
        <strong>วิธีใช้สิทธิ</strong>: ส่งคำขอผ่าน
        <Link href="/contact">หน้าติดต่อเรา</Link> —
        เราจะตอบกลับภายใน 30 วัน
      </p>

      <h2>8. ความปลอดภัยของข้อมูล</h2>
      <ul>
        <li>การเชื่อมต่อทั้งหมดใช้ SSL/TLS encryption</li>
        <li>ฐานข้อมูลเข้ารหัส at-rest (AES-256)</li>
        <li>Row Level Security (RLS) บน Supabase — admin access จำกัดเฉพาะ allowlist</li>
        <li>ไม่จัดเก็บหมายเลขบัตรเครดิต (Stripe tokenization)</li>
        <li>Audit log สำหรับทุก admin action</li>
      </ul>

      <h2>9. คุกกี้และเทคโนโลยีติดตาม</h2>
      <p>
        ดูรายละเอียดเต็มที่{" "}
        <Link href="/legal/cookie">นโยบายคุกกี้</Link>
      </p>
      <p>
        สรุป: เราใช้คุกกี้ 3 ประเภท — Essential (จำเป็น, ไม่ขอ consent),
        Analytics (GA4), Marketing (Meta Pixel) — Analytics + Marketing
        ขอความยินยอมก่อนใช้
      </p>

      <h2>10. การเปลี่ยนแปลงนโยบาย</h2>
      <p>
        เราอาจปรับนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงสำคัญจะแจ้งผ่าน LINE
        OA และอัปเดตวันที่ &quot;อัปเดตล่าสุด&quot;
        ด้านบนล่วงหน้าอย่างน้อย 30 วัน
      </p>

      <h2>11. ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล</h2>
      <p>
        คำถามหรือร้องเรียนเรื่องข้อมูลส่วนบุคคล ติดต่อเราได้ที่
        <Link href="/contact">หน้าติดต่อเรา</Link>
      </p>
      <p>
        <strong>หน่วยงานกำกับดูแล</strong>:
        สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPC) —{" "}
        <a
          href="https://pdpc.or.th"
          target="_blank"
          rel="noopener noreferrer"
        >
          pdpc.or.th
        </a>
      </p>
    </LegalLayout>
  )
}
