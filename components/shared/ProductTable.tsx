import { Fragment } from "react";
import { products, availableOnRequest, formatPrice, formatUnit } from "@/lib/pricing";

export default function ProductTable() {
  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, typeof products>,
  );

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="h-1.5 bg-primary" aria-hidden="true" />
      {/* Focusable scroll region so keyboard users can scroll the table on small screens */}
      <div className="overflow-x-auto" role="region" aria-label="Product price list" tabIndex={0}>
        <table className="w-full">
          <caption className="sr-only">Materials and prices</caption>
          <thead>
            <tr className="bg-secondary text-white">
              <th scope="col" className="px-6 py-4 text-left font-heading font-semibold text-sm uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-4 text-left font-heading font-semibold text-sm uppercase tracking-wider">
                Item
              </th>
              <th scope="col" className="px-6 py-4 text-right font-heading font-semibold text-sm uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <Fragment key={category}>
                {items.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-orange-50/40 transition-colors">
                    {idx === 0 && (
                      <th
                        scope="rowgroup"
                        rowSpan={items.length}
                        className="px-6 py-4 font-heading font-bold text-secondary text-left align-top bg-gray-50 border-r border-gray-100 text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <span aria-hidden="true" className="w-2 h-2 bg-primary rounded-full shrink-0" />
                          {category}
                        </span>
                      </th>
                    )}
                    <td className="px-6 py-4 text-gray-700 text-sm">{item.item}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-heading font-bold text-primary-strong">{formatPrice(item.pricePerUnit)}</span>
                      <span className="text-gray-600 font-normal text-xs ml-1">/ {formatUnit(item.unit)}</span>
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Available on Request */}
      <div className="border-t border-gray-100 bg-gray-50 p-6">
        <h3 className="font-heading font-bold text-secondary mb-3 text-sm uppercase tracking-wider">
          Available on Request
        </h3>
        <ul className="flex flex-wrap gap-2">
          {availableOnRequest.map((item) => (
            <li
              key={item}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-600 mt-3">Contact us for availability and pricing on these materials.</p>
      </div>
    </div>
  );
}
