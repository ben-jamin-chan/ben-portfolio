import datingAppImage from "@/asset/gym-dating-app-optimized.png";
import holoImage from "@/asset/holo-optimized.png";
import petalImage from "@/asset/petal-optimized.png";
import trendImage from "@/asset/trend-optimized.png";

export const siteProfile = {
  fullName: "Benjamin Chan",
  brandName: "Benjamin Chan(陳)",
  role: "Software/Web Developer",
  siteUrl: "https://benjamin-chan.com/",
  portfolioRepositoryUrl: "https://github.com/ben-jamin-chan/ben-portfolio",
  githubUrl: "https://github.com/ben-jamin-chan/",
  instagramUrl: "https://instagram.com/neb.neb.neb.neb",
  email: "chanbenjamin.tl@gmail.com",
  phoneDisplay: "+6017-338-0511",
  phoneHref: "tel:+60173380511",
  location: "Kuala Lumpur, Malaysia",
} as const;

export const projectFilters = ["All", "Web", "Mobile", "API"] as const;

export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectTag = Exclude<ProjectFilter, "All">;

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  live: string;
  liveLabel?: string;
  github?: string;
  imageDisplay?: "cover" | "contain";
  role: string;
  stack: string[];
  proof: string[];
};

export const experiences = [
  {
    title: "Independent Full-Stack Developer",
    company: "Freelance / Client Projects",
    period: "2023 - Present",
    description:
      "Designing and developing websites, mobile app experiences, and API-backed products for small teams and founders.",
  },
  {
    title: "Partner Resource Manager",
    company: "Majorel Group",
    period: "2021 - 2023",
    description:
      "Managed strategic partnerships, stakeholder alignment, and delivery coordination across operational teams.",
  },
  {
    title: "Resource Coordinator",
    company: "Majorel Group",
    period: "2020 - 2021",
    description:
      "Supported planning, workflows, and team execution, building the operational habits that now shape product delivery.",
  },
] as const;

export const projects: Project[] = [
  {
    title: "Florist Service Platform",
    description:
      "A customer-facing florist platform shaped around service discovery, booking intent, and clear mobile browsing.",
    image: petalImage,
    tags: ["Web", "Mobile", "API"],
    live: "https://ben-jamin-chan.github.io/lynn-florist-website",
    github: "https://github.com/ben-jamin-chan/lynn-florist-website",
    role: "Product design, front-end build, responsive implementation",
    stack: ["React", "TypeScript", "Tailwind CSS", "API workflows"],
    proof: [
      "Built a mobile-first service browsing flow for local customers.",
      "Structured the experience around bookings, updates, and trust signals.",
      "Deployed a polished public site with source code available for review.",
    ],
  },
  {
    title: "Fitness Themed Dating App",
    description:
      "A mobile-first Expo app for fitness enthusiasts with profile discovery, swiping, and chat-oriented social flows.",
    image: datingAppImage,
    tags: ["Mobile"],
    imageDisplay: "contain",
    live: "https://expo.dev/preview/update?message=Fixed%20firebase%20connectivity%20for%20Superlike%20and%20Messages&updateRuntimeVersion=1.0.0&createdAt=2025-06-16T09%3A19%3A48.040Z&slug=exp&projectId=2d488a1a-eb72-4455-b6b1-7c5c29c8ddcd&group=ef4d4b4f-342e-42bd-99ba-50daabaa0b50",
    liveLabel: "Open Expo Preview",
    github: "https://github.com/ben-jamin-chan/fitness-dating-app",
    role: "Mobile app UX, Expo implementation, Firebase integration",
    stack: ["Expo", "React Native", "Firebase", "Mobile UX"],
    proof: [
      "Designed native-feeling profile, swipe, superlike, and messaging flows.",
      "Integrated Firebase-backed behavior for interactive app features.",
      "Published an Expo preview so the experience can be tested on device.",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A responsive skincare storefront focused on product browsing, polished visual presentation, and smooth shopping paths.",
    image: holoImage,
    tags: ["Web", "Mobile"],
    live: "https://ben-jamin-chan.github.io/holobeauty/",
    github: "https://github.com/ben-jamin-chan/holobeauty",
    role: "Storefront design, front-end implementation, responsive QA",
    stack: ["React", "Tailwind CSS", "GitHub Pages", "Responsive UI"],
    proof: [
      "Created a branded storefront that works cleanly across desktop and mobile.",
      "Organized product sections for scanning, comparison, and conversion.",
      "Shipped a public demo with source code for technical review.",
    ],
  },
  {
    title: "Trend Watcher App",
    description:
      "A data-focused web app for tracking, saving, and comparing trend topics through dashboard-style workflows.",
    image: trendImage,
    tags: ["Web", "Mobile", "API"],
    live: "https://trend-watcher-pro.onrender.com/",
    github: "https://github.com/ben-jamin-chan/trend-watcher-pro",
    role: "Full-stack product build, dashboard UX, API-backed workflows",
    stack: ["React", "Node.js", "APIs", "Render"],
    proof: [
      "Built topic tracking and comparison flows around recurring user decisions.",
      "Designed dashboard surfaces for saved topics and alert-oriented workflows.",
      "Deployed a full web app experience rather than a static mockup.",
    ],
  },
];
