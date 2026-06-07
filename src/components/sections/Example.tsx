import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { example } from "@/lib/data";

export function Example() {
  return (
    <Section id="example" tab="S1 · EXAMPLE" tone="cream">
      <div className="space-y-8">
        {/* Heading */}
        <ScrollReveal>
          <SectionHeading as="h3" size="md">
            {example.heading}
          </SectionHeading>
        </ScrollReveal>

        {/* Story — 3 lines */}
        <ScrollReveal delay={0.05}>
          <div className="space-y-2">
            {example.story.map((line, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)] [overflow-wrap:break-word]"
              >
                {line}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Before / After cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Before */}
            <div className="border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
              <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                ❌ ที่ใช้อยู่
              </div>
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)] [overflow-wrap:break-word]">
                {example.before}
              </p>
            </div>

            {/* After */}
            <div className="border-[1.5px] border-[var(--color-teal-500)] bg-[var(--color-teal-50)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
              <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-wider text-[var(--color-teal-500)]">
                ✅ ที่ใช้แทน
              </div>
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)] [overflow-wrap:break-word]">
                {example.after}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Punch line — most prominent */}
        <ScrollReveal delay={0.15}>
          <p className="text-center font-[family-name:var(--font-kanit)] text-xl font-extrabold leading-[1.3] text-[var(--color-navy-900)] [overflow-wrap:break-word] sm:text-2xl">
            {example.punch}
          </p>
        </ScrollReveal>

        {/* Depth signal */}
        <ScrollReveal delay={0.18}>
          <p className="text-center font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)] [overflow-wrap:break-word]">
            {example.depthSignal}
          </p>
        </ScrollReveal>

        {/* Open-loop bridge */}
        <ScrollReveal delay={0.2}>
          <p className="text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)] [overflow-wrap:break-word]">
            {example.bridge}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
