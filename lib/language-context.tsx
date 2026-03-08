'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import enTranslations from './translations/en'

type Language = 'en' | 'nl' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
  currency: string
  formatPrice: (price: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, any>>(enTranslations)

  useEffect(() => {
    // Check localStorage first (only on client)
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language') as Language | null

      if (savedLang && savedLang !== 'en') {
        setLanguageState(savedLang)
        loadTranslations(savedLang)
      } else if (!savedLang) {
        // Detect user's country based on browser language
        detectUserLanguage()
      }
    }
  }, [])

  const detectUserLanguage = async () => {
    try {
      // Only run on client side
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return
      }

      // Try to detect based on browser language first
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('nl')) {
        setLanguageState('nl')
        loadTranslations('nl')
        return
      } else if (browserLang.startsWith('fr')) {
        setLanguageState('fr')
        loadTranslations('fr')
        return
      }

      // Use a geolocation API to detect country
      try {
        const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) })
        const data = await response.json()

        if (data.country_code === 'NL') {
          setLanguageState('nl')
          loadTranslations('nl')
        } else if (data.country_code === 'FR') {
          setLanguageState('fr')
          loadTranslations('fr')
        }
        // If not NL/FR, keep English (already loaded)
      } catch {
        // Geolocation failed, keep English
      }
    } catch (error) {
      console.error('Language detection failed:', error)
    }
  }

  const loadTranslations = async (lang: Language) => {
    try {
      if (lang === 'en') {
        setTranslations(enTranslations)
        return
      }
      const trans = await import(`./translations/${lang}.ts`)
      setTranslations(trans.default)
    } catch (error) {
      console.error('Failed to load translations:', error)
      // Fallback to English
      setTranslations(enTranslations)
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
    loadTranslations(lang)
  }

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  // Get currency symbol based on language
  const currency = language === 'en' ? '$' : '€'

  // Format price with currency based on language
  const formatPrice = (price: number): string => {
    if (language === 'en') {
      // Convert EUR to USD (approximate rate: 1 EUR = 1.1 USD)
      const usdPrice = Math.round(price * 1.1)
      return `$${usdPrice}`
    }
    return `€${price}`
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currency, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  // During SSR or if used outside provider, return default values with real translations
  if (context === undefined) {
    return {
      language: 'en' as Language,
      setLanguage: () => { },
      t: (key: string): any => {
        const keys = key.split('.')
        let value: any = enTranslations
        for (const k of keys) {
          value = value?.[k]
        }
        return value || key
      },
      currency: '$',
      formatPrice: (price: number) => `$${Math.round(price * 1.1)}`
    }
  }

  return context
}
