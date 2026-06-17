# Product Builder Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the portfolio as a Product Builder portfolio with one clear `Work with me` conversion path while preserving the existing Vite, React, Tailwind, and shadcn visual system.

**Architecture:** Centralize content and navigation data in `src/lib/site.ts`, then update the page sections to consume that data. Keep the existing single-page app structure, add one proof-strip component, reshape Services into Capabilities, and upgrade Projects into case-study proof without adding backend services or a new design system.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS, shadcn/ui, Radix ToggleGroup, lucide-react, EmailJS.

---

## File Responsibility Map

- `src/lib/site.ts`: single source of truth for profile, navigation, hero proof, audience proof, capabilities, process steps, project case-study fields, and contact inquiry types.
- `src/pages/Index.tsx`: page section ordering and AOS initialization.
- `src/components/Navbar.tsx`: desktop/mobile navigation and primary `Work with me` CTA.
- `src/components/Hero.tsx`: first-viewport positioning, CTAs, optimized portrait media, and compact hero proof.
- `src/components/AudienceProof.tsx`: new compact proof strip for hiring, client, and SaaS/product visitors.
- `src/components/Capabilities.tsx`: replacement for `Services.tsx`; capability cards plus process steps.
- `src/components/Projects.tsx`: featured case-study card plus supporting project cards with role, stack, decisions, live demo, and source.
- `src/components/About.tsx`: sharper product-builder biography and experience framing.
- `src/components/Contact.tsx`: inquiry type selector, revised copy, EmailJS/mailto payload updates.
- `src/components/Footer.tsx`: Product Builder footer copy, nav links, resume/GitHub/email links.
- `src/components/ThemePreferencePrompt.tsx`: remove from the first-load flow by deleting the component and removing its import.
- `index.html`: Product Builder title, description, canonical URL, Open Graph, and Twitter metadata.
- `public/og-image.webp`: copied social preview asset derived from an existing optimized project image.

---

## Task 1: Centralize Product Builder Content

**Files:**
- Modify: `src/lib/site.ts`

- [ ] **Step 1: Update asset imports to optimized files**

Replace the current first four imports in `src/lib/site.ts` with optimized assets:

```ts
import datingAppImage from "@/asset/optimized/project-gym-dating-app-496.avif";
import holoImage from "@/asset/optimized/project-holo-1024.avif";
import petalImage from "@/asset/optimized/project-petal-1024.avif";
import trendImage from "@/asset/optimized/project-trend-1024.avif";
```

- [ ] **Step 2: Extend `siteProfile` with Product Builder fields**

Update `siteProfile` so these fields exist exactly:

```ts
export const siteProfile = {
  fullName: "Benjamin Chan",
  brandName: "Benjamin Chan(陳)",
  role: "Product Builder / Software Developer",
  headline: "I build polished web, mobile, and SaaS products from idea to launch.",
  summary:
    "I help teams, founders, and product-minded companies turn rough ideas into sharp interfaces, reliable workflows, and shipped digital products.",
  siteUrl: "https://benjamin-chan.com/",
  portfolioRepositoryUrl: "https://github.com/ben-jamin-chan/ben-portfolio",
  githubUrl: "https://github.com/ben-jamin-chan/",
  instagramUrl: "https://instagram.com/neb.neb.neb.neb",
  resumeUrl: "/resume.pdf",
  email: "chanbenjamin.tl@gmail.com",
  phoneDisplay: "+6017-338-0511",
  phoneHref: "tel:+60173380511",
  location: "Kuala Lumpur, Malaysia",
} as const;
```

- [ ] **Step 3: Add shared navigation and proof data**

Add these exports after `siteProfile`:

