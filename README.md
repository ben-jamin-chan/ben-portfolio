# Benjamin Chan Portfolio

Personal portfolio site for Benjamin Chan, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

Live site: https://benjamin-chan.com/

## Stack

- Vite 5
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- EmailJS

## Local development

```sh
npm install
npm run dev
```

The dev server runs on `http://localhost:8080`.

## Available scripts

```sh
npm run dev
npm run build
npm run build:dev
npm run lint
npm run typecheck
npm run preview
npm run deploy
```

## Contact form setup

The contact form uses EmailJS. Copy `.env.example` to `.env.local` and provide these values:

```sh
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_CONTACT_TEMPLATE_ID=
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=
```

The public key, service ID, and contact template ID enable direct form delivery. The auto-reply template is optional. Without the delivery configuration, the form opens a prefilled draft in the visitor’s email app and keeps their message on the page.

## Portfolio design

The layout follows [himansh.in](https://himansh.in/), adapted to Benjamin’s existing content. Home, Projects, Experience, and Contact share a fixed bottom navigation. Production uses hash routes for GitHub Pages compatibility.

The light and dark palettes, compact page width, and Fraunces/Geist typography are shared in `src/index.css`. Fonts and their open-source licenses are hosted in `public/fonts`. The theme follows the system until a visitor saves a preference using the top-right toggle.

Edit profile details, projects, and experience in `src/lib/site.ts`, introductory copy in `src/components/Hero.tsx`, and the downloadable CV at `public/resume.pdf`.

The current résumé file is empty, so the CV button offers an email request. Add a PDF at that path and restart the dev server or rebuild to automatically enable the download.

## Deployment

`npm run deploy` publishes the production build to GitHub Pages via `gh-pages`. The custom domain is configured through `public/CNAME`.

## Project structure

```text
src/
  components/   UI sections and shared primitives
  hooks/        Toast and responsive helpers
  lib/          Shared utilities and site metadata
  pages/        Routed page entries
  utils/        Theme hook
public/         Static assets like favicon, resume, and CNAME
```
