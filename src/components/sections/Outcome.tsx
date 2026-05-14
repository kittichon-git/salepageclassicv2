import { Check, Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { outcome } from "@/lib/data";

function OutcomeBullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3 lg:gap-4 text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-900)]">
      <span
        className={cn(
          "mt-1 inline-flex h-6 w-6 lg:h-7 lg:w-7 shrink-0 items-center justify-center rounded-full",
          "bg-[var(--color-coral-500)]/15 text-[var(--color-coral-600)]"
        )}
        aria-hidden="true"
      >
        <Check className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={3} />
      </span>
      {text}
    </li>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-beige-300)] bg-[var(--color-cream-50)]",
        "p-6 lg:p-7 shadow-[var(--shadow-soft)]",
        "relative"
      )}
    >
      <Quote
        className="absolute -top-3 left-6 h-6 w-6 text-[var(--color-coral-500)] bg-[var(--color-cream-100)] px-1"
        aria-hidden="true"
      />
      <blockquote className="text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-900)] italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-[var(--color-charcoal-700)] not-italic">
        — {author}
      </figcaption>
    </figure>
  );
}

export function Outcome() {
  return (
    <Section id="outcome" tone="default">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>O · Outcome + Proof</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              {outcome.title}
            </h2>
          </header>
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid gap-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left: outcome bullets */}
          <ScrollReveal>
            <ul className="space-y-4 lg:space-y-5">
              {outcome.bullets.map((text, i) => (
                <OutcomeBullet key={i} text={text} />
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: testimonial cards */}
          <div className="space-y-4 lg:space-y-5">
            {outcome.testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TestimonialCard quote={t.quote} author={t.author} />
              </ScrollReveal>
            ))}
            <p className="mt-6 text-xs text-[var(--color-charcoal-500)]">
              * Testimonial เป็น placeholder ตามโครงสเปก จะอัปเดตด้วยผลจริงก่อน launch
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
