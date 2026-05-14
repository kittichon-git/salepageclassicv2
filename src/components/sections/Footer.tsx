import { Container } from "@/components/ui/Container";
import { footer } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal-900)] text-[var(--color-cream-100)]/70 py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-[var(--font-heading)] text-xl font-bold text-[var(--color-cream-50)]">
              {footer.brand}
            </p>
            <p className="mt-2 text-sm">{footer.copy}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            {/* TODO: privacy / terms / contact links เมื่อมีหน้า */}
            <span>นโยบายความเป็นส่วนตัว · ข้อกำหนด · ติดต่อ (เร็วๆ นี้)</span>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