```ts
export const navLinks = [
  { name: "Home", href: "#home", targetId: "home" },
  { name: "Work", href: "#projects", targetId: "projects" },
  { name: "Capabilities", href: "#capabilities", targetId: "capabilities" },
  { name: "About", href: "#about", targetId: "about" },
  { name: "Contact", href: "#get-in-touch", targetId: "get-in-touch" },
] as const;

export const heroProofItems = [
  { label: "Core stack", value: "React, TypeScript, Expo, Firebase" },
  { label: "Proof", value: "Live demos and source available" },
  { label: "Location", value: "Kuala Lumpur, remote-friendly" },
] as const;

export const audienceProofItems = [
  {
    title: "For hiring teams",
    description:
      "Production-minded React, TypeScript, mobile, and API work with public code and live demos.",
  },
  {
    title: "For founders and clients",
    description:
      "Scoped builds for launch pages, dashboards, storefronts, mobile apps, and integrations.",
  },
  {
    title: "For SaaS and product work",
    description:
      "Product judgment, MVP thinking, user flows, and practical iteration from idea to shipped surface.",
  },
] as const;

export const capabilities = [
  {
    title: "Product UI and front-end systems",
    description:
      "Responsive React interfaces with clean hierarchy, reusable components, and polished interaction details.",
    examples: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Mobile app experiences",
    description:
      "Mobile-first Expo and React Native flows for discovery, profiles, messaging, bookings, and account journeys.",
    examples: ["Expo", "React Native", "Firebase", "Mobile UX"],
  },
  {
    title: "Backend and integrations",
    description:
      "Auth, data, API, email, payment, and automation workflows that turn interfaces into usable products.",
    examples: ["Firebase", "Node.js", "REST APIs", "EmailJS"],
  },
  {
    title: "Launch and conversion surfaces",
    description:
      "Landing pages, storefronts, and service sites that explain the offer clearly and move users toward action.",
    examples: ["Launch pages", "E-commerce", "Service sites", "SEO basics"],
  },
] as const;

export const processSteps = [
  {
    title: "Scope the core flow",
    description:
      "Define the audience, primary action, must-have screens, and the smallest useful version to ship.",
  },
  {
    title: "Design the product surface",
    description:
      "Shape the information hierarchy, responsive layout, interaction states, and trust signals.",
  },
  {
    title: "Build and connect",
    description:
      "Implement the front end, wire backend or API behavior, and keep the system maintainable.",
  },
  {
    title: "Ship and iterate",
    description:
      "Deploy the experience, verify the main flows, and improve based on real usage and feedback.",
  },
] as const;
```

- [ ] **Step 4: Extend the project model**

Replace the current `Project` type with:

```ts
export type Project = {
  title: string;
  description: string;
  problem: string;
  outcome: string;
  image: string;
  imageAlt: string;
  tags: ProjectTag[];
  live: string;
  liveLabel?: string;
  github?: string;
  imageDisplay?: "cover" | "contain";
  featured?: boolean;
  role: string;
  stack: string[];
  decisions: string[];
  proof: string[];
};
```

- [ ] **Step 5: Add project case-study fields**

Update each project object with these exact additional fields:

Florist Service Platform:

```ts
featured: true,
imageAlt: "Florist service platform homepage preview",
problem:
  "A local service business needed a clearer digital surface for browsing services, building trust, and moving customers toward booking intent.",
outcome:
  "Shipped a responsive service platform with mobile-first browsing, trust-oriented content structure, and a public demo for review.",
decisions: [
  "Prioritized service discovery before visual decoration so visitors can understand the offer quickly.",
  "Structured content around booking intent, updates, and trust signals for local customers.",
  "Kept the implementation deployable on GitHub Pages with source available for technical review.",
],
```

Fitness Themed Dating App:

```ts
imageAlt: "Fitness themed dating app mobile profile preview",
problem:
  "A mobile app concept needed native-feeling discovery, profile, swipe, and messaging flows for fitness-oriented social matching.",
outcome:
  "Published an Expo preview with Firebase-backed interaction paths so the experience can be tested on device.",
decisions: [
  "Designed mobile-first profile and discovery flows around fast scanning and clear actions.",
  "Used Firebase to support interactive app behavior instead of static prototype screens.",
  "Kept the preview accessible through Expo for realistic device testing.",
],
```

E-Commerce Platform:

```ts
imageAlt: "Skincare e-commerce storefront preview",
problem:
  "A skincare storefront needed a polished responsive presentation that made products easier to scan, compare, and browse.",
outcome:
  "Delivered a branded storefront experience with a live demo and public source code.",
decisions: [
  "Organized product sections around browsing and comparison instead of a decorative-only landing page.",
  "Balanced visual presentation with responsive layout behavior across desktop and mobile.",
  "Shipped a GitHub Pages deployment so the storefront can be reviewed quickly.",
],
```

