import { ShieldCheck, Smartphone, Infinity } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { offer, cta } from "@/lib/data";

function ValueTable({
  items,
  totalValue,
}: {
  items: readonly { label: string; value: number }[];
  totalValue: number;
}) {
  const fmt = new Intl.NumberFormat("th-TH");

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--color-beige-300)] bg-[var(--color-cream-50)]",
        "shadow-[var(--shadow-soft)] overflow-hidden"
      )}
    >
      <div className="border-b border-[var(--color-beige-300)] bg-[var(--color-cream-100)] px-6 py-4">
        <h3 className="text-base lg:text-lg font-bold text-[var(--color-charcoal-900)]">
          สิ่งที่ได้ทั้งหมด
        </h3>
      </div>

      <ul className="divide-y divide-[var(--color-beige-300)]">
        {items.map((it, i) => (
          <li key={i} className="flex items-baseline justify-between gap-4 px-6 py-4">
            <span className="text-sm lg:text-base text-[var(--color-charcoal-900)]">
              {it.label}
            </span>
            <span className="shrink-0 font-mono text-sm font-semibold text-[var(--color-charcoal-700)]">
              {fmt.format(it.value)} ฿
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-baseline justify-between gap-4 border-t-2 border-[var(--color-charcoal-900)] bg-[var(--color-cream-100)] px-6 py-5">
        <span className="text-sm lg:text-base font-semibold text-[var(--color-charcoal-900)]">
          รวมมูลค่า
        </span>
        <span className="shrink-0 font-mono text-base font-bold text-[var(--color-charcoal-900)]">
          {fmt.format(totalValue)} ฿
        </span>
      </div>
    </div>
  );
}

function PriceCard({
  anchorPrice,
  price,
  note,
}: {
  anchorPrice: number;
  price: number;
  note: string;
}) {
  const fmt = new Intl.NumberFormat("th-TH");

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)]",
        "bg-[var(--color-charcoal-900)] text-[var(--color-cream-50)]",
        "p-7 lg:p-9 shadow-[var(--shadow-elev)]",
        "ring-1 ring-[var(--color-coral-500)]/30",
        "relative overflow-hidden"
      )}
    >
      {/* top line gradient accent */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--color-coral-500)] to-transparent"
        aria-hidden="true"
      />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-coral-400)]">
        วันนี้เท่านั้น
      </p>

      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-lg line-through text-[var(--color-cream-100)]/50">
          {fmt.format(anchorPrice)} ฿
        </span>
        <span className="text-5xl lg:text-6xl font-bold text-[var(--color-coral-400)]">
          {fmt.format(price)}
        </span>
        <span className="text-2xl font-semibold">฿</span>
      </div>

      <p className="mt-4 text-sm lg:text-base leading-relaxed text-[var(--color-cream-100)]/85">
        {note}
      </p>

      <div className="mt-7">
        <CTAButton variant="line" size="lg" href={cta.lineUrl} className="w-full justify-center">
          {cta.buyLabel}
        </CTAButton>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-2 text-xs text-[var(--color-cream-100)]/70">
        <li className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-coral-400)]" aria-hidden="true" />
          รับประกัน 7 วัน คืนเงิน 100%
        </li>
        <li className="flex items-center gap-2">
          <Smartphone className="h-3.5 w-3.5 text-[var(--color-coral-400)]" aria-hidden="true" />
          อ่านผ่าน LINE ทุกอุปกรณ์
        </li>
        <li className="flex items-center gap-2">
          <Infinity className="h-3.5 w-3.5 text-[var(--color-coral-400)]" aria-hidden="true" />
          เข้าถึงตลอดชีพ
        </li>
      </ul>
    </div>
  );
}

export function Offer() {
  return (
    <Section id="offer" tone="default">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>A · Offer + Price</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              {offer.title}
            </h2>
          </header>
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid gap-8 lg:gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Value table */}
          <ScrollReveal>
            <ValueTable items={offer.items} totalValue={offer.totalValue} />
          </ScrollReveal>

          {/* Price card */}
          <ScrollReveal delay={0.1}>
            <PriceCard
              anchorPrice={offer.anchorPrice}
              price={offer.price}
              note={offer.priceNote}
            />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
