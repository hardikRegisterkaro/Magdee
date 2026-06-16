import type { NextConfig } from "next";

// Aliases that REDIRECT to /terms — browser URL updates to /terms.
const LEGAL_REDIRECT_ALIASES = [
  "/privacy",
  "/privacy-policy",
  "/terms-and-conditions",
  "/terms-of-service",
];

// Aliases that REWRITE to /terms — browser URL stays as the original path.
// Use this when an external party (Play Store listing, partner contract, etc.)
// expects to keep seeing the literal URL.
const LEGAL_REWRITE_ALIASES = [
  "/privacy-policy-2",
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
    return LEGAL_REDIRECT_ALIASES.map((source) => ({
      source,
      destination: "/terms",
      permanent: true,
    }));
  },
  async rewrites() {
    return LEGAL_REWRITE_ALIASES.map((source) => ({
      source,
      destination: "/terms",
    }));
  },
};

export default nextConfig;
