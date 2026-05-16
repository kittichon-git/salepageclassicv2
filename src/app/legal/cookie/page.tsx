import Link from "next/link"
import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal/LegalLayout"

export const metadata: Metadata = {
  title: "นโยบายคุกกี้ | phachara.com",
  description: "นโยบายการใช้คุกกี้และการจัดการความยินยอม",
}

export default function CookiePage() {
  return (
    <LegalLayout
      title="นโยบายคุกกี้"
      lastUpdated="16 พฤษภาคม 2569"
    >
      <p>
        phachara.com (&quot;เรา&quot;)
        ใช้คุกกี้และเทคโนโลยีคล้ายคลึงเพื่อให้บริการดียิ่งขึ้น
        นโยบายนี้อธิบายว่าเราใช้คุกกี้อย่างไร และคุณจัดการได้อย่างไร
      </p>

      <h2>1. คุกกี้คืออะไร</h2>
      <p>
        คุกกี้คือไฟล์ข้อความขนาดเล็กที่เว็บไซต์ฝากไว้บนอุปกรณ์ของคุณ
        เพื่อจดจำการตั้งค่า บันทึกการใช้งาน และวิเคราะห์ประสิทธิภาพ
      </p>

      <h2>2. ประเภทของคุกกี้ที่เราใช้</h2>

      <table>
        <thead>
          <tr>
            <th>คุกกี้</th>
            <th>ประเภท</th>
            <th>วัตถุประสงค์</th>
            <th>อายุ</th>
            <th>ต้องขอ consent?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>session</code></td>
            <td><strong>Essential</strong></td>
            <td>รักษาการ login ผ่าน LINE</td>
            <td>Session</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><code>csrf_token</code></td>
            <td><strong>Essential</strong></td>
            <td>ป้องกัน CSRF attack</td>
            <td>Session</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><code>cookie_consent</code></td>
            <td><strong>Essential</strong></td>
            <td>จดจำการเลือก consent ของคุณ</td>
            <td>1 ปี</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><code>_ga, _ga_*</code></td>
            <td><strong>Analytics</strong></td>
            <td>Google Analytics 4 — วัด traffic + behavior</td>
            <td>2 ปี</td>
            <td>✅</td>
          </tr>
          <tr>
            <td><code>_gid</code></td>
            <td><strong>Analytics</strong></td>
            <td>GA4 — distinguish users</td>
            <td>24 ชม.</td>
            <td>✅</td>
          </tr>
          <tr>
            <td><code>_fbp</code></td>
            <td><strong>Marketing</strong></td>
            <td>Facebook Pixel — วัด ad conversion</td>
            <td>90 วัน</td>
            <td>✅</td>
          </tr>
          <tr>
            <td><code>fr</code></td>
            <td><strong>Marketing</strong></td>
            <td>Facebook — ad targeting</td>
            <td>90 วัน</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Cookie Consent Banner</h2>
      <p>เมื่อคุณเข้าเว็บครั้งแรก คุณจะเห็น banner ขออนุญาตใช้คุกกี้:</p>
      <ul>
        <li>
          <strong>ยอมรับทั้งหมด</strong> — เปิดทั้ง 3 ประเภท
        </li>
        <li>
          <strong>จำเป็นเท่านั้น</strong> — เปิดแค่ Essential cookies
        </li>
        <li>
          <strong>ตั้งค่าเอง</strong> — เลือกเปิด/ปิดแต่ละหมวด
        </li>
      </ul>
      <p>การเลือกของคุณจะถูกบันทึก 12 เดือน คุณเปลี่ยนใจได้ตลอดเวลา</p>

      <h2>4. การจัดการคุกกี้</h2>
      <p>
        <strong>เปลี่ยนการตั้งค่าใน phachara.com</strong>:
      </p>
      <ul>
        <li>คลิกลิงก์ &quot;ตั้งค่าคุกกี้&quot; ที่ footer (เปิด banner ใหม่)</li>
      </ul>
      <p>
        <strong>บล็อกคุกกี้ทั้งหมดใน browser</strong>:
      </p>
      <ul>
        <li>Chrome: Settings → Privacy and security → Cookies</li>
        <li>Safari: Preferences → Privacy → Block all cookies</li>
        <li>Firefox: Settings → Privacy &amp; Security → Cookies</li>
      </ul>

      <aside className="not-prose my-6 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-orange-900">
        <p>
          <strong>⚠️ คำเตือน</strong>: หากบล็อก Essential cookies ทั้งหมด
          คุณจะไม่สามารถ login หรือใช้งานบางส่วนของเว็บได้
        </p>
      </aside>

      <h2>5. คุกกี้ของบุคคลที่สาม</h2>
      <p>เราใช้บริการของบุคคลที่สามที่อาจวางคุกกี้ของตัวเอง:</p>
      <ul>
        <li>
          <strong>Google (Analytics)</strong>:{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/technologies/cookies
          </a>
        </li>
        <li>
          <strong>Meta (Facebook Pixel)</strong>:{" "}
          <a
            href="https://facebook.com/policy/cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/policy/cookies
          </a>
        </li>
        <li>
          <strong>Stripe (Payment)</strong>:{" "}
          <a
            href="https://stripe.com/cookies-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            stripe.com/cookies-policy
          </a>
        </li>
        <li>
          <strong>Vercel (Hosting)</strong>:{" "}
          <a
            href="https://vercel.com/legal/cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/cookies
          </a>
        </li>
      </ul>

      <h2>6. การเปลี่ยนแปลงนโยบาย</h2>
      <p>
        เราอาจปรับนโยบายนี้เมื่อมีการเพิ่ม/ลบ tools ที่ใช้คุกกี้
        การเปลี่ยนแปลงสำคัญจะแจ้งผ่าน banner และในหน้านี้
      </p>

      <h2>7. ติดต่อเรา</h2>
      <p>
        ดูช่องทางติดต่อที่ <Link href="/contact">หน้าติดต่อเรา</Link> ·
        รายละเอียดการประมวลผลข้อมูลดูที่{" "}
        <Link href="/legal/privacy">นโยบายความเป็นส่วนตัว</Link>
      </p>
    </LegalLayout>
  )
}
