import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { faq } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq" tab="S9 · FAQ" tone="paper">
      <div className="space-y-8">
        {/* Guarantee callout */}
        <ScrollReveal>
          <div className="flex gap-4 border-l-4 border-[var(--color-teal-500)] pl-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[rgba(47,133,136,0.15)]">
              <ShieldCheck size={24} className="text-[var(--color-teal-500)]" aria-hidden="true" />
            </div>
            <div>
              <h2
                className="font-[family-name:var(--font-kanit)] font-extrabold tracking-[-0.035em] text-[var(--color-navy-500)]"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
              >
                {faq.heading}
              </h2>
              <p className="mt-1 font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-text-muted)]">
                {faq.guarantee}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ accordion */}
        <div className="space-y-2">
          {faq.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <details className="group border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-cream)] shadow-[2px_2px_0_rgba(35,49,73,0.48)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-[family-name:var(--font-bai-jamjuree)] font-bold text-[var(--color-navy-500)]">
                  {item.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-[var(--color-navy-500)]"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-[rgba(35,49,73,0.16)] px-5 pb-5 pt-4">
                  <p className="font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-text-muted)]">
                    {item.a}
                  </p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
