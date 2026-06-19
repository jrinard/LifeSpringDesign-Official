import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/playground", "/preview", "/home", "/osp/", "/about", "/blog", "/services", "/projects"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
