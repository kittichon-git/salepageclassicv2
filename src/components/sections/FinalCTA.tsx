import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { finalCta, cta, hero } from "@/lib/data";

export function FinalCTA() {
  return (
    <Section id="final-cta" tone="dark" className="text-center">
      <Container>
        <ScrollReveal>
          <Eyebrow>A · Final Step</Eyebrow>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-[var(--color-cream-50)]">
            {finalCta.headline}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base lg:text-lg leading-relaxed text-[var(--color-cream-100)]/80">
            {finalCta.sub}
          </p>

          <div className="mt-9 flex justify-center">
            <CTAButton variant="line" size="lg" href={cta.lineUrl}>
              {cta.finalLabel}
            </CTAButton>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--color-cream-100)]/60">
            {hero.trustStrip.map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">·</span>}
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
