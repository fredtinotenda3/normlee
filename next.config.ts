import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The catalogue now lives at /products. Keep old links and bookmarks working.
      { source: "/catalog", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
