'use client'

import { motion } from 'framer-motion'
import { Play, Star, Zap, Tv, Wifi, Globe } from 'lucide-react'
import { useLanguage } from '../lib/language-context'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-950"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero-bg-enhanced.png"
            alt="Premium Content Background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/80 via-surface-950/40 to-surface-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950/90 via-transparent to-surface-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,16,0.5)_100%)]" />
      </div>

      {/* Animated orbs - reduced opacity for background clarity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-40">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary-600/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[150px]"
        />
      </div>

      {/* Floating icons */}
      <div className="hidden lg:block absolute top-28 left-[8%] floating">
        <div className="glass-card w-14 h-14 rounded-xl flex items-center justify-center">
          <Star className="w-7 h-7 text-primary-400" />
        </div>
      </div>
      <div className="hidden lg:block absolute top-40 right-[10%] floating" style={{ animationDelay: '2s' }}>
        <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-neon-cyan" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-32 left-[15%] floating" style={{ animationDelay: '4s' }}>
        <div className="glass-card w-11 h-11 rounded-xl flex items-center justify-center">
          <Wifi className="w-5 h-5 text-neon-purple" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-40 right-[8%] floating" style={{ animationDelay: '1s' }}>
        <div className="glass-card w-13 h-13 rounded-xl flex items-center justify-center p-3">
          <Globe className="w-6 h-6 text-accent-400" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto overflow-hidden px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              #1 Premium IPTV Service — Trusted by 10,000+ Users
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black mb-6 tracking-tight leading-[1.1] text-white"
          >
            {t('hero.title')}{' '}
            <span className="gradient-text">{t('hero.subtitle')}</span>{' '}
            {t('hero.titleEnd')}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('hero.description')}{' '}
            <span className="hidden sm:inline text-slate-300">{t('hero.descriptionDetail')}</span>
            <span className="sm:hidden text-slate-300">{t('hero.descriptionMobile')}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
          >
            <a
              href="https://wa.me/447956154482"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              {t('hero.startFreeTrial')}
            </a>
            <a
              href="#pricing"
              className="btn-outline-glow px-8 py-4 text-lg text-center"
            >
              {t('hero.viewPricing')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '25K+', label: t('hero.stats.channels'), icon: <Tv className="w-5 h-5" /> },
              { value: '26K+', label: t('hero.stats.movies'), icon: <Play className="w-5 h-5" /> },
              { value: '99.9%', label: t('hero.stats.uptime'), icon: <Wifi className="w-5 h-5" /> },
              { value: '24/7', label: t('hero.stats.support'), icon: <Globe className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 sm:p-6 text-center group">
                <div className="flex justify-center mb-2 text-primary-400 group-hover:text-primary-300 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  )
}
