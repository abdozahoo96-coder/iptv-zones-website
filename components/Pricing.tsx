'use client'

import { motion } from 'framer-motion'
import { Check, Star, Crown, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Pricing() {
  const { t, formatPrice } = useLanguage()

  const plans = [
    { devices: 1, price: 289, highlight: true, badge: t('pricing.lifetime.bestValue') },
    { devices: 2, price: 416, highlight: false },
    { devices: 3, price: 543, highlight: false },
    { devices: 4, price: 670, highlight: false },
    { devices: 5, price: 797, highlight: false, badge: t('pricing.lifetime.familyPlan') },
  ]

  const getFeatures = (devices: number) => {
    if (devices === 1) {
      return [
        `25,000+ ${t('pricing.lifetime.features.channels')}`,
        `26,000+ ${t('pricing.lifetime.features.movies')}`,
        t('pricing.lifetime.features.quality'),
        t('pricing.lifetime.features.lifetimeAccess'),
      ]
    }
    if (devices === 2) {
      return [
        t('pricing.lifetime.features.allFeatures'),
        `2 ${t('pricing.lifetime.features.simultaneous')}`,
        t('pricing.lifetime.features.multiDevice'),
        t('pricing.lifetime.features.familySharing'),
      ]
    }
    if (devices === 3) {
      return [
        t('pricing.lifetime.features.allPrevious'),
        `3 ${t('pricing.lifetime.features.simultaneous')}`,
        t('pricing.lifetime.features.priority'),
        t('pricing.lifetime.features.extended'),
      ]
    }
    if (devices === 4) {
      return [
        t('pricing.lifetime.features.allPrevious'),
        `4 ${t('pricing.lifetime.features.simultaneous')}`,
        t('pricing.lifetime.features.vip'),
        t('pricing.lifetime.features.premium'),
      ]
    }
    return [
      t('pricing.lifetime.features.maximum'),
      `5 ${t('pricing.lifetime.features.simultaneous')}`,
      t('pricing.lifetime.features.premiumVIP'),
      t('pricing.lifetime.features.ultimate'),
    ]
  }

  return (
    <section id="lifetime-pricing" className="py-20 sm:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 overflow-hidden px-4"
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-semibold text-primary-300 mb-4">
            <Crown className="w-3.5 h-3.5" />
            {t('pricing.lifetime.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
            {t('pricing.lifetime.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            {t('pricing.lifetime.description')}
            <span className="hidden sm:inline"> {t('pricing.lifetime.descriptionDetail')}</span>.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative rounded-2xl p-6 transition-all duration-400 ${plan.highlight
                  ? 'pricing-popular glass-card border-primary-500 shadow-glow-primary'
                  : 'glass-card'
                  }`}
              >
                {/* Badge */}
                {plan.badge && plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-glow-primary">
                      <Crown className="w-3 h-3" />
                      {plan.badge.toUpperCase()}
                    </div>
                  </div>
                )}

                {plan.badge && !plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-accent-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold">
                    {plan.badge.toUpperCase()}
                  </div>
                )}

                <div className="flex flex-col h-full text-center">
                  <div className="flex-grow">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.highlight ? 'from-white/20 to-white/5' : 'from-primary-500/20 to-primary-500/5'} flex items-center justify-center mx-auto mb-4`}>
                      <Crown className={`w-6 h-6 ${plan.highlight ? 'text-white' : 'text-primary-400'}`} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white">
                      {plan.devices} {plan.devices === 1 ? t('pricing.lifetime.device') : t('pricing.lifetime.devices')}
                    </h3>

                    <div className="mb-4">
                      <div className={`text-3xl font-black ${plan.highlight ? 'gradient-text' : 'text-white'}`}>
                        {formatPrice(plan.price)}
                      </div>
                      <div className="text-sm text-slate-400">
                        {t('pricing.lifetime.oneTimePayment')}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {getFeatures(plan.devices).map((feature, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 text-sm">
                          <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-primary-300' : 'text-primary-400'}`} />
                          <span className={plan.highlight ? 'text-slate-200' : 'text-slate-400'}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/447956154482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto block w-full py-3 rounded-xl text-base font-bold transition-all duration-300 ${plan.highlight
                      ? 'bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl'
                      : 'btn-glow'
                      }`}
                  >
                    {plan.highlight
                      ? t('pricing.lifetime.orderNow').toUpperCase()
                      : t('pricing.lifetime.orderNow')
                    }
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Plans Include */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('pricing.lifetime.allPlansInclude')}</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                t('pricing.lifetime.allPlansFeatures.liveChannels'),
                t('pricing.lifetime.allPlansFeatures.moviesShows'),
                t('pricing.lifetime.allPlansFeatures.ultraHD'),
                t('pricing.lifetime.allPlansFeatures.support'),
              ].map((label, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="font-semibold text-white text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-slate-400">
            {[
              { icon: Star, label: t('pricing.lifetime.trustBadges.quality') },
              { icon: Shield, label: t('pricing.lifetime.trustBadges.payment') },
              { icon: Crown, label: t('pricing.lifetime.trustBadges.access') },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-slate-500 text-xs sm:text-sm">
          <p>{t('pricing.lifetime.disclaimer')}</p>
          <p className="hidden sm:block">{t('pricing.lifetime.upgradeInfo')}</p>
        </div>
      </div>
    </section>
  )
}
