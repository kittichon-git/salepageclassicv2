"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "line" | "outline";
  size?: "md" | "lg";
  showIcon?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function CTAButton({
  href,
  onClick,
  variant = "line",
  size = "lg",
  showIcon = true,
  children,
  className,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-extrabold tracking-tight",
    "border-[1.5px] border-[var(--color-navy-500)]",
    "transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0",
    size === "md" && "px-5 py-3 text-sm",
    size === "lg" && "px-7 py-4 text-base md:text-lg",
    variant === "line" &&
      "bg-[var(--color-line)] text-white shadow-[3px_3px_0_var(--color-navy-500)] hover:bg-[var(--color-line-dark)]",
    variant === "outline" &&
      "bg-[var(--color-cream)] text-[var(--color-navy-500)] shadow-[3px_3px_0_var(--color-navy-500)]",
    className,
  );

  const content = (
    <>
      {showIcon && <MessageCircle className="h-5 w-5" aria-hidden="true" strokeWidth={2.5} />}
      {children}
    </>
  );

  if (href) return <Link href={href} className={classes}>{content}</Link>;

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