Trend Watcher App:

```ts
imageAlt: "Trend watcher dashboard preview",
problem:
  "A trend-tracking workflow needed a dashboard-style interface for saving, comparing, and returning to topics over time.",
outcome:
  "Deployed a full web app experience with saved-topic and comparison-oriented product flows.",
decisions: [
  "Built around recurring user decisions: track, save, compare, and revisit topics.",
  "Used dashboard surfaces to make saved work and alert-oriented workflows easier to scan.",
  "Deployed the app to Render so it behaves like a real product surface rather than a static mockup.",
],
```

- [ ] **Step 6: Add inquiry type data**

Add these exports after the projects array:

```ts
export const inquiryTypes = [
  {
    value: "hiring",
    label: "Hiring / role",
    description: "Developer role, contract role, or technical collaboration.",
  },
  {
    value: "project",
    label: "Freelance project",
    description: "Website, app, dashboard, storefront, integration, or redesign.",
  },
  {
    value: "product",
    label: "SaaS / product",
    description: "MVP, side project, product idea, or product-building discussion.",
  },
  {
    value: "general",
    label: "General",
    description: "Anything else that should start with a conversation.",
  },
] as const;

export type InquiryTypeValue = (typeof inquiryTypes)[number]["value"];
```

- [ ] **Step 7: Verify Task 1**

Run: `npm run typecheck`

Expected: `tsc -b` completes with zero errors.

- [ ] **Step 8: Commit Task 1**

```bash
git add src/lib/site.ts
git commit -m "task-05: centralize product builder content"
```

---

## Task 2: Update Navigation, Hero, and Audience Proof

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Create: `src/components/AudienceProof.tsx`
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Update `Navbar.tsx` imports**

Remove the local `NavLink` type and `navLinks` array from `Navbar.tsx`.

Use these imports:

```ts
import { ArrowRight, Menu, X } from "lucide-react";
import type { MouseEvent, TouchEvent } from "react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site";
```

- [ ] **Step 2: Add desktop `Work with me` CTA in `Navbar.tsx`**

After `<ThemeToggle />` in the desktop controls, add:

```tsx
<a
  href="#get-in-touch"
  className="inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
  onClick={(event) => scrollToSection(event, "get-in-touch")}
>
  Work with me
  <ArrowRight className="ml-2 h-4 w-4" />
</a>
```

- [ ] **Step 3: Add mobile `Work with me` CTA in `Navbar.tsx`**

After the mapped mobile nav links, add:

```tsx
<a
  href="#get-in-touch"
  onClick={(event) => scrollToSection(event, "get-in-touch")}
  className="mt-3 flex min-h-[3.4rem] items-center justify-center rounded-2xl bg-primary px-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90"
>
  Work with me
</a>
```

- [ ] **Step 4: Update `Hero.tsx` imports**

Replace current imports with:

```ts
import { ArrowDown, ArrowRight, Github, Instagram, Mail } from "lucide-react";
import type { MouseEvent } from "react";
import heroPortrait from "@/asset/optimized/hero-portrait-720.avif";
import { heroProofItems, siteProfile } from "@/lib/site";
```

- [ ] **Step 5: Rewrite hero heading copy and CTAs**

In `Hero.tsx`, keep the existing layout but replace the hero text block with these values:

```tsx
<p className="font-mono text-md text-primary sm:text-base">
  Hello! I&apos;m {siteProfile.fullName}
</p>
<h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
  {siteProfile.headline}
</h1>
<p className="font-mono text-xl tracking-[0.18em] text-foreground/68 sm:text-2xl">
  {siteProfile.role}
  <span className="animate-blink">_</span>
</p>
<p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8 lg:mx-0">
  {siteProfile.summary}
</p>
```

Replace hero CTAs with:

```tsx
<a
  href="#get-in-touch"
  className="modern-btn-primary group min-h-[3.5rem] w-full text-sm sm:w-auto"
  onClick={(event) => scrollToSection(event, "get-in-touch")}
>
  Work with me
  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</a>
<a
  href="#projects"
  className="modern-btn-secondary min-h-[3.5rem] w-full text-sm sm:w-auto"
  onClick={(event) => scrollToSection(event, "projects")}
>
  View case studies
</a>
```

