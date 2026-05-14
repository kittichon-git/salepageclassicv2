import { ScrollText, TrendingDown, Languages, HelpCircle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { relevance } from "@/lib/data";

const painIcons: LucideIcon[] = [ScrollText, TrendingDown, Languages, HelpCircle];

function PainCard({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <article
      className={cn(
        "group rounded-[var(--radius-lg)] border border-[var(--color-beige-300)] bg-[var(--color-cream-50)]",
        "p-6 lg:p-7 h-full",
        "shadow-[var(--shadow-soft)]",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-elev)] hover:border-[var(--color-coral-500)]"
      )}
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-coral-500)]/10 text-[var(--color-coral-600)]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-900)]">
        {text}
      </p>
    </article>
  );
}

export function Relevance() {
  return (
    <Section id="relevance" tone="default">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>R · Relevance</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              {relevance.title}
            </h2>
          </header>
        </ScrollReveal>

        <div className="mt-10 lg:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relevance.bullets.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <PainCard icon={painIcons[i] ?? HelpCircle} text={text} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
