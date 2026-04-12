# 🚀 React Portfolio Deployment Guide

This guide covers deployment options for the React + TypeScript + Tailwind CSS portfolio.

## 📋 Prerequisites

- Node.js 14+ installed
- Git installed and configured
- Account with your preferred hosting platform

## 🎯 Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration required
- Automatic HTTPS
- Fast CDN
- Free tier available
- Perfect for React apps

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Vercel Configuration** (Optional)
   Create `vercel.json` in project root:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "devCommand": "npm run dev"
   }
   ```

4. **Custom Domain** (Optional)
   - Go to project settings in Vercel
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Netlify Configuration** (Optional)
   Create `netlify.toml` in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist",
       "deploy:force": "gh-pages -d dist --force"
     }
   }
   ```

3. **Update vite.config.ts**
   Add base path if deploying to a subdirectory:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Access your site**
   - URL: `https://your-username.github.io/your-repo-name/`

### Option 4: AWS S3 + CloudFront

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set origin to your S3 bucket
   - Enable redirect HTTP to HTTPS
   - Add custom CNAME if needed

4. **Deploy script** (optional)
   Create `deploy-s3.sh`:
   ```bash
   #!/bin/bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

## 🔧 Pre-Deployment Checklist

- [ ] Update all portfolio data in `src/data/portfolio.ts`
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Check all social media links
- [ ] Test contact forms/links
- [ ] Run `npm run build` successfully
- [ ] Preview production build with `npm run preview`
- [ ] Update meta tags in `index.html`
- [ ] Add favicon to `public/` folder
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)

## 📊 Performance Optimization

### 1. Enable Compression

Add this to `vite.config.ts`:
```typescript
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression()
  ]
})
```

Install:
```bash
npm install --save-dev vite-plugin-compression
```

### 2. Optimize Images

- Use WebP format
- Compress images with tools like [TinyPNG](https://tinypng.com)
- Lazy load images below the fold

### 3. Code Splitting

Vite automatically does code splitting. For manual control:
```typescript
const Projects = lazy(() => import('./components/Projects'))
```

## 🔒 Environment Variables

Create `.env.production`:
```
VITE_APP_TITLE=Tanuj Arora Portfolio
VITE_CONTACT_EMAIL=tanuj.arora@example.com
```

Use in components:
```typescript
const appTitle = import.meta.env.VITE_APP_TITLE
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Blank Page After Deploy

- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Check if all assets are uploaded
- Ensure routing is configured correctly

### 404 Errors on Refresh

For single-page apps, configure your server to redirect all routes to `index.html`:

**Vercel/Netlify**: Handle automatically
**GitHub Pages**: Use `historyApiFallback` or use HashRouter
**Custom Server**: Configure rewrite rules

## 📈 Monitoring & Analytics

### Add Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### Add Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `App.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <YourComponents />
      <Analytics />
    </>
  )
}
```

## 🎯 Post-Deployment

1. **Test the live site** thoroughly
2. **Set up monitoring** (Uptime, Analytics)
3. **Configure backups** for your repository
4. **Document any custom configurations**
5. **Share the live URL** and gather feedback

## 💡 Pro Tips

- Use **environment variables** for sensitive data
- Keep **dependencies updated** regularly
- Set up **automated testing** for critical features
- Monitor **bundle size** with `npm run build`
- Use **CDN** for static assets
- Enable **HTTP/2** if possible
- Set up **error tracking** (Sentry, LogRocket)

## 📞 Support

If you encounter issues:

1. Check the [Vite documentation](https://vitejs.dev/)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Check platform-specific documentation (Vercel, Netlify, etc.)
4. Search GitHub issues for similar problems
5. Ask in relevant community forums

---

**Happy deploying! 🚀**
