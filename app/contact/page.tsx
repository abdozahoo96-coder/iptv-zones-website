import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Phone, Mail, Clock, MessageCircle, MapPin, Headphones } from 'lucide-react'
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
  title: 'Contact IPTV ZONES - Get Support for Your IPTV Subscription',
  description: 'Contact IPTV ZONES for support with your IPTV subscription. Get help via WhatsApp, email or phone for your IPTV ZONES service.',
  keywords: 'contact IPTV ZONES, IPTV ZONES support, IPTV help, IPTV ZONES customer service, IPTV contact'
}

export default function Contact() {
  // server-side: using English translations via local t() helper

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('contact.methods.whatsapp.title'),
      description: t('contact.methods.whatsapp.description'),
      contact: "+44 7956 154482",
      link: "https://wa.me/447956154482",
      available: t('contact.methods.whatsapp.available')
    }
  ]

  return (
    <main className="min-h-screen bg-surface-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-mesh-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contact.title')} <span className="gradient-text">IPTV ZONES</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-300">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t('contact.getSupport')}</h2>

          <div className="flex justify-center max-w-6xl mx-auto">
            <div className="w-full max-w-md">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-card rounded-2xl p-8 text-center">
                  <div className="flex justify-center text-primary-400 mb-6">{method.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-slate-400 mb-6">{method.description}</p>
                  <div className="mb-4">
                    <div className="text-xl font-semibold gradient-text mb-2">{method.contact}</div>
                    <div className="text-sm text-slate-500">{method.available}</div>
                  </div>
                  <a href={method.link} target="_blank" rel="noopener noreferrer" className="btn-glow px-6 py-3 rounded-lg inline-block">{t('contact.contactNow')}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t('contact.faq.title')}</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold gradient-text mb-4">{t('contact.faq.q1.question')}</h3>
              <p className="text-slate-400">{t('contact.faq.q1.answer')}</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold gradient-text mb-4">{t('contact.faq.q2.question')}</h3>
              <p className="text-slate-400">{t('contact.faq.q2.answer')}</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold gradient-text mb-4">{t('contact.faq.q3.question')}</h3>
              <p className="text-slate-400">{t('contact.faq.q3.answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mesh-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('contact.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">{t('contact.cta.description')}</p>
          <a href="https://wa.me/447956154482" target="_blank" rel="noopener noreferrer" className="btn-glow px-8 py-4 rounded-lg text-lg font-semibold inline-block">{t('contact.cta.button')}</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
