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
      <div className="mx-auto max-w-[640px] space-y-5">
        {/* 1. Pre-headline — 2 lines */}
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

        {/* 2. Headline — dominant, 2 explicit lines */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-[family-name:var(--font-kanit)] text-xl font-extrabold leading-[1.3] text-[var(--color-navy-900)] sm:text-2xl md:text-3xl">
            {hero.headline.line1}
            <br />
            {hero.headline.before}{" "}
            <span className="text-[var(--color-terracotta)] underline decoration-wavy decoration-[2px] underline-offset-[6px]">
              {hero.headline.highlight}
            </span>
          </h2>
        </ScrollReveal>

        {/* 3. Sub-headline — 3 lines */}
        <ScrollReveal delay={0.09}>
          <div className="space-y-1">
            {hero.subHeadline.map((line, i) => (
              <p
                key={i}
                className="text-[17px] leading-[1.6] text-[var(--color-navy-500)]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* 4. Offer Box — compact */}
        <ScrollReveal delay={0.12}>
          <div className="border border-dashed border-[var(--color-terracotta-soft)] bg-[var(--color-paper)] px-4 py-4">
            <p className="mb-2 font-[family-name:var(--font-kanit)] text-sm font-bold text-[var(--color-navy-900)]">
              {hero.offerBox.title}
            </p>
            <ul className="space-y-1">
              {hero.offerBox.items.map((item, i) => (
                <li
                  key={i}
                  className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-900)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* 5. CTA */}
        <ScrollReveal delay={0.16}>
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

        {/* 6. Micro-copy */}
        <ScrollReveal delay={0.19}>
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            {hero.microCopy.join(" · ")}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
