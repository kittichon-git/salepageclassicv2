"use client";

import { Fragment, useRef, useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { curriculum, cta } from "@/lib/data";

const ARC_LABELS = [
  "เข้าใจลูกค้า",
  "วัดผลคำ",
  "เปิดให้หยุด",
  "วางโครงให้อ่านจบ",
  "เลือกคำให้อยากได้",
  "ปิดการขาย",
  "เร่งด้วย AI",
] as const;

const TOTAL_CARDS = curriculum.chapters.length + 1; // +1 bonus card

export function Curriculum() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    const cardsEl = cardsRef.current;
    if (!container || !cardsEl) return;

    const cardEls = Array.from(cardsEl.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let maxIdx = -1;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIdx = cardEls.indexOf(entry.target as HTMLElement);
          }
        });
        if (maxIdx !== -1) setActiveIndex(maxIdx);
      },
      { root: container, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    cardEls.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  }

  function scrollToIndex(i: number) {
    const cardsEl = cardsRef.current;
    if (!cardsEl) return;
    const card = cardsEl.children[i] as HTMLElement | undefined;
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }

  return (
    <Section id="inside" tab="S6 · CURRICULUM" tone="cream">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
          <ScrollReveal>
            <div className="space-y-2">
              <SectionHeading as="h2" size="sm">
                {curriculum.title}
              </SectionHeading>
              <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)]">
                {curriculum.intro}
              </p>

              {/* Arc bar — learning path */}
              <div
                className="overflow-x-auto pt-1"
                style={{ scrollbarWidth: "none" }}
              >
                <div className="flex items-center gap-1 whitespace-nowrap">
                  {ARC_LABELS.map((label, i) => (
                    <Fragment key={label}>
                      <span className="font-[family-name:var(--font-bai-jamjuree)] text-[11px] text-[var(--color-text-muted)] opacity-60">
                        {label}
                      </span>
                      {i < ARC_LABELS.length - 1 && (
                        <ChevronRight
                          className="h-2.5 w-2.5 flex-shrink-0 text-[var(--color-text-muted)] opacity-40"
                          aria-hidden="true"
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          </div>

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
          <div ref={cardsRef} className="flex items-stretch gap-4" style={{ width: "max-content" }}>
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
                  {ch.n}
                </div>
                <h3 className="mb-2 break-words font-[family-name:var(--font-kanit)] text-lg font-bold leading-[1.3] text-[var(--color-navy-500)] [overflow-wrap:anywhere]">
                  {ch.title}
                </h3>
                <p className="break-words font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.6] text-[var(--color-text-muted)] [overflow-wrap:anywhere]">
                  {ch.body}
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
                    className="break-words font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-500)] [overflow-wrap:anywhere]"
                  >
                    <span className="font-bold">{b.code}</span>
                    {" · "}
                    {b.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          className="flex items-center justify-center gap-2"
          role="tablist"
          aria-label="ภาคของหลักสูตร"
        >
          {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              onClick={() => scrollToIndex(i)}
              aria-label={
                i < curriculum.chapters.length
                  ? (curriculum.chapters[i]?.n ?? `ภาค ${i + 1}`)
                  : "ภาคผนวก"
              }
              aria-selected={activeIndex === i}
              className={cn(
                "h-2 transition-all duration-200",
                activeIndex === i
                  ? "w-6 bg-[var(--color-terracotta)] scale-125"
                  : "w-2 bg-[var(--color-navy-100)]",
              )}
            />
          ))}
        </div>

        {/* Bonus strip + inline CTA */}
        <div
          className={[
            "border-[1.5px] border-[var(--color-navy-500)]",
            "bg-[var(--color-navy-600)] px-6 py-5",
            "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
          ].join(" ")}
        >
          <div className="flex flex-col gap-3">
            <p className="font-[family-name:var(--font-bai-jamjuree)] text-sm font-bold leading-[1.55] text-[var(--color-amber-400)]">
              {curriculum.bonusHeading}
            </p>
            <ul className="space-y-1.5">
              {curriculum.bonuses.map((b) => (
                <li
                  key={b.code}
                  className="font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-cream)]"
                >
                  <span className="font-bold text-[var(--color-amber-400)]">{b.code}</span>
                  {" · "}
                  {b.name}
                </li>
              ))}
            </ul>
          </div>
          <CTAButton href={cta.lineUrl} variant="line" size="md" showIcon trackingLocation="offer" className="shrink-0">
            {cta.finalLabel}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
