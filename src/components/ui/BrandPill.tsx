import { cn } from "@/lib/cn";

export function BrandPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block bg-[var(--color-teal-500)] px-4 py-2",
        "font-extrabold text-[var(--color-cream)] tracking-tight",
        className,
      )}
    >
      {children}
    </span>
  );
}
