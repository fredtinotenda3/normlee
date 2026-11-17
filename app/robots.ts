import type { MetadataRoute } from "next";
import { site, siteIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Staging and preview deployments (NEXT_PUBLIC_SITE_INDEXABLE=false) block all crawling.
  if (!siteIndexable) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
