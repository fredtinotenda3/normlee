/**
 * Descriptive content for each product, keyed by the product `id` in
 * lib/pricing.ts. PRICES LIVE ONLY IN lib/pricing.ts: never copy a price here.
 *
 * Descriptions are written conservatively. They state what the product name
 * generally means and what such materials are commonly used for. They do NOT
 * state grades, strengths, bulk densities, stock levels or Normlee-specific
 * specifications, because none have been supplied.
 *
 * TODO(owner): supply verified specifications (size range, source/quarry, grade,
 * brick dimensions, truck load sizes) and we will replace the generic wording.
 */

export interface ProductInfo {
  description: string;
  uses: string[];
}

export const productInfo: Record<string, ProductInfo> = {
  "stones-1": {
    description:
      "Stone aggregate sold as 3/4 stones. The name usually refers to a nominal stone size of about 3/4 inch (roughly 19 mm).",
    uses: ["Concrete mixes", "Drainage", "General aggregate"],
  },
  "stones-2": {
    description: "A smaller stone aggregate, sold as 7mm stones. The name usually refers to a nominal size of 7 mm.",
    uses: ["Concrete mixes", "Finishing and surfacing work"],
  },
  "stones-3": {
    description: "A smaller stone aggregate, sold as 10mm stones. The name usually refers to a nominal size of 10 mm.",
    uses: ["Concrete mixes", "Finishing and surfacing work"],
  },
  "sand-1": {
    description: "Sand sourced from river deposits.",
    uses: ["Plaster and mortar", "Concrete mixes"],
  },
  "sand-2": {
    description: "Sand excavated from pits. Its colour and fineness can differ from river sand.",
    uses: ["Bedding", "Filling", "General building work"],
  },
  "base-1": {
    description:
      "Crushed rock containing a range of particle sizes, from stone down to fine material. Often called crusher run.",
    uses: ["Compacted base layers under paving", "Driveway and yard bases", "Road and platform bases"],
  },
  "base-2": {
    description: "Fine material produced when stone is crushed at a quarry.",
    uses: ["Bedding layers", "Fine base and levelling material"],
  },
  "bricks-1": {
    description: "Red common bricks, sold per 1,000 bricks.",
    uses: ["General walling"],
  },
  "fill-1": {
    description: "Dark topsoil.",
    uses: ["Gardens and lawns", "Landscaping"],
  },
  "fill-2": {
    description: "Loose gravel.",
    uses: ["Driveways and paths", "Drainage", "Fill"],
  },
};

/** Short, generic description of each pricing category. */
export const categoryInfo: Record<string, { title: string; blurb: string }> = {
  Stones: {
    title: "Stones",
    blurb: "Stone aggregates in several nominal sizes.",
  },
  Sand: {
    title: "Sand",
    blurb: "River sand and pit sand for building and bedding work.",
  },
  Base: {
    title: "Base materials",
    blurb: "Crushed rock and fine material used to build compacted base layers.",
  },
  Bricks: {
    title: "Bricks",
    blurb: "Common bricks sold per 1,000.",
  },
  "Fill/Soil": {
    title: "Fill and soil",
    blurb: "Topsoil and gravel for landscaping, paths and fill.",
  },
};
