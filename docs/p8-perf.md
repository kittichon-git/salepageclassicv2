# P-8 Performance Audit

## Build Output (Next.js 16.2.6 Turbopack)

Build: ✓ Compiled successfully — 0 errors, 0 warnings
Date: 2026-05-14

### Routes

| Route                  | Type    | Notes                      |
|------------------------|---------|----------------------------|
| /                      | Static  | Full sale page             |
| /opengraph-image       | Dynamic | edge runtime OG image      |
| /sitemap.xml           | Static  |                            |
| /robots.txt            | Static  |                            |
| /manifest.webmanifest  | Static  |                            |
| /icon                  | Static  | 32×32 favicon              |
| /apple-icon            | Static  | 180×180 Apple touch icon   |

### Bundle Analysis

> Next.js 16 Turbopack does not output webpack-style bundle table.
> Run with webpack to use @next/bundle-analyzer:
>
> ```bash
> ANALYZE=true npm run build
> ```
>
> (Remove `(Turbopack)` flag in next.config if webpack run is needed.)

| Bundle       | Size (gzip)   | Target      | Status |
|--------------|---------------|-------------|--------|
| First Load   | TBD (run ANALYZE) | < 130 KB | TBD    |
| Route /      | TBD           | < 200 KB   | TBD    |
| Shared       | TBD           | -          | TBD    |
| Edge OG      | TBD           | edge only  | TBD    |

### Image Assets (public/images/)

| File                                              | Size (KB) | Status         |
|---------------------------------------------------|-----------|----------------|
| sale-page-hero-command-board-*.webp               | 179 KB    | ✓ < 250 KB     |
| r-motra-flow-framework-*.webp                     | 248 KB    | ✓ < 250 KB     |
| offer-stack-value-cards-*.webp                    | 148 KB    | ✓ < 250 KB     |

### next/image Config

- `formats: ["image/avif", "image/webp"]` — AVIF served on-demand
- `deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920]`
- Cache-Control header: `public, max-age=31536000, immutable` on `/images/*`
- Hero: `priority` + `fill` + `sizes="(max-width: 1024px) 100vw, 50vw"` ✓
- Mechanism: `width=720 height=720` + `sizes="(max-width: 1024px) 100vw, 45vw"` ✓

## Lighthouse Results

> Run after `npm run build && npm run start` at http://localhost:3000

| Metric         | Mobile target | Mobile result | Desktop target | Desktop result |
|----------------|---------------|---------------|----------------|----------------|
| Performance    | ≥ 95          | TBD           | ≥ 98           | TBD            |
| Accessibility  | ≥ 95          | TBD           | ≥ 95           | TBD            |
| Best Practices | ≥ 95          | TBD           | ≥ 95           | TBD            |
| SEO            | ≥ 95          | TBD           | ≥ 95           | TBD            |
| LCP            | < 2.5s        | TBD           | < 1.5s         | TBD            |
| TBT            | < 200ms       | TBD           | < 100ms        | TBD            |
| CLS            | < 0.1         | TBD           | < 0.05         | TBD            |
| Speed Index    | < 3.4s        | TBD           | < 1.3s         | TBD            |

> Fill in after running Lighthouse in Chrome DevTools (incognito).
