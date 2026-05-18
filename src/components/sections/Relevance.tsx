import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { relevance } from "@/lib/data";

export function Relevance() {
  return (
    <Section id="relevance" tab="S2 · RELEVANCE" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
            {relevance.leadIn}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relevance.pains.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className={[
                  "h-full border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-paper)] p-6",
                  "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
                  "transition-transform duration-150 hover:-translate-y-0.5",
                ].join(" ")}
              >
                {/* Number badge */}
                <div className="mb-4 inline-block bg-[var(--color-amber-500)] px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold text-[var(--color-navy-500)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-navy-500)]">
                  {pain}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Story close */}
        <ScrollReveal delay={0.1}>
          <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-text-muted)] border-l-4 border-[var(--color-amber-500)] pl-5">
            {relevance.story}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
