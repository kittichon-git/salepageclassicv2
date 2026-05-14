import Image from "next/image";
import { Play } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { hero, cta } from "@/lib/data";

export function Hero() {
  return (
    <Section id="hero" tone="alt" className="pt-20 lg:pt-28">
      <Container>
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[0.93fr_1.07fr] lg:items-center">
          {/* Left: copy + CTA */}
          <ScrollReveal delay={0} y={16}>
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <p className="text-sm font-medium tracking-wider uppercase text-[var(--color-charcoal-700)] mb-4 font-mono">
                หนังสือดิจิทัล · 7 ภาค 24 บท
              </p>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-charcoal-900)]">
                {hero.headline}
              </h1>

              {/* Sub */}
              <p className="mt-5 text-lg lg:text-xl text-[var(--color-charcoal-700)] leading-relaxed max-w-xl">
                {hero.sub}
              </p>

              {/* CTA group */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <CTAButton variant="line" size="lg" href={cta.lineUrl}>
                  {cta.primaryLabel}
                </CTAButton>
                <CTAButton variant="ghost" size="lg">
                  {/* TODO: wire video player */}
                  ดู VSL 60 วิ
                </CTAButton>
              </div>

              {/* Trust strip */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-charcoal-500)]">
                {hero.trustStrip.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-[var(--color-beige-400)]">
                        ·
                      </span>
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: hero image — no ScrollReveal (LCP candidate) */}
          <div className="relative">
            <div
              className="relative rounded-[var(--radius-xl)] overflow-hidden
                shadow-[var(--shadow-elev)] ring-1 ring-[var(--color-beige-300)]
                aspect-square lg:aspect-[4/5]"
            >
              <Image
                src={hero.heroImage}
                alt="ภาพประกอบหน้าขาย — บอร์ดสูตรเปลี่ยนคำที่ใช้ขายของออนไลน์"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* VSL play button overlay — TODO: wire video player */}
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center
                  bg-black/20 hover:bg-black/30 transition-colors group"
                aria-label="ดู VSL 60 วินาที"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full
                    bg-white/90 shadow-lg
                    group-hover:scale-105 transition-transform duration-200"
                >
                  <Play
                    size={24}
                    className="text-[var(--color-charcoal-900)] ml-1"
                    fill="currentColor"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
