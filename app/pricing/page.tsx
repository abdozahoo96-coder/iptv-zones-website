import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SubscriptionPricing from '../../components/SubscriptionPricing'
import Pricing from '../../components/Pricing'

export const metadata: Metadata = {
  title: 'IPTV ZONES Pricing - Affordable IPTV Subscription Plans',
  description: 'Discover our IPTV ZONES pricing plans. Get premium IPTV access with flexible subscription options. Best IPTV subscription deals available.',
  keywords: 'IPTV ZONES pricing, IPTV cost, IPTV subscription price, affordable IPTV, cheap IPTV plans'
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-surface-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-mesh-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            IPTV ZONES <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-300">
            Choose the perfect IPTV ZONES plan for your entertainment needs.
            From our premium IPTV subscriptions to flexible monthly options.
          </p>
        </div>
      </section>

      {/* Subscription Pricing */}
      <SubscriptionPricing />

      {/* Lifetime Pricing */}
      <Pricing />

      {/* Additional Info */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
            Why Choose IPTV ZONES Subscription?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold gradient-text mb-4">Best Value</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our IPTV ZONES subscription offers the best value in the market with competitive pricing for premium access.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold gradient-text mb-4">Premium Quality</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enjoy HD & 4K streaming quality with our IPTV ZONES service, featuring 25,000+ channels.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold gradient-text mb-4">24/7 Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Get premium customer support included with every IPTV ZONES subscription plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
