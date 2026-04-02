export interface Product {
  id: string;
  category: string;
  item: string;
  pricePerUnit: number;
  unit: string;
  availableOnRequest?: boolean;
}

export const products: Product[] = [
  { id: "stones-1", category: "Stones", item: "3/4 Stones", pricePerUnit: 18.00, unit: "m³" },
  { id: "stones-2", category: "Stones", item: "7mm Stones", pricePerUnit: 18.00, unit: "m³" },
  { id: "stones-3", category: "Stones", item: "10mm Stones", pricePerUnit: 18.00, unit: "m³" },
  { id: "sand-1", category: "Sand", item: "River Sand", pricePerUnit: 10.00, unit: "m³" },
  { id: "sand-2", category: "Sand", item: "Pit Sand", pricePerUnit: 8.00, unit: "m³" },
  { id: "base-1", category: "Base", item: "Crusher Runner", pricePerUnit: 20.00, unit: "m³" },
  { id: "base-2", category: "Base", item: "Quarry Dust", pricePerUnit: 20.00, unit: "m³" },
  { id: "bricks-1", category: "Bricks", item: "Red Common Bricks", pricePerUnit: 120.00, unit: "1,000" },
  { id: "fill-1", category: "Fill/Soil", item: "Black Top Soil", pricePerUnit: 8.00, unit: "m³" },
  { id: "fill-2", category: "Fill/Soil", item: "Gravel", pricePerUnit: 8.00, unit: "m³" },
];

export const availableOnRequest: string[] = [
  "Coal Rubble",
  "Brick Rubble",
  "Top Soil",
];

export function calculatePrice(product: Product, quantity: number): number {
  return product.pricePerUnit * quantity;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}