/**
 * Single source of truth for product pricing.
 *
 * Every price shown on the site (catalogue table, homepage price list and the
 * price calculator) is derived from this file. Do not hardcode prices anywhere
 * else.
 *
 * Prices below are exactly as they appeared on the original site. They have
 * NOT been changed. Entries flagged `priceNeedsConfirmation` are awaiting
 * confirmation from the owner.
 */

export interface Product {
  id: string;
  category: string;
  item: string;
  pricePerUnit: number;
  unit: string;
  /** TODO(owner): price carried over from the old site but not yet confirmed. */
  priceNeedsConfirmation?: boolean;
}

export const products: Product[] = [
  { id: "stones-1", category: "Stones", item: "3/4 Stones", pricePerUnit: 18.0, unit: "m³" },
  // TODO(owner): 7mm and 10mm currently carry the same price as 3/4 stones. Confirm.
  { id: "stones-2", category: "Stones", item: "7mm Stones", pricePerUnit: 18.0, unit: "m³", priceNeedsConfirmation: true },
  { id: "stones-3", category: "Stones", item: "10mm Stones", pricePerUnit: 18.0, unit: "m³", priceNeedsConfirmation: true },
  { id: "sand-1", category: "Sand", item: "River Sand", pricePerUnit: 10.0, unit: "m³" },
  { id: "sand-2", category: "Sand", item: "Pit Sand", pricePerUnit: 8.0, unit: "m³" },
  { id: "base-1", category: "Base", item: "Crusher Runner", pricePerUnit: 20.0, unit: "m³" },
  { id: "base-2", category: "Base", item: "Quarry Dust", pricePerUnit: 20.0, unit: "m³" },
  { id: "bricks-1", category: "Bricks", item: "Red Common Bricks", pricePerUnit: 120.0, unit: "1,000" },
  { id: "fill-1", category: "Fill/Soil", item: "Black Top Soil", pricePerUnit: 8.0, unit: "m³" },
  { id: "fill-2", category: "Fill/Soil", item: "Gravel", pricePerUnit: 8.0, unit: "m³" },
];

/** Product ids shown in the homepage "Popular Materials" list. */
export const featuredProductIds = ["stones-1", "sand-1", "base-1", "bricks-1"] as const;

// TODO(owner): "Top Soil" here overlaps with the priced "Black Top Soil" above. Confirm.
export const availableOnRequest: string[] = ["Coal Rubble", "Brick Rubble", "Top Soil"];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return featuredProductIds
    .map((id) => getProduct(id))
    .filter((p): p is Product => p !== undefined);
}

export function calculatePrice(product: Product, quantity: number): number {
  return product.pricePerUnit * quantity;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

/** Human-readable unit. Bricks are sold per 1,000. */
export function formatUnit(unit: string): string {
  return unit === "1,000" ? "1,000 bricks" : unit;
}
