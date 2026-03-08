'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock, Calendar, TrendingUp, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function SubscriptionPricing() {
  const { t, formatPrice } = useLanguage()

  const plans = [
    {
      name: t('pricing.subscription.plans.oneMonth'),
      price: 10.99,
      perMonth: null,
      icon: Calendar,
      features: [
        t('pricing.subscription.features.oneDevice'),
        t('pricing.subscription.features.allChannels'),
        t('pricing.subscription.features.hdQuality'),
        t('pricing.subscription.features.tryService'),
      ],
      popular: false,
      gradient: 'from-slate-800 to-slate-900',
    },
    {
      name: t('pricing.subscription.plans.threeMonths'),
      price: 25.99,
      perMonth: 8.66,
      icon: Calendar,
      features: [
        t('pricing.subscription.features.save21'),
        t('pricing.subscription.features.quarterly'),
        t('pricing.subscription.features.betterValue'),
        t('pricing.subscription.features.prioritySupport'),
      ],
      popular: false,
      gradient: 'from-slate-800 to-slate-900',
    },
    {
      name: t('pricing.subscription.plans.sixMonths'),
      price: 39.99,
      perMonth: 6.67,
      icon: Calendar,
      features: [
        t('pricing.subscription.features.save39'),
        t('pricing.subscription.features.semiAnnual'),
        t('pricing.subscription.features.greatSavings'),
        t('pricing.subscription.features.extendedAccess'),
      ],
      popular: false,
      gradient: 'from-slate-800 to-slate-900',
    },
    {
      name: t('pricing.subscription.plans.twelveMonths'),
      price: 59.99,
      perMonth: 5.00,
      icon: TrendingUp,
      features: [
        t('pricing.subscription.features.save54'),
        t('pricing.subscription.features.annual'),
        t('pricing.subscription.features.bestValue'),
        t('pricing.subscription.features.vipSupport'),
      ],
      popular: true,
      gradient: 'from-primary-600 to-primary-800',
    },
    {
      name: t('pricing.subscription.plans.twentyFourMonths'),
      price: 99.99,
      perMonth: 4.17,
      icon: TrendingUp,
      features: [
        t('pricing.subscription.features.save62'),
        t('pricing.subscription.features.twoYear'),
        t('pricing.subscription.features.maxSavings'),
        t('pricing.subscription.features.premiumVIP'),
      ],
      popular: false,
      badge: t('pricing.subscription.bestDeal'),
      gradient: 'from-slate-800 to-slate-900',
    },
  ]

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-4"
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-semibold text-primary-300 mb-4 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            {t('pricing.subscription.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('pricing.subscription.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            {t('pricing.subscription.description')}
            <span className="hidden sm:inline"> {t('pricing.subscription.descriptionDetail')}</span>
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
                className={`relative rounded-2xl p-6 transition-all duration-400 ${plan.popular
                  ? 'pricing-popular glass-card border-primary-500 shadow-glow-primary'
                  : 'glass-card'
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-glow-primary">
                      <Sparkles className="w-3 h-3" />
                      {t('pricing.subscription.mostPopular').toUpperCase()}
                    </div>
                  </div>
                )}

                {/* Best Deal Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-accent-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold">
                    {plan.badge.toUpperCase()}
                  </div>
                )}

                <div className="flex flex-col h-full text-center">
                  <div className="flex-grow">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.popular ? 'from-white/20 to-white/5' : 'from-primary-500/20 to-primary-500/5'} flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary-400'}`} />
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                      {plan.name}
                    </h3>

                    <div className="mb-4">
                      <div className={`text-3xl font-black ${plan.popular ? 'gradient-text' : 'text-white'}`}>
                        {formatPrice(plan.price)}
                      </div>
                      {plan.perMonth && (
                        <div className="text-sm text-slate-400">
                          {formatPrice(plan.perMonth)}/{t('pricing.subscription.perMonth').toLowerCase()}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 text-sm">
                          <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-300' : 'text-primary-400'}`} />
                          <span className={plan.popular ? 'text-slate-200' : 'text-slate-400'}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/447956154482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto block w-full py-3 rounded-xl text-base font-bold transition-all duration-300 ${plan.popular
                      ? 'bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl'
                      : 'btn-glow'
                      }`}
                  >
                    {plan.popular
                      ? t('pricing.subscription.getStarted').toUpperCase()
                      : t('pricing.subscription.getStarted')
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
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('pricing.subscription.allPlansInclude')}</h4>
              <p className="text-slate-400">{t('pricing.subscription.allPlansDesc')}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: t('pricing.subscription.allPlansFeatures.liveChannels'), sub: t('pricing.subscription.allPlansFeatures.worldwide') },
                { label: t('pricing.subscription.allPlansFeatures.moviesShows'), sub: t('pricing.subscription.allPlansFeatures.latest') },
                { label: t('pricing.subscription.allPlansFeatures.ultraHD'), sub: t('pricing.subscription.allPlansFeatures.clear') },
                { label: t('pricing.subscription.allPlansFeatures.support'), sub: t('pricing.subscription.allPlansFeatures.help') },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="font-semibold text-white text-sm">{item.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-slate-400">
            {[
              { icon: Star, label: t('pricing.subscription.trustBadges.quality') },
              { icon: Check, label: t('pricing.subscription.trustBadges.activation') },
              { icon: Clock, label: t('pricing.subscription.trustBadges.riskFree') },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
