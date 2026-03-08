// SEO Configuration for IPTV ZONES
export const siteConfig = {
  name: "IPTV ZONES",
  title: "IPTV ZONES - Premium IPTV Streaming Service",
  description: "IPTV ZONES offers premium IPTV streaming with 25,000+ live TV channels and 26,000+ movies. Get your IPTV ZONES subscription today.",
  url: "https://iptvzones.com",
  ogImage: "https://iptvzones.com/images/LOGO.webp",
  keywords: [
    "iptv zones",
    "iptv zones subscription",
    "premium iptv",
    "iptv streaming",
    "live tv channels",
    "iptv service",
    "iptvzones",
    "iptv zones website",
    "iptv provider",
    "streaming service"
  ],
  author: "IPTV ZONES Team",
  creator: "IPTV ZONES",
  publisher: "IPTV ZONES",
  category: "technology",
  locale: "en_US",
  type: "website"
}

export const generateMetadata = (
  title?: string,
  description?: string,
  path?: string,
  ogImage?: string
) => {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    openGraph: {
      type: siteConfig.type,
      locale: siteConfig.locale,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 300,
          height: 300,
          alt: `${siteConfig.name} Logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage || siteConfig.ogImage],
      creator: "@iptvzones"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: path ? `${siteConfig.url}${path}` : siteConfig.url
    }
  }
}
