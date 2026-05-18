import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";
import { outcome } from "@/lib/data";

export function Outcome() {
  return (
    <Section id="outcome" tab="S4 · OUTCOME" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
            {outcome.intro}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <figure
                className={[
                  "border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-navy-600)] p-6",
                  "shadow-[3px_3px_0_rgba(221,176,73,0.90)]",
                ].join(" ")}
              >
                <Quote
                  className="mb-3 text-[var(--color-amber-500)]"
                  size={20}
                  aria-hidden="true"
                />
                <blockquote className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-cream)]">
                  {t.quote}
                </blockquote>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
