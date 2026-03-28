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

If these variables are not set, the UI falls back to direct email and the form submit button stays disabled.

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
