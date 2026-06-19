import { siteConfig } from "@/config/site";

/** Per-route metadata copy — swap for client launch. */
export const pageSeo = {
  home: {
    title: "Web Design & Development",
    description:
      "LifeSpring Design — custom websites, software, branding, and Reviewbox.io review management for businesses in Washington, Oregon, and Idaho.",
    path: "/",
    noIndex: false,
  },
  about: {
    title: "About",
    description:
      "Learn about LifeSpring Design — our mission, approach, and commitment to building fast, beautiful marketing websites.",
    path: "/about",
    noIndex: true,
  },
  services: {
    title: "Services",
    description:
      "Web design, development, and SEO services from LifeSpring Design. Custom sites built with Next.js and search-ready architecture.",
    path: "/services",
    noIndex: true,
  },
  contact: {
    title: "Contact",
    description:
      "Contact LifeSpring Design for a free consultation. Tell us about your project and we'll help you plan a site that converts.",
    path: "/contact",
  },
  projects: {
    title: "Projects",
    description:
      "Web design, development, and branding projects from LifeSpring Design — custom websites and digital work for Northwest businesses.",
    path: "/projects",
    noIndex: true,
  },
  blog: {
    title: "Blog",
    description:
      "Insights on web design, branding, and digital marketing from the LifeSpring Design team.",
    path: "/blog",
    noIndex: true,
  },
  playground: {
    title: "Playground",
    description:
      "Internal section builder for LifeSpring Design — themes, layouts, and homepage preview.",
    path: "/playground",
    noIndex: true,
  },
  preview: {
    title: "Web Design & Development",
    description:
      "LifeSpring Design — custom websites, software, branding, and Reviewbox.io review management for businesses in Washington, Oregon, and Idaho.",
    path: "/preview",
    noIndex: true,
  },
} as const;

/** Agency demo copy for playground JSON-LD and trade-style section metadata. */
export const tradeDemoSeo = {
  headline: "Custom Websites & Software for Northwest Businesses",
  leadText: siteConfig.serviceArea,
  description: siteConfig.description,
  areaServed: ["Washington", "Oregon", "Idaho"],
  serviceTypes: [
    "Website Design",
    "Custom Software Development",
    "Review Management Software",
    "Branding & Graphic Design",
    "SEO & Digital Marketing",
    "Ongoing Technology Support",
  ],
} as const;

export function getSocialProfileUrls(): string[] {
  return Object.values(siteConfig.social).filter(
    (url) => typeof url === "string" && url.length > 0 && url !== "#",
  );
}
