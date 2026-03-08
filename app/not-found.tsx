import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Home, Search, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found - IPTV ZONES | Return to Premium IPTV Service',
  description: 'The page you are looking for was not found. Return to IPTV ZONES homepage to explore our premium IPTV subscription plans and streaming services.',
  robots: {
    index: false,
    follow: true
  }
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface-950">
      <Header />

      <section className="py-20 bg-mesh min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl font-bold gradient-text mb-6">404</div>

            <h1 className="text-4xl font-bold text-white mb-6">
              Page Not Found
            </h1>

            <p className="text-xl text-slate-400 mb-8">
              Sorry, we couldn't find the page you're looking for.
              Let's get you back to exploring our premium IPTV services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-glow px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to IPTV ZONES Home
              </Link>

              <Link
                href="/contacts"
                className="btn-outline-glow px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Get Help
              </Link>
            </div>

            {/* Popular IPTV ZONES Pages */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Popular IPTV ZONES Pages
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/en" className="glass-card p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Premium Services</h3>
                  <p className="text-slate-400 text-sm">Explore IPTV ZONES premium features</p>
                </Link>

                <Link href="/product/1-month" className="glass-card p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">1 Month Plan</h3>
                  <p className="text-slate-400 text-sm">Try IPTV ZONES monthly subscription</p>
                </Link>

                <Link href="/contacts" className="glass-card p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">Customer Service</h3>
                  <p className="text-slate-400 text-sm">24/7 IPTV ZONES support</p>
                </Link>

                <Link href="/about" className="glass-card p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-2">About IPTV ZONES</h3>
                  <p className="text-slate-400 text-sm">Learn about our company</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
