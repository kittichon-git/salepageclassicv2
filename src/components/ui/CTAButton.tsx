import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "line" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-lg)] " +
  "transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-coral-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream-100)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-coral-500)] text-[var(--color-cream-50)] " +
    "shadow-[var(--shadow-soft)] hover:bg-[var(--color-coral-600)] hover:shadow-[var(--shadow-elev)]",
  line:
    "bg-[var(--color-line-green)] text-white hover:brightness-95 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elev)]",
  ghost:
    "bg-transparent border border-[var(--color-charcoal-700)] text-[var(--color-charcoal-900)] " +
    "hover:bg-[var(--color-charcoal-900)] hover:text-[var(--color-cream-50)]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export function CTAButton({
  variant = "primary",
  size = "lg",
  className,
  children,
  href,
  onClick,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
