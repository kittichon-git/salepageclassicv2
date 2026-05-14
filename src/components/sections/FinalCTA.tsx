import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { finalCta, cta, hero } from "@/lib/data";

export function FinalCTA() {
  return (
    <Section id="final" tab="S10 · FINAL" tone="navy">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="inline-block font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
            A · FINAL STEP
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.06}>
          <h2
            className="mx-auto max-w-[780px] font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-cream)]"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
          >
            {finalCta.heading}
          </h2>
        </ScrollReveal>

        {/* Body */}
        <ScrollReveal delay={0.1}>
          <p className="max-w-[520px] font-[family-name:var(--font-bai-jamjuree)] text-lg leading-[1.55] text-[rgba(251,245,232,0.80)]">
            {finalCta.body}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.14}>
          <CTAButton href={cta.lineUrl} variant="line" size="lg" showIcon className="w-full sm:w-auto">
            {cta.finalLabel}
          </CTAButton>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.12em] text-[rgba(251,245,232,0.60)]">
            {hero.trustStrip.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">·</span>}
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
