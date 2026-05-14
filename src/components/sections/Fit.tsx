import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, Minus } from "lucide-react";
import { fit } from "@/lib/data";

export function Fit() {
  return (
    <Section id="fit" tab="S5 · FIT" tone="paper">
      <div className="space-y-8">
        <ScrollReveal>
          <h2
            className="font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-navy-500)]"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
          >
            {fit.heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Positive */}
          <ScrollReveal delay={0.06}>
            <div
              className={[
                "h-full border-[1.5px] border-[var(--color-teal-500)] p-6",
                "bg-[var(--color-teal-50)]",
              ].join(" ")}
            >
              <h3 className="mb-4 font-[family-name:var(--font-kanit)] text-lg font-bold text-[var(--color-navy-500)]">
                ✅ {fit.positive.heading}
              </h3>
              <ul className="space-y-3">
                {fit.positive.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check
                      className="mt-0.5 shrink-0 text-[var(--color-teal-500)]"
                      size={18}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-500)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Negative */}
          <ScrollReveal delay={0.12}>
            <div
              className={[
                "h-full border-[1.5px] border-[var(--color-navy-500)] p-6",
                "bg-[var(--color-cream)]",
              ].join(" ")}
            >
              <h3 className="mb-4 font-[family-name:var(--font-kanit)] text-lg font-bold text-[var(--color-navy-500)]">
                ❌ {fit.negative.heading}
              </h3>
              <ul className="space-y-3">
                {fit.negative.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Minus
                      className="mt-0.5 shrink-0 text-[var(--color-text-muted)]"
                      size={18}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-text-muted)]">
                      {item}
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
