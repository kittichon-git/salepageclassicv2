import { CheckCircle2, XCircle, Check, Minus, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { fit } from "@/lib/data";

type FitTone = "positive" | "negative";

const fitTones: Record<
  FitTone,
  {
    ring: string;
    iconBg: string;
    iconColor: string;
    titleColor: string;
    bulletIcon: LucideIcon;
  }
> = {
  positive: {
    ring: "ring-1 ring-[var(--color-coral-500)]/30 bg-[var(--color-coral-500)]/[0.04]",
    iconBg: "bg-[var(--color-coral-500)]/15",
    iconColor: "text-[var(--color-coral-600)]",
    titleColor: "text-[var(--color-charcoal-900)]",
    bulletIcon: Check,
  },
  negative: {
    ring: "ring-1 ring-[var(--color-beige-400)] bg-[var(--color-cream-100)]",
    iconBg: "bg-[var(--color-charcoal-900)]/[0.08]",
    iconColor: "text-[var(--color-charcoal-700)]",
    titleColor: "text-[var(--color-charcoal-700)]",
    bulletIcon: Minus,
  },
};

function FitCard({
  tone,
  icon: Icon,
  title,
  bullets,
}: {
  tone: FitTone;
  icon: LucideIcon;
  title: string;
  bullets: readonly string[];
}) {
  const s = fitTones[tone];
  const BulletIcon = s.bulletIcon;

  return (
    <article
      className={cn(
        "h-full rounded-[var(--radius-xl)] p-7 lg:p-9 shadow-[var(--shadow-soft)]",
        s.ring
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            s.iconBg
          )}
        >
          <Icon className={cn("h-5 w-5", s.iconColor)} />
        </div>
        <h3 className={cn("text-xl lg:text-2xl font-bold", s.titleColor)}>{title}</h3>
      </div>

      <ul className="mt-6 space-y-3 lg:space-y-3.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-base lg:text-lg leading-relaxed text-[var(--color-charcoal-900)]">
            <BulletIcon
              className={cn("mt-1 h-4 w-4 lg:h-5 lg:w-5 shrink-0", s.iconColor)}
              strokeWidth={tone === "positive" ? 3 : 2.5}
              aria-hidden="true"
            />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Fit() {
  return (
    <Section id="fit" tone="alt">
      <Container>
        <ScrollReveal>
          <header className="max-w-2xl">
            <Eyebrow>T · Trust Filter</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[var(--color-charcoal-900)]">
              เหมาะหรือไม่เหมาะกับคุณ?
            </h2>
            <p className="mt-4 text-base lg:text-lg text-[var(--color-charcoal-700)]">
              เราอยากให้คุณได้ผลจริง ไม่ใช่แค่ขายให้ได้ — กรองดูก่อนตัดสินใจ
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid gap-5 lg:gap-6 md:grid-cols-2">
          <ScrollReveal>
            <FitCard
              tone="positive"
              icon={CheckCircle2}
              title={fit.fitTitle}
              bullets={fit.fitBullets}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FitCard
              tone="negative"
              icon={XCircle}
              title={fit.notTitle}
              bullets={fit.notBullets}
            />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
