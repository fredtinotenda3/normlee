import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { Phone, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Quick Pricing Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Competitive Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent, upfront pricing for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quick Price List */}
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                Popular Materials
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">3/4 Stones</span>
                  <span className="font-semibold text-primary">$18.00 / m³</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">River Sand</span>
                  <span className="font-semibold text-primary">$10.00 / m³</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Crusher Runner</span>
                  <span className="font-semibold text-primary">$20.00 / m³</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">Red Common Bricks</span>
                  <span className="font-semibold text-primary">$120.00 / 1000</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="/catalog"
                  className="text-primary hover:text-primary-dark font-semibold"
                >
                  View Full Catalog →
                </a>
              </div>
            </div>

            {/* Calculator */}
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a quick quote today. We're here to help with all your construction material and paving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20services.%20Please%20help%20me%20with%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+263774130626"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}