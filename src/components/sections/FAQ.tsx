import { ShieldCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faq } from "@/lib/data";

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base lg:text-lg font-semibold text-[var(--color-charcoal-900)] select-none hover:bg-[var(--color-cream-100)] transition-colors">
          {q}
          <ChevronDown
            className="h-5 w-5 shrink-0 text-[var(--color-coral-500)] transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <p className="px-6 pb-5 pt-1 text-sm lg:text-base leading-relaxed text-[var(--color-charcoal-700)]">
          {a}
        </p>
      </details>
    </li>
  );
}

export function FAQ() {
  return (
    <Section id="faq" tone="alt">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>R · Risk Reversal</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              ลดความกลัวก่อนตัดสินใจ
            </h2>
          </header>
        </ScrollReveal>

        {/* Guarantee callout */}
        <ScrollReveal>
          <aside
            className={cn(
              "mt-10 lg:mt-12 max-w-3xl",
              "rounded-[var(--radius-xl)] border-l-4 border-[var(--color-coral-500)]",
              "bg-[var(--color-cream-50)] p-6 lg:p-8 shadow-[var(--shadow-soft)]"
            )}
          >
            <div className="flex items-start gap-4">
              <span
                className={cn(
                  "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                  "bg-[var(--color-coral-500)]/15 text-[var(--color-coral-600)]"
                )}
                aria-hidden="true"
              >
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-charcoal-900)]">
                  {faq.guaranteeTitle}
                </h3>
                <p className="mt-2 text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-700)]">
                  {faq.guaranteeBody}
                </p>
              </div>
            </div>
          </aside>
        </ScrollReveal>

        {/* FAQ accordion */}
        <div className="mt-12 lg:mt-16 max-w-3xl">
          <ScrollReveal>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-charcoal-900)]">
              คำถามที่พบบ่อย
            </h3>
          </ScrollReveal>

          <ul className="mt-6 divide-y divide-[var(--color-beige-300)] rounded-[var(--radius-lg)] border border-[var(--color-beige-300)] bg-[var(--color-cream-50)] shadow-[var(--shadow-soft)]">
            {faq.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
