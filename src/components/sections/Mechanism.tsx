import Image from "next/image";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { mechanism } from "@/lib/data";

function MechanismStep({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4 lg:gap-5">
      <div
        className={cn(
          "flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full",
          "bg-[var(--color-coral-500)] text-[var(--color-cream-50)]",
          "font-mono text-xl lg:text-2xl font-semibold",
          "shadow-[var(--shadow-soft)]"
        )}
      >
        {num}
      </div>
      <div className="pt-1.5 lg:pt-2.5">
        <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-charcoal-900)]">
          {title}
        </h3>
        <p className="mt-2 text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-700)]">
          {body}
        </p>
      </div>
    </div>
  );
}

export function Mechanism() {
  return (
    <Section id="mechanism" tone="alt">
      <Container>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: copy + 3 steps */}
          <div>
            <ScrollReveal>
              <Eyebrow>M · Mechanism</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
                {mechanism.title}
              </h2>
            </ScrollReveal>

            <div className="mt-8 lg:mt-10 space-y-5">
              {mechanism.steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <MechanismStep num={step.num} title={step.title} body={step.body} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <p className="mt-8 lg:mt-10 text-lg italic text-[var(--color-coral-600)] border-l-4 border-[var(--color-coral-500)] pl-4 leading-relaxed">
                {mechanism.tagline}
              </p>
            </ScrollReveal>
          </div>

          {/* Right: framework image */}
          <ScrollReveal delay={0.15}>
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden ring-1 ring-[var(--color-beige-300)] shadow-[var(--shadow-elev)]">
              <Image
                src={mechanism.image}
                alt="แผนภาพสูตร R-MOTRA: Relevance → Mechanism → Outcome → Trust → Risk → Action"
                width={720}
                height={720}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-auto w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
