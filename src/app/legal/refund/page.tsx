import Link from "next/link"
import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal/LegalLayout"

export const metadata: Metadata = {
  title: "นโยบายการคืนเงิน | phachara.com",
  description: "คืนเงิน 100% ภายใน 7 วัน ถ้าเปิดอ่านไม่เกิน 3 บท",
}

export default function RefundPage() {
  return (
    <LegalLayout
      title="นโยบายการคืนเงิน"
      lastUpdated="17 พฤษภาคม 2569"
    >
      <aside className="not-prose my-4 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-4 text-sm text-emerald-900">
        <p>
          <strong>สิทธิผู้บริโภค</strong>:{" "}
          เงื่อนไขนี้<strong>ไม่ตัดสิทธิของผู้บริโภคตามกฎหมาย</strong>{" "}
          รวมถึงสิทธิตามพระราชบัญญัติขายตรงและตลาดแบบตรง พ.ศ. 2545
          และกฎหมายคุ้มครองผู้บริโภคที่เกี่ยวข้อง
        </p>
      </aside>

      <p>
        เรา (phachara.com ดำเนินการโดย กิตติชน สนิทเชื้อ)
        มุ่งมั่นให้คุณพอใจกับบทเรียนออนไลน์ หากบทเรียนไม่ตรงกับที่คาดหวัง
        คุณสามารถขอคืนเงินได้ตามเงื่อนไขดังนี้
      </p>

      <h2>1. เงื่อนไขการขอคืนเงิน</h2>
      <p>
        คืนเงิน<strong>เต็มจำนวน 100%</strong> ภายใน <strong>7 วัน</strong>{" "}
        นับจากวันที่ชำระเงิน หากคุณ:
      </p>
      <ul>
        <li>
          ✅ เปิดอ่านบทเรียน<strong>ไม่เกิน 3 บท</strong> จาก 24 บท
        </li>
        <li>✅ ไม่ได้เริ่มกระบวนการ chargeback หรือ dispute ผ่านบัตรเครดิต</li>
        <li>
          ✅ บัญชี LINE ยังคงสถานะปกติ
          ไม่ถูกระงับเนื่องจากละเมิดข้อกำหนด
        </li>
      </ul>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-blue-900">
        <p>
          <strong>💡 ทำไม 3 บท</strong> —
          เราตั้งไว้เพื่อให้คุณตัดสินใจอย่างยุติธรรม
          3 บทเพียงพอที่จะรู้ว่าสไตล์การสอน เนื้อหา
          และโครงสร้างตรงกับที่คุณคาดหวังหรือไม่
        </p>
      </aside>

      <h2>2. กรณีที่ไม่สามารถขอคืนเงินได้</h2>
      <ul>
        <li>❌ ขอคืนหลัง 7 วัน นับจากวันที่ชำระ</li>
        <li>
          ❌ เปิดอ่านบทเรียน<strong>เกิน 3 บท</strong>
        </li>
        <li>❌ ได้รับ chargeback หรือเริ่ม dispute กับธนาคารบัตรเครดิตแล้ว</li>
        <li>
          ❌ บัญชีถูกระงับจากการละเมิดข้อกำหนด เช่น แชร์เนื้อหา ละเมิดลิขสิทธิ์
        </li>
        <li>
          ❌ ราคาส่วนลดพิเศษที่ระบุชัดเจนว่าไม่สามารถคืนเงินได้ Flash Sale,
          Final Sale
        </li>
      </ul>

      <h2>3. ขั้นตอนการขอคืนเงิน</h2>
      <p>
        <strong>วิธีที่ 1 — ผ่าน LINE OA แนะนำ · เร็วที่สุด</strong>
      </p>
      <ol>
        <li>
          ทักไลน์ OA <code>@049vlbwy</code> หรือคลิก{" "}
          <a
            href="https://lin.ee/oMmZLf7Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://lin.ee/oMmZLf7Z
          </a>
        </li>
        <li>
          พิมพ์คำสั่ง <code>/refund</code>
        </li>
        <li>ระบบส่งข้อความยืนยันคำขอ</li>
        <li>
          เจ้าหน้าที่ตรวจสอบเงื่อนไขภายใน <strong>1 วันทำการ</strong>
        </li>
        <li>
          หากผ่าน เงินจะถูกคืนผ่านช่องทางที่คุณชำระภายใน{" "}
          <strong>5-10 วันทำการ</strong> ขึ้นอยู่กับ Stripe + ธนาคารผู้ออกบัตร
        </li>
      </ol>

      <p>
        <strong>วิธีที่ 2 — ผ่านอีเมล (backup)</strong>
      </p>
      <p>
        ส่งอีเมลมาที่ <code>phachara.elearning@gmail.com</code> พร้อมระบุ:
      </p>
      <ul>
        <li>ชื่อ-นามสกุล</li>
        <li>LINE Display Name</li>
        <li>หมายเลขคำสั่งซื้อ Order ID หรือ วันเวลาที่ชำระเงิน</li>
        <li>เหตุผลในการขอคืนเงิน optional</li>
      </ul>
      <p>ตอบกลับภายใน 3 วันทำการ</p>

      <h2>4. ระยะเวลาการคืนเงิน</h2>
      <ul>
        <li>
          <strong>ตรวจสอบ + อนุมัติ</strong>: ภายใน 1-3 วันทำการ
        </li>
        <li>
          <strong>Stripe ประมวลผล</strong>: 1-3 วันทำการ
        </li>
        <li>
          <strong>เงินเข้าบัญชี/บัตร</strong>: 5-10 วันทำการ
          รวมเวลาของธนาคารผู้ออกบัตร
        </li>
      </ul>
      <p>
        <strong>ช่องทางคืนเงิน</strong>: เงินจะถูกคืนผ่าน
        <strong>ช่องทางเดิมที่คุณชำระเท่านั้น</strong>
        เราไม่สามารถโอนเข้าบัญชีอื่นได้
      </p>

      <h2>5. กรณีพิเศษ — Chargeback / Dispute</h2>
      <p>
        หากคุณเริ่มกระบวนการ chargeback กับธนาคารบัตรเครดิต
        <strong>ก่อน</strong>ติดต่อเรา:
      </p>
      <ul>
        <li>คำขอคืนเงินตามนโยบายนี้จะถูกระงับ</li>
        <li>
          กระบวนการจะดำเนินตาม chargeback rules ของ Visa/Mastercard/บัตรของคุณ
        </li>
        <li>บัญชีของคุณจะถูกระงับชั่วคราวจนกว่ากระบวนการจะเสร็จสิ้น</li>
      </ul>
      <p>
        <strong>แนะนำ</strong>: ติดต่อเราใน LINE OA ก่อน — เร็วและง่ายกว่ามาก
      </p>

      <h2>6. การคืนสิทธิเข้าถึงบทเรียน</h2>
      <p>เมื่อการคืนเงินเสร็จสมบูรณ์:</p>
      <ul>
        <li>สิทธิเข้าถึงบทเรียนทั้งหมดจะถูกเพิกถอนทันที</li>
        <li>
          ระบบจะ downgrade ระดับสมาชิกจาก <code>student</code> กลับเป็น{" "}
          <code>member</code>
        </li>
        <li>คุณยังสามารถใช้ LINE OA และเข้าถึงเนื้อหา preview ฟรีได้เหมือนเดิม</li>
      </ul>

      <h2>7. ติดต่อสอบถาม</h2>
      <p>
        ดูช่องทางติดต่อและเวลาทำการที่{" "}
        <Link href="/contact">หน้าติดต่อเรา</Link>
      </p>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm text-emerald-900">
        <p>
          <strong>💚 สัญญาของเรา</strong>: ถ้าผ่านเงื่อนไข เราไม่ถามคำถาม
          คืนเงินให้ทันที —
          เพราะเราเชื่อว่าบทเรียนที่ไม่ตรงกับคุณ ไม่ควรเป็นภาระทางใจ
        </p>
      </aside>
    </LegalLayout>
  )
}
