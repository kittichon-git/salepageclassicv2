import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { relevance } from "@/lib/data";
import { thaiWrap } from "@/lib/thaiWrap";

// Phrase split for S2 heading — prevents break between [ถ้าโพสต์ยังเงียบ] and [ปัญหาอาจไม่ใช่สินค้า]
const RELEVANCE_HEADING_PHRASES = ["ถ้าโพสต์ยังเงียบ", "ปัญหาอาจไม่ใช่สินค้า"] as const;

export function Relevance() {
  return (
    <Section id="relevance" tab="S2 · RELEVANCE" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <div className="space-y-3">
            <SectionHeading as="h3" size="md" className="th-heading">
              <span className="th-phrase">{RELEVANCE_HEADING_PHRASES[0]}</span>{" "}
              <span className="th-phrase">{RELEVANCE_HEADING_PHRASES[1]}</span>
            </SectionHeading>
            <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
              {thaiWrap(relevance.intro)}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.6] text-[var(--color-navy-500)]">
            {thaiWrap(relevance.cardsLead)}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relevance.pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <div
                className={[
                  "flex h-full min-h-0 min-w-0 flex-col border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-paper)] p-6",
                  "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
                  "transition-transform duration-150 hover:-translate-y-0.5",
                ].join(" ")}
              >
                <div className="mb-4 inline-block self-start bg-[var(--color-amber-500)] px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold text-[var(--color-navy-500)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="th-text mb-2 font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.55] text-[var(--color-navy-500)]">
                  {thaiWrap(pain.symptom)}
                </p>
                <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)]">
                  {thaiWrap(pain.diagnosis)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35}>
          <p className="th-text mt-6 text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)]">
            {thaiWrap(relevance.closing)}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
