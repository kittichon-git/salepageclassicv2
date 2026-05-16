import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero, cta } from "@/lib/data";

export function Hero() {
  return (
    <Section id="hero" tone="paper" tab={hero.eyebrow} className="pt-8 md:pt-10">
      <div className="space-y-8">
        {/* Pre-headline + Pain H2 + Solution H1 + Sub */}
        <ScrollReveal>
          <div className="space-y-5">
            {/* Pre-headline (eyebrow) */}
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-teal-500)]">
              {hero.preHeadline}
            </p>

            {/* Pain — H2 */}
            <h2
              className="font-[family-name:var(--font-kanit)] font-semibold leading-[1.15] tracking-tight text-[var(--color-text-muted)]"
              style={{ fontSize: "clamp(1.375rem, 3vw, 2.25rem)" }}
            >
              {hero.painHeadline}
            </h2>

            {/* Solution — H1 */}
            <h1
              className="font-[family-name:var(--font-kanit)] font-extrabold leading-[0.95] tracking-tight text-[var(--color-navy-500)]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.25rem)" }}
            >
              {hero.headline.split("\n").map((line, i) => {
                const hw = hero.headlineAmber[i];
                if (!hw) return <span key={i} className="block">{line}</span>;
                const idx = line.indexOf(hw);
                return (
                  <span key={i} className="block">
                    {line.slice(0, idx)}
                    <span className="text-[var(--color-amber-500)]">{hw}</span>
                    {line.slice(idx + hw.length)}
                  </span>
                );
              })}
            </h1>

            {/* Sub-headline */}
            <p
              className="max-w-[640px] font-[family-name:var(--font-bai-jamjuree)] leading-[1.55] text-[var(--color-text-muted)]"
              style={{ fontSize: "clamp(1.0625rem, 2vw, 1.375rem)" }}
            >
              {hero.body}
            </p>
          </div>
        </ScrollReveal>

        {/* VSL Card */}
        <ScrollReveal delay={0.1}>
          <div className="relative">
            {/* Amber accent strip right */}
            <div
              aria-hidden="true"
              className="absolute -right-2 bottom-4 top-4 w-1.5 bg-[var(--color-amber-500)]"
            />
            <div
              className={[
                "relative border-[1.5px] border-[var(--color-navy-500)]",
                "bg-[var(--color-navy-600)] p-8 md:p-10",
                "shadow-[5px_5px_0_var(--color-amber-500)]",
              ].join(" ")}
            >
              {/* VSL label */}
              <div className="mb-5 font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
                ▶ {hero.vsl.label}
              </div>
              {/* Script */}
              <p
                className="font-[family-name:var(--font-bai-jamjuree)] leading-[1.55] text-[var(--color-cream)]"
                style={{ fontSize: "clamp(1.0625rem, 2vw, 1.25rem)" }}
              >
                {hero.vsl.script}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA + Trust strip */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-4">
            <CTAButton
              href={cta.lineUrl}
              variant="line"
              size="lg"
              showIcon
              className="w-full md:w-auto"
            >
              {cta.primaryLabel}
            </CTAButton>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {hero.trustStrip.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">·</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
