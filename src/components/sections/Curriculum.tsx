"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { curriculum, cta } from "@/lib/data";

function ArrowButton({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-beige-400)]",
        "bg-[var(--color-cream-50)] text-[var(--color-charcoal-900)] shadow-[var(--shadow-soft)]",
        "transition-all duration-200",
        "hover:bg-[var(--color-charcoal-900)] hover:text-[var(--color-cream-50)] hover:border-[var(--color-charcoal-900)]",
        "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-cream-50)] disabled:hover:text-[var(--color-charcoal-900)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-coral-500)] focus-visible:ring-offset-2"
      )}
    >
      {children}
    </button>
  );
}

function ChapterCard({
  id,
  title,
  summary,
}: {
  id: number;
  title: string;
  summary: string;
}) {
  return (
    <article
      data-card=""
      className={cn(
        "snap-start shrink-0",
        "w-[78vw] sm:w-[62vw] md:w-[44vw] lg:w-[320px]",
        "rounded-[var(--radius-xl)] border border-[var(--color-beige-300)] bg-[var(--color-cream-50)]",
        "p-6 lg:p-7 shadow-[var(--shadow-soft)]",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-elev)] hover:border-[var(--color-coral-500)]"
      )}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-sm font-bold text-[var(--color-coral-500)]">
          {String(id).padStart(2, "0")}/07
        </span>
        <span aria-hidden="true">📕</span>
      </div>
      <h3 className="mt-4 text-lg lg:text-xl font-bold leading-snug text-[var(--color-charcoal-900)]">
        {title}
      </h3>
      <p className="mt-3 text-sm lg:text-base leading-relaxed text-[var(--color-charcoal-700)]">
        {summary}
      </p>
    </article>
  );
}

function BonusCard({ items }: { items: readonly string[] }) {
  return (
    <article
      data-card=""
      className={cn(
        "snap-start shrink-0",
        "w-[78vw] sm:w-[62vw] md:w-[44vw] lg:w-[360px]",
        "rounded-[var(--radius-xl)]",
        "bg-[var(--color-charcoal-900)] text-[var(--color-cream-50)]",
        "p-6 lg:p-7 shadow-[var(--shadow-elev)] ring-1 ring-[var(--color-coral-500)]/30"
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-coral-500)]/20 text-[var(--color-coral-400)]">
          <Gift className="h-4 w-4" />
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-coral-400)]">
          BONUS
        </span>
      </div>
      <h3 className="mt-4 text-lg lg:text-xl font-bold leading-snug">
        ภาคผนวก (รวมอยู่ในเล่ม)
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm lg:text-base leading-relaxed text-[var(--color-cream-100)]">
        {items.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="shrink-0 text-[var(--color-coral-400)]">
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Curriculum() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // handle font-load timing
    void document.fonts.ready.then(update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByDir = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <Section id="curriculum" tone="default">
      <Container>
        <ScrollReveal>
          <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>O · What&apos;s Inside</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
                {curriculum.title}
              </h2>
            </div>

            {/* Arrow controls — desktop only */}
            <div className="hidden lg:flex gap-2">
              <ArrowButton onClick={() => scrollByDir(-1)} disabled={!canPrev} label="ก่อนหน้า">
                <ChevronLeft className="h-5 w-5" />
              </ArrowButton>
              <ArrowButton onClick={() => scrollByDir(1)} disabled={!canNext} label="ถัดไป">
                <ChevronRight className="h-5 w-5" />
              </ArrowButton>
            </div>
          </header>
        </ScrollReveal>

        {/* Horizontal scroller */}
        <div className="relative mt-10 lg:mt-14 -mx-5 sm:-mx-6 lg:mx-0">
          <div
            ref={scrollRef}
            role="region"
            aria-label="หลักสูตร 7 ภาค"
            tabIndex={0}
            className={cn(
              "flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory",
              "px-5 sm:px-6 lg:px-0",
              "pb-4",
              "[scrollbar-width:none] [-ms-overflow-style:none]",
              "[&::-webkit-scrollbar]:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-coral-500)]"
            )}
          >
            {curriculum.chapters.map((ch) => (
              <ChapterCard key={ch.id} id={ch.id} title={ch.title} summary={ch.summary} />
            ))}
            <BonusCard items={curriculum.bonus} />
          </div>

          {/* Edge fade — desktop only */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-[var(--color-cream-100)] to-transparent lg:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-[var(--color-cream-100)] to-transparent lg:block"
            aria-hidden="true"
          />
        </div>

        {/* Inline CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 lg:mt-12 flex justify-center">
            <CTAButton variant="line" size="lg" href={cta.lineUrl}>
              {cta.inlinePreviewLabel}
            </CTAButton>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
