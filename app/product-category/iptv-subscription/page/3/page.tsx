import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, Star, Users, Shield, Clock, Play, ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPTV ZONES Subscription Plans Collection - All Available Packages',
  description: 'Browse all IPTV ZONES subscription plans and packages. Find the perfect IPTV ZONES subscription that fits your streaming needs with flexible pricing options.',
  keywords: 'iptv zones subscription, iptv zones plans, iptv subscription packages, iptv zones pricing, premium iptv subscriptions',
  openGraph: {
    title: 'All IPTV ZONES Subscription Plans - Complete Collection',
    description: 'Discover all available IPTV ZONES subscription options with premium streaming features.',
    url: 'https://iptvzones.com/product-category/iptv-subscription/page/3/',
  },
}

// Subscription packages data
const subscriptionPackages = [
  {
    id: 1,
    name: '1 Month Basic',
    subtitle: 'Perfect for trying our service',
    price: '€10.99',
    originalPrice: null,
    period: 'per month',
    discount: null,
    badge: 'TRIAL',
    color: 'blue',
    features: [
      '25,000+ Live TV Channels',
      '26,000+ Movies & TV Shows',
      'HD & 4K Quality Streaming',
      '24/7 Customer Support',
      'Multi-Device Support',
      'Instant Activation'
    ],
    link: 'https://1ai.growth4ch.shop/'
  },
  {
    id: 2,
    name: '3 Month Plan',
    subtitle: 'Great value for quarterly access',
    price: '€25.99',
    originalPrice: '€32.97',
    period: 'quarterly billing',
    discount: 'Save 21%',
    badge: 'POPULAR',
    color: 'green',
    features: [
      'All Basic Plan Features',
      'Priority Customer Support',
      'Advanced Streaming Quality',
      'Extended Device Compatibility',
      'Quarterly Billing Convenience',
      'Better Value Per Month'
    ],
    link: 'https://3ai.growth4ch.shop/'
  },
  {
    id: 3,
    name: '6 Month Premium',
    subtitle: 'Best value for extended access',
    price: '€39.99',
    originalPrice: '€65.94',
    period: 'semi-annual billing',
    discount: 'Save 39%',
    badge: 'BEST VALUE',
    color: 'purple',
    features: [
      'All Previous Features',
      'VIP Customer Support',
      'Premium Streaming Servers',
      'Maximum Device Support',
      'Semi-Annual Billing',
      'Significant Savings'
    ],
    link: 'https://6ai.growth4ch.shop/'
  },
  {
    id: 4,
    name: '12 Month Elite',
    subtitle: 'Ultimate annual subscription',
    price: '€49.99',
    originalPrice: '€131.88',
    period: 'annual billing',
    discount: 'Save 62%',
    badge: 'MOST POPULAR',
    color: 'red',
    features: [
      'All Premium Features',
      'Elite Customer Support',
      'Fastest Streaming Servers',
      'Unlimited Device Access',
      'Annual Billing',
      'Maximum Savings'
    ],
    link: 'https://12ai.growth4ch.shop/'
  },
  {
    id: 5,
    name: '24 Month Ultimate',
    subtitle: 'Long-term ultimate value',
    price: '€89.99',
    originalPrice: '€263.76',
    period: '2-year billing',
    discount: 'Save 66%',
    badge: 'ULTIMATE',
    color: 'orange',
    features: [
      'All Elite Features',
      'Ultimate Customer Support',
      'Dedicated Streaming Servers',
      'Premium Account Manager',
      '2-Year Billing',
      'Ultimate Savings'
    ],
    link: 'http://2yai.growth4ch.shop/'
  },
  {
    id: 6,
    name: 'Lifetime Premium',
    subtitle: 'One-time payment forever',
    price: '€289',
    originalPrice: '€1,319.40',
    period: 'one-time payment',
    discount: 'Save 78%',
    badge: 'LIFETIME',
    color: 'gold',
    features: [
      'All Ultimate Features',
      'Lifetime Access',
      'No Recurring Payments',
      'Lifetime Support',
      'Forever Streaming',
      'Best Long-term Value'
    ],
    link: 'https://t.growth4ch.shop/'
  }
]

// Color classes helper
const getColorClasses = (color: string, gradient = false) => {
  const classes = {
    blue: gradient ? 'from-blue-500 to-blue-600' : 'bg-blue-500 hover:bg-blue-600',
    green: gradient ? 'from-green-500 to-green-600' : 'bg-green-500 hover:bg-green-600',
    purple: gradient ? 'from-purple-500 to-purple-600' : 'bg-purple-500 hover:bg-purple-600',
    red: gradient ? 'from-red-500 to-red-600' : 'bg-red-500 hover:bg-red-600',
    orange: gradient ? 'from-orange-500 to-orange-600' : 'bg-orange-500 hover:bg-orange-600',
    gold: gradient ? 'from-yellow-500 to-yellow-600' : 'bg-yellow-500 hover:bg-yellow-600'
  }
  return classes[color as keyof typeof classes] || classes.blue
}

export default function GammaIPTVSubscriptionPage3() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Complete IPTV ZONES Subscription Collection
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-300">IPTV ZONES</span> Subscription Plans
            </h1>

            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Discover all available IPTV ZONES subscription options. From flexible monthly plans
              to premium packages, find the perfect IPTV ZONES subscription that fits your streaming needs and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#subscription-packages"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Browse All Plans
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-300 mb-1">6+</div>
              <div className="text-sm">Subscription Options</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-300 mb-1">25K+</div>
              <div className="text-sm">Premium Channels</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-300 mb-1">26K+</div>
              <div className="text-sm">Movies & Shows</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
              <div className="text-sm">Premium Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section id="subscription-packages" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              All IPTV ZONES Subscription Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our complete collection of IPTV ZONES subscription plans.
              Each package is designed to provide exceptional value and premium streaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {subscriptionPackages.map((pkg, index) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 relative">
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${getColorClasses(pkg.color)}`}>
                  {pkg.badge}
                </div>

                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${getColorClasses(pkg.color, true)} text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-blue-100 text-sm mb-4">{pkg.subtitle}</p>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg line-through text-blue-200">{pkg.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-blue-100 mb-2">{pkg.period}</div>
                    {pkg.discount && (
                      <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.discount}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-lg text-white font-bold text-center transition-all duration-300 hover:transform hover:scale-105 ${getColorClasses(pkg.color)} block`}
                  >
                    Get This Subscription
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
