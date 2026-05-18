import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { finalCta } from "@/lib/data";

export function FinalCTA() {
  return (
    <Section id="final" tab="S10 · FINAL" tone="navy" className="pb-16 lg:pb-24">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="inline-block font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
            A · FINAL STEP
          </div>
        </ScrollReveal>

        {/* Headline — H2 */}
        <ScrollReveal delay={0.06}>
          <h2 className="mx-auto max-w-[780px] font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-cream)] text-3xl sm:text-4xl lg:text-5xl">
            {finalCta.headline}
          </h2>
        </ScrollReveal>

        {/* Subline */}
        <ScrollReveal delay={0.1}>
          <p className="max-w-[520px] font-[family-name:var(--font-bai-jamjuree)] text-lg leading-[1.55] text-[rgba(251,245,232,0.80)]">
            {finalCta.subline}
          </p>
        </ScrollReveal>

        {/* Urgency */}
        <ScrollReveal delay={0.13}>
          <p className="max-w-[520px] font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.55] text-[var(--color-cream)]">
            {finalCta.urgency}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.14}>
          <CTAButton
            href={finalCta.ctaHref}
            variant="line"
            size="lg"
            showIcon
            className="w-full sm:w-auto"
          >
            {finalCta.ctaLabel}
          </CTAButton>
        </ScrollReveal>

        {/* Reassurance */}
        <ScrollReveal delay={0.18}>
          <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm text-[rgba(251,245,232,0.60)]">
            {finalCta.reassurance}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
