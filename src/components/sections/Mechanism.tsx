import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mechanism } from "@/lib/data";

const RMOTRA_STEPS = ["R", "M", "O", "T", "R", "A"];

export function Mechanism() {
  return (
    <Section id="mechanism" tab="S3 · MECHANISM" tone="paper">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: heading + steps */}
        <div className="space-y-8">
          <ScrollReveal>
            <h2
              className="font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-navy-500)]"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
            >
              {mechanism.heading}
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
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-kanit)] text-lg font-bold tracking-[-0.035em] text-[var(--color-navy-500)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-text-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tagline */}
          <ScrollReveal delay={0.25}>
            <div className="border-l-4 border-[var(--color-teal-500)] pl-4">
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-lg font-semibold italic leading-[1.55] text-[var(--color-navy-500)]">
                {mechanism.tagline}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: R-MOTRA brutalist diagram */}
        <ScrollReveal delay={0.1}>
          <div
            className={[
              "flex flex-col items-center justify-center gap-0",
              "border-[1.5px] border-[var(--color-navy-500)]",
              "bg-[var(--color-navy-600)] p-8",
              "shadow-[5px_5px_0_rgba(35,49,73,0.62)]",
            ].join(" ")}
          >
            <div className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-amber-400)]">
              Framework R-MOTRA
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              {RMOTRA_STEPS.map((letter, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <div
                    className={[
                      "flex w-full items-center gap-3 px-4 py-3",
                      "border-[1.5px] border-[var(--color-amber-500)]",
                      "bg-[var(--color-navy-500)]",
                    ].join(" ")}
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-extrabold text-[var(--color-amber-400)] w-8">
                      {letter}
                    </span>
                    <span className="font-[family-name:var(--font-bai-jamjuree)] text-xs text-[var(--color-cream)]">
                      {
                        [
                          "Relevance",
                          "Mechanism",
                          "Outcome",
                          "Trust",
                          "Risk Reversal",
                          "Action",
                        ][i]
                      }
                    </span>
                  </div>
                  {i < RMOTRA_STEPS.length - 1 && (
                    <div className="text-[var(--color-amber-500)] font-bold leading-none py-0.5">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
