import { ArrowDownRight, Lock, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <Section id="hero" tone="paper" className="pt-8 md:pt-10">
      <div className="mx-auto max-w-[640px] space-y-6">
        {/* 1. Pre-headline */}
        <ScrollReveal>
          <p className="text-[15px] leading-[1.6] text-[var(--color-text-muted)] text-balance">
            {hero.preHeadline}
          </p>
        </ScrollReveal>

        {/* 2. Pain Hook — dominant H2 */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-[family-name:var(--font-kanit)] text-xl font-extrabold leading-[1.3] text-balance text-[var(--color-navy-900)] sm:text-2xl md:text-3xl">
            {hero.painHook.before}{" "}
            <span
              className="text-[var(--color-terracotta)] underline decoration-wavy decoration-[var(--color-terracotta-soft)] decoration-[2px]"
            >
              {hero.painHook.highlight}
            </span>
          </h2>
        </ScrollReveal>

        {/* 3. Solution promise */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 text-lg font-semibold text-[var(--color-terracotta)] sm:text-xl">
            <ArrowDownRight className="size-5 shrink-0" aria-hidden="true" />
            <p>({hero.solutionPromise})</p>
          </div>
        </ScrollReveal>

        {/* 4. Product title — notebook frame */}
        <ScrollReveal delay={0.13}>
          <div className="mt-2 border-2 border-dashed border-[var(--color-terracotta-soft)] bg-[var(--color-paper)] px-5 py-6 sm:px-6 sm:py-7">
            <p className="text-center text-xl font-bold leading-[1.4] text-balance text-[var(--color-navy-900)] sm:text-2xl font-[family-name:var(--font-kanit)]">
              {hero.productTitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 5. Description */}
        <ScrollReveal delay={0.16}>
          <p className="text-[17px] leading-[1.6] text-[var(--color-navy-600)] text-balance">
            {hero.description}
          </p>
        </ScrollReveal>

        {/* 6. CTA */}
        <ScrollReveal delay={0.2}>
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

        {/* 7. Micro-copy */}
        <ScrollReveal delay={0.23}>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-sm text-[var(--color-text-muted)]">
            {hero.microCopy.map((item) => (
              <li key={item.text} className="flex items-center gap-1.5">
                {item.icon === "lock" && (
                  <Lock className="size-4" aria-hidden="true" />
                )}
                {item.icon === "shield" && (
                  <ShieldCheck className="size-4" aria-hidden="true" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </Section>
  );
}
