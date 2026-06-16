import type { NextConfig } from "next";

const LEGAL_ALIASES = [
  "/privacy",
  "/privacy-policy",
  "/privacy-policy-2",
  "/terms-and-conditions",
  "/terms-of-service",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hostingersite.com",
      },
    ],
  },
  async redirects() {
    return LEGAL_ALIASES.map((source) => ({
      source,
      destination: "/terms",
      permanent: true,
    }));
  },
};

export default nextConfig;
