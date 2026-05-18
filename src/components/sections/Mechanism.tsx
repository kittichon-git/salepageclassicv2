import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mechanism } from "@/lib/data";

const RMOTRA_LETTERS = ["R", "M", "O", "T", "R", "A"];

export function Mechanism() {
  return (
    <Section id="mechanism" tab="S3 · MECHANISM" tone="paper">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: heading + steps */}
        <div className="space-y-8">
          <ScrollReveal>
            <div className="space-y-3">
              <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
                {mechanism.intro}
              </h2>
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.6] text-[var(--color-navy-500)]">
                {mechanism.leadIn}
              </p>
            </div>
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
              {mechanism.framework.map((label, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <div
                    className={[
                      "flex w-full items-center gap-3 px-4 py-3",
                      "border-[1.5px] border-[var(--color-amber-500)]",
                      "bg-[var(--color-navy-500)]",
                    ].join(" ")}
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-extrabold text-[var(--color-amber-400)] w-8">
                      {RMOTRA_LETTERS[i]}
                    </span>
                    <span className="font-[family-name:var(--font-bai-jamjuree)] text-xs text-[var(--color-cream)]">
                      {label}
                    </span>
                  </div>
                  {i < mechanism.framework.length - 1 && (
                    <div className="text-[var(--color-amber-500)] font-bold leading-none py-0.5">
                      ↓
                    </div>
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
