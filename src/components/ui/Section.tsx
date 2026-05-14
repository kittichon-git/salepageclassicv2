import { cn } from "@/lib/cn";

type Tone = "default" | "alt" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-[var(--color-cream-100)] text-[var(--color-charcoal-900)]",
  alt: "bg-[var(--color-cream-50)] text-[var(--color-charcoal-900)]",
  dark: "bg-[var(--color-charcoal-900)] text-[var(--color-cream-50)]",
};

export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28 scroll-mt-20", tones[tone], className)}>
      {children}
    </section>
  );
}
