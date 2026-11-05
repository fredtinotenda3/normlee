/**
 * Registry of genuine, owner-supplied photographs used on the site.
 *
 * Every entry here is DOCUMENTARY: a real photograph (or a frame from a real
 * video) supplied by the owner, only cropped and tone-corrected. See
 * IMAGE_ASSET_GUIDE.md and IMAGE_EDITING_REPORT.md for sources and edits.
 * Width and height are the exact pixel dimensions of the file, so next/image
 * can reserve space and avoid layout shift.
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
    alt: "A Scania tipper truck waiting on a dirt access road while an excavator loads material beside it",
  },
  pavingDeliveryDetail: {
    src: "/images/home/paving-blocks-delivery-detail.webp",
    width: 368,
    height: 460,
    alt: "A flatbed truck carrying stacked grey paving blocks, with a grab crane lifting them at a building site",
  },
  tipperFill: {
    src: "/images/home/tipper-spreading-fill-material.webp",
    width: 368,
    height: 490,
    alt: "A tipper truck spreading fill material along a red-earth road while a grader works in the background",
  },
  fleetYard: {
    src: "/images/home/truck-fleet-yard-dusk.webp",
    width: 484,
    height: 364,
    alt: "A row of heavy haulage trucks parked side by side in a yard at dusk",
  },
  pavingDeliveryCrane: {
    src: "/images/services/paving-blocks-delivery-crane-truck.webp",
    width: 368,
    height: 490,
    alt: "A truck loaded with stacked paving blocks being offloaded by a yellow grab crane at a residential site",
  },
  sandStockpile: {
    src: "/images/products/sand-stockpile-lawn.webp",
    width: 720,
    height: 835,
    alt: "A large stockpile of fine sand delivered onto a lawn, with trees in the background",
  },
} satisfies Record<string, SitePhoto>;
