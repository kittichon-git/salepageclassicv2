import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contextBlock } from "@/lib/data";

export function ContextBlock() {
  return (
    <Section id="context" tone="cream">
      <div className="mx-auto max-w-[640px] space-y-5">
        {/* Intro lines */}
        <ScrollReveal>
          <div className="space-y-0.5">
            {contextBlock.title.map((line, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-kanit)] text-lg font-semibold leading-[1.4] text-[var(--color-navy-900)]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Body — intro + bullets */}
        <ScrollReveal delay={0.06}>
          <div className="space-y-2">
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-700)]">
              {contextBlock.body[0]}
            </p>
            <ul className="space-y-1.5">
              {contextBlock.body.slice(1).map((bullet, i) => (
                <li
                  key={i}
                  className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-700)]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Contrast block */}
        <ScrollReveal delay={0.1}>
          <div className="border-t border-[rgba(35,49,73,0.16)] pt-5 space-y-2">
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-700)]">
              บางอย่างเราคุมไม่ได้:
            </p>
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
              {contextBlock.contrast.uncontrollable[0]}
            </p>
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-700)]">
              {contextBlock.contrast.controllable}
            </p>
          </div>
        </ScrollReveal>

        {/* Closing */}
        <ScrollReveal delay={0.14}>
          <p className="font-[family-name:var(--font-bai-jamjuree)] text-base font-semibold leading-[1.6] text-[var(--color-terracotta)]">
            {contextBlock.closing}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
