# Product Builder Portfolio Upgrade Design

Date: 2026-06-17
Project: Benjamin Chan Portfolio
Status: Draft for user review

## Purpose

Upgrade the portfolio so it supports three goals under one coherent story:

- getting hired as a developer;
- winning freelance or independent developer clients;
- building credibility for SaaS, side projects, and product work.

The approved positioning is **Product Builder**. The site should communicate that Benjamin can turn product ideas into shipped web, mobile, and SaaS systems.

## Current State

The current site is a Vite, React, TypeScript, Tailwind CSS, and shadcn/ui portfolio. It already includes:

- a polished hero with portrait media;
- About, Services, Projects, Contact, and Footer sections;
- shadcn/ui primitives and Tailwind theme tokens;
- optimized project asset variants in `src/asset/optimized/`;
- EmailJS contact handling with a mailto fallback;
- build, typecheck, and lint scripts.

Observed improvement opportunities:

- The current story is attractive but broad. It says Benjamin builds polished products, but does not clearly unify hiring, client work, and SaaS credibility.
- The hero CTA is split between `View Projects` and `Start a Project`, which favors freelance clients and leaves hiring/SaaS visitors less directly addressed.
- Projects behave more like a gallery than case-study proof. They show role, stack, proof bullets, live links, and source links, but the section can better surface problem, ownership, decisions, and outcome.
- The theme preference prompt blocks the first impression. It should become non-blocking or delayed.
- Production build output shows large media assets, especially the hero portrait and one project image.
- Social metadata has no active Open Graph image.
- `.superpowers/` brainstorming artifacts should remain ignored.

## Target Audience

The upgraded page should work for:

- hiring managers and technical reviewers who need stack, code, resume, and delivery evidence;
- founders and small teams who need a useful product, app, dashboard, storefront, or landing page built;
- potential SaaS/product collaborators who want proof of product judgment, scope control, and shipping ability.

The site should avoid making Benjamin look exclusively like a freelancer or exclusively like a job seeker.

## Positioning

Primary story:

> I build polished web, mobile, and SaaS products from idea to launch.

Primary CTA:

> Work with me

Secondary CTA:

> View case studies

Supporting proof:

- Live demos and source code are available.
- Work spans React, TypeScript, Expo, Firebase, APIs, dashboards, storefronts, and launch pages.
- Benjamin can scope, design, build, ship, and iterate product surfaces.

## Page Architecture

### 1. Navigation

Keep the navigation compact and familiar, but align labels with the Product Builder story.

Recommended nav:

- Home
- Work
- Capabilities
- About
- Contact

Recommended persistent CTA:

- Work with me

The current theme toggle should remain available, but it should not compete with the primary conversion path.

### 2. Hero

The hero should immediately answer:

- what Benjamin builds;
- why that matters;
- what a visitor should do next.

Recommended hero headline:

> I build polished web, mobile, and SaaS products from idea to launch.

Recommended supporting copy:

> I help teams, founders, and product-minded companies turn rough ideas into sharp interfaces, reliable workflows, and shipped digital products.

Hero CTAs:

- Primary: `Work with me`
- Secondary: `View case studies`

Hero proof panel:

- Keep the portrait, but pair it with stronger product-builder proof instead of only focus/stack cards.
- Show compact proof such as `React + TypeScript`, `Expo + Firebase`, `Live demos`, `Source available`, and `Based in Kuala Lumpur / remote-friendly`.
- Avoid adding fake metrics.

### 3. Audience Proof Strip

Add a compact section immediately after the hero that clarifies the balanced positioning:

- `For hiring teams`: production-minded React, TypeScript, mobile, and API work with public code.
- `For founders and clients`: scoped builds, launch pages, dashboards, mobile apps, and integrations.
- `For product/SaaS work`: product judgment, MVP thinking, workflows, and iteration.

This section should be brief. It is a routing and trust aid, not a second services grid.

### 4. Featured Work / Case Studies

Rework Projects into a stronger case-study proof section.

Recommended structure:

- One featured project gets a larger treatment.
- Remaining projects stay available as supporting case-study cards.
- Filters may remain if they continue to be useful, but they should not dominate the section.

Each project should expose:

- project type;
- problem or product goal;
- Benjamin's role;
- stack;
- key decisions or ownership areas;
- live demo;
- source link where available.

The current project data in `src/lib/site.ts` should be extended rather than scattered across components.

### 5. Capabilities

The Services section should become a more senior `Capabilities` section.

Recommended capability groups:

- Product UI and front-end systems;
- Mobile app experiences;
- Backend, auth, data, and API integrations;
- Launch pages, storefronts, and conversion surfaces.

Keep the existing service categories if useful, but reduce repeated card language and connect each capability to a business or product outcome.

### 6. Process

Add or fold in a compact process section:

- Scope the core flow;
- Design the product surface;
- Build the front end and connect the backend;
- Ship, test, and iterate.

This supports freelance clients without making the site feel like an agency landing page.

### 7. About / Experience