- [ ] **Step 6: Update hero portrait image and proof cards**

Replace `src={ben8}` with `src={heroPortrait}`.

Replace the two hardcoded Focus/Stack cards with:

```tsx
<div className="mt-4 grid gap-3">
  {heroProofItems.map((item) => (
    <div key={item.label} className="rounded-2xl border border-border/60 bg-background/80 p-3">
      <p className="text-xs uppercase tracking-[0.24em] text-foreground/50">{item.label}</p>
      <p className="mt-2 text-sm font-medium text-foreground/80">{item.value}</p>
    </div>
  ))}
</div>
```

- [ ] **Step 7: Create `AudienceProof.tsx`**

Create `src/components/AudienceProof.tsx`:

```tsx
import { BriefcaseBusiness, Rocket, Users } from "lucide-react";
import { audienceProofItems } from "@/lib/site";

const icons = [BriefcaseBusiness, Users, Rocket] as const;

export default function AudienceProof() {
  return (
    <section className="relative px-1 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {audienceProofItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/76 p-5 shadow-lg shadow-primary/5 backdrop-blur"
                data-aos="fade-up"
                data-aos-delay={100 + index * 70}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-foreground/66">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Insert `AudienceProof` in `Index.tsx`**

Add import:

```ts
import AudienceProof from "@/components/AudienceProof";
```

Place it immediately after `<Hero />`:

```tsx
<Hero />
<AudienceProof />
<About />
```

- [ ] **Step 9: Verify Task 2**

Run: `npm run typecheck`

Expected: zero type errors.

Run: `npm run build`

Expected: Vite production build completes.

- [ ] **Step 10: Commit Task 2**

```bash
git add src/components/Navbar.tsx src/components/Hero.tsx src/components/AudienceProof.tsx src/pages/Index.tsx
git commit -m "task-06: update hero navigation and audience proof"
```

---

## Task 3: Replace Services With Capabilities and Process

**Files:**
- Create: `src/components/Capabilities.tsx`
- Delete: `src/components/Services.tsx`
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Create `Capabilities.tsx`**

Create `src/components/Capabilities.tsx`:

```tsx
import { Code2, Layers3, PlugZap, Rocket, Smartphone } from "lucide-react";
import type { MouseEvent } from "react";
import { capabilities, processSteps } from "@/lib/site";

const capabilityIcons = [Layers3, Smartphone, PlugZap, Rocket] as const;

