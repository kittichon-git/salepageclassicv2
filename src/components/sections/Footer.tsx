import Link from "next/link";
import { footer } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-[1.5px] border-[var(--color-navy-500)] bg-[var(--color-navy-900)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-[family-name:var(--font-kanit)] font-extrabold text-[var(--color-cream)]">
          {footer.brand}
        </span>
        <nav aria-label="footer" className="flex flex-wrap gap-x-4 gap-y-2">
          {footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.12em] text-[rgba(251,245,232,0.60)] transition-colors hover:text-[var(--color-cream)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
