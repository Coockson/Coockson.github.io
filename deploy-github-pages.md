# GitHub Pages Deployment Guide

Your portfolio website can be deployed to GitHub Pages at `username.github.io`. Here's how to set it up:

## Setup Steps

### 1. Create GitHub Repository
1. Go to GitHub and create a new repository named exactly: `username.github.io` (replace `username` with your GitHub username)
2. Make sure it's public (GitHub Pages requires public repos for free accounts)

### 2. Prepare Your Code
Since your current setup includes both frontend and backend, you'll need to use only the frontend for GitHub Pages:

**Files to include in your GitHub repository:**
- `client/` folder (your React frontend)
- `attached_assets/` folder (your images)
- `package.json` (modified for static deployment)
- `vite.config.ts` (configured for GitHub Pages)
- `tailwind.config.ts`
- `postcss.config.js`
- `tsconfig.json`
- `components.json`

**Files to exclude:**
- `server/` folder (GitHub Pages doesn't support backend servers)
- Database-related files (`drizzle.config.ts`, `shared/schema.ts`)

### 3. Modify for Static Deployment

Your app is already mostly static since it doesn't use the backend. The blog system I created uses a local array, so it will work perfectly on GitHub Pages.

### 4. Build Script
Add this to your `package.json` scripts section:
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 5. Deploy
```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### 6. Configure GitHub Pages
1. Go to your repository settings on GitHub
2. Scroll down to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Click Save

## Important Notes

✅ **Your website will work perfectly** because:
- It's a React single-page application
- The blog system uses local data (no server needed)
- All styling and interactions are client-side
- Profile images are properly imported as assets

✅ **Features that will work:**
- Navigation and smooth scrolling
- Hero section with typing animation
- Experience, skills, education sections
- Contact section with social links
- Blog page with post management
- All animations and styling
- Mobile responsive design

❌ **Features that won't work (but you don't use them):**
- Backend API calls (you don't have any)
- Database operations (not needed for your portfolio)
- Server-side authentication (not used)

## Your Website URL
Once deployed, your website will be available at:
`https://username.github.io` (replace with your actual GitHub username)

## Adding Blog Posts
To add new blog posts after deployment:
1. Edit `client/src/pages/blog.tsx`
2. Add new posts to the `BLOG_POSTS` array
3. Commit and push changes
4. Run `npm run deploy` to update the live site

Your portfolio is perfectly suited for GitHub Pages deployment!