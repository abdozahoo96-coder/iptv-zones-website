# Language Switcher Implementation Guide

## Overview
Your IPTVPUT website now supports **bilingual functionality** with automatic language detection and a manual toggle switch between **English (EN)** and **Dutch (NL)**.

## Features Implemented

### 1. **Automatic Language Detection**
- **Location-based**: Automatically detects if user is from Netherlands and sets Dutch as default
- **Browser-based**: Falls back to browser language preferences if geolocation fails
- **Default**: English for all other countries

### 2. **Manual Language Switcher**
- Toggle button in the header with globe icon
- Displays current language (EN/NL)
- Saves preference to localStorage
- Works on both desktop and mobile views

### 3. **Persistent Language Selection**
- User's language choice is saved in browser's localStorage
- Preference is remembered across sessions
- Overrides automatic detection once set

## Technical Implementation

### Files Created

1. **`/lib/language-context.tsx`**
   - React Context provider for language state management
   - Automatic language detection using ipapi.co geolocation API
   - Translation helper function `t(key)`
   - LocalStorage integration for persistence

2. **`/lib/translations/en.ts`**
   - Complete English translations for all website content
   - Organized by sections (nav, hero, features, pricing, etc.)

3. **`/lib/translations/nl.ts`**
   - Complete Dutch translations for all website content
   - Mirror structure of English translations

4. **`/components/LanguageSwitcher.tsx`**
   - Toggle button component with globe icon
   - Displays current language
   - Handles language switching

### Files Modified

1. **`/app/layout.tsx`**
   - Wrapped app with `<LanguageProvider>` to enable translations globally

2. **`/components/Header.tsx`**
   - Integrated `LanguageSwitcher` component
   - Updated navigation links to use translations with `t('nav.home')`, etc.
   - Mobile menu also includes language switcher

## How to Use Translation System

### In Components

Import the `useLanguage` hook and use the `t()` function:

```tsx
'use client'
import { useLanguage } from '../lib/language-context'

export default function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  )
}
```

### Translation Keys Structure

Translation files are organized hierarchically:

```typescript
{
  nav: {
    home: 'Home',
    about: 'About',
    ...
  },
  hero: {
    title: 'Premium',
    description: '...',
    ...
  },
  ...
}
```

Access nested keys with dot notation: `t('nav.home')` or `t('hero.title')`

## Next Steps to Complete Translation

Currently, **only the Header navigation** is fully translated. To complete the translation:

### 1. Update Hero Component (`/components/Hero.tsx`)

Replace hardcoded text with:
```tsx
const { t } = useLanguage()
// Then use t('hero.title'), t('hero.description'), etc.
```

### 2. Update Features Component (`/components/Features.tsx`)

```tsx
const { t } = useLanguage()
// Use t('features.title'), t('features.items.fastInstall.title'), etc.
```

### 3. Update Pricing Components

- `/components/Pricing.tsx` → use `t('pricing.lifetime.*)`
- `/components/SubscriptionPricing.tsx` → use `t('pricing.subscription.*)`

### 4. Update Other Components

- `/components/Testimonials.tsx` → use `t('testimonials.*)`
- `/components/Footer.tsx` → use `t('footer.*)`
- `/components/ChannelLogosCarousel.tsx` → use `t('channels.*)`
- `/components/MoviesCarousel.tsx` → use `t('movies.*)`

### 5. Update Pages

- `/app/page.tsx` → homepage metadata
- `/app/about/page.tsx` → use `t('about.*)`
- `/app/contact/page.tsx` → use `t('contact.*)`
- `/app/blog/page.tsx` → use `t('blog.*)`

## How Language Detection Works

### Detection Flow

1. **Check localStorage** for saved preference
   - If found → use saved language
   
2. **Check browser language**
   - If starts with 'nl' → set to Dutch
   
3. **Geolocation API call** to ipapi.co
   - If country_code === 'NL' → set to Dutch
   - Otherwise → set to English

4. **Save choice** to localStorage for future visits

### Geolocation API

The app uses the free **ipapi.co** service:
- No API key required for basic usage
- Returns country code based on IP address
- Free tier: 30,000 requests/month
- Falls back gracefully if API fails

## Testing the Language Switcher

### Test Automatic Detection

**For Netherlands users:**
1. Clear browser localStorage: `localStorage.clear()` in console
2. Reload page → Should default to Dutch

**For other countries:**
1. Clear browser localStorage
2. Reload page → Should default to English

### Test Manual Switching

1. Click the globe icon in the header
2. Language should toggle between EN/NL
3. Reload page → Selected language persists
4. Check navigation text changes instantly

### Test LocalStorage

Open browser console:
```javascript
// Check saved language
localStorage.getItem('preferred-language')

// Manually set language
localStorage.setItem('preferred-language', 'nl')
// or
localStorage.setItem('preferred-language', 'en')
```

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Requires JavaScript enabled
- ✅ LocalStorage support required

## Performance Considerations

- **Translation files** are dynamically imported (code-splitting)
- **Language detection** runs once on mount
- **Switching languages** is instant (no page reload)
- **LocalStorage** prevents repeated API calls

## Customization

### Adding New Languages

1. Create `/lib/translations/[lang-code].ts`
2. Update `Language` type in `language-context.tsx`:
   ```tsx
   type Language = 'en' | 'nl' | 'fr' | 'de' // etc
   ```
3. Update detection logic if needed

### Changing Detection Logic

Edit `/lib/language-context.tsx` → `detectUserLanguage()` function

### Styling Language Switcher

Edit `/components/LanguageSwitcher.tsx` → modify className properties

## Troubleshooting

### Language doesn't change
- Check browser console for errors
- Verify translation files exist
- Clear localStorage and try again

### Always defaults to English
- Geolocation API might be blocked
- Check network tab for API call to ipapi.co
- Try setting browser language to Dutch

### Translations missing
- Verify key exists in both `en.ts` and `nl.ts`
- Check for typos in translation keys
- Component must use `useLanguage()` hook

## Development Server

Your app is currently running at:
**http://localhost:3000**

You can:
- Click the language switcher in the header
- See it toggle between EN/NL
- Verify the navigation text changes
- Test on mobile responsive view

## Summary

✅ **Language Context** - Created with auto-detection
✅ **Translation Files** - English & Dutch complete
✅ **Language Switcher** - Added to header (desktop & mobile)
✅ **Header Component** - Fully translated and functional
⏳ **Other Components** - Ready for translation (keys prepared)

The foundation is complete! Now you can gradually update each component to use the translation system.
