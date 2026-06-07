import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { relevance } from "@/lib/data";

export function Relevance() {
  return (
    <Section id="relevance" tab="S2 · RELEVANCE" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <div className="space-y-3">
            <SectionHeading as="h3" size="md">
              {relevance.heading}
            </SectionHeading>
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
              {relevance.intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relevance.pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <div
                className={[
                  "flex h-full min-h-0 flex-col border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-paper)] p-6",
                  "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
                  "transition-transform duration-150 hover:-translate-y-0.5",
                ].join(" ")}
              >
                <div className="mb-4 inline-block self-start bg-[var(--color-amber-500)] px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold text-[var(--color-navy-500)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mb-2 font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.55] text-[var(--color-navy-500)] [overflow-wrap:break-word]">
                  {pain.symptom}
                </p>
                <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)] [overflow-wrap:break-word]">
                  {pain.diagnosis}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35}>
          <p className="mt-6 text-center font-[family-name:var(--font-bai-jamjuree)] text-base font-bold text-[var(--color-navy-500)] [overflow-wrap:break-word]">
            {relevance.closing}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
