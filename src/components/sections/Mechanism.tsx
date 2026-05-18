import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mechanism } from "@/lib/data";

export function Mechanism() {
  return (
    <Section id="mechanism" tab="S3 · MECHANISM" tone="paper">
      <div className="space-y-8">
        <ScrollReveal>
          <SectionHeading as="h3" size="md">
            {mechanism.leadIn}
          </SectionHeading>
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
                  {step.n}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-kanit)] text-lg font-bold leading-[1.3] text-[var(--color-navy-500)]">
                    {i === 0
                      ? <>หยุดนิ้วคนดูให้ได้ภายใน <span className="whitespace-nowrap">3 วิ</span></>
                      : step.title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
                    {step.body}
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
