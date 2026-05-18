import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { offer, cta } from "@/lib/data";

export function Offer() {
  return (
    <Section id="offer" tab="S8 · OFFER" tone="cream">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: Value table */}
        <ScrollReveal>
          <div
            className={[
              "border-[1.5px] border-[var(--color-navy-500)]",
              "bg-[var(--color-paper)] p-6 md:p-8",
              "shadow-[5px_5px_0_rgba(35,49,73,0.62)]",
            ].join(" ")}
          >
            <h2 className="mb-2 font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
              {offer.heading}
            </h2>
            <p className="mb-6 font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)]">
              {offer.packageLine}
            </p>

            <div className="divide-y divide-[rgba(35,49,73,0.24)]">
              {offer.stack.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-3 py-3">
                  <span className="font-[family-name:var(--font-bai-jamjuree)] text-sm text-[var(--color-navy-500)]">
                    {item.item}
                  </span>
                  <span className="shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[var(--color-text-muted)]">
                    {item.value.toLocaleString("en-US")} ฿
                  </span>
                </div>
              ))}
            </div>

            {/* Total row */}
            <div className="mt-0 flex justify-between gap-4 border-t-2 border-[var(--color-navy-500)] pt-3">
              <span className="font-[family-name:var(--font-bai-jamjuree)] font-bold text-[var(--color-navy-500)]">
                รวมมูลค่าทั้งหมด
              </span>
              <span className="font-[family-name:var(--font-jetbrains-mono)] font-extrabold text-[var(--color-navy-500)]">
                {offer.totalValue.toLocaleString("en-US")} ฿
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Price card */}
        <ScrollReveal delay={0.08}>
          <div
            className={[
              "flex flex-col items-center justify-center gap-6 text-center",
              "border-[1.5px] border-[var(--color-navy-500)]",
              "bg-[var(--color-navy-900)] px-8 py-10",
              "shadow-[5px_5px_0_var(--color-amber-500)]",
            ].join(" ")}
          >
            {/* Anchor price */}
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[rgba(255,249,236,0.5)] line-through">
              {offer.anchorPrice.toLocaleString("en-US")} ฿
            </div>

            {/* Today price */}
            <div className="flex items-end gap-2">
              <span
                className="font-[family-name:var(--font-jetbrains-mono)] font-extrabold leading-none text-[var(--color-amber-400)]"
                style={{ fontSize: "clamp(3.25rem, 8vw, 5.125rem)" }}
              >
                {offer.todayPrice}
              </span>
              <span className="mb-1 font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[var(--color-cream)]">
                บาท
              </span>
            </div>

            {/* CTA */}
            <CTAButton href={cta.lineUrl} variant="line" size="lg" showIcon className="w-full">
              {cta.buyLabel}
            </CTAButton>

            {/* Price callout */}
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-cream)]">
              {offer.priceCallout}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
