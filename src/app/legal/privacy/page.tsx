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
      lastUpdated="17 พฤษภาคม 2569"
    >
      <p>
        phachara.com (&quot;เรา&quot;) ดำเนินการโดย{" "}
        <strong>กิตติชน สนิทเชื้อ</strong> ในรูปแบบ<strong>บุคคลธรรมดา</strong>{" "}
        เราให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
        นโยบายนี้อธิบายข้อมูลที่เราเก็บ วิธีใช้ และสิทธิของคุณตาม
        พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
      </p>

      <aside className="not-prose my-4 rounded-lg border-l-4 border-slate-400 bg-slate-50 p-4 text-sm text-slate-700">
        <p>
          <strong>หมายเหตุ</strong>: บทเรียนออนไลน์ของเราเป็น<strong>เนื้อหาบทความ-ข้อความ ไม่มีคลิปวิดีโอประกอบ</strong>
        </p>
      </aside>

      <h2>1. ข้อมูลที่เราเก็บรวบรวม</h2>
      <p>เราเก็บเฉพาะข้อมูลที่จำเป็นต่อการให้บริการบทเรียนออนไลน์ผ่าน LINE OA:</p>
      <ul>
        <li><strong>LINE User ID</strong> — รหัสระบุตัวตนจาก LINE Platform</li>
        <li><strong>ชื่อที่แสดงใน LINE (Display Name)</strong> — สำหรับทักทายในข้อความ</li>
        <li><strong>รูปโปรไฟล์ LINE (URL)</strong> — แสดงในหน้าผู้ใช้</li>
        <li><strong>อีเมล</strong> — เฉพาะกรณีที่คุณส่งมาเองผ่านคำขอ refund หรือ support</li>
        <li>
          <strong>ข้อมูลคำสั่งซื้อ</strong> — หมายเลขคำสั่งซื้อ จำนวนเงิน วันเวลาที่ชำระ
          (Stripe จัดเก็บข้อมูลบัตรเครดิต เราไม่เห็นหมายเลขบัตรของคุณ)
        </li>
        <li><strong>ข้อมูลการอ่าน</strong> — บทที่เปิดอ่าน ความคืบหน้า เวลาที่ใช้</li>
      </ul>

      <h2>2. วัตถุประสงค์การใช้ข้อมูล</h2>
      <ol>
        <li>ระบุตัวตนและส่งมอบบทเรียนออนไลน์ที่คุณซื้อ</li>
        <li>ส่งใบเสร็จและข้อความยืนยันการชำระเงินผ่าน LINE</li>
        <li>ให้บริการ support และพิจารณาคำขอคืนเงิน</li>
        <li>วิเคราะห์การใช้งานเพื่อปรับปรุงบริการ (รูปแบบรวม ไม่ระบุตัวตน)</li>
        <li>ส่งข้อความ marketing (เฉพาะกรณีที่ได้รับความยินยอมจากคุณ)</li>
      </ol>

      <h2>3. ฐานทางกฎหมายในการประมวลผล (มาตรา 24 PDPA)</h2>
      <ul>
        <li><strong>การปฏิบัติตามสัญญา</strong> — ส่งมอบบทเรียนออนไลน์ที่คุณซื้อ</li>
        <li><strong>ประโยชน์โดยชอบด้วยกฎหมาย</strong> — การให้บริการ support และปรับปรุงคุณภาพ</li>
        <li><strong>ความยินยอม</strong> — สำหรับ analytics cookies และ marketing (คุณเลือกได้ผ่าน cookie banner)</li>
      </ul>

      <h2>4. การเปิดเผยข้อมูลแก่บุคคลที่สาม</h2>
      <p>
        เรา<strong>ไม่ขาย</strong>ข้อมูลส่วนบุคคลของคุณ
        เราเปิดเผยเฉพาะกับผู้ให้บริการที่จำเป็นต่อไปนี้:
      </p>
      <table>
        <thead>
          <tr>
            <th>ผู้ให้บริการ</th>
            <th>ประเทศ</th>
            <th>วัตถุประสงค์</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Stripe Payments</strong></td>
            <td>สหรัฐอเมริกา / ไทย</td>
            <td>ประมวลผลการชำระเงิน</td>
          </tr>
          <tr>
            <td><strong>Vercel</strong></td>
            <td>Global (CDN)</td>
            <td>โฮสต์เว็บไซต์ — request logs, IP address</td>
          </tr>
          <tr>
            <td><strong>Supabase</strong></td>
            <td>สิงคโปร์</td>
            <td>โฮสต์ฐานข้อมูล (เข้ารหัส at-rest)</td>
          </tr>
          <tr>
            <td><strong>LINE Corporation</strong></td>
            <td>ญี่ปุ่น</td>
            <td>ส่งข้อความและยืนยันตัวตน</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-slate-600">
        ผู้รับโอนข้อมูลข้ามประเทศทุกรายมี standard contractual clauses หรือมาตรการคุ้มครองที่เทียบเท่า
        ตามมาตรา 28 PDPA
      </p>

      <h2>5. ระยะเวลาเก็บรักษาข้อมูล</h2>
      <ul>
        <li><strong>ข้อมูลบัญชีและการอ่าน</strong> — ตลอดระยะเวลาที่บัญชี active</li>
        <li>
          <strong>ข้อมูลการชำระเงิน</strong> — อย่างน้อย 5 ปี ตามกฎหมายภาษีและบัญชีไทย
          (พรบ. การบัญชี พ.ศ. 2543 กำหนด 5 ปี)
        </li>
        <li><strong>หลังร้องขอให้ลบ</strong> — soft-delete ภายใน 30 วัน · ข้อมูลทางการเงินยังต้องเก็บตามกฎหมาย</li>
      </ul>

      <h2>6. สิทธิของเจ้าของข้อมูล (มาตรา 30–43 PDPA)</h2>
      <p>คุณมีสิทธิ 8 ประการดังต่อไปนี้:</p>
      <ol>
        <li><strong>สิทธิเข้าถึง</strong> — ขอสำเนาข้อมูลของคุณ</li>
        <li><strong>สิทธิแก้ไข</strong> — ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
        <li><strong>สิทธิลบ (Right to Erasure)</strong> — ขอให้ลบข้อมูล (ยกเว้นที่ต้องเก็บตามกฎหมาย)</li>
        <li><strong>สิทธิระงับการใช้</strong> — ขอระงับการประมวลผลชั่วคราว</li>
        <li><strong>สิทธิคัดค้าน</strong> — คัดค้านการประมวลผลเพื่อ marketing</li>
        <li><strong>สิทธิถอนความยินยอม</strong> — ถอนได้ตลอดเวลา โดยไม่กระทบการประมวลผลก่อนหน้า</li>
        <li><strong>สิทธิรับโอนข้อมูล (Portability)</strong> — ขอข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง</li>
        <li><strong>สิทธิร้องเรียน</strong> — ร้องเรียนต่อ PDPC ได้หากเห็นว่าสิทธิถูกละเมิด</li>
      </ol>
      <p>
        <strong>วิธีใช้สิทธิ</strong>: ส่งคำขอผ่าน{" "}
        <Link href="/contact">หน้าติดต่อเรา</Link> — เราจะตอบกลับภายใน 30 วัน
      </p>

      <h2>7. ความปลอดภัยของข้อมูล</h2>
      <ul>
        <li>การเชื่อมต่อทั้งหมดใช้ TLS encryption</li>
        <li>ฐานข้อมูลเข้ารหัส at-rest (AES-256 บน Supabase)</li>
        <li>Row Level Security (RLS) — จำกัด access เฉพาะผู้ที่ได้รับอนุญาต</li>
        <li>ไม่จัดเก็บหมายเลขบัตรเครดิต (Stripe PCI DSS Level 1 tokenization)</li>
      </ul>

      <h2>8. ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล</h2>
      <p>
        คำถามหรือร้องเรียนเรื่องข้อมูลส่วนบุคคล ติดต่อได้ที่{" "}
        <a href="mailto:phachara.elearning@gmail.com">phachara.elearning@gmail.com</a>
        {" "}หรือผ่าน <Link href="/contact">หน้าติดต่อเรา</Link>
      </p>
      <p>
        <strong>หน่วยงานกำกับดูแล</strong>:
        สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (PDPC) —{" "}
        <a href="https://pdpc.or.th" target="_blank" rel="noopener noreferrer">
          pdpc.or.th
        </a>
      </p>
    </LegalLayout>
  )
}
