# 🚀 Cloudflare Pages Deployment Guide for Ubyflow

This guide will walk you through deploying the Ubyflow landing page to Cloudflare Pages and connecting your custom domain `ubyflow.com`.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- Domain `ubyflow.com` (preferably on Cloudflare, but external domains work too)

## Step 1: Push Code to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Ubyflow landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Cloudflare Pages

### Via Cloudflare Dashboard (Recommended - Easiest)

1. **Sign up/Login to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up with GitHub (recommended) or email
   - Navigate to **Pages** in the sidebar

2. **Create a New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub
   - Select your repository (`ubyflow-landing`)

3. **Configure Build Settings**
   - **Project name:** `ubyflow-landing` (or any name you prefer)
   - **Production branch:** `main`
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave as default)
   - **Environment variables:** (none needed for now)
   - Click **"Save and Deploy"**

4. **Wait for Build**
   - Cloudflare will install dependencies and build your site
   - This takes 2-3 minutes
   - You'll get a temporary URL like `ubyflow-landing.pages.dev`

## Step 3: Connect Custom Domain (ubyflow.com)

### Option A: Domain Already on Cloudflare (Easiest)

1. **Add Domain in Cloudflare Pages**
   - Go to your Pages project dashboard
   - Navigate to **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter `ubyflow.com`
   - Cloudflare will automatically:
     - Add DNS records
     - Provision SSL certificate
     - Set up redirects

2. **Add www Subdomain (Optional)**
   - Click **"Set up a custom domain"** again
   - Enter `www.ubyflow.com`
   - Cloudflare will handle the redirect automatically

### Option B: Domain on External Registrar

1. **Add Domain in Cloudflare Pages**
   - Same as Option A, step 1
   - Cloudflare will show you DNS records to add

2. **Add DNS Records at Your DNS Provider**
   - Add a **CNAME record**:
     - Name: `@` or `ubyflow.com`
     - Value: Your Cloudflare Pages URL (e.g., `ubyflow-landing.pages.dev`)
     - TTL: Auto or 3600
   - Add another **CNAME record**:
     - Name: `www`
     - Value: Your Cloudflare Pages URL
     - TTL: Auto or 3600
   
   **Note:** Some registrars don't allow CNAME on root domain. If that's the case:
   - Add an **A record** pointing to Cloudflare's IP (shown in dashboard)
   - Or transfer your domain to Cloudflare (recommended for easier management)

3. **Wait for DNS Propagation**
   - Usually takes 1-24 hours
   - Cloudflare will auto-provision SSL once DNS is verified

### Option C: Transfer Domain to Cloudflare (Recommended)

1. **Transfer Domain**
   - In Cloudflare dashboard, go to **Websites**
   - Click **"Add a site"**
   - Enter `ubyflow.com`
   - Follow the transfer process (unlock domain at current registrar, get auth code)
   - Complete transfer (takes 5-7 days, but DNS works immediately)

2. **Add Domain to Pages**
   - Once domain is on Cloudflare, add it to Pages project
   - Everything is automatic - DNS, SSL, redirects

## Step 4: Configure Redirects

Cloudflare Pages automatically handles SPA routing, but you can add custom redirects:

1. **Via Cloudflare Dashboard**
   - Go to **Pages** → Your project → **Functions**
   - Add redirect rules if needed (usually not needed for React SPA)

2. **Via `_redirects` file** (already in `public/`)
   - The `_redirects` file in `public/` will be automatically used
   - Contains: `/*    /index.html   200`

## Step 5: Verify Deployment

1. **Test Your Site**
   - Visit `ubyflow.com` (once DNS propagates)
   - Visit `www.ubyflow.com`
   - Check all pages:
     - `/` (homepage)
     - `/terms.html`
     - `/privacy.html`

2. **Check SSL Certificate**
   - Cloudflare automatically provides free SSL
   - Your site should show `https://ubyflow.com`
   - Check certificate in browser (padlock icon)
   - SSL mode should be "Full" or "Full (strict)" in Cloudflare dashboard

3. **Test Functionality**
   - Test "Join Waitlist" buttons (WhatsApp links)
   - Test form submission
   - Test on mobile devices
   - Check all animations work

## Step 6: Performance Optimization (Optional)

Cloudflare Pages includes:
- **Global CDN**: Automatic edge caching worldwide
- **Image Optimization**: Automatic image optimization
- **Minification**: Automatic CSS/JS minification
- **HTTP/3**: Latest protocol support

You can enable additional features in Cloudflare dashboard:
- **Speed**: Auto Minify, Brotli compression
- **Caching**: Page Rules for custom caching
- **Security**: WAF rules, DDoS protection

## Continuous Deployment

Once set up, every push to your `main` branch will automatically:
1. Trigger a new build on Cloudflare Pages
2. Deploy the updated site
3. Keep your domain connected
4. Invalidate CDN cache automatically

## Troubleshooting

### Build Fails
- Check Cloudflare build logs in dashboard
- Ensure `pnpm` is available (Cloudflare auto-installs it)
- Verify all dependencies in `package.json`
- Check Node version (Cloudflare uses Node 18 by default)

### Domain Not Connecting
- Wait 24-48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS status
- Verify DNS records are correct
- Check SSL/TLS mode in Cloudflare (should be "Full" or "Full (strict)")
- Clear browser cache

### SSL Certificate Issues
- Cloudflare auto-provisions SSL, but it requires DNS to be verified first
- If stuck, check SSL/TLS settings in Cloudflare dashboard
- Ensure SSL/TLS encryption mode is not "Off"

### 404 Errors on Routes
- The `_redirects` file should handle this
- Verify it's in the `public/` folder
- Check Cloudflare Functions if you need custom routing

### Performance Issues
- Enable Cloudflare's Auto Minify in Speed settings
- Check cache settings
- Use Cloudflare's Analytics to monitor performance

## Cloudflare vs Netlify

**Advantages of Cloudflare Pages:**
- ✅ Faster global CDN (Cloudflare's network)
- ✅ Better DDoS protection
- ✅ More generous free tier
- ✅ Integrated with Cloudflare's other services
- ✅ Better for high-traffic sites

**Features:**
- Unlimited bandwidth on free tier
- Unlimited requests
- 500 builds per month (free tier)
- Automatic SSL
- Global edge network

## Additional Cloudflare Features

- **Workers**: Serverless functions (if you add backend later)
- **Analytics**: Web Analytics (free, privacy-focused)
- **R2 Storage**: Object storage (if needed)
- **Stream**: Video hosting (if needed)
- **WAF**: Web Application Firewall (paid, but powerful)

## Support

- Cloudflare Docs: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- Cloudflare Community: [community.cloudflare.com](https://community.cloudflare.com)
- Status Page: [cloudflarestatus.com](https://www.cloudflarestatus.com)

---

**Your site will be live at:** `https://ubyflow.com` 🎉

**Cloudflare Pages URL:** `https://ubyflow-landing.pages.dev` (temporary, until domain is connected)
