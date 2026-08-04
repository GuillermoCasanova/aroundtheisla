import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/galeries",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/galeries/:slug",
        destination: "/gallery/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
