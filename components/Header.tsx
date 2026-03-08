'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Tv } from 'lucide-react'
import { useLanguage } from '../lib/language-context'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass shadow-glass py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative shrink-0">
              <img src="/logo.svg" alt="IPTV ZONES" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow-glow-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight shrink-0">
              <span className="text-white">IPTV</span>
              <span className="gradient-text ml-1">ZONES</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: '/', label: t('nav.home') },
              { href: '/about', label: t('nav.about') },
              { href: '/blog', label: t('nav.blog') },
              { href: '/#features', label: t('nav.features') },
              { href: '/pricing', label: t('nav.pricing') },
              { href: '/#testimonials', label: t('nav.reviews') },
              { href: '/contact', label: t('nav.contact') },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Language */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://wa.me/447956154482"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-5 py-2.5 text-sm"
            >
              {t('nav.getStarted')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col py-4 space-y-1 border-t border-white/10 mt-3">
                {[
                  { href: '/', label: t('nav.home') },
                  { href: '/about', label: t('nav.about') },
                  { href: '/blog', label: t('nav.blog') },
                  { href: '/#features', label: t('nav.features') },
                  { href: '/pricing', label: t('nav.pricing') },
                  { href: '/#testimonials', label: t('nav.reviews') },
                  { href: '/contact', label: t('nav.contact') },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 flex flex-col gap-3 px-4">
                  <LanguageSwitcher />
                  <a
                    href="https://wa.me/447956154482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow px-6 py-3 text-center"
                  >
                    {t('nav.getStarted')}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
