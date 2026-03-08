import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { getWordPressPost, formatDate, extractPlainText } from '../../../lib/wordpress'

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getWordPressPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - IPTV Lifetime Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title.rendered} - IPTV Lifetime Blog`,
    description: extractPlainText(post.excerpt.rendered, 160),
    keywords: 'IPTV lifetime, streaming, entertainment, technology',
    openGraph: {
      title: post.title.rendered,
      description: extractPlainText(post.excerpt.rendered, 160),
      images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? [post._embedded['wp:featuredmedia'][0].source_url] : []
    }
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getWordPressPost(params.slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name || 'IPTV Lifetime Team'
  const publishDate = formatDate(post.date)

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <a 
              href="/blog" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 sm:mb-8 font-semibold transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to Blog
            </a>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{author}</span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
              {post.title.rendered}
            </h1>
            
            {featuredImage && (
              <div className="mb-6 sm:mb-8 rounded-2xl overflow-hidden">
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="w-full h-48 sm:h-64 md:h-96 object-cover"
                />
              </div>
            )}
            
            <div 
              className="prose prose-sm sm:prose lg:prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-800 prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Interested in IPTV Lifetime?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Get premium IPTV lifetime access with 25,000+ channels and 26,000+ movies. 
                  Contact us to learn more about our lifetime IPTV subscription plans.
                </p>
                <a 
                  href="/pricing" 
                  className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block text-sm sm:text-base"
                >
                  View IPTV Lifetime Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
