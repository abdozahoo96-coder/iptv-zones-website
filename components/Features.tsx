'use client'

import { motion } from 'framer-motion'
import { Zap, Monitor, Shield, Users, RotateCcw, Clock } from 'lucide-react'
import { useLanguage } from '../lib/language-context'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    { icon: Zap, title: t('features.items.fastInstall.title'), description: t('features.items.fastInstall.description'), color: 'from-amber-500 to-orange-600' },
    { icon: Monitor, title: t('features.items.hdQuality.title'), description: t('features.items.hdQuality.description'), color: 'from-primary-500 to-primary-700' },
    { icon: Shield, title: t('features.items.fastServer.title'), description: t('features.items.fastServer.description'), color: 'from-emerald-500 to-green-600' },
    { icon: Users, title: t('features.items.compatible.title'), description: t('features.items.compatible.description'), color: 'from-neon-cyan to-blue-500' },
    { icon: RotateCcw, title: t('features.items.updates.title'), description: t('features.items.updates.description'), color: 'from-neon-purple to-pink-600' },
    { icon: Clock, title: t('features.items.support.title'), description: t('features.items.support.description'), color: 'from-rose-500 to-red-600' },
  ]

  return (
    <section id="features" className="py-20 sm:py-28 relative bg-mesh">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-300 glass-card mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t('features.description')}
            <span className="hidden sm:inline"> {t('features.descriptionDetail')}</span>
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-7 sm:p-8 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only support card */}
        <div className="sm:hidden mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <h3 className="text-lg font-bold text-white mb-2">{t('features.mobileSupport.title')}</h3>
            <p className="text-sm text-slate-400">{t('features.mobileSupport.description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
