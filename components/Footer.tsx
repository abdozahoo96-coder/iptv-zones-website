'use client'

import { Tv, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from '../lib/language-context'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-surface-950 border-t border-white/5">
      {/* Mesh gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container mx-auto px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img src="/logo.svg" alt="IPTV ZONES" className="w-9 h-9 rounded-lg" />
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">IPTV</span>
                <span className="gradient-text ml-1">ZONES</span>
              </span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm">
              {t('footer.description')}
              <span className="hidden sm:inline"> {t('footer.descriptionDetail')}</span>
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t('nav.home') },
                { href: '/about', label: t('nav.about') },
                { href: '/blog', label: t('nav.blog') },
                { href: '#features', label: t('nav.features') },
                { href: '/pricing', label: t('nav.pricing') },
                { href: '#testimonials', label: t('nav.reviews') },
                { href: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-500 hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {[
                t('footer.servicesList.channels'),
                t('footer.servicesList.movies'),
                t('footer.servicesList.quality'),
                t('footer.servicesList.compatible'),
                t('footer.servicesList.support'),
                t('footer.servicesList.updates'),
              ].map((service, i) => (
                <li key={i} className="text-slate-500 text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <a href="https://wa.me/447956154482" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +44 7956 154482 <span className="hidden sm:inline text-slate-600">{t('footer.whatsapp')}</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-slate-400 text-sm">
                  <span className="hidden sm:inline">{t('footer.hours')}</span>
                  <span className="sm:hidden">{t('footer.hoursMobile')}</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-slate-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} IPTV ZONES. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs text-center sm:text-right">
              <span className="hidden sm:inline">Premium IPTV Streaming Service</span>
              <span className="sm:hidden">IPTV ZONES</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
