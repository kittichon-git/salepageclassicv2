import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BadgeCheck } from "lucide-react";
import { instructor } from "@/lib/data";

export function Instructor() {
  return (
    <Section id="instructor" tab="S7 · INSTRUCTOR" tone="paper">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[160px_1fr]">
        {/* Portrait placeholder */}
        <ScrollReveal>
          <div
            className={[
              "flex h-40 w-40 items-center justify-center lg:h-40 lg:w-40",
              "bg-gradient-to-br from-[var(--color-navy-600)] to-[var(--color-teal-500)]",
              "border-[1.5px] border-[var(--color-navy-500)]",
              "shadow-[3px_3px_0_rgba(221,176,73,0.85)]",
              "mx-auto lg:mx-0",
            ].join(" ")}
            aria-label={`ภาพ ${instructor.name}`}
          >
            <span
              className="font-[family-name:var(--font-kanit)] text-7xl font-black text-[var(--color-cream)]"
              aria-hidden="true"
            >
              {instructor.initial}
            </span>
          </div>
        </ScrollReveal>

        {/* Story + credentials */}
        <div className="space-y-6">
          <ScrollReveal delay={0.06}>
            <h2
              className="font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-navy-500)]"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.375rem)" }}
            >
              {instructor.heading}
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {instructor.story.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.06}>
                <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-navy-500)]">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Credentials */}
          <ScrollReveal delay={0.28}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {instructor.credentials.map((cred, i) => (
                <div
                  key={i}
                  className={[
                    "flex items-center gap-2",
                    "border-[1.5px] border-[var(--color-navy-500)]",
                    "bg-[var(--color-amber-400)] px-3 py-2",
                    "shadow-[2px_2px_0_rgba(35,49,73,0.48)]",
                  ].join(" ")}
                >
                  <BadgeCheck
                    size={16}
                    className="shrink-0 text-[var(--color-navy-500)]"
                    aria-hidden="true"
                  />
                  <span className="font-[family-name:var(--font-bai-jamjuree)] text-sm font-semibold text-[var(--color-navy-500)]">
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
