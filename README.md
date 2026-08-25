# Francesco Sanfelice di Bagnoli — Portfolio

One-page **dark mode premium** portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

Live (GitHub Pages): https://sanfelix2004.github.io/francesco-sanfelice-portfolio/

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (scroll reveal)
- lucide-react + react-icons

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/francesco-sanfelice-portfolio/`).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |

## Replace images

Put your assets here:

- `public/images/avatar.png` — hero portrait (replace anytime)
- `public/Francesco-Sanfelice-CV.pdf` — downloadable CV

## Content

All copy lives in `src/data/profile.js` (name, bio, services, projects, contacts). Edit that file to update the site.

## Deploy (GitHub Pages)

```bash
npm run build
git add -A && git commit -m "Deploy portfolio" && git push
```

Vite `base` is set to `/francesco-sanfelice-portfolio/` for this repository.

> Tip: for automatic Pages builds from Vite, configure GitHub Actions or publish the `dist` folder. A simple approach is committing `dist` to `gh-pages` or enabling Actions.
