import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Minus } from "lucide-react";
import { fit } from "@/lib/data";
import { thaiWrap } from "@/lib/thaiWrap";

export function Fit() {
  return (
    <Section id="fit" tab="S5 · FIT" tone="paper">
      <div className="space-y-8">
        <ScrollReveal>
          <SectionHeading as="h3" size="md" className="th-heading">
            {thaiWrap(fit.intro)}
          </SectionHeading>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* For */}
          <ScrollReveal delay={0.06}>
            <div
              className={[
                "h-full border-[1.5px] border-[var(--color-teal-500)] p-6",
                "bg-[var(--color-teal-50)]",
              ].join(" ")}
            >
              <h3 className="th-heading mb-4 font-[family-name:var(--font-kanit)] text-lg font-bold text-[var(--color-navy-500)]">
                ✅ {fit.for.heading}
              </h3>
              <ul className="space-y-3">
                {fit.for.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check
                      className="mt-0.5 shrink-0 text-[var(--color-teal-500)]"
                      size={18}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)]">
                      {thaiWrap(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Not for */}
          <ScrollReveal delay={0.12}>
            <div
              className={[
                "h-full border-[1.5px] border-[var(--color-navy-500)] p-6",
                "bg-[var(--color-cream)]",
              ].join(" ")}
            >
              <h3 className="th-heading mb-4 font-[family-name:var(--font-kanit)] text-lg font-bold text-[var(--color-navy-500)]">
                ❌ {fit.notFor.heading}
              </h3>
              <ul className="space-y-3">
                {fit.notFor.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Minus
                      className="mt-0.5 shrink-0 text-[var(--color-text-muted)]"
                      size={18}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
                      {thaiWrap(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
