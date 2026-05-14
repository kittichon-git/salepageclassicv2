import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, Quote } from "lucide-react";
import { outcome } from "@/lib/data";

export function Outcome() {
  return (
    <Section id="outcome" tab="S4 · OUTCOME" tone="cream">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: heading + outcome bullets */}
        <div className="space-y-6">
          <ScrollReveal>
            <h2
              className="font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-navy-500)]"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
            >
              {outcome.heading}
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {outcome.outcomes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-3 border-b border-[rgba(35,49,73,0.16)] pb-3 last:border-0">
                  <Check
                    className="mt-0.5 shrink-0 text-[var(--color-teal-500)]"
                    size={20}
                    aria-hidden="true"
                    strokeWidth={2.5}
                  />
                  <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-navy-500)]">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: testimonial cards — dark navy */}
        <div className="space-y-4">
          {outcome.testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
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
                <figcaption className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-amber-400)]">
                  {t.author} — {t.role}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-6 font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[var(--color-text-muted)]">
        * {outcome.disclaimer}
      </p>
    </Section>
  );
}
