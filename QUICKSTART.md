# 🚀 Quick Start Guide

Get your React portfolio up and running in 5 minutes!

## ⚡ Fast Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Your Browser
Navigate to `http://localhost:3000`

That's it! Your portfolio is now running. 🎉

## 📝 Common Tasks

### Update Your Information
Edit `src/data/portfolio.ts` to change:
- Your name and title
- Work experience
- Projects
- Skills
- Certifications
- Social links

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Add a Profile Photo
1. Put your photo in `public/` folder
2. Edit `src/components/Hero.tsx`:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="..." />
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔗 Useful Links

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOY-REACT.md`
- **Migration Details**: See `MIGRATION-GUIDE.md`

## 💡 Tips

- Use `npm run dev` while developing for hot reload
- Changes to `src/data/portfolio.ts` update instantly
- Check the browser console for any errors
- Test on mobile by resizing your browser

## 🆘 Need Help?

- Check the documentation files in the project root
- Review component files in `src/components/`
- Look at the data structure in `src/data/portfolio.ts`

---

**Happy coding! 🎨**
