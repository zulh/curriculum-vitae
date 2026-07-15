# Curriculum Vitae — Ahmad Zulhilmi Ghazali

An interactive, single-page CV built as a modern web app. It renders my
professional profile as an animated site **and** exports a clean, ATS-parseable
PDF from the same data source.

**🔗 Live:** https://zulh.github.io/curriculum-vitae/

<!-- Add a screenshot at docs/screenshot.png, then this will render:
![Screenshot of the CV site](docs/screenshot.png)
-->

![React](https://img.shields.io/badge/React-18-20232a?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)

---

## Features

- **Single source of truth** — all content lives in [`src/data/cv.js`](src/data/cv.js); every section reads from it, so updating the CV means editing one file.
- **Print-to-PDF** — a dedicated print layout renders via `@media print`, producing **selectable, ATS-parseable vector text** (no rasterized images).
- **Light / dark theme** — system-preference aware, persisted to `localStorage`.
- **Scroll-reveal animations** — Framer Motion, with full `prefers-reduced-motion` support.
- **Fully tested** — component and data tests with Vitest + Testing Library.
- **Accessible & responsive** — works from mobile to desktop.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS (CSS custom properties for theming) |
| Animation | Framer Motion · tsParticles |
| Testing | Vitest · Testing Library · happy-dom |
| Hosting | GitHub Pages (`gh-pages`) |

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build to dist/
npm run preview    # preview the production build
npm test           # run the test suite
npm run lint       # lint
```

## Project Structure

```
src/
├── data/cv.js          # single source of truth for all CV content
├── components/         # one component per CV section (+ PrintLayout for PDF)
├── hooks/              # useTheme, usePDF (print), useScrollReveal
├── App.jsx             # composes sections, passes data slices down
└── index.css           # Tailwind + theme tokens + print styles
```

## Deployment

Deployed to GitHub Pages:

```bash
npm run deploy     # builds and publishes dist/ via gh-pages
```

---

© Ahmad Zulhilmi Ghazali · Built with React, Vite & Tailwind CSS
