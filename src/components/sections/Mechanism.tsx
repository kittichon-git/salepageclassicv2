import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mechanism } from "@/lib/data";
import { thaiWrap } from "@/lib/thaiWrap";

export function Mechanism() {
  return (
    <Section id="mechanism" tab="S3 · MECHANISM" tone="paper">
      <div className="space-y-8">
        <ScrollReveal>
          <SectionHeading as="h3" size="md" className="th-heading">
            {thaiWrap(mechanism.leadIn)}
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
                <div className="shrink-0 self-start bg-[var(--color-amber-500)] px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-sm font-extrabold text-[var(--color-navy-500)]">
                  {step.n}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="th-heading font-[family-name:var(--font-kanit)] text-lg font-bold leading-[1.3] text-[var(--color-navy-500)]">
                    {thaiWrap(step.title)}
                  </h3>
                  <p className="th-text mt-1 font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)]">
                    {thaiWrap(step.body)}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="th-text font-[family-name:var(--font-bai-jamjuree)] text-sm text-[var(--color-text-muted)]">
                      ❌ &ldquo;{thaiWrap(step.example.before)}&rdquo;
                    </span>
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--color-text-muted)]">
                      →
                    </span>
                    <span className="th-text font-[family-name:var(--font-bai-jamjuree)] text-sm text-[var(--color-navy-500)]">
                      ✅ &ldquo;{thaiWrap(step.example.after)}&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35}>
          <p className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base text-[var(--color-navy-500)]">
            {thaiWrap(mechanism.closing)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="th-text text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)]">
            {thaiWrap(mechanism.bridge)}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
