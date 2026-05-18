import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  as?: "h2" | "h3";
  size?: "lg" | "md" | "sm";
  /** "dark" = navy-900 (default, on paper/cream bg) · "light" = cream (on navy bg) */
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
};

const sizeClasses = {
  lg: "text-2xl sm:text-3xl md:text-4xl",
  md: "text-xl sm:text-2xl md:text-3xl",
  sm: "text-lg sm:text-xl md:text-2xl",
};

export function SectionHeading({ as: Tag = "h2", size = "md", tone = "dark", className, children }: Props) {
  return (
    <Tag
      className={cn(
        "font-[family-name:var(--font-kanit)] font-extrabold text-balance leading-[1.3]",
        tone === "dark" ? "text-[var(--color-navy-900)]" : "text-[var(--color-cream)]",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
