import { NextResponse } from 'next/server'

export const revalidate = 0

export async function GET() {
  const staticPages = [
    { url: 'https://iptvzones.com', changefreq: 'daily', priority: '1.0' },
    { url: 'https://iptvzones.com/about', changefreq: 'weekly', priority: '0.8' },
    { url: 'https://iptvzones.com/blog', changefreq: 'daily', priority: '0.9' },
    { url: 'https://iptvzones.com/pricing', changefreq: 'weekly', priority: '0.95' },
    { url: 'https://iptvzones.com/contact', changefreq: 'weekly', priority: '0.85' },
    { url: 'https://iptvzones.com/en', changefreq: 'weekly', priority: '0.7' },
    { url: 'https://iptvzones.com/product/1-month', changefreq: 'weekly', priority: '0.8' },
    { url: 'https://iptvzones.com/product-category/iptv-subscription/page/3', changefreq: 'weekly', priority: '0.6' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}
