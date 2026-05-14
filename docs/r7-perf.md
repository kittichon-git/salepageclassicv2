# R-7 Performance Audit

> **Date:** 2026-05-14
> **Build:** Next.js 16.2.6 Turbopack, static export

## Bundle Analysis

All routes prerendered as static content (○). No server-side rendering needed.

| Route | Type |
|-------|------|
| `/` | Static |
| `/apple-icon` | Static |
| `/icon` | Static |
| `/manifest.webmanifest` | Static |
| `/opengraph-image` | Static |
| `/robots.txt` | Static |
| `/sitemap.xml` | Static |

## Optimizations Applied

- `optimizePackageImports: ["lucide-react", "framer-motion"]` — tree-shakes icon library + animation
- `images.formats: ["image/avif", "image/webp"]` — modern image formats
- `Cache-Control: public, max-age=31536000, immutable` on `/_next/static/*`
- `poweredByHeader: false` — remove X-Powered-By
- Fonts: `display: "swap"` on all 3 fonts (Kanit, Bai Jamjuree, JetBrains Mono)
- `ScrollReveal` is client-only — server renders static placeholder, hydrates on client
- No external CSS/JS CDN dependencies

## Bundle Analyzer

Run: `$env:ANALYZE='true'; npm run build` (Windows PowerShell)

## Lighthouse Fields (TBD — requires live URL)

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Performance | > 90 |

## Notes

- Grid paper bg is pure CSS (no SVG file, no external asset)
- All icons from lucide-react (tree-shaken)
- Font subsets: thai + latin only (not full unicode)
