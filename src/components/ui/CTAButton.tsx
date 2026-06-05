"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackLead, trackLineAdd, buildLineUrlWithUtm, trackSpEvent } from "@/lib/track";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "line" | "outline";
  size?: "md" | "lg";
  showIcon?: boolean;
  trackingLocation?: "hero" | "offer" | "final" | "sticky" | "mobile-bar";
  children: React.ReactNode;
  className?: string;
};

export function CTAButton({
  href,
  onClick,
  variant = "line",
  size = "lg",
  showIcon = true,
  trackingLocation,
  children,
  className,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-extrabold tracking-tight",
    "border-[1.5px] border-[var(--color-navy-500)]",
    "transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0",
    size === "md" && "px-5 py-3 text-sm",
    size === "lg" && "px-6 py-4 text-base sm:text-lg",
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

  const isExternal = href?.startsWith("http");

  const spPos = trackingLocation === "mobile-bar" ? "sticky" : (trackingLocation ?? "other");

  // External links: fire tracking → open via window.open after 300ms delay
  if (href && isExternal) {
    const handleExternalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const ctaText = e.currentTarget.textContent?.trim().slice(0, 80) ?? "";
      if (trackingLocation) {
        trackLead(trackingLocation);
        trackLineAdd(trackingLocation);
      }
      trackSpEvent("sp_cta_click", { position: spPos, cta_text: ctaText, destination_url: href }, true);
      onClick?.();
      const finalUrl = buildLineUrlWithUtm(href);
      setTimeout(() => window.open(finalUrl, "_blank", "noopener,noreferrer"), 300);
    };
    return (
      <button type="button" onClick={handleExternalClick} className={classes} data-cta-position={trackingLocation}>
        {content}
      </button>
    );
  }

  // Internal links: use Next.js Link (no tracking delay needed)
  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const ctaText = e.currentTarget.textContent?.trim().slice(0, 80) ?? "";
      if (trackingLocation) trackLead(trackingLocation);
      trackSpEvent("sp_cta_click", { position: spPos, cta_text: ctaText, destination_url: href }, true);
      onClick?.();
    };
    return (
      <Link href={href} className={classes} onClick={handleClick} data-cta-position={trackingLocation}>
        {content}
      </Link>
    );
  }

  // No href: plain button
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ctaText = e.currentTarget.textContent?.trim().slice(0, 80) ?? "";
    if (trackingLocation) {
      trackLead(trackingLocation);
      trackLineAdd(trackingLocation);
    }
    trackSpEvent("sp_cta_click", { position: spPos, cta_text: ctaText, destination_url: "" }, true);
    onClick?.();
  };
  return (
    <button type="button" onClick={handleClick} className={classes} data-cta-position={trackingLocation}>
      {content}
    </button>
  );
}
