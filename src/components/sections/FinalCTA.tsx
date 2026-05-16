import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { finalCta, cta, hero } from "@/lib/data";

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

        {/* Pain */}
        <ScrollReveal delay={0.06}>
          <p
            className="mx-auto max-w-[640px] font-[family-name:var(--font-kanit)] font-semibold tracking-tight text-[rgba(251,245,232,0.75)]"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.625rem)" }}
          >
            {finalCta.painHeadline}
          </p>
        </ScrollReveal>

        {/* Solution — H2 */}
        <ScrollReveal delay={0.1}>
          <h2
            className="mx-auto max-w-[780px] font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-cream)]"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
          >
            {finalCta.heading.split("\n").map((line, i) => {
              const hw = finalCta.headingAmber[i];
              if (!hw) return <span key={i} className="block">{line}</span>;
              const idx = line.indexOf(hw);
              return (
                <span key={i} className="block">
                  {line.slice(0, idx)}
                  <span className="text-[var(--color-amber-400)]">{hw}</span>
                  {line.slice(idx + hw.length)}
                </span>
              );
            })}
          </h2>
        </ScrollReveal>

        {/* Body */}
        <ScrollReveal delay={0.14}>
          <p className="max-w-[520px] font-[family-name:var(--font-bai-jamjuree)] text-lg leading-[1.55] text-[rgba(251,245,232,0.80)]">
            {finalCta.body}
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.18}>
          <CTAButton href={cta.lineUrl} variant="line" size="lg" showIcon className="w-full sm:w-auto">
            {cta.finalLabel}
          </CTAButton>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal delay={0.22}>
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
