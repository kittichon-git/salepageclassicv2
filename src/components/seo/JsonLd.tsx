import { riskReversal, meta, offer } from "@/lib/data";

const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://phachara.com";

export function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "phachara.com",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      sameAs: ["https://lin.ee/6rOdCZg"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: meta.productName,
      description: `${meta.productTagline} ที่คนไทย ${meta.readers} คนใช้แล้วยอดขายขึ้น`,
      image: `${SITE_URL}/opengraph-image`,
      url: SITE_URL,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: "1200",
      },
      offers: {
        "@type": "Offer",
        price: String(offer.todayPrice),
        highPrice: String(offer.totalValue),
        priceCurrency: "THB",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: riskReversal.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
