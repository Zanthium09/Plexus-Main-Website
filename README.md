# Plexus Tele-Solutions

Next.js implementation of the Plexus Tele-Solutions corporate website, built from the provided Stitch design specs.

## Tech stack

- Next.js 14 (App Router) with TypeScript
- Tailwind CSS 3 with the design-system tokens from `plexus_vital_link/DESIGN.md`
- Inter + Work Sans (next/font) and Material Symbols Outlined for iconography
- next/image for optimised remote images

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Pages

| Route | Source design |
| --- | --- |
| `/` | `homepage_plexus_tele_solutions` |
| `/about` | `about_us_plexus_tele_solutions` |
| `/services` | `services_plexus_tele_solutions` |
| `/telecom-solutions` | `telecom_solutions_plexus_tele_solutions` |
| `/products` | `products_plexus_tele_solutions_3` (catalog) |
| `/industries` | `industries_plexus_tele_solutions` |
| `/partners` | `partners_plexus_tele_solutions` |
| `/resources` | `resources_plexus_tele_solutions` |
| `/careers` | `careers_plexus_tele_solutions` |
| `/contact` | `contact_us_plexus_tele_solutions` |

`products_plexus_tele_solutions_1` and `products_plexus_tele_solutions_2` were duplicates of the homepage layout in the source folder, so they share the home route.

## Project layout

```
app/                Routes (App Router)
  layout.tsx        Root layout with header / footer / floating actions
  globals.css       Tailwind base + utility classes (lifeline-pulse, pulse-bg, grid-pattern)
  <route>/page.tsx  One file per page
components/         Header, Footer, FloatingActions, Breadcrumbs
tailwind.config.ts  Design tokens (colors, fonts, spacing) from DESIGN.md
```

## Notes

- All navigation links and CTAs route to the correct pages or `tel:`/`mailto:` links.
- Forms (Resources newsletter, Careers application, Contact inquiry) include client-side validation and a mock submission handler that displays a success state.
- Images are served from the original `lh3.googleusercontent.com` URLs in the design and are whitelisted in `next.config.mjs`.
