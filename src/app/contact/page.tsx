import Link from "next/link"
import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal/LegalLayout"

export const metadata: Metadata = {
  title: "ติดต่อเรา | phachara.com",
  description: "ติดต่อทีมงาน phachara.com ผ่าน LINE OA @049vlbwy",
}

export default function ContactPage() {
  return (
    <LegalLayout title="ติดต่อเรา" lastUpdated="17 พฤษภาคม 2569">
      <h2>💬 วิธีติดต่อเร็วที่สุด — LINE OA</h2>

      <p>ทักไลน์มาเลย — ตอบเร็วกว่าอีเมล + รับ 2 บทแรกฟรีทันที</p>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-6 text-emerald-900">
        <p className="mb-2 text-lg font-bold">🟢 LINE OA: @049vlbwy</p>
        <p className="mb-3 text-sm">
          คลิก:{" "}
          <a
            href="https://lin.ee/oMmZLf7Z"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://lin.ee/oMmZLf7Z
          </a>
        </p>
        <p className="text-sm">
          เวลาตอบกลับเฉลี่ย: <strong>&lt; 24 ชั่วโมง</strong> ในเวลาทำการ
        </p>
      </aside>

      <h2>📧 ช่องทางอื่น</h2>

      <table>
        <thead>
          <tr>
            <th>ช่องทาง</th>
            <th>รายละเอียด</th>
            <th>เวลาตอบกลับ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LINE OA</strong></td>
            <td>@049vlbwy</td>
            <td>&lt; 24 ชม.</td>
          </tr>
          <tr>
            <td><strong>อีเมล</strong></td>
            <td>
              <a href="mailto:phachara.elearning@gmail.com">
                phachara.elearning@gmail.com
              </a>
            </td>
            <td>1-3 วันทำการ</td>
          </tr>
        </tbody>
      </table>

      <h2>⏰ เวลาทำการ</h2>
      <ul>
        <li>
          <strong>จันทร์ – ศุกร์</strong>: 09:00 – 16:00 น. เวลาประเทศไทย ICT
        </li>
        <li>
          <strong>เสาร์ – อาทิตย์</strong>: ปิดทำการ
          ข้อความ LINE จะตอบในวันทำการถัดไป
        </li>
        <li>
          <strong>วันหยุดนักขัตฤกษ์</strong>: ปิดทำการ
        </li>
      </ul>

      <h2>🏢 ข้อมูลผู้ให้บริการ</h2>

      <table>
        <tbody>
          <tr>
            <td><strong>ชื่อผู้ดำเนินการ</strong></td>
            <td>กิตติชน สนิทเชื้อ บุคคลธรรมดา</td>
          </tr>
          <tr>
            <td><strong>สถานะภาษี</strong></td>
            <td>บุคคลธรรมดา · Non-VAT (ไม่จดทะเบียนภาษีมูลค่าเพิ่ม)</td>
          </tr>
          <tr>
            <td><strong>เลขทะเบียนพาณิชย์</strong></td>
            <td>อยู่ระหว่างยื่นจดทะเบียน DBD</td>
          </tr>
          <tr>
            <td><strong>ที่อยู่</strong></td>
            <td>999/58 หมู่ 9 pshome2 ต.บ้านเป็ด อ.เมือง จ.ขอนแก่น 40000</td>
          </tr>
          <tr>
            <td><strong>อีเมล</strong></td>
            <td>
              <a href="mailto:phachara.elearning@gmail.com">
                phachara.elearning@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td><strong>LINE OA</strong></td>
            <td>@049vlbwy</td>
          </tr>
        </tbody>
      </table>

      <h2>❓ คำถามที่พบบ่อย</h2>
      <p>
        ก่อนติดต่อ ลองดูคำตอบในหน้าเหล่านี้ก่อน — อาจช่วยประหยัดเวลาคุณ
      </p>
      <ul>
        <li>
          💰 <strong>ขอคืนเงิน</strong> →{" "}
          <Link href="/legal/refund">นโยบายการคืนเงิน</Link> พิมพ์{" "}
          <code>/refund</code> ใน LINE
        </li>
        <li>
          🔒 <strong>ขอลบ/แก้ไขข้อมูลส่วนบุคคล</strong> →{" "}
          <Link href="/legal/privacy">นโยบายความเป็นส่วนตัว</Link>
        </li>
        <li>
          📜 <strong>ข้อกำหนดการใช้บริการ</strong> →{" "}
          <Link href="/legal/terms">ข้อกำหนดการใช้งาน</Link>
        </li>
        <li>
          🍪 <strong>เรื่องคุกกี้</strong> →{" "}
          <Link href="/legal/cookie">นโยบายคุกกี้</Link>
        </li>
      </ul>

      <h2>🎯 หัวข้อที่นิยมถาม</h2>
      <ul>
        <li>
          <strong>บทเรียนเปิดบนมือถือ/iPad ได้ไหม?</strong> ได้ —
          เปิดผ่าน LINE LIFF ทุกอุปกรณ์
        </li>
        <li>
          <strong>เปลี่ยน LINE account ได้ไหม?</strong> ติดต่อทาง LINE OA —
          เราย้าย enrollment ให้
        </li>
        <li>
          <strong>ซื้อแล้วเข้าไม่ได้</strong> — แคปหน้าจอ + Order ID ส่ง
          LINE OA — แก้ภายใน 24 ชม.
        </li>
        <li>
          <strong>อยากรับ invoice</strong> — แจ้งใน LINE OA หลังชำระ
          หมายเหตุ: เราเป็นบุคคลธรรมดา ไม่จด VAT ออกใบกำกับภาษีไม่ได้
        </li>
      </ul>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm text-emerald-900">
        <p>
          <strong>💚 สัญญาเรื่องความเป็นส่วนตัว</strong>:
          ข้อมูลทุกอย่างที่คุณส่งมาผ่าน LINE หรืออีเมล
          จะถูกใช้เพื่อตอบคำถามของคุณเท่านั้น
          เราไม่นำไปใช้ทำการตลาดโดยไม่ได้รับอนุญาต ดู{" "}
          <Link href="/legal/privacy">นโยบายความเป็นส่วนตัว</Link>
        </p>
      </aside>
    </LegalLayout>
  )
}
