import type { MetadataRoute } from "next";
import { articles } from "@/lib/blog";
import { navItems } from "@/lib/nav";
import { projectsIndexable, testimonialsIndexable } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * Lists only canonical, indexable, 200-status URLs. Pages that are noindex (empty projects or
 * testimonials) are left out. changefreq and priority are omitted: Google ignores them. lastModified
 * is given only where a real date exists (blog articles), never invented.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const excluded = new Set<string>([
    ...(projectsIndexable ? [] : ["/projects"]),
    ...(testimonialsIndexable ? [] : ["/testimonials"]),
  ]);
  const pages = navItems
    .filter((item) => !excluded.has(item.href))
    .map((item) => ({ url: `${site.url}${item.href === "/" ? "" : item.href}` }));
  const posts = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(`${a.updated ?? a.published}T00:00:00Z`),
  }));
  return [...pages, ...posts];
}
