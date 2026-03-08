import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, Star, Users, Shield, Clock, Play, MessageCircle, Smartphone, Tv, Monitor, Tablet } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPTV ZONES 1 Month Subscription - Official IPTV ZONES Website',
  description: 'Get IPTV ZONES 1 month subscription from the official IPTV ZONES website. Premium IPTV streaming with 25,000+ channels, HD & 4K quality. Start your IPTV ZONES subscription today.',
  keywords: 'iptv zones website, iptv zones subscription, iptv zones 1 month, premium iptv, iptv streaming, live tv channels',
  openGraph: {
    title: 'IPTV ZONES 1 Month Subscription - Official Website',
    description: 'Premium IPTV ZONES 1 month subscription with 25,000+ channels and 26,000+ movies. Official IPTV ZONES website.',
    url: 'https://iptvzones.com/product/1-month/',
  },
}

export default function GammaIPTV1MonthProduct() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Official IPTV ZONES Website
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-300">IPTV ZONES</span> 1 Month Subscription
            </h1>

            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Experience premium IPTV streaming with our 1-month IPTV ZONES subscription.
              Perfect for testing our service with 25,000+ channels and 26,000+ movies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://1ai.growth4ch.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Order 1 Month Plan
              </a>
              <a
                href="/contacts/"
                className="bg-white bg-opacity-10 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Expert Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  IPTV ZONES 1 Month Subscription Details
                </h2>

                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">€10.99</div>
                    <div className="text-xl text-gray-600 mb-4">per month</div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                      Perfect for Testing Our Service
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">25,000+ Live TV Channels Worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">26,000+ Movies & TV Shows</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">HD, 4K & Ultra HD Quality</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">24/7 Premium Customer Support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Instant Activation</span>
                  </div>
                </div>

                <a
                  href="https://1ai.growth4ch.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Order Your 1 Month Subscription
                </a>
              </div>

              {/* Device Compatibility */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                  Compatible with All Your Devices
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Smartphone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Mobile Devices</h4>
                    <p className="text-gray-600 text-sm">iOS & Android smartphones and tablets</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Tv className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Smart TVs</h4>
                    <p className="text-gray-600 text-sm">Samsung, LG, Sony, and more</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Monitor className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Computers</h4>
                    <p className="text-gray-600 text-sm">Windows, Mac, Linux</p>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Tablet className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Streaming Devices</h4>
                    <p className="text-gray-600 text-sm">Fire Stick, Roku, Apple TV</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">Additional Support Formats:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• M3U Playlist</div>
                    <div>• Enigma 2</div>
                    <div>• Android Box</div>
                    <div>• MAG Box</div>
                    <div>• Kodi</div>
                    <div>• VLC Player</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Plans Comparison */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Compare IPTV ZONES Subscription Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect IPTV ZONES subscription plan that fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* 1 Month */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                  CURRENT PLAN
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">1 Month</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">€10.99</div>
                <div className="text-gray-600 mb-6">Perfect for testing</div>
                <a
                  href="https://1ai.growth4ch.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 3 Months */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">3 Months</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">€25.99</div>
                <div className="text-gray-600 mb-6">Save 21%</div>
                <a
                  href="https://3ai.growth4ch.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 6 Months */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">6 Months</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">€39.99</div>
                <div className="text-gray-600 mb-6">Save 39%</div>
                <a
                  href="https://6ai.growth4ch.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  ORDER NOW
                </a>
              </div>
            </div>

            {/* 12 Months */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">12 Months</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">€49.99</div>
                <div className="text-gray-600 mb-6">Save 62%</div>
                <a
                  href="https://12ai.growth4ch.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  ORDER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your IPTV ZONES Subscription?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust the official IPTV ZONES website
            for their premium IPTV streaming needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://1ai.growth4ch.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Get 1 Month Plan Now
            </a>
            <a
              href="/contacts/"
              className="bg-white bg-opacity-10 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Need Help?
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
