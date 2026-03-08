import { NextResponse } from 'next/server'

export async function GET() {
  const staticPages = [
    'https://iptvzones.com',
    'https://iptvzones.com/about',
    'https://iptvzones.com/blog',
    'https://iptvzones.com/pricing',
    'https://iptvzones.com/contact',
    'https://iptvzones.com/contacts',
    'https://iptvzones.com/en',
    'https://iptvzones.com/product/1-month',
    'https://iptvzones.com/product-category/iptv-subscription/page/3',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === 'https://iptvzones.com' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === 'https://iptvzones.com' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}
