"use client";

import Link from "next/link";
import { BrandPill } from "@/components/ui/BrandPill";
import { nav } from "@/lib/data";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function TopNav() {
  const { direction, scrollY } = useScrollDirection();

  // Show when: at top of page OR scrolling up
  const isVisible = scrollY < 80 || direction === "up";

  return (
    <header
      aria-label="Primary"
      className={[
        "fixed inset-x-0 top-0 z-40 px-4",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-[1180px] items-center justify-between gap-4",
          "border-[1.5px] border-[var(--color-navy-500)]",
          "bg-[rgba(255,253,247,0.96)] backdrop-blur-sm",
          "shadow-[4px_4px_0_rgba(35,49,73,0.72)]",
          "px-5 py-3",
        ].join(" ")}
      >
        <Link href="#hero" aria-label="กลับไปด้านบน">
          <BrandPill className="whitespace-nowrap text-sm uppercase tracking-[0.06em]">
            {nav.brand}
          </BrandPill>
        </Link>

        <nav aria-label="หลัก" className="flex items-center gap-5 md:gap-7">
          {nav.links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={[
                "font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold",
                "uppercase tracking-[0.12em] text-[var(--color-navy-500)]",
                "transition-colors duration-150 hover:text-[var(--color-teal-500)]",
                link.id === "faq" ? "hidden min-[480px]:inline-flex" : "",
              ]
                .join(" ")
                .trim()}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
