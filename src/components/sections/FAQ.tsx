import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { riskReversal } from "@/lib/data";

export function FAQ() {
  return (
    <Section id="faq" tab="S9 · FAQ" tone="paper">
      <div className="space-y-8">
        {/* Guarantee callout */}
        <ScrollReveal>
          <div className="flex gap-4 border-l-4 border-[var(--color-teal-500)] pl-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[rgba(47,133,136,0.15)]">
              <ShieldCheck
                size={24}
                className="text-[var(--color-teal-500)]"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-kanit)] font-extrabold leading-[1.3] text-balance text-[var(--color-navy-500)] text-2xl sm:text-3xl lg:text-4xl">
                {riskReversal.heading}
              </h2>
              <p className="mt-1 font-[family-name:var(--font-bai-jamjuree)] text-base leading-[1.55] text-[var(--color-text-muted)]">
                {riskReversal.body}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ accordion */}
        <div className="space-y-2">
          {riskReversal.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <details className="group border-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-cream)] shadow-[2px_2px_0_rgba(35,49,73,0.48)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-[family-name:var(--font-bai-jamjuree)] text-base font-bold text-[var(--color-navy-500)]">
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
