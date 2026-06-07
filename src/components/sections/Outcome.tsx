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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-4 border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-paper)] p-5 shadow-[3px_3px_0_rgba(35,49,73,0.48)]">
                {/* Pull-quote first */}
                <blockquote className="font-[family-name:var(--font-bai-jamjuree)] text-base font-bold leading-[1.55] text-[var(--color-navy-900)] [overflow-wrap:break-word]">
                  &ldquo;{t.pullQuote}&rdquo;
                </blockquote>

                {/* Identity */}
                <figcaption className="space-y-1">
                  <p className="font-[family-name:var(--font-kanit)] font-bold text-[var(--color-navy-500)] [overflow-wrap:break-word]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] [overflow-wrap:break-word]">
                    {t.bio}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] [overflow-wrap:break-word]">
                    ▼ {t.changePoint}
                  </p>
                </figcaption>

                {/* Proof image — last */}
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  width={600}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="mt-auto w-full h-auto"
                  {...(t.id === 1 ? { priority: true } : { loading: "lazy" })}
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.45}>
          <p className="text-center font-[family-name:var(--font-bai-jamjuree)] text-base italic text-[var(--color-text-muted)] [overflow-wrap:break-word]">
            {outcome.bridge}
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
