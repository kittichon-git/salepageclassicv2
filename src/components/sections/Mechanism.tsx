import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mechanism } from "@/lib/data";

export function Mechanism() {
  return (
    <Section id="mechanism" tab="S3 · MECHANISM" tone="paper">
      <div className="space-y-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
            {mechanism.leadIn}
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {mechanism.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={[
                  "flex gap-4 border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-paper)] p-5",
                  "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
                ].join(" ")}
              >
                {/* Amber number badge */}
                <div className="shrink-0 bg-[var(--color-amber-500)] px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-sm font-extrabold text-[var(--color-navy-500)] self-start">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-kanit)] text-lg font-bold leading-[1.3] text-[var(--color-navy-500)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-text-muted)]">
                    {step.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
