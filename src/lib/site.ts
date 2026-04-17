import datingAppImage from "@/asset/gym-dating-app.png";
import holoImage from "@/asset/holo.png";
import petalImage from "@/asset/petal.png";
import trendImage from "@/asset/trend.png";

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
};

export const projects: Project[] = [
  {
    title: "Florist Service Platform",
    description:
      "A polished florist service platform for showcasing floral services, managing bookings, and keeping customers updated through API-powered workflows.",
    image: petalImage,
    tags: ["Web", "Mobile", "API"],
    live: "https://ben-jamin-chan.github.io/lynn-florist-website",
    github: "https://github.com/ben-jamin-chan/lynn-florist-website",
  },
  {
    title: "Fitness Themed Dating App",
    description:
      "A mobile-first Expo app for fitness enthusiasts with profile discovery, swiping, and chat flows tailored to an active social experience.",
    image: datingAppImage,
    tags: ["Mobile"],
    live: "https://expo.dev/preview/update?message=Fixed%20firebase%20connectivity%20for%20Superlike%20and%20Messages&updateRuntimeVersion=1.0.0&createdAt=2025-06-16T09%3A19%3A48.040Z&slug=exp&projectId=2d488a1a-eb72-4455-b6b1-7c5c29c8ddcd&group=ef4d4b4f-342e-42bd-99ba-50daabaa0b50",
    liveLabel: "Open Expo Preview",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A responsive storefront for skincare and beauty products, designed to support polished shopping flows across desktop and mobile.",
    image: holoImage,
    tags: ["Web", "Mobile"],
    live: "https://ben-jamin-chan.github.io/holobeauty/",
    github: "https://github.com/ben-jamin-chan/holobeauty",
  },
  {
    title: "Trend Watcher App",
    description:
      "A data-focused web app for tracking, saving, and comparing Google Trends topics with dashboards and alert-oriented workflows.",
    image: trendImage,
    tags: ["Web", "Mobile", "API"],
    live: "https://trend-watcher-pro.onrender.com/",
  },
];
