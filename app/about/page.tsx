import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Star, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react'
import en from '@/lib/translations/en'

// simple server-side translation helper using the English translation file
function t(key: string) {
  const parts = key.split('.')
  let v: any = en
  for (const p of parts) {
    if (v && Object.prototype.hasOwnProperty.call(v, p)) v = v[p]
    else return key
  }
  return typeof v === 'string' ? v : key
}

export const metadata: Metadata = {
  title: 'About IPTV ZONES - Premium IPTV Service Provider | IPTV ZONES',
  description: 'Learn about IPTV ZONES - a leading premium IPTV service provider. Discover our company story, mission, and why customers worldwide choose our IPTV subscription service.',
  keywords: 'about iptv zones, iptv zones company, iptv zones service provider, premium iptv provider, iptv zones history, iptv streaming company',
  openGraph: {
    title: 'About IPTV ZONES - Premium IPTV Service Provider',
    description: 'Discover the IPTV ZONES company story and why we are a leading premium IPTV service provider worldwide.',
    url: 'https://iptvzones.com/about/',
  },
}

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100K+", label: t('about.stats.customers') },
    { icon: <Star className="w-8 h-8" />, number: "25K+", label: t('about.stats.channels') },
    { icon: <CheckCircle className="w-8 h-8" />, number: "99.9%", label: t('about.stats.uptime') },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: t('about.stats.experience') }
  ]

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary-400" />,
      title: t('about.whyChoose.lightning.title'),
      description: t('about.whyChoose.lightning.description')
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-400" />,
      title: t('about.whyChoose.secure.title'),
      description: t('about.whyChoose.secure.description')
    },
    {
      icon: <Users className="w-12 h-12 text-primary-400" />,
      title: t('about.whyChoose.customer.title'),
      description: t('about.whyChoose.customer.description')
    }
  ]

  return (
    <main className="min-h-screen bg-surface-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-mesh-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            {t('about.title')} <span className="gradient-text">IPTV ZONES</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-300">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className="flex justify-center text-primary-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-center text-white mb-12">
              {t('about.journey.title')}
            </h2>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed text-slate-300">{t('about.journey.p1')}</p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400">{t('about.journey.p2')}</p>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400">{t('about.journey.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-center text-white mb-16">
            {t('about.whyChoose.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mesh-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{t('about.cta.title')}</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-slate-300">{t('about.cta.description')}</p>
          <a
            href="https://wa.me/447956154482"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow px-8 py-4 rounded-xl text-lg font-bold inline-block"
          >
            {t('about.cta.button')}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
