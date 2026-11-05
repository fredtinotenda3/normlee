import { site, siteDescription } from "@/lib/site";

/**
 * Structured data built ONLY from verified facts: name, legal name, URL,
 * description and founding year (confirmed by the owner).
 *
 * Deliberately omitted until the owner confirms them (TODO(owner)): street
 * address, phone numbers, opening hours, geo-coordinates, logo, social profiles.
 * No ratings or reviews are ever included.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: siteDescription,
  foundingDate: String(site.foundedYear),
  areaServed: { "@type": "Country", name: "Zimbabwe" },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-ZW",
};
