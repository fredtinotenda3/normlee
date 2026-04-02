"use client";

import { useState } from "react";
import { products, calculatePrice, formatPrice, Product } from "@/lib/pricing";
import { Calculator, Send } from "lucide-react";

export default function PriceCalculator() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(products[0].pricePerUnit);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = products.find(p => p.id === e.target.value);
    if (product) {
      setSelectedProduct(product);
      setTotal(calculatePrice(product, quantity));
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = parseFloat(e.target.value) || 0;
    setQuantity(qty);
    setTotal(calculatePrice(selectedProduct, qty));
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi Normlee Investments, I'm interested in ${selectedProduct.item} (${selectedProduct.category}).\nQuantity: ${quantity} ${selectedProduct.unit}\nEstimated Total: ${formatPrice(total)}\nPlease provide more details and delivery information.`
    );
    window.open(`https://wa.me/263774130626?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="h-1.5 bg-primary" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-secondary">Quick Price Calculator</h3>
            <p className="text-xs text-gray-400">Get instant estimates</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Select Material
            </label>
            <select
              value={selectedProduct.id}
              onChange={handleProductChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.item} — {formatPrice(product.pricePerUnit)} / {product.unit}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-secondary mb-2">
              Quantity ({selectedProduct.unit})
            </label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="0"
              step="1"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
            />
          </div>

          <div className="bg-secondary rounded-xl p-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-400">Unit Price:</span>
              <span className="font-semibold text-gray-300">
                {formatPrice(selectedProduct.pricePerUnit)} / {selectedProduct.unit}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <span className="text-gray-300 font-semibold text-sm">Estimated Total:</span>
              <span className="text-2xl font-heading font-extrabold text-primary">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-heading font-bold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20"
          >
            <Send size={16} />
            Send WhatsApp Inquiry
          </button>

          <p className="text-xs text-gray-400 text-center">
            *Prices per m³ or per 1,000 bricks. Delivery charges may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
