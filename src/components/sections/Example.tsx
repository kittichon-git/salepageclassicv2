import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { example } from "@/lib/data";
import { thaiWrap } from "@/lib/thaiWrap";

export function Example() {
  return (
    <Section id="example" tab="S1 · EXAMPLE" tone="cream">
      <div className="space-y-8">
        {/* Heading */}
        <ScrollReveal>
          <SectionHeading as="h3" size="md" className="th-heading">
            {thaiWrap(example.heading)}
          </SectionHeading>
        </ScrollReveal>

        {/* Story — 3 lines */}
        <ScrollReveal delay={0.05}>
          <div className="space-y-2">
            {example.story.map((line, i) => (
              <p
                key={i}
                className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]"
              >
                {thaiWrap(line)}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Before / After cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Before */}
            <div className="min-w-0 border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
              <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                ❌ ที่ใช้อยู่
              </div>
              <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)]">
                {thaiWrap(example.before)}
              </p>
            </div>

            {/* After */}
            <div className="min-w-0 border-[1.5px] border-[var(--color-teal-500)] bg-[var(--color-teal-50)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
              <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider text-[var(--color-teal-500)]">
                ✅ ที่ใช้แทน
              </div>
              <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)]">
                {thaiWrap(example.after)}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Punch line — most prominent */}
        <ScrollReveal delay={0.15}>
          <p className="th-heading text-center font-[family-name:var(--font-kanit)] text-xl font-extrabold leading-[1.3] text-[var(--color-navy-900)] sm:text-2xl">
            {thaiWrap(example.punch)}
          </p>
        </ScrollReveal>

        {/* Depth signal */}
        <ScrollReveal delay={0.18}>
          <p className="th-text text-center font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)]">
            {thaiWrap(example.depthSignal)}
          </p>
        </ScrollReveal>

        {/* Open-loop bridge */}
        <ScrollReveal delay={0.2}>
          <p className="th-text text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)]">
            {thaiWrap(example.bridge)}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
