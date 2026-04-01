import { products, availableOnRequest, formatPrice } from "@/lib/pricing";

export default function ProductTable() {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Category</th>
              <th className="px-6 py-4 text-left font-semibold">Item</th>
              <th className="px-6 py-4 text-right font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <>
                {items.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {idx === 0 && (
                      <td
                        rowSpan={items.length}
                        className="px-6 py-4 font-medium text-secondary align-top bg-gray-50"
                      >
                        {category}
                      </td>
                    )}
                    <td className="px-6 py-4 text-gray-700">{item.item}</td>
                    <td className="px-6 py-4 text-right font-semibold text-primary">
                      {formatPrice(item.pricePerUnit)} / {item.unit}
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Available on Request Section */}
      <div className="border-t border-gray-200 bg-gray-50 p-6">
        <h4 className="font-semibold text-secondary mb-3">Available on Request:</h4>
        <div className="flex flex-wrap gap-2">
          {availableOnRequest.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Contact us for availability and pricing on these materials.
        </p>
      </div>
    </div>
  );
}