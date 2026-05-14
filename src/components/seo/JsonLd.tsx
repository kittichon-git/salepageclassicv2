import { faq, meta, offer } from "@/lib/data";

const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://phachara.com";

export function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "phachara.com",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: meta.productName,
      description: `${meta.productTagline} ที่คนไทย ${meta.readers} คนใช้แล้วยอดขายขึ้น`,
      url: SITE_URL,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: "1200",
      },
      offers: {
        "@type": "Offer",
        price: "990",
        priceCurrency: "THB",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kittichon",
      url: SITE_URL,
      jobTitle: "Author",
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
