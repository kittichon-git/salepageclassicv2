import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <Section id="hero" tone="paper" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[640px] space-y-6">
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

        {/* 2. Headline — dominant */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-[family-name:var(--font-kanit)] text-xl font-extrabold leading-[1.3] text-balance text-[var(--color-navy-900)] sm:text-2xl md:text-3xl">
            {hero.headline.before}{" "}
            <span
              className="text-[var(--color-terracotta)] underline decoration-wavy decoration-[2px] underline-offset-[6px]"
            >
              {hero.headline.highlight}
            </span>
          </h2>
        </ScrollReveal>

        {/* 3. Sub-headline — 3 lines */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-1">
            {hero.subHeadline.map((line, i) => (
              <p
                key={i}
                className="text-[17px] leading-[1.6] text-[var(--color-navy-700)]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* 4. Offer Box */}
        <ScrollReveal delay={0.13}>
          <div className="border-2 border-dashed border-[var(--color-terracotta-soft)] bg-[var(--color-paper)] px-5 py-6 sm:px-6 sm:py-7">
            <p className="mb-3 font-[family-name:var(--font-kanit)] font-bold text-[var(--color-navy-900)]">
              {hero.offerBox.title}
            </p>
            <ul className="space-y-2">
              {hero.offerBox.items.map((item, i) => (
                <li
                  key={i}
                  className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-navy-900)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* 5. CTA */}
        <ScrollReveal delay={0.17}>
          <div className="pt-2">
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
          </div>
        </ScrollReveal>

        {/* 6. Micro-copy chips */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            {hero.microCopy.join(" · ")}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
