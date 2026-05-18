import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { outcome } from "@/lib/data";

export function Outcome() {
  return (
    <Section id="outcome" tab="S4 · OUTCOME" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <SectionHeading size="lg">
            {outcome.intro}
          </SectionHeading>
        </ScrollReveal>

        {/* Row 1: 3 placeholders */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <figure className="flex flex-col gap-3">
                <div
                  className={[
                    "relative aspect-[4/5]",
                    "border-[1.5px] border-dashed border-[var(--color-navy-500)]",
                    "bg-[var(--color-cream)]",
                    "flex items-center justify-center",
                  ].join(" ")}
                  role="img"
                  aria-label={`ช่องสำหรับรูปลูกค้า #${t.id}`}
                >
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--color-text-muted)]">
                    ช่องสำหรับรูปลูกค้า #{t.id}
                  </span>
                </div>
                <figcaption className="font-[family-name:var(--font-bai-jamjuree)] text-[15px] leading-[1.6] text-balance text-[var(--color-navy-500)]">
                  &ldquo;{t.quote}&rdquo;
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: 2 placeholders centered */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto">
          {outcome.testimonials.slice(3).map((t, i) => (
            <ScrollReveal key={t.id} delay={(i + 3) * 0.08}>
              <figure className="flex flex-col gap-3">
                <div
                  className={[
                    "relative aspect-[4/5]",
                    "border-[1.5px] border-dashed border-[var(--color-navy-500)]",
                    "bg-[var(--color-cream)]",
                    "flex items-center justify-center",
                  ].join(" ")}
                  role="img"
                  aria-label={`ช่องสำหรับรูปลูกค้า #${t.id}`}
                >
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--color-text-muted)]">
                    ช่องสำหรับรูปลูกค้า #{t.id}
                  </span>
                </div>
                <figcaption className="font-[family-name:var(--font-bai-jamjuree)] text-[15px] leading-[1.6] text-balance text-[var(--color-navy-500)]">
                  &ldquo;{t.quote}&rdquo;
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
