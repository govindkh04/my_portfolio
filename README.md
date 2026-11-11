# Govind Khandelwal — Portfolio

A streaming-inspired portfolio presenting the education, skills, projects, leadership, awards, and certification in Govind Khandelwal's resume.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Build and preview the static site:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`, including a custom `404.html` for static hosting.

## Content and assets

- Resume content and links: `src/data/portfolio.ts`
- Resume PDF: `public/assets/Govind_Khandelwal_Resume.pdf`
- Monogram artwork: `public/assets/gk-monogram.svg`
- Social preview image generator: `scripts/build-images.mjs` (`npm run images`)

The site uses React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lenis.
