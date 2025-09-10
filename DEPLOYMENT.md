# Deployment Guide (Heroku)

This project is now configured for deployment on Heroku using an Express server that serves the Vite production build from `dist/`.

## What changed from GitHub Pages
- Removed GitHub Pages workflow (`.github/workflows/deploy.yml`).
- Removed `public/CNAME` and `homepage` field.
- Removed `gh-pages` scripts/dependency from `package.json`.
- Added Express server (`server.js`) and a `Procfile`.
- Ensured Vite config has no GitHub Pages base path.

## Requirements
- Node.js 20.x on Heroku (declared in `package.json` engines).
- Heroku CLI installed and logged in.

## Local verification
1. Install dependencies and build:
   - `npm install`
   - `npm run build`
2. Start the server locally:
   - `node server.js`
3. Open http://localhost:3000 and navigate to routes like `/ueber` or `/ausstellungen` to confirm SPA fallback works.

## Deploy to Heroku
1. Create the app (once):
   - `heroku login`
   - `heroku create` (or `heroku create <your-app-name>`) 
2. Set the Heroku git remote if needed:
   - `heroku git:remote -a <your-app-name>`
3. Push to Heroku:
   - `git push heroku main`

Heroku will:
- Install dependencies
- Run `heroku-postbuild` (which builds the Vite app)
- Start the web dyno with `web: node server.js` from the `Procfile`

## Notes
- SPA routing is handled by the Express catch-all route returning `dist/index.html`.
- No DNS configuration is required for Heroku by default. You can use the default `<app-name>.herokuapp.com` domain.
- If you previously had a custom domain pointing to GitHub Pages, remove those DNS records before adding a new domain for Heroku (optional, not covered here).
