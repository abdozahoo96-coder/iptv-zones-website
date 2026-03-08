 3: SSH Key Setup
```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Then push:
cd /Users/sibrahim/Documents/LIFETIME
git remote set-url origin git@github.com:brahimb69/IPTVlifetime.git
git push -u origin master
```

## 🌐 Deployment to Production

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push

### Environment Variables (if needed)
```env
WORDPRESS_API_URL=https://blog.iptvlifetime.net/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://iptvlifetime.net
```

## 📋 Testing Checklist

Before deploying, test these URLs:

- ✅ `/blog` - Blog listing page
- ✅ `/blog/[any-post-slug]` - Individual blog posts  
- ✅ `/sitemap.xml` - Main sitemap
- ✅ `/sitemap-pages.xml` - Pages sitemap
- ✅ `/sitemap-posts.xml` - Posts sitemap
- ✅ `/sitemap_index.xml` - Sitemap index
- ✅ `/robots.txt` - Updated robots file

## 🔍 WordPress API Requirements

Ensure your WordPress site (`blog.iptvlifetime.net`) has:
- ✅ REST API enabled (default in WordPress)
- ✅ CORS headers configured for your domain
- ✅ Featured images enabled
- ✅ Excerpts enabled for posts

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📈 SEO Features Implemented

1. **Dynamic Metadata**: Each blog post generates unique title, description, and OpenGraph tags
2. **Structured Sitemaps**: Separate sitemaps for pages and posts with proper priority and frequency
3. **Clean URLs**: SEO-friendly URLs matching WordPress slug structure
4. **Image Optimization**: Automatic handling of featured images with alt tags
5. **Robots.txt**: Updated to reference all sitemap files

## 🔄 Content Updates

The blog content automatically updates from WordPress:
- **Posts**: Update every hour (3600 seconds)
- **Sitemaps**: Update daily for posts, immediately for pages
- **Cache**: Next.js ISR ensures fast loading with fresh content

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Caching Strategy**: WordPress API responses cached with ISR
- **Code Splitting**: Automatic code splitting for optimal loading
- **Prefetching**: Automatic prefetching of blog post links

## 📞 Support & Maintenance

For ongoing maintenance:
1. Monitor WordPress API availability
2. Check sitemap generation monthly
3. Update dependencies quarterly
4. Monitor performance metrics

## 🎯 Next Steps

After successful deployment:
1. Submit sitemaps to Google Search Console
2. Set up monitoring for WordPress API uptime
3. Configure CDN for optimal global performance
4. Implement analytics tracking for blog pages

---

**Status**: ✅ Ready for deployment  
**Last Updated**: $(date)  
**WordPress API**: blog.iptvlifetime.net  
**GitHub Repository**: https://github.com/brahimb69/IPTVlifetime.git
