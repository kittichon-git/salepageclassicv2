import { faq, offer, meta as siteMeta, instructor } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://phachara.com";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.brand,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      // TODO: เพิ่ม social URLs เมื่อมี
    ],
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteMeta.productName,
    description:
      "หนังสือดิจิทัล 7 ภาค 24 บท สอนเปลี่ยน 'คำ' ให้ขายได้ — เหมาะกับคนขายของออนไลน์ในไทย",
    brand: {
      "@type": "Brand",
      name: siteMeta.brand,
    },
    image: [`${SITE_URL}/og.jpg`],
    offers: {
      "@type": "Offer",
      url: SITE_URL,
      priceCurrency: "THB",
      price: offer.price,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1200",
    },
  };

  const faqPage = {
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
  };

  const author = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: instructor.name,
    url: SITE_URL,
    // TODO: jobTitle, sameAs เมื่อมีข้อมูล
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(author) }}
      />
    </>
  );
}
