import type { Metadata } from "next";
import Image from "next/image";
import ProductTable from "@/components/shared/ProductTable";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { MessageCircle, Package } from "lucide-react";
import { photos } from "@/lib/images";
import { whatsappMessages, whatsappUrl } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Products & Prices",
  description:
    "Construction aggregates and building materials in Zimbabwe: stones, river sand, pit sand, crusher run, quarry dust, bricks and fill. View prices and request a quote.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative flex items-end overflow-hidden bg-gray-900 pt-20 pb-10">
        {/* TODO(owner): optional product photo background once a genuine photo is supplied. */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" aria-hidden="true" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <p className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            <Package size={14} aria-hidden="true" />
            Materials
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">Products &amp; Prices</h1>
          <p className="text-gray-200 text-sm">All prices per cubic metre (m³) unless specified otherwise.</p>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">Price list and calculator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ProductTable />
              <div className="mt-6 bg-primary/10 rounded-xl p-5 border border-primary/20">
                <p className="text-secondary text-sm leading-relaxed">
                  <strong className="font-semibold text-secondary">Delivery:</strong> contact us to confirm
                  delivery availability, delivery charges and any bulk-order terms for your location.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <PriceCalculator />
              <figure className="bg-white rounded-2xl shadow-md overflow-hidden">
                <Image
                  src={photos.sandStockpile.src}
                  width={photos.sandStockpile.width}
                  height={photos.sandStockpile.height}
                  alt={photos.sandStockpile.alt}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="p-4 text-sm text-gray-600">
                  A delivered sand stockpile. Contact us to confirm the grade and volume for your project.
                </figcaption>
              </figure>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-1.5 bg-primary" aria-hidden="true" />
                <div className="p-6">
                  <h2 className="font-heading font-bold text-secondary mb-2">Need Help?</h2>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    Not sure what materials you need? Our team can help you choose the right products for your
                    project.
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
        </div>
      </div>
    </>
  );
}
