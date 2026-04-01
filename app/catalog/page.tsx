import ProductTable from "@/components/shared/ProductTable";
import PriceCalculator from "@/components/shared/PriceCalculator";
import { MessageCircle } from "lucide-react";

export const revalidate = 3600; // ISR: Revalidate every hour

export default function CatalogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Product Catalog
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Premium construction aggregates and building materials with transparent, competitive pricing.
            All prices are per cubic meter (m³) unless specified otherwise.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Table - Takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <ProductTable />
            
            {/* Delivery Note */}
            <div className="mt-6 bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-secondary text-sm">
                <strong className="font-semibold">Note:</strong> We offer fast delivery across Harare, 
                Borrowdale, and Hatcliffe. Contact us for delivery charges and bulk order discounts.
              </p>
            </div>
          </div>

          {/* Calculator Sidebar */}
          <div>
            <PriceCalculator />
            
            {/* Additional Info */}
            <div className="mt-6 bg-white rounded-lg shadow-card p-6">
              <h3 className="font-heading font-bold text-secondary mb-3">
                Need Help?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Not sure what materials you need? Our team can help you choose the right products for your project.
              </p>
              <a
                href="https://wa.me/263774130626?text=Hi%20Normlee%20Investments%2C%20I%20need%20help%20choosing%20materials%20for%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold"
              >
                <MessageCircle size={18} />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}