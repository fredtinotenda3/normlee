/**
 * Registry of genuine, owner-supplied photographs used on the site.
 *
 * Every entry here is DOCUMENTARY: a real photograph (or a frame from a real
 * video) supplied by the owner, only cropped. See IMAGE_ASSET_GUIDE.md and
 * IMAGE_EDITING_REPORT.md for sources and edits. Width and height are the exact
 * pixel dimensions of the file, so next/image can reserve space and avoid
 * layout shift.
 *
 * ALT TEXT RULE: describe only what is plainly visible. Do not name machinery
 * models, material types, site types or projects unless the owner has
 * confirmed them.
 *
 * NONE of these photographs shows a completed paving installation. Do not
 * present them as project work.
 */

export interface SitePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const photos = {
  heroLoading: {
    src: "/images/home/aggregate-loading-scania-excavator.webp",
    width: 368,
    height: 490,
    alt: "A white and blue truck on a dirt road with earth-moving machinery behind it",
  },
  pavingDeliveryDetail: {
    src: "/images/home/paving-blocks-delivery-detail.webp",
    width: 368,
    height: 460,
    alt: "A flatbed truck carrying stacked grey blocks, with a yellow grab crane above it at a building site",
  },
  tipperFill: {
    src: "/images/home/tipper-spreading-fill-material.webp",
    width: 368,
    height: 490,
    alt: "A tipper truck emptying its load onto a dirt road beside a tree",
  },
  earthHeap: {
    src: "/images/home/earth-heap-dirt-road.webp",
    width: 368,
    height: 490,
    alt: "A raised heap of loose material along the edge of a dirt road, with trees and a tower in the distance",
  },
  fleetYard: {
    src: "/images/home/truck-fleet-yard-dusk.webp",
    width: 484,
    height: 364,
    alt: "A row of trucks parked side by side on open ground at dusk, with a small car at the right",
  },
  pavingDeliveryCrane: {
    src: "/images/services/paving-blocks-delivery-crane-truck.webp",
    width: 368,
    height: 490,
    alt: "A truck loaded with stacked grey blocks beside a dirt track, with a yellow grab crane above the load",
  },
  sandStockpile: {
    src: "/images/products/sand-stockpile-lawn.webp",
    width: 720,
    height: 835,
    alt: "A large pile of sand on a lawn, with trees in the background",
  },
} satisfies Record<string, SitePhoto>;
