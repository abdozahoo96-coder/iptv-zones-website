# 📊 Google Analytics & Search Console Setup Guide

## ✅ Code Already Installed!

I've already added the necessary code to your website. Now you just need to get your IDs from Google.

---

## 🔍 Part 1: Google Search Console Setup

### Step 1: Create Property
1. Go to: https://search.google.com/search-console/welcome
2. Click **"Add Property"**
3. Choose **"URL prefix"** method
4. Enter: `https://iptvput.com`
5. Click **"Continue"**

### Step 2: Get Verification Code
Google will show you several verification methods. Choose **"HTML tag"** method.

You'll see something like:
```html
<meta name="google-site-verification" content="ABC123xyz..." />
```

**Copy the code inside content="" (the ABC123xyz part)**

### Step 3: Add to Your Website
Once you have the verification code, run this command in your terminal:

```bash
cd /Users/abdelilahzahouani/Desktop/IPTV/Archive
```

Then tell me the verification code and I'll add it for you!

### Step 4: Submit Sitemap
After verification is complete:
1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Add these sitemaps:
   - `https://iptvput.com/sitemap.xml`
   - `https://iptvput.com/sitemap_index.xml`
3. Click **"Submit"**

---

## 📈 Part 2: Google Analytics Setup

### Step 1: Create GA4 Property
1. Go to: https://analytics.google.com
2. Click **"Admin"** (gear icon in bottom left)
3. Click **"+ Create Property"**
4. Enter:
   - **Property name**: IPTVPUT
   - **Reporting time zone**: Your timezone
   - **Currency**: Your currency
5. Click **"Next"**

### Step 2: Set Up Data Stream
1. Choose **"Web"**
2. Enter:
   - **Website URL**: `https://iptvput.com`
   - **Stream name**: IPTVPUT Website
3. Click **"Create stream"**

### Step 3: Get Measurement ID
You'll see your **Measurement ID** - it looks like: `G-XXXXXXXXXX`

**Copy this ID!**

### Step 4: Add to Vercel Environment Variables
1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your **iptvput-website** project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (your actual ID) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Your verification code from Search Console |

5. Click **"Save"**
6. **Redeploy** your website (Vercel → Deployments → click "..." → Redeploy)

---

## 🎯 Quick Setup Checklist

- [ ] Create Google Search Console property
- [ ] Get verification code
- [ ] Tell me the verification code (I'll add it to your site)
- [ ] Create Google Analytics GA4 property
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add both IDs to Vercel environment variables
- [ ] Redeploy website on Vercel
- [ ] Verify ownership in Search Console
- [ ] Submit sitemaps to Search Console
- [ ] Check Google Analytics Real-Time report to confirm it's working

---

## 📝 What I've Already Done For You

✅ **Added Google Analytics tracking code** to your website
✅ **Added Google Search Console meta tag placeholder** 
✅ **Created .env.local file** with placeholders
✅ **Set up proper Script loading** for optimal performance

All you need to do now is:
1. Get your Google Analytics Measurement ID
2. Get your Search Console verification code
3. Add them to Vercel environment variables
4. Redeploy

---

## 🔒 Important Notes

- **Never commit .env.local to Git** - it's already in .gitignore
- **Use Vercel Environment Variables** for production
- **Analytics needs 24-48 hours** to start showing data
- **Search Console verification** is instant once the code is added

---

## ❓ Need Help?

Just share your:
1. Google Analytics Measurement ID (G-XXXXXXXXXX)
2. Google Search Console verification code

And I'll add them for you and push the update!
