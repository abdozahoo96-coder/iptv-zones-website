import { NextResponse } from 'next/server'

export const revalidate = 0
export const dynamic = 'force-dynamic'

// Function to fetch ALL WordPress posts (handles pagination)
async function getAllWordPressPosts() {
  const allPosts: any[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    try {
      const response = await fetch(
        `https://blog.iptvzones.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=id,slug,modified`,
        { cache: 'no-store' }
      )

      if (!response.ok) {
        if (response.status === 400) {
          hasMore = false
          break
        }
        throw new Error('Failed to fetch posts')
      }

      const posts = await response.json()
      if (posts.length === 0) {
        hasMore = false
      } else {
        allPosts.push(...posts)
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')
        hasMore = page < totalPages
        page++
      }
    } catch (error) {
      console.error('Error fetching WordPress posts for sitemap:', error)
      hasMore = false
    }
  }

  return allPosts
}

export async function GET() {
  const posts = await getAllWordPressPosts()

  const postEntries = posts.length > 0
    ? posts.map((post: any) => `  <url>
    <loc>https://iptvzones.com/blog/${post.slug}</loc>
    <lastmod>${new Date(post.modified).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')
    : `  <url>
    <loc>https://iptvzones.com/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${postEntries}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
  })
}
