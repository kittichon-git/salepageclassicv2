import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <Section
      id="hero"
      tone="paper"
      className="pt-8 md:pt-10"
      innerClassName="shadow-[2px_2px_0_var(--color-navy-500)] border-[1px]"
    >
      <div className="mx-auto max-w-[640px] space-y-4 text-center">
        {/* 1. Pre-headline — 2 lines, centered */}
        <ScrollReveal>
          <div className="space-y-0.5">
            {hero.preHeadline.map((line, i) => (
              <p
                key={i}
                className="text-[15px] leading-[1.6] text-[var(--color-text-muted)]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* 2. Headline — line1 navy, line2 teal filled block */}
        <ScrollReveal delay={0.05}>
          <h2 className="flex flex-col items-center gap-2 font-[family-name:var(--font-kanit)] text-xl font-extrabold text-[var(--color-navy-900)] sm:text-2xl md:text-3xl">
            <span>{hero.headline.line1}</span>
            <span className="bg-[var(--color-teal-500)] px-4 py-1.5 text-[var(--color-cream)] shadow-[2px_2px_0_rgba(35,49,73,0.48)]">
              {hero.headline.line2}
            </span>
          </h2>
        </ScrollReveal>

        {/* 3. Sub-headline — centered */}
        <ScrollReveal delay={0.09}>
          <div className="space-y-0.5">
            {hero.subHeadline.map((line, i) => (
              <p
                key={i}
                className="text-[16px] leading-[1.65] text-[var(--color-navy-500)]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* 4. Offer Box — teal left accent, paper bg, lighter border */}
        <ScrollReveal delay={0.12}>
          <div className="relative border border-[rgba(35,49,73,0.18)] bg-[var(--color-paper)] py-4 pl-6 pr-4 text-left">
            {/* Teal left bar */}
            <div
              className="absolute inset-y-0 left-0 w-[3px] bg-[var(--color-teal-500)]"
              aria-hidden="true"
            />
            <p className="mb-2 font-[family-name:var(--font-kanit)] text-sm font-bold text-[var(--color-navy-900)]">
              {hero.offerBox.title}
            </p>
            <ul className="space-y-1">
              {hero.offerBox.items.map((item, i) => (
                <li
                  key={i}
                  className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-500)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* 5. CTA — full width */}
        <ScrollReveal delay={0.15}>
          <CTAButton
            href={hero.cta.href}
            variant="line"
            size="lg"
            showIcon
            trackingLocation="hero"
            className="w-full"
          >
            {hero.cta.label}
          </CTAButton>
        </ScrollReveal>

        {/* 6. Micro-copy — centered */}
        <ScrollReveal delay={0.18}>
          <p className="text-sm text-[var(--color-text-muted)]">
            {hero.microCopy.join(" · ")}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
