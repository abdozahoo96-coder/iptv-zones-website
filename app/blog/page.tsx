import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { getWordPressPosts, formatDate, extractPlainText } from '../../lib/wordpress'

export const metadata: Metadata = {
  title: 'IPTV ZONES Blog - Latest IPTV News & Streaming Guides | IPTV ZONES Updates',
  description: 'Read the latest IPTV ZONES blog posts, streaming guides, and IPTV industry news. Stay updated on IPTV ZONES service updates, tips, and entertainment technology insights.',
  keywords: 'iptv zones blog, iptv news, iptv zones updates, streaming guides, iptv tips, iptv zones service news, entertainment technology',
  openGraph: {
    title: 'IPTV ZONES Blog - Latest IPTV News & Updates',
    description: 'Stay up to date with the latest IPTV ZONES news, streaming guides and industry insights from our expert team.',
    url: 'https://iptvzones.com/blog/',
  },
}

export default async function Blog() {
  const posts = await getWordPressPosts({ per_page: 12 })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            IPTV ZONES <span className="text-blue-300">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Stay up to date with the latest IPTV ZONES news, streaming guides and entertainment technology updates from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => {
                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                const author = post._embedded?.author?.[0]?.name || 'IPTV ZONES Team'
                const publishDate = formatDate(post.date)

                return (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {featuredImage && (
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img
                          src={featuredImage}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="truncate">{author}</span>
                        </div>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                        {post.title.rendered}
                      </h2>

                      <div className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                        {extractPlainText(post.excerpt.rendered, 120)}
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm sm:text-base"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Blog Posts Coming Soon
              </h2>
              <p className="text-gray-600 max-w-xs sm:max-w-2xl mx-auto text-sm sm:text-base">
                We're working on bringing you the latest IPTV ZONES news, guides and updates. Check back soon for exciting content about streaming technology and entertainment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Stay Updated with IPTV ZONES News
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Get the latest updates about IPTV ZONES services, streaming technology and exclusive offers.
          </p>
          <a
            href="https://wa.link/kkdei9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Contact for Updates
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
