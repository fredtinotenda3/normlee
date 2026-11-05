/**
 * Educational articles.
 *
 * Content rules:
 *  - General, widely accepted information only. No invented specifications,
 *    thicknesses, strengths, ratios or Normlee-specific claims.
 *  - Anything that depends on the job (depths, compaction, concrete strength,
 *    structural work) is directed to the contractor, designer or engineer.
 *  - Prices are never stated here; link to /products, which reads lib/pricing.ts.
 *
 * TODO(owner): management to review every article before launch.
 */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  /** Used as the meta description and the card summary. */
  summary: string;
  /** ISO date. */
  published: string;
  readingMinutes: number;
  /** Product ids from lib/pricing.ts that the article relates to. */
  relatedProductIds: string[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "understanding-aggregate-sizes",
    title: "Understanding aggregate sizes: what 3/4, 10mm and 7mm stones mean",
    summary:
      "Stone is sold by nominal size. Here is how to read names like 3/4, 10mm and 7mm, and what to confirm before you order.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["stones-1", "stones-3", "stones-2"],
    sections: [
      {
        heading: "Aggregate is described by size",
        paragraphs: [
          "Aggregates such as stone and gravel are described by the size of their particles. A stone sold as 3/4 refers to a nominal size of about 3/4 of an inch, which is roughly 19 mm. Stones sold as 10mm or 7mm are smaller.",
          "The word nominal matters. A load is a mix of particles around that size, not a pile of identical pieces.",
        ],
      },
      {
        heading: "Why size matters",
        paragraphs: [
          "The size of the stone affects how it packs together, how it drains and how it finishes. Larger stone is often used where bulk and drainage matter. Smaller stone is often used where a tighter, finer finish is wanted.",
          "For concrete, the right aggregate size depends on the mix design and the thickness of the element being cast. That decision belongs to your contractor, designer or engineer.",
        ],
      },
      {
        heading: "What to confirm when you order",
        paragraphs: ["Before ordering, check these points with your supplier:"],
        list: [
          "The nominal size you need, as written in your plans or quote",
          "The quantity, measured in cubic metres",
          "Current availability and delivery arrangements for your site",
        ],
      },
    ],
  },
  {
    slug: "types-of-construction-sand",
    title: "Types of construction sand: river sand and pit sand",
    summary:
      "River sand and pit sand are both used on building sites. Learn how they generally differ and what to ask before you choose.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["sand-1", "sand-2"],
    sections: [
      {
        heading: "Two common sources",
        paragraphs: [
          "River sand is taken from river deposits. Pit sand is dug from pits on land. Where the sand comes from affects how fine it is, its colour and how much silt or clay it contains.",
        ],
      },
      {
        heading: "How they are commonly used",
        paragraphs: [
          "River sand is commonly used for plaster, mortar and concrete mixes. Pit sand is commonly used for bedding, filling and general building work. These are general patterns, not rules. Individual deliveries differ, and some jobs have their own requirements.",
        ],
      },
      {
        heading: "Choosing between them",
        paragraphs: [
          "If your plans or your builder name a type of sand, order that type. If you are unsure, describe the job when you enquire and ask what is available. Work that carries load or must meet a standard should follow the advice of your designer or engineer.",
        ],
      },
    ],
  },
  {
    slug: "crusher-run-and-its-applications",
    title: "Crusher run and its applications",
    summary:
      "Crusher run is crushed rock with a mix of particle sizes. Find out why it is used under paving, driveways and yards.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["base-1", "base-2"],
    sections: [
      {
        heading: "What crusher run is",
        paragraphs: [
          "Crusher run is rock that has been through a crusher and is sold without screening out the fine material. It therefore contains a range of sizes, from small stones down to dust. Normlee lists it as Crusher Runner.",
        ],
      },
      {
        heading: "Why the mix of sizes is useful",
        paragraphs: [
          "The fine particles fill the gaps between the larger pieces. When the material is spread and compacted, this can form a firm, closely packed layer. That is why crusher run is commonly used to build base layers under paving, slabs, driveways and yards.",
        ],
      },
      {
        heading: "Things to keep in mind",
        paragraphs: [
          "The thickness of the base and the way it is compacted depend on what will sit on top and what loads it must carry. Ask your contractor or designer for these details rather than relying on a general rule. Quarry dust is a related fine material. Ask us if you are unsure which suits your job.",
        ],
      },
    ],
  },
  {
    slug: "choosing-suitable-construction-materials",
    title: "Choosing suitable construction materials for your project",
    summary:
      "A simple checklist of questions to answer before you order stones, sand, bricks or fill.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["stones-1", "sand-1", "base-1", "bricks-1"],
    sections: [
      {
        heading: "Start with the job",
        paragraphs: [
          "Different jobs call for different materials. Concrete work, bricklaying, plastering, drainage and ground preparation each use different products. Write down what you are building before you decide what to order.",
        ],
      },
      {
        heading: "Questions to answer",
        paragraphs: ["Having these answers ready makes an enquiry faster and a quote more accurate:"],
        list: [
          "What are you building, and who is doing the work?",
          "Do your plans or builder name specific materials or sizes?",
          "How much do you need, in cubic metres or in 1,000 bricks?",
          "Where is the site, and can a truck reach it?",
          "When do you need the material on site?",
        ],
      },
      {
        heading: "Ask for confirmation",
        paragraphs: [
          "Published prices are a guide. Confirm availability, the final price and delivery for your location when you enquire. You can message us on WhatsApp or phone using the details on the contact page.",
        ],
      },
    ],
  },
  {
    slug: "preparing-a-site-for-paving",
    title: "Preparing a site for paving: an overview",
    summary:
      "A general overview of the stages involved in preparing ground for paving, and why the base layer matters.",
    published: "2026-11-05",
    readingMinutes: 4,
    relatedProductIds: ["base-1", "base-2", "sand-2"],
    sections: [
      {
        heading: "Why preparation matters",
        paragraphs: [
          "Most of the performance of a paved surface comes from what is underneath it. Paving laid on poorly prepared ground can settle or move. This article gives a general overview only. Your paving contractor or designer will set the exact method for your site.",
        ],
      },
      {
        heading: "The usual stages",
        paragraphs: ["Paving projects generally follow these stages:"],
        list: [
          "Set out and mark the area, and decide where water will drain to",
          "Excavate to the depth the design requires and remove soft or organic material",
          "Compact the ground that is left",
          "Spread and compact a base layer, for which crusher run is commonly used",
          "Add a levelling layer of bedding material",
          "Lay the paving and finish the edges and joints",
        ],
      },
      {
        heading: "Depths and compaction",
        paragraphs: [
          "How deep each layer should be, and how it should be compacted, depends on the ground and on the loads the surface will carry. A home footpath and a heavy-vehicle yard are very different. Normlee does not give set depths in this article. Follow the advice of the person designing or installing the paving.",
        ],
      },
    ],
  },
  {
    slug: "estimating-material-quantities",
    title: "Estimating material quantities in cubic metres",
    summary:
      "How to work out the volume of material for a layer or area, and why you should allow for settling and waste.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["stones-1", "sand-1", "base-1"],
    sections: [
      {
        heading: "The basic calculation",
        paragraphs: [
          "Most bulk materials are measured in cubic metres (m³). For a rectangular area, multiply the length by the width by the depth, all in metres.",
          "For example, an area 5 m long and 4 m wide, filled to a depth of 0.1 m, is 5 × 4 × 0.1 = 2 m³.",
        ],
      },
      {
        heading: "Allow for the real world",
        paragraphs: [
          "Loose material settles and compacts once it is spread and rolled or tamped, so you may need more than the calculated volume. Some material is also lost in handling. Ask your contractor how much extra to allow for your job.",
        ],
      },
      {
        heading: "Bricks are counted, not measured",
        paragraphs: [
          "Normlee lists bricks per 1,000. The number you need depends on the size of the bricks and the walls you are building, so ask your builder for a count.",
        ],
      },
      {
        heading: "Check your estimate",
        paragraphs: [
          "The price calculator on the products page multiplies a published price by the quantity you enter. It does not work out how much you need. Use it once you have your quantity, then confirm everything with us.",
        ],
      },
    ],
  },
  {
    slug: "planning-material-delivery",
    title: "Planning a material delivery to your site",
    summary:
      "What to think about before a truck arrives with your materials: access, where to tip, and what to confirm.",
    published: "2026-11-05",
    readingMinutes: 3,
    relatedProductIds: ["stones-1", "sand-1", "base-1"],
    sections: [
      {
        heading: "Think about access",
        paragraphs: [
          "Bulk materials arrive on trucks that need room to reach your site and to turn or reverse. Check that the route and the gate or entrance can take a loaded truck, and that nothing overhead is in the way when the truck tips.",
        ],
      },
      {
        heading: "Choose the drop point",
        paragraphs: [
          "Decide where the load should go before the truck arrives. Pick ground that is level and that you will not need to cross while it is covered. Keep the pile away from drains and from places where water runs, so the material is not washed away.",
        ],
      },
      {
        heading: "What to confirm with us",
        paragraphs: ["When you enquire, it helps to confirm these details:"],
        list: [
          "The delivery address or site location",
          "Whether delivery is available to that location, and the delivery charge",
          "Which day and time suit you",
          "A contact person on site",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
