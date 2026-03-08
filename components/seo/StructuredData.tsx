// JSON-LD Structured Data for better SEO
export function IPTVZONESStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV ZONES",
    "alternateName": ["IPTV ZONES Service", "IPTVZONES"],
    "url": "https://iptvzones.com",
    "logo": "https://iptvzones.com/images/LOGO.webp",
    "description": "IPTV ZONES - Premium IPTV streaming service with 25,000+ live TV channels and 26,000+ movies. Professional IPTV subscription provider.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7956-154482",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "French", "Arabic"],
      "serviceArea": "Worldwide"
    },
    "sameAs": [
      "https://wa.me/447956154482"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Digital Services",
      "addressCountry": "Global"
    },
    "foundingDate": "2019",
    "numberOfEmployees": "10-50",
    "industry": "IPTV Streaming Services"
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IPTV ZONES Subscription Service",
    "description": "Premium IPTV ZONES streaming service offering 25,000+ live TV channels, 26,000+ movies and TV shows with HD/4K quality streaming.",
    "provider": {
      "@type": "Organization",
      "name": "IPTV ZONES"
    },
    "serviceType": "IPTV Streaming Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IPTV ZONES Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV ZONES 1 Month Subscription"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV ZONES 12 Month Subscription"
          },
          "price": "49.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV ZONES Premium Package"
          },
          "price": "289",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "797",
      "priceCurrency": "USD",
      "offerCount": "6"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV ZONES",
    "alternateName": "IPTV ZONES Official Website",
    "url": "https://iptvzones.com",
    "description": "Official IPTV ZONES website offering premium IPTV subscriptions with 25,000+ channels and 26,000+ movies.",
    "publisher": {
      "@type": "Organization",
      "name": "IPTV ZONES"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iptvzones.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "IPTV ZONES Service"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}

export function IPTVZONESBreadcrumb({ items }: { items: Array<{ name: string; url?: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://iptvzones.com${item.url}` : undefined
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData)
      }}
    />
  )
}
