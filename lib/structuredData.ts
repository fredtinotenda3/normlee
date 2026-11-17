import { site, siteDescription, verifiedBusinessDetails } from "@/lib/site";

/**
 * Structured data built ONLY from verified facts: name, legal name, URL,
 * description and founding year (confirmed by the owner).
 *
 * Deliberately omitted until the owner confirms them (TODO(owner)): street
 * address, phone numbers, opening hours, geo-coordinates, logo, social profiles.
 * No ratings or reviews are ever included. No Product/Offer markup: published prices are
 * "confirmed when you order" and availability is not guaranteed, so they do not meet Google's
 * Product requirements honestly.
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

export interface Crumb {
  name: string;
  href: string;
}

/** `crumbs` excludes Home, which is always position 1. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href === "/" ? site.url : `${site.url}${c.href}`,
    })),
  };
}

/**
 * Services described on /services. Text mirrors the visible page. No areaServed (delivery coverage is
 * unconfirmed), no prices, no offers.
 */
export const servicesJsonLd = [
  {
    name: "Delivery of bulk construction materials",
    description:
      "Bulk materials can be delivered to your site. Availability and charges are confirmed for your location when you enquire.",
    serviceType: "Material delivery",
  },
  {
    name: "Paving installation",
    description:
      "Laying a paved surface at your site, quoted per project for residential, commercial and industrial properties.",
    serviceType: "Paving installation",
  },
].map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  ...s,
  provider: { "@id": `${site.url}/#organization` },
}));

/**
 * LocalBusiness is only produced once management has confirmed the address, phone numbers and hours
 * (verifiedBusinessDetails in lib/site.ts). Until then this returns null and nothing is rendered.
 * TODO(owner): when confirmed, replace the free-text address with structured PostalAddress fields.
 */
export function localBusinessJsonLd() {
  const v = verifiedBusinessDetails;
  if (!(v.address && v.phones && v.hours)) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phones[0].e164,
    address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "ZW" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    parentOrganization: { "@id": `${site.url}/#organization` },
  };
}
