'use client'

import { useLanguage } from '../lib/language-context'
import { motion } from 'framer-motion'

export default function ChannelLogosCarousel() {
  const { t } = useLanguage()
  const logos = Array.from({ length: 17 }, (_, i) => `/images/logos/${i + 1}.webp`)

  return (
    <section className="relative py-16 sm:py-20 bg-surface-950 overflow-hidden">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            {t('channels.title')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t('channels.description')}
          </p>
        </motion.div>

        {/* Infinite scrolling logos */}
        <div className="relative overflow-hidden">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-surface-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-surface-950 to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll-infinite">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 glass-card rounded-xl p-0.5 flex items-center justify-center hover:border-primary-500/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="w-full h-full bg-white/90 group-hover:bg-white rounded-[10px] flex items-center justify-center p-2 sm:p-3 transition-colors duration-300">
                  <img
                    src={logo}
                    alt={`Channel ${(index % 17) + 1}`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
