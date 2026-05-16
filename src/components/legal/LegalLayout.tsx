import Link from "next/link"
import type { ReactNode } from "react"

type LegalLayoutProps = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <article className="prose prose-slate mx-auto max-w-3xl">
        <header className="mb-8 border-b pb-6">
          <h1 className="!mb-2 text-3xl font-bold">{title}</h1>
          <p className="!mt-0 text-sm text-slate-500">
            อัปเดตล่าสุด: {lastUpdated}
          </p>
        </header>

        {children}

        <footer className="mt-12 border-t pt-6 text-sm">
          <Link
            href="/"
            className="text-emerald-600 hover:underline"
          >
            ← กลับหน้าหลัก
          </Link>
        </footer>
      </article>
    </main>
  )
}
