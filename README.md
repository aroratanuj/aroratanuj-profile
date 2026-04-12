# Tanuj Arora - Product Manager Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Auto-Update**: Node.js file watcher (separate from React app)

## 📁 Project Structure

```
aroratanuj-profile/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── CredibilityStrip.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/               # Portfolio data
│   │   └── portfolio.ts    # All portfolio content
│   ├── types/              # TypeScript interfaces
│   │   └── index.ts
│   ├── styles/             # Global styles
│   │   └── index.css
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── vite-env.d.ts       # Vite type definitions
├── public/                 # Static assets
├── watcher.js              # Auto-update script (separate)
├── backups/                # HTML backups
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aroratanuj-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🧪 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run watcher` - Run the auto-update watcher (separate from React app)

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to update:
- Experience entries
- Projects
- Skills
- Certifications
- Metrics
- Social links

### Styling

- **Tailwind CSS**: Edit `tailwind.config.js` for theme customization
- **Global Styles**: Edit `src/styles/index.css`
- **Component Styles**: Use Tailwind utility classes directly in components

### Add New Sections

1. Create a new component in `src/components/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx` if needed

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔄 Auto-Update Watcher

The portfolio includes a separate Node.js script (`watcher.js`) that automatically monitors your resume PDF and updates the portfolio when changes are detected.

**Note**: This watcher works with the original HTML version. For the React version, you'll update content directly in `src/data/portfolio.ts`.

To run the watcher (legacy):
```bash
npm run watcher
```

## 📝 Best Practices Used

- **TypeScript**: Full type safety across the application
- **Component Architecture**: Reusable, single-responsibility components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Vite for fast builds and hot module replacement
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Code Organization**: Clear separation of concerns (components, data, types)
- **Modern React**: Functional components with hooks
- **Code Quality**: ESLint for code linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Tanuj Arora**
- LinkedIn: [linkedin.com/in/tanuj-arora](https://linkedin.com/in/tanuj-arora)
- Email: tanuj.arora@example.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Font: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)