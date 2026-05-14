// CDN URL → local path /public/images mapping
export const imageMap: Record<string, string> = {
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/sale-page-hero-command-board-gYg7zAuwi3cRr8Naw3hBWk.webp":
    "/images/sale-page-hero-command-board-gYg7zAuwi3cRr8Naw3hBWk.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp":
    "/images/r-motra-flow-framework-WMsq5yxFj5RXQUExs4LfdB.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549789468/5SuTh7KmLRDcpdCyv9t5mF/offer-stack-value-cards-cpikbfLJ269Kz4vfj84DHL.webp":
    "/images/offer-stack-value-cards-cpikbfLJ269Kz4vfj84DHL.webp",
};

export function localImage(cdnUrl: string): string {
  return imageMap[cdnUrl] ?? cdnUrl;
}
