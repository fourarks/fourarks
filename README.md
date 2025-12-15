# 4ARKS Agency Website

A modern, high-performance agency website built with React and Tailwind CSS. The design features a "Cyber-SaaS" aesthetic with deep navy backgrounds, glassmorphism effects, and vibrant gradients.

## Tech Stack

- **Framework**: React (Next.js compatible structure)
- **Styling**: Tailwind CSS
- **3D/AR**: `<model-viewer>`
- **Icons**: Custom SVG & Lucide-style structure
- **Fonts**: Outfit (Headings), Inter (Body)

## Project Structure

- `/components`: Reusable UI components (Hero, Navbar, Services, etc.)
- `/assets`: (Create this folder for local images and GLB models)
- `App.tsx`: Main layout assembler
- `constants.ts`: Content source of truth (CMS placeholder)
- `types.ts`: TypeScript definitions

## Customization

### 1. Branding & Content
Edit `src/constants.ts` to update:
- Company Name, Email, Phone
- Service offerings and descriptions
- Pricing packages
- Case studies and Team members

### 2. Images & 3D Models
Replace placeholder URLs in components with your local assets:
- **Hero Video/Image**: Update `components/Hero.tsx`
- **3D Models**: Place `.glb` files in `public/assets/` and update `src` in `components/ARShowcase.tsx`.
- **Team/Portfolio**: Update image URLs in `constants.ts`.

### 3. Colors & Theme
The theme is defined in `index.html` within the `tailwind.config` script.
- `background`: Main dark background (`#020617`)
- `accent`: Primary Purple/Indigo (`#6366f1`)
- `accentCyan`: Secondary Cyan (`#06b6d4`)

## CMS Integration (Sanity.io recommended)

This project uses a structured data approach in `constants.ts` that maps 1:1 with CMS schemas.
1. Create a Sanity project.
2. Use the schemas provided in `content-schema.json`.
3. Replace `constants.ts` with a fetch call to your Sanity client.

## Deployment

See `deploy.md` for deployment instructions.

## Contact form webhook

To enable the contact form to send submissions to Google Sheets (via the Apps Script Web App), set the `VITE_CONTACT_WEBHOOK` environment variable in a `.env` file at the project root:

```
VITE_CONTACT_WEBHOOK=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

Then restart the dev server so Vite picks up the env var:

```bash
npm run dev
```

If you don't set this variable, the contact form will open the user's mail client as a fallback. See `scripts/google_apps_script.gs` for the Apps Script code to deploy as a Web App.
