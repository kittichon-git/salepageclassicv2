export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal-500)] mb-3">
      {children}
    </p>
  );
}
