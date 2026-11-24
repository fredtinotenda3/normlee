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
    src: "/images/home/truck-on-dirt-road-with-machinery.webp",
    width: 368,
    height: 490,
    alt: "A white and blue truck on a dirt road with earth-moving machinery behind it",
  },
  pavingDeliveryDetail: {
    src: "/images/home/blocks-on-flatbed-truck-grab-crane.webp",
    width: 368,
    height: 460,
    alt: "A flatbed truck carrying stacked grey blocks, with a yellow grab crane above it at a building site",
  },
  tipperFill: {
    src: "/images/home/tipper-truck-emptying-load-dirt-road.webp",
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
    src: "/images/services/blocks-delivery-truck-grab-crane.webp",
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

/**
 * ILLUSTRATIONS (Phase 5 prep): original vector artwork drawn for this site in the brand palette, used where
 * no genuine photograph exists yet. They are NOT photographs and NOT Normlee projects, and they must always
 * be shown with the visible "Illustration" label (see components/shared/IllustrationImage.tsx) and
 * alt text that begins "Illustration of". Source SVGs: design/illustrations-source/. Each is 1200x900.
 * Replace an illustration with a genuine photograph whenever the owner supplies one.
 */
export const illustrations = {
  residentialDriveway: {
    src: "/images/illustrations/paving-residential-driveway.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of a paved driveway leading to a house with an orange front door, trees and shrubs on either side",
  },
  commercialForecourt: {
    src: "/images/illustrations/paving-commercial-forecourt.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of a shop front with an orange awning and a paved forecourt marked with parking bays",
  },
  industrialYard: {
    src: "/images/illustrations/paving-industrial-yard.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of a warehouse with roller doors and a paved yard, with a delivery truck parked on it",
  },
  gardenWalkway: {
    src: "/images/illustrations/paving-garden-walkway.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of a paved garden walkway between flower beds and lamp posts, leading to a pergola",
  },
  materialSupply: {
    src: "/images/illustrations/material-supply-stockpiles.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of three heaps of sand and stone beside a tipper truck loaded with stone",
  },
  buildingMaterials: {
    src: "/images/illustrations/building-materials-bricks-soil-gravel.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of a stack of red bricks, a heap of dark soil, a heap of gravel and an orange wheelbarrow",
  },
  pavingInstallation: {
    src: "/images/illustrations/paving-installation-in-progress.webp",
    width: 1200,
    height: 900,
    alt: "Illustration of paving being laid, with a sand bed on the left, laid pavers on the right, a string line, a pallet of pavers and a mallet",
  },
} satisfies Record<string, SitePhoto>;
