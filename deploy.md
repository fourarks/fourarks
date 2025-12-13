# Deployment Guide

## Vercel (Recommended)

1. **Push to Git**: Initialize a git repository and push your code to GitHub/GitLab.
2. **Import Project**: Go to [Vercel Dashboard](https://vercel.com/new) and import your repository.
3. **Framework Preset**: Vercel should automatically detect `Create React App` or `Vite`.
4. **Environment Variables**: Add any API keys if you integrate a CMS later.
5. **Deploy**: Click Deploy.

## Netlify

1. Drag and drop your `dist` or `build` folder into Netlify Drop, or connect your Git repository.
2. Build command: `npm run build`
3. Publish directory: `dist` (or `build`)

## Performance Checklist

- [ ] Ensure all images are converted to WebP/AVIF.
- [ ] Lazy load images below the fold (handled in code).
- [ ] Minify CSS/JS (handled by build tool).
- [ ] Verify `metadata.json` and SEO meta tags in `index.html`.
