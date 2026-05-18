"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { curriculum, cta } from "@/lib/data";

export function Curriculum() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  }

  return (
    <Section id="inside" tab="S6 · CURRICULUM" tone="cream">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <ScrollReveal>
            <div className="space-y-1">
              <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-3xl sm:text-4xl lg:text-5xl">
                {curriculum.title}
              </h2>
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm text-[var(--color-text-muted)]">
                {curriculum.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Arrow controls — desktop only */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="เลื่อนซ้าย"
              className="border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-2 shadow-[2px_2px_0_rgba(35,49,73,0.48)] transition-transform hover:-translate-y-0.5"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="เลื่อนขวา"
              className="border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-2 shadow-[2px_2px_0_rgba(35,49,73,0.48)] transition-transform hover:-translate-y-0.5"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="หลักสูตร 7 ภาค"
          tabIndex={0}
          className="-mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {curriculum.chapters.map((ch, i) => (
              <div
                key={i}
                className={[
                  "w-[280px] snap-start sm:w-[320px]",
                  "border-[1.5px] border-[var(--color-navy-500)]",
                  "bg-[var(--color-paper)] p-6",
                  "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
                ].join(" ")}
              >
                {/* Chapter badge */}
                <div className="mb-4 inline-block bg-[var(--color-teal-500)] px-3 py-1 font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-cream)]">
                  ภาค {ch.no}
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-kanit)] text-lg font-bold leading-[1.3] text-[var(--color-navy-500)]">
                  {ch.name}
                </h3>
                <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-text-muted)]">
                  {ch.detail}
                </p>
              </div>
            ))}

            {/* Bonus card */}
            <div
              className={[
                "w-[280px] snap-start sm:w-[320px]",
                "border-[1.5px] border-[var(--color-navy-500)]",
                "bg-[var(--color-amber-400)] p-6",
                "shadow-[3px_3px_0_rgba(35,49,73,0.48)]",
              ].join(" ")}
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles
                  size={18}
                  className="text-[var(--color-navy-500)]"
                  aria-hidden="true"
                />
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-navy-500)]">
                  ภาคผนวก
                </span>
              </div>
              <ul className="space-y-2">
                {curriculum.bonuses.map((b, i) => (
                  <li
                    key={i}
                    className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-500)]"
                  >
                    {b.code} · {b.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bonus strip + inline CTA */}
        <div
          className={[
            "border-[1.5px] border-[var(--color-navy-500)]",
            "bg-[var(--color-navy-600)] px-6 py-5",
            "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            <Sparkles
              size={20}
              className="shrink-0 text-[var(--color-amber-400)]"
              aria-hidden="true"
            />
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-cream)]">
              {curriculum.bonusHeading}{" "}
              {curriculum.bonuses.map((b) => `${b.code} · ${b.name}`).join("  ·  ")}
            </p>
          </div>
          <CTAButton href={cta.lineUrl} variant="line" size="md" showIcon className="shrink-0">
            {cta.finalLabel}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
