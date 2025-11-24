export default function GlobalSchema() {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MDSN",
    "description": "Multi Digital Solutions Network - Global digital agency providing worldwide web design, development, and SEO services",
    "url": "https://wearemdsn.vercel.app",
    "telephone": "+2348105725081",
    "email": "wearemdsn@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "areaServed": "Worldwide",
    "sameAs": [
      "https://x.com/wearemdsn",
      "https://instagram.com/wearemdsn",
      "https://tiktok.com/@wearemdsn"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
    />
  );
}