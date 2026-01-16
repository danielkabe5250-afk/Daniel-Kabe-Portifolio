# Deploy Your Portfolio to GitHub Pages

## Step 1: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

## Step 2: Update package.json

Add these lines to your `package.json`:

1. Add homepage (replace YOUR-USERNAME with your GitHub username):
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

2. Add deploy scripts to the "scripts" section:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Name it: `portfolio` (or any name you want)
4. Don't initialize with README
5. Click "Create repository"

## Step 4: Initialize Git and Push

In your project folder, run these commands:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Daniel Kabe Portfolio"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Deploy to GitHub Pages

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Under "Source", select branch: `gh-pages`
5. Click "Save"

## Step 7: Access Your Site

Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

Wait 2-3 minutes for the first deployment to complete.

## Update Your Portfolio

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy updates
npm run deploy
```

## Alternative: Deploy to Vercel (Easier!)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live instantly

Vercel URL: `https://your-portfolio.vercel.app`

## Troubleshooting

**Issue: Blank page after deployment**
- Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line (use your repo name)
})
```

**Issue: Images not loading**
- Make sure images are in the `public` folder
- Use paths like `/profile.jpg` (starting with /)

## Need Help?

Contact: danielkabe5250@gmail.com
