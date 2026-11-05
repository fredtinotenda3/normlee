"use client";

import { useId, useState } from "react";
import { Calculator, Send } from "lucide-react";
import { products, calculatePrice, formatPrice, formatUnit, getProduct } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export default function PriceCalculator() {
  const selectId = useId();
  const quantityId = useId();
  const hintId = useId();

  const [productId, setProductId] = useState(products[0].id);
  const [quantityInput, setQuantityInput] = useState("1");

  const product = getProduct(productId) ?? products[0];
  const quantity = Number(quantityInput);
  const isValid = quantityInput.trim() !== "" && Number.isFinite(quantity) && quantity > 0;
  // Total is derived from state (not stored separately) so it can never go stale.
  const total = isValid ? calculatePrice(product, quantity) : 0;

  const whatsappHref = whatsappUrl(
    `Hi Normlee Investments, I'm interested in ${product.item} (${product.category}).\n` +
      `Quantity: ${quantity} ${formatUnit(product.unit)}\n` +
      `Estimated Total: ${formatPrice(total)} (excluding delivery)\n` +
      `Please provide more details and delivery information.`,
  );

  const ctaClasses =
    "w-full py-3.5 rounded-xl font-heading font-bold transition-colors flex items-center justify-center gap-2";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="h-1.5 bg-primary" aria-hidden="true" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Calculator aria-hidden="true" className="w-5 h-5 text-primary-strong" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-secondary">Quick Price Calculator</h3>
            <p className="text-xs text-gray-600">Estimate the material cost</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor={selectId} className="block text-sm font-semibold text-secondary mb-2">
              Select Material
            </label>
            <select
              id={selectId}
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-sm"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.item} — {formatPrice(p.pricePerUnit)} / {formatUnit(p.unit)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={quantityId} className="block text-sm font-semibold text-secondary mb-2">
              Quantity ({formatUnit(product.unit)})
            </label>
            <input
              id={quantityId}
              type="number"
              inputMode="decimal"
              value={quantityInput}
              onChange={(e) => setQuantityInput(e.target.value)}
              min="0"
              step="any"
              aria-invalid={!isValid}
              aria-describedby={hintId}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white text-sm aria-invalid:border-red-700"
            />
            <p id={hintId} className={`mt-1.5 text-xs ${isValid ? "text-gray-600" : "text-red-700 font-semibold"}`}>
              {isValid ? "Enter the amount you need." : "Enter a quantity greater than 0."}
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-300">Unit Price:</span>
              <span className="font-semibold text-gray-200">
                {formatPrice(product.pricePerUnit)} / {formatUnit(product.unit)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <span className="text-gray-200 font-semibold text-sm">Estimated Total:</span>
              <output aria-live="polite" className="text-2xl font-heading font-extrabold text-primary">
                {formatPrice(total)}
              </output>
            </div>
          </div>

          {isValid ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClasses} bg-primary-strong text-white hover:bg-primary-strong-hover shadow-md shadow-primary/20`}
            >
              <Send size={16} aria-hidden="true" />
              Send WhatsApp Inquiry
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <button type="button" disabled className={`${ctaClasses} bg-gray-200 text-gray-600 cursor-not-allowed`}>
              <Send size={16} aria-hidden="true" />
              Send WhatsApp Inquiry
            </button>
          )}

          <p className="text-xs text-gray-600 text-center">
            *Estimate for materials only, priced per m³ or per 1,000 bricks. Delivery charges may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
