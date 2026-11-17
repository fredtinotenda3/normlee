import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import ProductTable from "@/components/shared/ProductTable";
import PriceCalculator from "@/components/shared/PriceCalculator";
import PageHeader from "@/components/shared/PageHeader";
import FaqList from "@/components/shared/FaqList";
import { MessageCircle, Package, Info } from "lucide-react";
import { photos } from "@/lib/images";
import { availableOnRequest, formatPrice, formatUnit, products } from "@/lib/pricing";
import { categoryInfo, productInfo } from "@/lib/productInfo";
import { productEnquiryMessage, whatsappMessages, whatsappUrl } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Stones, Sand & Crusher Run: Prices",
  description:
    "Published prices for 3/4, 7mm and 10mm stones, river and pit sand, crusher runner, quarry dust, bricks and fill in Zimbabwe. Availability confirmed on enquiry.",
  path: "/products",
});

// Guides that explain each category (internal links; none of these state specifications).
const categoryGuides: Record<string, { label: string; href: string }> = {
  Stones: { label: "Guide: what 3/4, 10mm and 7mm stones mean", href: "/blog/understanding-aggregate-sizes" },
  Sand: { label: "Guide: river sand vs pit sand", href: "/blog/types-of-construction-sand" },
  Base: { label: "Guide: what crusher run is and where it is used", href: "/blog/crusher-run-and-its-applications" },
  Bricks: { label: "Guide: estimating quantities", href: "/blog/estimating-material-quantities" },
  "Fill/Soil": { label: "Guide: choosing materials for your project", href: "/blog/choosing-suitable-construction-materials" },
};

