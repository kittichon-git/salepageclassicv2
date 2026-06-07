import { Fragment } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero } from "@/lib/data";

const MECHANISM_CHIPS = ["หยุดอ่าน", "เข้าใจสินค้า", "อยากทัก"] as const;

// Phrase splits — keep line-break control in component, data.ts strings unchanged
const PRE_HEADLINE_PHRASES = [
  "สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน",
  "แต่ยอดทักยังเงียบ",
] as const;

const SUB_HEADLINE_PHRASES = [
  'สูตรการใช้ "คำ" สำหรับคนขายของออนไลน์ —',
  "แม้ไม่เคยเขียนขายมาก่อน",
] as const;

const CTA_PHRASES = ["เริ่มอ่านฟรี", "2\u00A0บทแรก", "ใน\u00A0LINE"] as const;

const SCROLL_CUE_PHRASES = ["แล้วทำไมโพสต์เดิมที่เคยได้ผล", "วันนี้ถึงเงียบ?"] as const;

export function Hero() {
  return (
    <Section
      id="hero"
      tone="paper"
      className="pt-8 md:pt-10"
      innerClassName="shadow-[2px_2px_0_var(--color-navy-500)] border-[1px]"
    >
      <div className="mx-auto max-w-[640px] space-y-4 text-center">
        {/* 1. Pre-headline */}
        <ScrollReveal>
          <div className="space-y-0.5">
            <p className="text-[15px] leading-[1.6] text-[var(--color-text-muted)]">
              {PRE_HEADLINE_PHRASES.map((phrase, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className="th-phrase">{phrase}</span>
                </Fragment>
              ))}
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Headline — L1 navy, L2 teal filled block */}
        <ScrollReveal delay={0.05}>
          <h2 className="flex flex-col items-center gap-3 font-[family-name:var(--font-kanit)] text-4xl font-black leading-tight text-[var(--color-navy-900)] md:text-5xl">
            <span className="th-phrase">{hero.headline.line1}</span>
            <span className="th-phrase bg-[var(--color-teal-500)] px-6 py-3 text-[var(--color-cream)] shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
              {hero.headline.line2}
            </span>
          </h2>
        </ScrollReveal>

        {/* 3. Sub-headline — 1 บรรทัด */}
        <ScrollReveal delay={0.09}>
          <div className="space-y-0.5">
            <p className="text-[15px] leading-[1.65] text-[var(--color-text-muted)]">
              {SUB_HEADLINE_PHRASES.map((phrase, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className="th-phrase">{phrase}</span>
                </Fragment>
              ))}
            </p>
          </div>
        </ScrollReveal>

        {/* 4. Chip row — mechanism loop: หยุดอ่าน → เข้าใจสินค้า → อยากทัก */}
        <ScrollReveal delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {MECHANISM_CHIPS.map((chip, i) => (
              <Fragment key={chip}>
                <span className="border border-[var(--color-navy-500)] px-3 py-1.5 font-[family-name:var(--font-bai-jamjuree)] text-xs font-semibold tracking-wide text-[var(--color-navy-900)]">
                  {chip}
                </span>
                {i < MECHANISM_CHIPS.length - 1 && (
                  <ArrowRight
                    className="h-3 w-3 flex-shrink-0 text-[var(--color-navy-500)]"
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            ))}
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
            {CTA_PHRASES.map((phrase, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className="th-phrase">{phrase}</span>
              </Fragment>
            ))}
          </CTAButton>
        </ScrollReveal>

        {/* 6. Micro-copy */}
        <ScrollReveal delay={0.18}>
          <p className="text-sm text-[var(--color-text-muted)]">
            {hero.microCopy.map((item, i) => (
              <Fragment key={i}>
                {i > 0 && " · "}
                <span className="th-phrase">{item}</span>
              </Fragment>
            ))}
          </p>
        </ScrollReveal>

        {/* 7. Scroll cue — บอกใบ้ให้เลื่อนลง */}
        <ScrollReveal delay={0.21}>
          <div className="flex flex-col items-center gap-1.5 pt-2">
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-xs leading-[1.6] text-[var(--color-text-muted)] opacity-70">
              {SCROLL_CUE_PHRASES.map((phrase, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className="th-phrase">{phrase}</span>
                </Fragment>
              ))}
            </p>
            <ArrowDown
              className="h-4 w-4 text-[var(--color-text-muted)] opacity-60"
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
