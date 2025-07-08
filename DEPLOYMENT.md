
# Deployment Guide

This project is built with React and Vite, making it compatible with various hosting platforms.

## GitHub Pages Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `public/404.html` file handles client-side routing for GitHub Pages.

3. Deploy the `dist` folder to your GitHub Pages repository.

## Vercel Deployment

1. Connect your repository to Vercel
2. The `vercel.json` configuration file handles routing automatically
3. Vercel will automatically detect the Vite build settings

## Other Static Hosting (Netlify, etc.)

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add redirect rules for SPA routing:
   ```
   /*    /index.html   200
   ```

## Apache Server Deployment

1. Upload the built files from the `dist` directory
2. The `.htaccess` file is included in the `public` folder and will be copied to `dist` during build
3. Ensure your Apache server has `mod_rewrite` enabled

## Environment Variables

Create a `.env` file in the root directory for any environment-specific variables:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=your_contact_email
```

## Build Optimization

The project includes:
- Automatic code splitting
- Asset optimization
- Modern browser targeting
- Compressed static assets

## SEO Considerations

- Update the meta tags in `index.html`
- Consider adding structured data for better search engine visibility
- Update the sitemap if needed
