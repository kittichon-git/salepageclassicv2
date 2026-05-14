import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block bg-[var(--color-teal-500)] px-3 py-1.5",
        "font-mono text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-cream)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
