import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: item.href === "/products" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : item.href === "/products" || item.href === "/services" ? 0.9 : 0.7,
  }));
  const posts = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(`${a.published}T00:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
