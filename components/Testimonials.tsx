'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '../lib/language-context'

export default function Testimonials() {
  const { t } = useLanguage()

  const getTestimonials = () => {
    try {
      const reviews = t('testimonials.reviews')
      return Array.isArray(reviews) ? reviews : []
    } catch {
      return []
    }
  }

  const testimonials = getTestimonials()

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-mesh">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-300 glass-card mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 group"
            >
              {/* Quote + Stars */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Text */}
              <p className="text-slate-300 mb-6 italic leading-relaxed text-sm sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.country}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center text-white font-bold text-sm shadow-glow-primary">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 glass-card rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">5.0/5 {t('testimonials.trust.rating')}</span>
            </div>
            <div className="text-sm text-slate-400">
              <span className="font-bold text-white">10,000+</span> {t('testimonials.trust.customers')}
            </div>
            <div className="text-sm text-slate-400">
              <span className="font-bold text-emerald-400">99.9%</span> {t('testimonials.trust.uptime')}
            </div>
          </div>
        </motion.div>
        {/* WhatsApp Reviews Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Real User Feedback
            </h3>
            <p className="text-slate-400">Join 10,000+ satisfied customers worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '+44 7911 123456',
                location: 'London, UK',
                avatar: 'https://i.pravatar.cc/150?u=uk1',
                messages: [
                  { text: "Mate, the 4K sports channels are mental! ⚽️", type: 'incoming', time: '20:14' },
                  { text: "No lag at all during the game tonight.", type: 'incoming', time: '20:15' },
                  { text: "Best IPTV provider I've used. period.", type: 'incoming', time: '20:15' }
                ]
              },
              {
                number: '+1 (212) 555-0198',
                location: 'NYC, USA',
                avatar: 'https://i.pravatar.cc/150?u=usa1',
                messages: [
                  { text: "Just got my credentials. That was fast! ⚡️", type: 'incoming', time: '14:32' },
                  { text: "The VOD library is insane lol. So many movies.", type: 'incoming', time: '14:33' },
                  { text: "Gonna recommend this to my cousins for sure.", type: 'incoming', time: '14:35' }
                ]
              },
              {
                number: '+33 6 12 34 56 78',
                location: 'Paris, France',
                avatar: 'https://i.pravatar.cc/150?u=fr1',
                messages: [
                  { text: "Salut, activation instantanée ! Merci beaucoup.", type: 'incoming', time: '11:05' },
                  { text: "La qualité 4K sur ma Smart TV est ouf. ✨", type: 'incoming', time: '11:06' },
                  { text: "Service au top, je reviendrai. ⭐⭐⭐⭐⭐", type: 'incoming', time: '11:08' }
                ]
              }
            ].map((chat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group h-full"
              >
                {/* Dynamic WhatsApp Window */}
                <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border-white/5 bg-[#0b1019] h-full flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-[#121b22] px-4 py-3 flex items-center gap-3 border-b border-white/5 shrink-0">
                    <div className="relative">
                      <img src={chat.avatar} className="w-10 h-10 rounded-full object-cover border border-white/10" alt="User Profile" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#121b22]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">{chat.number}</div>
                      <div className="text-[10px] text-emerald-400 font-medium">online</div>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="p-4 space-y-3 bg-[#0b141a] relative flex-grow min-h-[300px]">
                    {/* Background Pattern Hint */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    {chat.messages.map((msg, idx) => (
                      <div key={idx} className="flex flex-col relative z-10">
                        <div className={`relative max-w-[85%] px-3 py-2 rounded-xl text-sm shadow-sm ${msg.type === 'incoming'
                          ? 'bg-[#202c33] text-slate-100 self-start rounded-tl-none'
                          : 'bg-[#005c4b] text-white self-end rounded-tr-none'
                          }`}>
                          {msg.text}
                          <div className="text-[9px] text-slate-400 text-right mt-1 opacity-70">
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Tag */}
                  <div className="p-3 bg-[#0b141a] border-t border-white/5 shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">{chat.location}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium italic">Verified Chat</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