export default function Capabilities() {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="capabilities" className="relative scroll-mt-32 px-1 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-8 left-[-4rem] h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28" data-aos="fade-up">
              <p className="section-kicker">Capabilities</p>
              <h2 className="section-heading mt-3">The product surfaces I can take from rough idea to shipped version.</h2>
              <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                I combine product thinking, front-end craft, mobile-first UX, and backend-aware implementation so the result is useful, credible, and ready to improve.
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">From idea to usable product</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/65">
                      Scope the core flow, design the interface, build the product surface, connect the required systems, and ship a version people can actually use.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#get-in-touch"
                className="modern-btn-primary mt-6 w-full sm:w-auto"
                onClick={(event) => scrollToSection(event, "get-in-touch")}
              >
                Work with me
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index];

                return (
                  <article
                    key={capability.title}
                    className="group rounded-[1.75rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 60}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">{capability.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {capability.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/68"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Process</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">A practical path from scope to shipped surface.</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-foreground/65">
                The same workflow supports hiring teams reviewing delivery habits, clients scoping a build, and product collaborators thinking through an MVP.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="font-mono text-sm text-primary">0{index + 1}</p>
                  <h4 className="mt-3 font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-foreground/64">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `Index.tsx`**

Replace:

```ts
import Services from "@/components/Services";
```

with:

```ts
import Capabilities from "@/components/Capabilities";
```

Replace:

```tsx
<Services />
```

with:

```tsx
<Capabilities />
```

- [ ] **Step 3: Delete the old Services file**

Run:

```bash
git rm src/components/Services.tsx
```

- [ ] **Step 4: Verify Task 3**

Run: `npm run typecheck`

Expected: zero type errors and no import for `Services`.

- [ ] **Step 5: Commit Task 3**

```bash
git add src/components/Capabilities.tsx src/pages/Index.tsx
git commit -m "task-07: replace services with capabilities"
```

---

## Task 4: Upgrade Projects Into Case Studies

**Files:**
- Modify: `src/components/Projects.tsx`

- [ ] **Step 1: Remove truncation state and resize effect**

Delete `useEffect`, `expanded`, `isMobile`, and `toggleExpand` from `Projects.tsx`.

The only state left should be:

```ts
const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
```

- [ ] **Step 2: Add featured/supporting project split**

After `filteredProjects`, add:

```ts
const featuredProject = filteredProjects.find((project) => project.featured) ?? filteredProjects[0];
const supportingProjects = filteredProjects.filter((project) => project.title !== featuredProject?.title);
```

- [ ] **Step 3: Update section heading copy**

Use this heading block:

```tsx
<p className="section-kicker">Work</p>
<h2 className="section-heading mt-3">Case studies from shipped product surfaces.</h2>
<p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
  Each project is shown through the product goal, what I owned, the decisions behind the build, and where you can inspect the live result or source.
</p>
```

- [ ] **Step 4: Render a featured case study**

Before supporting project cards, add this featured card when `featuredProject` exists:

```tsx
{featuredProject && (
  <article
    className="mt-10 overflow-hidden rounded-[2rem] border border-border/60 bg-background/78 shadow-xl shadow-primary/5 backdrop-blur"
    data-aos="fade-up"
    data-aos-delay="120"
  >
    <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/6 via-transparent to-primary/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
        <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${featuredProject.title}`}>
          <img
            src={featuredProject.image}
            alt={featuredProject.imageAlt}
            className="aspect-[16/10] w-full rounded-[1.4rem] border border-border/60 bg-background/80 object-cover"
          />
        </a>
      </div>
      <div className="p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Featured case study</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{featuredProject.title}</h3>
        <p className="mt-4 text-sm leading-7 text-foreground/68 sm:text-base">{featuredProject.description}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-muted/25 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Problem</p>
            <p className="mt-2 text-sm leading-6 text-foreground/72">{featuredProject.problem}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-muted/25 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-foreground/72">{featuredProject.outcome}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Key decisions</p>
          <ul className="mt-3 grid gap-3">
            {featuredProject.decisions.map((decision) => (
              <li key={decision} className="flex gap-3 text-sm leading-6 text-foreground/68">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="modern-btn-primary">
            {featuredProject.liveLabel ?? "View live project"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          {featuredProject.github && (
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="modern-btn-secondary">
              <Github className="mr-2 h-4 w-4" />
              View source
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
)}
```

- [ ] **Step 5: Replace project grid mapping**

Map over `supportingProjects` instead of `filteredProjects`. In each card:

- use `alt={project.imageAlt}`;
- remove `Read more` logic;
- show `project.problem` in the main paragraph;
- add compact `Outcome` and `Role` blocks;
- change the bullet list to map `project.decisions`.

Use these labels exactly:

```tsx
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Outcome</p>
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Role</p>
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Stack</p>
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">Decisions</p>
```

- [ ] **Step 6: Verify filter behavior**

Run: `npm run typecheck`

Expected: zero type errors.

Run: `npm run build`

Expected: production build completes. If filtering to a category excludes the featured project, the first filtered project becomes the large case study and no duplicate appears in the supporting grid.

- [ ] **Step 7: Commit Task 4**

```bash
git add src/components/Projects.tsx
git commit -m "task-08: upgrade projects into case studies"
```

---

## Task 5: Reframe About, Contact, and Footer Conversion

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update About CTA labels**

In `About.tsx`, replace `Let&apos;s build something` with `Work with me`.

Replace `Explore work` with `View case studies`.

Replace the first section paragraph with:

```tsx
I help teams, founders, and product-minded companies turn rough ideas, outdated websites, and early SaaS concepts into clear product surfaces that are useful, fast, and ready to ship.
```

- [ ] **Step 2: Update Contact imports and form type**

In `Contact.tsx`, add:

```ts
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { inquiryTypes, siteProfile, type InquiryTypeValue } from "@/lib/site";
```

Remove the old `siteProfile` import line so it is not duplicated.

Update `ContactFormData`:

```ts
type ContactFormData = {
  name: string;
  email: string;
  inquiryType: InquiryTypeValue;
  message: string;
};
```

Add this helper after `isEmailJsConfigured`:

```ts
const isInquiryTypeValue = (value: string): value is InquiryTypeValue =>
  inquiryTypes.some((type) => type.value === value);
```

Initialize form state:

```ts
const [formData, setFormData] = useState<ContactFormData>({
  name: "",
  email: "",
  inquiryType: "project",
  message: "",
});
```

- [ ] **Step 3: Update Contact submit payloads**

In the mailto body, include inquiry type:

```ts
`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
```

In `templateParams`, include:

```ts
inquiry_type: formData.inquiryType,
```

After success, reset state to:

```ts
setFormData({ name: "", email: "", inquiryType: "project", message: "" });
```

- [ ] **Step 4: Add inquiry type selector before project details**

Place this block between the email/name grid and the message label:

```tsx
<div>
  <p className="mb-3 text-sm font-medium text-foreground/75">What are you looking for?</p>
  <ToggleGroup
    type="single"
    value={formData.inquiryType}
    onValueChange={(value) => {
      if (isInquiryTypeValue(value)) {
        setFormData((prev) => ({ ...prev, inquiryType: value }));
      }
    }}
    className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2"
  >
    {inquiryTypes.map((type) => (
      <ToggleGroupItem
        key={type.value}
        value={type.value}
        className="h-auto justify-start rounded-2xl border border-border/60 bg-background/75 px-4 py-3 text-left data-[state=on]:border-primary/30 data-[state=on]:bg-primary/10 data-[state=on]:text-primary"
      >
        <span>
          <span className="block text-sm font-semibold">{type.label}</span>
          <span className="mt-1 block text-xs leading-5 text-foreground/55">{type.description}</span>
        </span>
      </ToggleGroupItem>
    ))}
  </ToggleGroup>
</div>
```

- [ ] **Step 5: Update Contact section copy**

Use these exact replacements:

- Contact heading: `Ready to build, improve, or review a product surface?`
- Contact paragraph: `Tell me what you are trying to launch, fix, or validate. I can help with roles, client builds, and product collaborations where design, front end, and practical shipping all matter.`
- Left card pill: `Available for product builds and developer roles`
- Left card heading: `Let&apos;s make the next version of your digital product clearer and easier to trust.`
- Form kicker: `Work with me`
- Form title: `Start the conversation`
- Textarea label: `Context and goals`
- Textarea prompt text: `Share the role, project, product idea, audience, timeline, and what a successful next step would look like.`

- [ ] **Step 6: Update Footer links**

In `Footer.tsx`, import `navLinks`:

```ts
import { navLinks, siteProfile } from "@/lib/site";
```

Replace the hardcoded footer nav links with:

```tsx
{navLinks.map((link) => (
  <a
    key={link.name}
    href={link.href}
    onClick={(event) => scrollToSection(event, link.targetId)}
    className="transition-colors hover:text-primary"
  >
    {link.name}
  </a>
))}
<a href={siteProfile.resumeUrl} className="transition-colors hover:text-primary">
  Resume
</a>
```

Replace the footer paragraph with:

```tsx
Building polished web, mobile, and SaaS product surfaces with clear structure, practical delivery, and mobile-first product thinking.
```

- [ ] **Step 7: Verify Task 5**

Run: `npm run typecheck`

Expected: zero type errors.

Run: `npm run lint`

Expected: no errors. Existing shadcn fast-refresh warnings may remain.

- [ ] **Step 8: Commit Task 5**

```bash
git add src/components/About.tsx src/components/Contact.tsx src/components/Footer.tsx
git commit -m "task-09: reframe contact and footer conversion"
```

---

## Task 6: Remove First-Load Theme Blocker and Improve Metadata

**Files:**
- Delete: `src/components/ThemePreferencePrompt.tsx`
- Modify: `src/pages/Index.tsx`
- Modify: `index.html`
- Create: `public/og-image.webp`

- [ ] **Step 1: Remove theme prompt from `Index.tsx`**

Delete this import:

```ts
import ThemePreferencePrompt from "@/components/ThemePreferencePrompt";
```

Delete this JSX line:

```tsx
<ThemePreferencePrompt />
```

- [ ] **Step 2: Delete the theme prompt component**

Run:

```bash
git rm src/components/ThemePreferencePrompt.tsx
```

- [ ] **Step 3: Copy an optimized image for social preview**

Run:

```bash
cp src/asset/optimized/project-trend-1024.webp public/og-image.webp
```

- [ ] **Step 4: Update `index.html` metadata**

Replace the current title and social metadata block with:

```html
<title>Benjamin Chan | Product Builder & Software Developer</title>
<meta name="description" content="Benjamin Chan builds polished web, mobile, and SaaS products from idea to launch, combining React, TypeScript, Expo, Firebase, APIs, and product-minded delivery." />
<meta name="author" content="Benjamin Chan" />
<link rel="canonical" href="https://benjamin-chan.com/" />

<meta property="og:title" content="Benjamin Chan | Product Builder & Software Developer" />
<meta property="og:description" content="Polished web, mobile, and SaaS product surfaces from idea to launch." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://benjamin-chan.com/" />
<meta property="og:image" content="https://benjamin-chan.com/og-image.webp" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Benjamin Chan | Product Builder & Software Developer" />
<meta name="twitter:description" content="Polished web, mobile, and SaaS product surfaces from idea to launch." />
<meta name="twitter:image" content="https://benjamin-chan.com/og-image.webp" />
```

Keep the existing favicon, charset, and viewport lines.

- [ ] **Step 5: Verify Task 6**

Run: `npm run typecheck`

Expected: zero type errors.

Run: `npm run build`

Expected:

- production build completes;
- `dist/index.html` includes `og-image.webp`;
- production asset output no longer includes `ben8-*.jpeg`;
- production asset output uses optimized AVIF/WebP project images.

- [ ] **Step 6: Commit Task 6**

```bash
git add src/pages/Index.tsx index.html public/og-image.webp
git commit -m "task-10: improve first load and social metadata"
```

---

## Task 7: Final Render and Interaction Verification

**Files:**
- No planned source edits. Only fix source files if verification finds defects.

- [ ] **Step 1: Run full static verification**

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

Expected:

- typecheck passes;
- lint has no errors;
- existing shadcn fast-refresh warnings may remain;
- build passes.

- [ ] **Step 2: Start local dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite serves the app at `http://127.0.0.1:8080/`.

- [ ] **Step 3: Verify desktop flow**

Open `http://127.0.0.1:8080/` in a browser and verify:

- first viewport is not blocked by the theme prompt;
- hero headline reads `I build polished web, mobile, and SaaS products from idea to launch.`;
- primary CTA text is `Work with me` and scrolls to the contact form;
- secondary CTA text is `View case studies` and scrolls to work;
- nav labels are `Home`, `Work`, `Capabilities`, `About`, `Contact`;
- audience proof strip is visible after hero;
- capabilities section uses `id="capabilities"`;
- work section has a featured case study plus supporting cards;
- contact form shows the inquiry selector and keeps one option selected.

- [ ] **Step 4: Verify mobile flow**

Use a viewport around `390px` wide and verify:

- nav menu opens and closes;
- mobile `Work with me` CTA is visible in the menu;
- hero text does not overlap the portrait card;
- audience proof cards stack cleanly;
- featured case study image and buttons fit the viewport;
- contact inquiry options stack without text clipping.

- [ ] **Step 5: Verify contact fallback**

Temporarily run without EmailJS environment variables or use the existing local fallback state. Submit the form with:

- name: `Test Visitor`;
- email: `test@example.com`;
- inquiry type: `SaaS / product`;
- message: `Testing the Product Builder inquiry flow.`;

Expected: mail app opens with a draft body containing name, email, inquiry type, and message.

- [ ] **Step 6: Stop local dev server**

Stop Vite with `Ctrl+C` in the terminal session that started it.

- [ ] **Step 7: Commit verification fixes**

If verification required fixes, commit them:

```bash
git add src index.html public/og-image.webp
git commit -m "task-11: polish product builder verification issues"
```

If no fixes were required, do not create an empty commit.
