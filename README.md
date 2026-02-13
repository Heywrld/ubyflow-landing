# Ubyflow Landing Page

A modern, one-page landing site for Ubyflow - a Nigerian fintech platform for crypto/gift card conversions and payments.

## 🚀 Tech Stack

- **React** + **Vite** - Fast development and build
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Intersection Observer** - Smooth scroll animations (no heavy libraries)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Intersection Observer
- ✅ Fixed transparent navigation with backdrop blur
- ✅ Hero section with staggered animations
- ✅ Features grid with hover effects
- ✅ How It Works step-by-step guide
- ✅ Waitlist form with validation
- ✅ WhatsApp integration for CTA buttons
- ✅ SEO optimized with meta tags
- ✅ Accessibility compliant

## 🚢 Deployment

### Cloudflare Pages (Current Setup)

#### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign up/login
   - Navigate to **Pages** in the sidebar
   - Click **"Create a project"** → **"Connect to Git"**
   - Connect to GitHub and select your repository
   - Configure build settings:
     - **Build command:** `pnpm build`
     - **Build output directory:** `dist`
     - **Production branch:** `main`
   - Click **"Save and Deploy"**

3. **Connect Custom Domain (ubyflow.com)**
   - In your Pages project dashboard, go to **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter `ubyflow.com` and `www.ubyflow.com`
   - If domain is on Cloudflare: DNS and SSL are automatic
   - If domain is external: Add CNAME records pointing to your Pages URL
   - Cloudflare will automatically provision SSL certificate

#### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=ubyflow-landing
```

### Other Platforms

The `dist` folder after running `pnpm build` can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📱 Sections

1. **Hero** - Main headline with CTA
2. **Features** - 6 feature cards with icons
3. **How It Works** - 3-step process
4. **Waitlist Form** - Email capture with validation
5. **Footer** - Links and contact info

## 🎯 Brand Colors

- Primary Yellow: `#FFC300`
- Background Black: `#000000`
- Section Backgrounds: `#0f0f0f`, `#0a0a0a`
- Text Colors: White, `#a3a3a3`, `#737373`

## 📝 Notes

- All "Join Waitlist" buttons redirect to WhatsApp
- Form data is logged to console (backend integration can be added later)
- Logo files are in `/public/logos/`
- Uses Inter font from Google Fonts

## 🔧 Customization

Edit component files in `/src/components/` to customize content, colors, or animations.

---

Built with ❤️ for Ubyflow
# landing
# ubyflow-landing
