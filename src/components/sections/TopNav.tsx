"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { CTAButton } from "@/components/ui/CTAButton";
import { topNav, cta } from "@/lib/data";

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = topNav.links.map((l) => l.href.replace("#", ""));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-3 z-20 mx-auto max-w-[1180px] px-4">
      {/* Main bar */}
      <nav
        className="flex items-center justify-between gap-4 px-3 py-2.5
          bg-[var(--color-cream-50)]/95 backdrop-blur-sm
          border border-[var(--color-beige-300)]
          shadow-[4px_4px_0_rgba(58,53,48,0.10)]"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="font-heading font-semibold text-[var(--color-charcoal-900)] text-sm uppercase tracking-widest shrink-0 hover:text-[var(--color-coral-500)] transition-colors"
        >
          {topNav.brand}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {topNav.links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    "text-[var(--color-charcoal-700)] hover:text-[var(--color-charcoal-900)]",
                    "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[var(--color-coral-500)]",
                    "after:transition-transform after:duration-200",
                    "hover:after:scale-x-100",
                    isActive && "text-[var(--color-charcoal-900)] after:scale-x-100"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CTAButton variant="line" size="md" href={cta.lineUrl}>
              {cta.primaryLabel}
            </CTAButton>
          </div>
          <button
            type="button"
            className="md:hidden p-1.5 text-[var(--color-charcoal-900)] hover:text-[var(--color-coral-500)] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="เมนูมือถือ"
          className="md:hidden border border-t-0 border-[var(--color-beige-300)]
            bg-[var(--color-cream-50)]
            shadow-[4px_4px_0_rgba(58,53,48,0.10)]"
        >
          <ul className="flex flex-col py-1" role="list">
            {topNav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[var(--color-charcoal-700)] hover:bg-[var(--color-cream-100)] hover:text-[var(--color-charcoal-900)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <CTAButton
              variant="line"
              size="md"
              href={cta.lineUrl}
              className="w-full justify-center"
            >
              {cta.primaryLabel}
            </CTAButton>
          </div>
        </nav>
      )}
    </header>
  );
}
