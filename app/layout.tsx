import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { IPTVZONESStructuredData } from '../components/seo/StructuredData'
import { LanguageProvider } from '../lib/language-context'

import { Viewport } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'IPTV ZONES - Premium IPTV Streaming Service | 25,000+ Channels',
  description: 'IPTV ZONES offers premium IPTV streaming with 25,000+ live TV channels, 26,000+ movies & TV shows. Get your IPTV ZONES subscription with HD & 4K quality streaming worldwide.',
  keywords: 'IPTV ZONES, iptv zones subscription, premium iptv, iptv streaming, live tv channels, iptv service, iptvzones, iptv provider, streaming service',
  openGraph: {
    title: 'IPTV ZONES - Premium IPTV Streaming Service | 25,000+ Channels',
    description: 'Get IPTV ZONES subscription with 25,000+ live TV channels and 26,000+ movies. Premium IPTV streaming service with HD & 4K quality.',
    url: 'https://iptvzones.com',
    siteName: 'IPTV ZONES',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://iptvzones.com/images/LOGO.webp',
        width: 300,
        height: 300,
        alt: 'IPTV ZONES Logo - Premium IPTV Streaming Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV ZONES - Premium IPTV Streaming Service',
    description: 'Premium IPTV ZONES streaming with 25,000+ channels. Best IPTV subscription service.',
    images: ['https://iptvzones.com/images/LOGO.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google6ce108ec9bf739e5',
  },
  alternates: {
    canonical: 'https://iptvzones.com',
    languages: {
      'en': 'https://iptvzones.com',
      'en-US': 'https://iptvzones.com/en',
    }
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  category: 'technology'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/ICON.ico" />
        <link rel="canonical" href="https://iptvzones.com" />
        <meta name="theme-color" content="#050810" />
        <meta name="msapplication-TileColor" content="#050810" />
        <meta name="application-name" content="IPTV ZONES" />
        <meta name="apple-mobile-web-app-title" content="IPTV ZONES" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* BLOCK EXTENSION ERRORS FROM NEXT.JS OVERLAY */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            var suppress = ['MetaMask', 'extension', 'chrome-extension'];
            function filter(msg) {
              if (!msg) return false;
              var s = String(msg);
              return suppress.some(function(term) { return s.indexOf(term) !== -1; });
            }
            window.addEventListener('unhandledrejection', function(e) {
              if (filter(e.reason) || filter(e.reason.message)) {
                e.stopImmediatePropagation();
                e.preventDefault();
              }
            }, true);
            window.addEventListener('error', function(e) {
              if (filter(e.message) || filter(e.filename)) {
                e.stopImmediatePropagation();
                return true;
              }
            }, true);
            var origError = console.error;
            console.error = function() {
              if (filter(arguments[0])) return;
              origError.apply(console, arguments);
            };
          })();
        `}} />
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased selection:bg-primary-500/30`}>
        <LanguageProvider>
          <IPTVZONESStructuredData />
          {children}

          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-RBZRR5QZ05"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RBZRR5QZ05', {
                page_path: window.location.pathname,
              });
            `
            }}
          />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/447956154482"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-surface-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary-500/20">
              Chat with us on WhatsApp
            </span>
          </a>
        </LanguageProvider>
      </body>
    </html>
  )
}
