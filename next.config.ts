import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Explicit, to document the URL policy: no trailing slashes (/about/ redirects to /about).
  trailingSlash: false,
  async redirects() {
    return [
      // The catalogue now lives at /products. Keep old links and bookmarks working.
      { source: "/catalog", destination: "/products", permanent: true },
      // Phase 4.5 renamed four photographs to neutral descriptive names. Keep the old image URLs working.
      {
        source: "/images/home/aggregate-loading-scania-excavator.webp",
        destination: "/images/home/truck-on-dirt-road-with-machinery.webp",
        permanent: true,
      },
      {
        source: "/images/home/tipper-spreading-fill-material.webp",
        destination: "/images/home/tipper-truck-emptying-load-dirt-road.webp",
        permanent: true,
      },
      {
        source: "/images/home/paving-blocks-delivery-detail.webp",
        destination: "/images/home/blocks-on-flatbed-truck-grab-crane.webp",
        permanent: true,
      },
      {
        source: "/images/services/paving-blocks-delivery-crane-truck.webp",
        destination: "/images/services/blocks-delivery-truck-grab-crane.webp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
