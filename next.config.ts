import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
