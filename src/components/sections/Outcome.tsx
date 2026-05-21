import Image from "next/image";
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

        {/* Row 1: 3 testimonials */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <figure className="flex flex-col gap-3">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    {...(t.id === 1 ? { priority: true } : { loading: "lazy" })}
                  />
                </div>
                <figcaption className="space-y-1">
                  <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-navy-900)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{t.bio}</p>
                  <blockquote className="font-[family-name:var(--font-bai-jamjuree)] text-[15px] leading-[1.6] text-[var(--color-navy-500)] italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: 2 testimonials centered */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto">
          {outcome.testimonials.slice(3).map((t, i) => (
            <ScrollReveal key={t.id} delay={(i + 3) * 0.08}>
              <figure className="flex flex-col gap-3">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    loading="lazy"
                  />
                </div>
                <figcaption className="space-y-1">
                  <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-navy-900)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{t.bio}</p>
                  <blockquote className="font-[family-name:var(--font-bai-jamjuree)] text-[15px] leading-[1.6] text-[var(--color-navy-500)] italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
