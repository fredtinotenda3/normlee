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
    <div className="bg-white rounded-lg shadow-card p-6 border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-secondary">
            Quick Price Calculator
          </h3>
          <p className="text-sm text-gray-500">Get instant estimates</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Product Selection */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            Select Material
          </label>
          <select
            value={selectedProduct.id}
            onChange={handleProductChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.item} - {formatPrice(product.pricePerUnit)} / {product.unit}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">
            Quantity ({selectedProduct.unit})
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
            step="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          />
        </div>

        {/* Price Display */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Unit Price:</span>
            <span className="font-semibold text-secondary">
              {formatPrice(selectedProduct.pricePerUnit)} / {selectedProduct.unit}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
            <span className="text-gray-800 font-semibold">Estimated Total:</span>
            <span className="text-2xl font-heading font-bold text-primary">
              {formatPrice(total)}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsAppInquiry}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
        >
          <Send size={18} />
          <span>Send WhatsApp Inquiry</span>
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          *Prices are per cubic meter (m³) or per 1,000 bricks. Delivery charges may apply.
        </p>
      </div>
    </div>
  );
}