import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { formatPrice, formatUnit, getFeaturedProducts } from "@/lib/pricing";
import { primaryPhone, telUrl, whatsappMessages, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  // Prices come from lib/pricing.ts (single source of truth).
  const popularMaterials = getFeaturedProducts();

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Pricing Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-gray-50"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-primary-strong font-semibold text-sm uppercase tracking-widest mb-2">Material Prices</p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary">Published Prices</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Prices for common materials, plus a calculator to estimate your order. Delivery charges may apply.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Price list card */}
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl">
              <div className="h-1.5 bg-primary" aria-hidden="true" />
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-6">Popular Materials</h3>
                <ul className="space-y-4">
                  {popularMaterials.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-200">{item.item}</span>
                      <span className="font-heading font-bold text-primary-light">
                        {formatPrice(item.pricePerUnit)}
                        <span className="text-gray-300 font-normal text-sm"> / {formatUnit(item.unit)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-primary-light font-semibold hover:gap-3 transition-all"
                  >
                    View All Products <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-28 overflow-hidden bg-primary-strong">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Ready to Build?</h2>
          <p className="text-white text-lg mb-10 max-w-xl mx-auto">
            Request a quote today. We&apos;re here to help with your construction material and paving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-strong px-8 py-4 rounded-lg font-heading font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp Us
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={telUrl(primaryPhone.e164)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-white hover:text-primary-strong transition-colors"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
