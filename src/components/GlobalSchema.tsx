export default function GlobalSchema() {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Super Labs Nigeria",
    "description": "Global digital agency based in Nigeria providing worldwide web design, development, and SEO services",
    "url": "https://superlabsng.vercel.app",
    "telephone": "+2348105725081",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    },
    "areaServed": "Worldwide",
    "sameAs": [
      "https://x.com/superlabsng",
      "https://instagram.com/superlabsng",
      "https://tiktok.com/@superlabsng"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
    />
  );
}