const faqs = [
  {
    question: "What materials does Normlee Investments sell?",
    answer: `The price list covers 3/4, 7mm and 10mm stones, river sand, pit sand, crusher runner, quarry dust, red common bricks, black top soil and gravel. ${availableOnRequest.join(", ")} are available on request.`,
  },
  {
    question: "How are prices shown?",
    answer:
      "Prices are per cubic metre (m³), except bricks, which are per 1,000. They are the published prices and are confirmed when you order.",
  },
  {
    question: "Is delivery included in the price?",
    answer: (
      <>
        No. Delivery charges are extra and depend on your location. See{" "}
        <Link href="/services#delivery" className="font-semibold text-primary-strong underline">
          delivery information
        </Link>{" "}
        or ask us on WhatsApp.
      </>
    ),
  },
  {
    question: "What does 3/4 stone mean?",
    answer: (
      <>
        The name usually refers to a nominal stone size of about 3/4 inch, roughly 19 mm. Read our{" "}
        <Link href="/blog/understanding-aggregate-sizes" className="font-semibold text-primary-strong underline">
          guide to aggregate sizes
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can I check availability before I order?",
    answer: "Yes. Availability is not guaranteed until we confirm it, so message us or call before you arrange a truck.",
  },
  {
    question: "How do I work out how many cubic metres I need?",
    answer: (
      <>
        Multiply length by width by depth, in metres. Our{" "}
        <Link href="/blog/estimating-material-quantities" className="font-semibold text-primary-strong underline">
          estimating guide
        </Link>{" "}
        has a worked example and notes on allowing for settling.
      </>
    ),
  },
];

// Group products by their category in lib/pricing.ts (the single source of truth for prices).
const categories = Object.entries(
  products.reduce<Record<string, typeof products>>((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {}),
);

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Products", href: "/products" }]}
        eyebrow="Materials"
        icon={Package}
        title="Construction Materials & Published Prices"
        description="Construction aggregates, bricks and fill materials. All prices per cubic metre (m³) unless specified otherwise."
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Qualifications */}
          <div className="mb-12 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/10 p-5">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary-strong" />
            <p className="text-sm leading-relaxed text-secondary">
              <strong className="font-semibold">Please note:</strong> prices are the published prices and are
              confirmed when you order. Availability is not guaranteed until we confirm it. Delivery charges are
              extra and depend on your location. Descriptions below are general and are not product specifications.
              Contact us to confirm size, grade and availability.
            </p>
          </div>

          {/* Categories */}
          <h2 className="text-3xl font-heading font-extrabold text-secondary mb-8">Product categories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map(([categoryKey, items]) => {
              const info = categoryInfo[categoryKey];
              return (
                <section
                  key={categoryKey}
                  className="scroll-mt-24 overflow-hidden rounded-2xl bg-white shadow-md"
                  aria-labelledby={`category-${categoryKey}`}
                >
                  <div className="h-1.5 bg-primary" aria-hidden="true" />
                  {categoryKey === "Sand" && (
                    <Image
                      src={photos.sandStockpile.src}
                      width={photos.sandStockpile.width}
                      height={photos.sandStockpile.height}
                      alt={photos.sandStockpile.alt}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-56 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 id={`category-${categoryKey}`} className="text-xl font-heading font-bold text-secondary">
                      {info?.title ?? categoryKey}
                    </h3>
                    {info && <p className="mt-1 text-sm text-gray-600">{info.blurb}</p>}
                    {categoryGuides[categoryKey] && (
                      <p className="mt-1 mb-5 text-sm">
                        <Link href={categoryGuides[categoryKey].href} className="font-semibold text-primary-strong hover:underline">
                          {categoryGuides[categoryKey].label}
                        </Link>
                      </p>
                    )}
                    {!categoryGuides[categoryKey] && <div className="mb-5" />}
                    <ul className="divide-y divide-gray-100">
                      {items.map((item) => {
                        const detail = productInfo[item.id];
                        return (
                          <li key={item.id} className="py-4 first:pt-0 last:pb-0">
                            <div className="flex items-start justify-between gap-4">
                              <h4 className="font-heading font-semibold text-secondary">{item.item}</h4>
                              <p className="shrink-0 text-right">
                                <span className="font-heading font-bold text-primary-strong">
                                  {formatPrice(item.pricePerUnit)}
                                </span>
                                <span className="text-xs text-gray-600"> / {formatUnit(item.unit)}</span>
                              </p>
                            </div>
                            {detail && (
                              <>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600">{detail.description}</p>
                                <p className="mt-2 text-xs text-gray-600">
                                  <span className="font-semibold text-secondary">Commonly used for: </span>
                                  {detail.uses.join(", ")}
                                </p>
                              </>
                            )}
                            <a
                              href={whatsappUrl(productEnquiryMessage(item.item))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:underline"
                            >
                              <MessageCircle size={14} aria-hidden="true" />
                              Enquire about {item.item}
                              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
          {/* TODO(owner): supply genuine photographs of each material (aggregate-products.md). */}
          <p className="mt-6 text-sm text-gray-600">
            Photographs of each material will be added as they become available.
          </p>

          {/* Full price list and calculator */}
          <h2 className="mt-16 mb-8 text-3xl font-heading font-extrabold text-secondary">
            Full price list and calculator
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ProductTable />
              <div className="mt-6 bg-primary/10 rounded-xl p-5 border border-primary/20">
                <p className="text-secondary text-sm leading-relaxed">
                  <strong className="font-semibold text-secondary">Delivery:</strong> contact us to confirm
                  delivery availability, delivery charges and any bulk-order terms for your location. See{" "}
                  <Link href="/services#delivery" className="font-semibold text-secondary underline">
                    delivery information
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <PriceCalculator />
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-1.5 bg-primary" aria-hidden="true" />
                <div className="p-6">
                  <h2 className="font-heading font-bold text-secondary mb-2">Need Help?</h2>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    Not sure what materials you need? Tell us about your project and we will help you choose.
                    Our{" "}
                    <Link href="/blog" className="font-semibold text-primary-strong underline">
                      guides
                    </Link>{" "}
                    may also help.
                  </p>
                  <a
                    href={whatsappUrl(whatsappMessages.materials)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-strong text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-strong-hover transition-colors w-full justify-center"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Chat on WhatsApp
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl">
            <FaqList headingId="products-faq" items={faqs} />
          </div>
        </div>
      </div>
    </>
  );
}
