import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { site, siteIndexable } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

/**
 * Pages with no real content yet are kept out of the index and the sitemap, and come back
 * automatically once lib/projects.ts or lib/testimonials.ts has entries.
 */
export const projectsIndexable = projects.length > 0;
export const testimonialsIndexable = testimonials.length > 0;

interface PageSeo {
  /** Shown as "<title> | Normlee Investments" unless `absoluteTitle` is true. Aim for 38 characters or fewer. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  /** Canonical path, no trailing slash, e.g. "/about". Use "/" for the homepage. */
  path: string;
  type?: "website" | "article";
  /** false => noindex,follow. */
  index?: boolean;
  openGraph?: { publishedTime?: string; modifiedTime?: string };
}

/**
 * Builds complete metadata for one page.
 *
 * Next.js REPLACES (does not merge) nested openGraph and twitter objects, so every page must set them
 * in full. Before this helper, inner pages lost og:site_name and inherited the homepage's twitter:title.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  type = "website",
  index = true,
  openGraph,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const allowed = index && siteIndexable;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: allowed ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_ZW",
      type,
      ...(type === "article" ? { authors: [site.name], ...openGraph } : {}),
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
