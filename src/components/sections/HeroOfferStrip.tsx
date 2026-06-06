import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { hero } from "@/lib/data";

export function HeroOfferStrip() {
  return (
    <Section
      id="offer-strip"
      tone="cream"
      className="py-4 md:py-6"
      innerClassName="shadow-[2px_2px_0_var(--color-navy-500)] border-[1px]"
    >
      <div className="mx-auto max-w-[640px]">
        <div className="relative border border-[rgba(35,49,73,0.18)] bg-[var(--color-paper)] py-4 pl-6 pr-4 text-left">
          {/* Teal left bar */}
          <div
            className="absolute inset-y-0 left-0 w-[3px] bg-[var(--color-teal-500)]"
            aria-hidden="true"
          />
          <p className="mb-3 font-[family-name:var(--font-kanit)] text-sm font-bold text-[var(--color-navy-900)]">
            {hero.offerBox.title}
          </p>
          <ul className="space-y-2">
            {hero.offerBox.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-[family-name:var(--font-bai-jamjuree)] text-sm leading-[1.55] text-[var(--color-navy-500)]"
              >
                <Check
                  className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-teal-500)]"
                  aria-hidden="true"
                  strokeWidth={2.5}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
