// WordPress API configuration
const WORDPRESS_API_URL = 'https://blog.iptvzones.com/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  author: number
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    author?: Array<{
      name: string
      description: string
    }>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

// Fetch WordPress posts with error handling and caching
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: string
  search?: string
} = {}): Promise<WordPressPost[]> {
  try {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?${searchParams.toString()}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers: { 'Accept': 'application/json' },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return []
    }

    const posts = await response.json()
    return posts || []
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

// Fetch a single WordPress post by slug
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return null
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    return null
  }
}

// Fetch WordPress categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/categories?per_page=50`,
      {
        next: { revalidate: 86400 }, // Revalidate daily
        headers: { 'Accept': 'application/json' },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return []
    }

    const categories = await response.json()
    return categories || []
  } catch (error) {
    console.error('Error fetching WordPress categories:', error)
    return []
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Extract plain text from HTML content
export function extractPlainText(html: string, maxLength: number = 160): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}
