import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { outcome } from "@/lib/data";
import { thaiWrap } from "@/lib/thaiWrap";

export function Outcome() {
  return (
    <Section id="outcome" tab="S4 · OUTCOME" tone="cream">
      <div className="space-y-8">
        <ScrollReveal>
          <SectionHeading size="lg" className="th-heading">
            {thaiWrap(outcome.intro)}
          </SectionHeading>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <figure className="flex h-full min-w-0 flex-col gap-4 border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
                {/* Pull-quote first */}
                <blockquote className="th-text font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.55] text-[var(--color-navy-900)]">
                  &ldquo;{thaiWrap(t.pullQuote)}&rdquo;
                </blockquote>

                {/* Identity */}
                <figcaption className="space-y-1">
                  <p className="th-heading font-[family-name:var(--font-kanit)] font-bold text-[var(--color-navy-500)]">
                    {thaiWrap(t.name)}
                  </p>
                  <p className="th-text text-sm text-[var(--color-text-muted)]">
                    {thaiWrap(t.bio)}
                  </p>
                  <p className="th-text text-sm text-[var(--color-text-muted)]">
                    ▼ {thaiWrap(t.changePoint)}
                  </p>
                </figcaption>

                {/* Proof image — last */}
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="mt-auto h-auto w-full"
                  {...(t.id === 1 ? { priority: true } : { loading: "lazy" })}
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.45}>
          <p className="th-text text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)]">
            {thaiWrap(outcome.bridge)}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
