import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  /** Frame tab label (absolute top:-16px) */
  tab?: string;
  /** Background variant */
  tone?: "paper" | "cream" | "navy";
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, tab, tone = "paper", className, children }: Props) {
  return (
    <section id={id} className={cn("relative px-4 py-16 md:py-24 scroll-mt-20", className)}>
      <div className="relative mx-auto max-w-[1200px]">
        {tab && (
          <div className="absolute -top-4 left-6 z-10 bg-[var(--color-navy-500)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
            {tab}
          </div>
        )}
        <div
          className={cn(
            "border-[1.5px] border-[var(--color-navy-500)] p-8 md:p-12",
            "shadow-[5px_5px_0_var(--color-navy-500)]",
            tone === "paper" && "bg-[var(--color-paper)]",
            tone === "cream" && "bg-[var(--color-cream)]",
            tone === "navy" && "bg-[var(--color-navy-500)] text-[var(--color-cream)]",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