Keep About, but make it sharper:

- Emphasize the combination of product judgment, implementation, and operational background.
- Keep Majorel experience, but connect it to stakeholder communication, coordination, and delivery reliability.
- Keep technical skill cards, but avoid overly broad claims.

### 8. Contact

Reframe Contact as a flexible intake hub for all three goals.

Recommended changes:

- Replace the current `Start a Project` framing with `Work with me`.
- Add a simple inquiry type selector:
  - Hiring / role opportunity;
  - Freelance / client project;
  - SaaS / product collaboration;
  - General.
- Keep EmailJS and mailto fallback.
- Keep direct email, phone/WhatsApp, location, and GitHub links.

### 9. Footer

Keep the footer compact.

Recommended additions:

- Resume link if the file remains available at `public/resume.pdf`.
- GitHub link.
- Email link.

## Visual Direction

Default direction:

- Preserve the current clean, green-accented, glassy portfolio identity.
- Reduce repeated rounded cards and repeated glow effects where sections start to feel visually similar.
- Vary rhythm through one stronger featured-work section, a compact proof strip, and cleaner content bands.
- Keep cards at or near the existing visual style unless a later Image Gen concept pass is approved.

Before implementation, create a high-fidelity concept pass for the main visible sections unless the implementation is scoped as copy/layout refinement only:

- hero and proof panel;
- audience proof strip;
- featured work/case-study section;
- capabilities/process section;
- contact intake section.

The concept pass should preserve the current brand direction unless the user asks for a broader redesign.

## Technical Design

### Data

Use `src/lib/site.ts` as the source of truth for:

- site profile;
- nav labels;
- audience proof items;
- capabilities;
- process steps;
- project case-study data;
- contact inquiry types.

Avoid hardcoding repeated content inside section components when it belongs in site metadata.

### Components

Expected component updates:

- `Navbar.tsx`: update nav labels and primary CTA behavior.
- `Hero.tsx`: rewrite positioning, CTAs, and proof panel.
- `About.tsx`: sharpen copy and experience positioning.
- `Services.tsx`: rename or reshape into capabilities/process.
- `Projects.tsx`: upgrade project cards into case-study cards.
- `Contact.tsx`: add inquiry type and revise CTA copy.
- `Footer.tsx`: align links and footer copy.
- `ThemePreferencePrompt.tsx`: make the prompt non-blocking, delayed, dismissible, or remove it.
- `src/lib/site.ts`: centralize new content.
- `index.html`: improve social metadata and activate an Open Graph image.

### Styling

Keep Tailwind and existing shadcn/ui conventions.

When touching shadcn components:

- use installed components before creating custom primitives;
- use semantic tokens where practical;
- use `gap-*` instead of `space-*` in new layouts;
- keep icons from the configured `lucide` library unless a component already defines another source.

### Performance

Performance upgrades should include:

- use existing optimized responsive assets where available;
- replace the hero portrait import with optimized AVIF/WebP sources if practical;
- reduce or lazy-load heavy below-the-fold images;
- avoid loading unused large source images in production bundles;
- consider reducing AOS usage if it causes layout jank or unnecessary JS weight.

### SEO and Sharing

Add or improve:

- active Open Graph image;
- Twitter card metadata;
- canonical URL;
- richer description matching Product Builder positioning;
- structured data for person/profile if low risk.

## Accessibility

Maintain or improve:

- semantic section headings;
- descriptive link and button labels;
- keyboard-accessible nav and mobile menu;
- reduced motion support for major animations;
- sufficient contrast in both light and dark modes.

The theme prompt should not trap visitors unnecessarily on first load.

## Verification Plan

Before declaring implementation done:

- run `npm run typecheck`;
- run `npm run lint`;
- run `npm run build`;
- inspect production bundle output for large assets;
- render-check desktop and mobile viewports;
- verify primary CTA scrolls to contact intake;
- verify secondary CTA scrolls to work/case studies;
- verify project filters or case-study interactions still work if retained;
- verify contact form behavior with configured EmailJS and fallback mailto state where possible;
- verify no console errors in the main flow;
- verify metadata appears in production `dist/index.html`.

## Scope Boundaries

In scope:

- positioning, copy, layout, and flow improvements;
- case-study data model;
- CTA and contact conversion improvements;
- performance and metadata polish;
- theme prompt first-load improvement.

Out of scope for the first implementation pass:

- adding a blog;
- adding backend analytics dashboards;
- adding authentication;
- replacing the entire design system;
- adding a CMS;
- rewriting the portfolio in another framework.

## Implementation Approach

The user approved Product Builder positioning and the recommended page direction.

The first coding pass should be a focused content and conversion upgrade inside the existing visual system. It should not replace the full brand identity, routing setup, or design system.

Use a small high-fidelity visual concept pass only for sections whose layout changes materially enough that text specifications would be ambiguous. If implementation can preserve the current visual system while changing copy, hierarchy, data shape, and section rhythm, proceed without a full redesign concept.
