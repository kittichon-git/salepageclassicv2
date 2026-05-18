import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <Section id="hero" tone="paper" tab={hero.eyebrow} className="pt-8 md:pt-10">
      <div className="space-y-8">
        {/* Pre-headline + Pain H2 + Solution H1 + Sub */}
        <ScrollReveal>
          <div className="space-y-5">
            {/* Pre-headline */}
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)]">
              {hero.preHeadline}
            </p>

            {/* Pain — H2 (2 lines) */}
            <h2 className="font-[family-name:var(--font-kanit)] text-xl font-medium leading-[1.3] text-balance text-[var(--color-text-muted)] sm:text-2xl lg:text-3xl">
              {hero.painH2[0]}
              <br />
              {hero.painH2[1]}
            </h2>

            {/* Solution — H1 */}
            <h1 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.15] tracking-normal text-balance text-[var(--color-navy-900)] text-[2.25rem] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]">
              {hero.solutionH1}
            </h1>

            {/* Sub-headline */}
            <p className="max-w-[640px] font-[family-name:var(--font-bai-jamjuree)] text-[15px] leading-[1.6] text-[var(--color-navy-600)] sm:text-base lg:text-lg">
              {hero.subHeadline}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <CTAButton
            href={hero.ctaHref}
            variant="line"
            size="lg"
            showIcon
            className="w-full md:w-auto"
          >
            {hero.ctaLabel}
          </CTAButton>
        </ScrollReveal>
      </div>
    </Section>
  );
}
