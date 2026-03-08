import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Star, Shield, Zap, Users, Crown, Play, MessageCircle, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPTV ZONES Subscription - Premium Services IPTV English',
  description: 'Premium IPTV ZONES subscription services with 25,000+ channels. Get the best premium services IPTV offers with HD/4K quality and 24/7 support.',
  keywords: 'iptv zones subscription, premium services iptv, iptv zones english, iptv premium, iptv zones service, premium iptv subscription',
  openGraph: {
    title: 'Premium IPTV ZONES Subscription Services - English',
    description: 'Experience premium services IPTV provides. Best IPTV ZONES subscription with worldwide channels and premium support.',
    url: 'https://iptvzones.com/en/',
  },
}

export default function English() {
  const premiumServices = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      title: "Premium VIP Service",
      description: "Exclusive premium services IPTV Gamma offers for VIP customers with priority support and premium channels"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Premium Security",
      description: "Advanced security features in our premium services IPTV Gamma provides for safe and secure streaming"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Premium Speed",
      description: "Ultra-fast premium services IPTV Gamma delivers with optimized servers for buffer-free streaming"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Premium Support",
      description: "24/7 premium customer support included in all premium services IPTV Gamma subscription plans"
    }
  ]

  const subscriptionPlans = [
    {
      name: "Basic IPTV ZONES Subscription",
      price: "€10.99",
      period: "1 Month",
      features: [
        "25,000+ Premium Channels",
        "26,000+ Movies & Shows",
        "HD Quality Streaming",
        "1 Device Access",
        "Basic Support"
      ],
      link: "https://1ai.growth4ch.shop/",
      popular: false
    },
    {
      name: "Premium IPTV ZONES Subscription",
      price: "€49.99",
      period: "12 Months",
      features: [
        "All Premium Services IPTV",
        "Ultra HD & 4K Quality",
        "Multiple Device Access",
        "Premium VIP Channels",
        "Priority Premium Support"
      ],
      link: "https://12ai.growth4ch.shop/",
      popular: true
    },
    {
      name: "Ultimate IPTV ZONES Subscription",
      price: "€289",
      period: "Premium Package",
      features: [
        "Complete Premium Services IPTV",
        "Maximum Device Support",
        "Exclusive Premium Content",
        "Dedicated Account Manager",
        "Ultimate Premium Experience"
      ],
      link: "https://t.growth4ch.shop/",
      popular: false
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Premium Services IPTV
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium <span className="text-yellow-300">IPTV ZONES</span><br />
            Subscription Services
          </h1>

          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the ultimate premium services IPTV offers with our comprehensive
            IPTV ZONES subscription plans. Get access to 25,000+ premium channels,
            26,000+ movies, and exclusive premium content with unmatched quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#subscription-plans"
              className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
            >
              <Crown className="w-5 h-5 mr-2" />
              View Premium Plans
            </a>
            <a
              href="https://wa.link/eepo31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Premium Support
            </a>
          </div>
        </div>
      </section>

      {/* Premium Services Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Premium Services IPTV Provides
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why our IPTV ZONES subscription includes the most comprehensive
              premium services IPTV can offer for the ultimate streaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose Premium Services IPTV?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our IPTV ZONES subscription stands out with exclusive premium services
                  IPTV delivers, ensuring you get the best streaming experience possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Channel Selection</h3>
                      <p className="text-gray-600">Our IPTV ZONES subscription includes premium services IPTV curates from worldwide broadcasters.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ultra-Premium Quality</h3>
                      <p className="text-gray-600">Experience 4K and Ultra HD quality with our premium services IPTV Gamma technology provides.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Support System</h3>
                      <p className="text-gray-600">24/7 premium customer support is included in every IPTV ZONES subscription plan we offer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Premium Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">25,000+</div>
                    <div className="text-sm">Premium Channels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">26,000+</div>
                    <div className="text-sm">Premium Movies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
                    <div className="text-sm">Premium Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                    <div className="text-sm">Premium Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscription-plans" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              IPTV ZONES Subscription Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your perfect IPTV ZONES subscription plan and enjoy all the premium services
              IPTV has to offer with flexible pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className={`rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white transform scale-105'
                  : 'bg-white border border-gray-200'
                }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <div className="inline-block bg-yellow-400 text-purple-800 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-yellow-300' : 'text-gray-800'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 text-center block ${plan.popular
                      ? 'bg-yellow-400 text-purple-800 hover:bg-yellow-300'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    }`}
                >
                  Get This Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Experience Premium Services IPTV Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying our premium IPTV ZONES subscription
            with all the premium services IPTV provides for ultimate entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://12ai.growth4ch.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
            >
              <Crown className="w-5 h-5 mr-2" />
              Get Premium Plan
            </a>
            <a
              href="https://wa.link/eepo31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Premium Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
