import Link from "next/link";
import { BrandPill } from "@/components/ui/BrandPill";
import { nav } from "@/lib/data";

export function TopNav() {
  return (
    <header className="sticky top-3 z-40 px-4">
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
              ].join(" ").trim()}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
