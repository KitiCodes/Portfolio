## Project exploration summary

This repository is a Vite + React + TypeScript artist portfolio with Tailwind CSS and shadcn-style UI utilities. It renders fixed-width (1440px) desktop layouts with absolutely positioned artwork and shared header/footer components.

### Tech stack
- Vite 6 + @vitejs/plugin-react
- React 18 + TypeScript
- Tailwind CSS (custom CSS variables, Antonio font from Google Fonts)
- UI utilities: class-variance-authority (cva), tailwind-merge, @radix-ui/react-slot
- Routing: react-router-dom v6

### Entry and routing
- `src/index.tsx` mounts to `#app` and defines routes:
  - `/` → `DesktopDark` (home/gallery)
  - `/ausstellungen` → `Exhebitions`
  - `/ueber` → `AboutMe`
  - `/kontakt` → `Contact`
- `index.html` sets title, imports Antonio, and loads `tailwind.css`.

### Screens
- `DesktopDark.tsx` (home)
  - Fixed canvas: 1440 × 7700, artworks positioned absolutely.
  - Lightbox with Esc/Arrow keys, supports grouped diptychs via `groupId`.
  - Sticky header with centered “de | en” above the Kontakt nav item.
  - Uses `ContactSection` and `FooterBar` at specific coordinates.
- `aboutMe.tsx`
  - Uses `SiteHeader`, text blocks, portrait + bottom image strip, shared `ContactSection` and `FooterBar`.
- `contact.tsx`
  - `SiteHeader`, copy block, `ContactSection` (email + Instagram), right-side image, `FooterBar`.
- `exhebitions.tsx`
  - `SiteHeader`, three exhibition images + captions, shared `ContactSection`, `FooterBar`.

### Components
- `SiteHeader.tsx` → top language bar + sticky nav; centers language label over the “Kontakt” link using refs and resize listener.
- `AppHeader.tsx` → alternate sticky header (currently unused by screens).
- `ContactSection.tsx` → configurable name/location, mailto link, Instagram icon.
- `FooterBar.tsx` → simple footer with dynamic year and legal links.
- `components/ui/button.tsx` → shadcn-style Button (cva + Radix `Slot`).
- `lib/utils.ts` → `cn` helper (clsx + tailwind-merge).

### Styling & config
- `tailwind.css` defines theme CSS variables in `@layer base`, sets Antonio as default sans, and applies global styles.
- `tailwind.config.js` extends theme tokens, animations, and sets content globs.
- `vite.config.ts` configures Tailwind via PostCSS and sets `base: ./` for relative assets.
- `package.json` scripts: `dev` (vite --host), `build` (vite build).

### Build status
- Production build succeeds (`npm run build`).
- Assets are bundled; several JPEGs are large (2–4 MB) on non-home screens.

### Observations & quick wins
- Header duplication: `SiteHeader` is used; `AppHeader` appears unused—consider consolidating to avoid drift.
- Language switcher is static (“de | en”); add i18n wiring later if multilingual is desired.
- Accessibility: lightbox uses `aria-modal` and keyboard controls; consider focus trapping for completeness.
- Performance: consider exporting smaller images or adding responsive `srcset` for about/exhibition pages.
- SEO: add meta description, Open Graph tags, and a favicon.

### Changes in this session
- Normalized `tailwind.css` layer order (base → components → utilities) and removed duplicate directives; rebuild verified successful.
