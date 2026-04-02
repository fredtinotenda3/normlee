import ProductTable from "@/components/shared/ProductTable";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { MessageCircle, Package } from "lucide-react";

export const revalidate = 3600;

export default function CatalogPage() {
  return (
    <>
      {/* Photo Hero */}
      <section className="relative h-64 flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/10" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
        <div className="container mx-auto px-6 relative z-10 pb-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase mb-4">
            <Package size={14} />
            Materials Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            Product Catalog
          </h1>
          <p className="text-gray-300 text-sm">
            All prices per cubic meter (m³) unless specified otherwise.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Product Table */}
            <div className="lg:col-span-2">
              <ProductTable />
              <div className="mt-6 bg-primary/10 rounded-xl p-5 border border-primary/20">
                <p className="text-secondary text-sm leading-relaxed">
                  <strong className="font-semibold text-primary">Delivery available</strong> across
                  Zimbabwe. Contact us for delivery charges and bulk order discounts.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <PriceCalculator />
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <h3 className="font-heading font-bold text-secondary mb-2">Need Help?</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    Not sure what materials you need? Our team can help you choose the right
                    products for your project.
                  </p>
                  <a
                    href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%20need%20help%20choosing%20materials%20for%20my%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-hover transition-colors w-full justify-center"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Mini photo card */}
              <div className="rounded-2xl overflow-hidden shadow-md relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80"
                  alt="Construction site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                  <p className="text-white font-heading font-bold text-sm">
                    Same-day delivery available across Zimbabwe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
