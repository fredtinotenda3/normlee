import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const popularMaterials = [
  { name: "3/4 Stones", price: "$18.00", unit: "m³" },
  { name: "River Sand", price: "$10.00", unit: "m³" },
  { name: "Crusher Runner", price: "$20.00", unit: "m³" },
  { name: "Red Common Bricks", price: "$120.00", unit: "1,000" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />

      {/* Pricing Section — with background texture */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle diagonal stripe */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-gray-50"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-secondary">
              Competitive Pricing
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              No hidden fees. No surprises. What you see is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Price list card */}
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl">
              <div className="h-1.5 bg-primary" />
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Popular Materials
                </h3>
                <div className="space-y-4">
                  {popularMaterials.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-300">{item.name}</span>
                      <span className="font-heading font-bold text-primary">
                        {item.price}
                        <span className="text-gray-500 font-normal text-sm"> / {item.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="/catalog"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    View Full Catalog <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Calculator */}
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* CTA Banner — photo background */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Get a quick quote today. We&apos;re here to help with all your construction
            material and paving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I'm%20interested%20in%20your%20services.%20Please%20help%20me%20with%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-heading font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <a
              href="tel:+263774130626"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-white hover:text-primary transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
