import type { MetadataRoute } from "next";
import { fetchSitemapData } from "./lib/fetchSitemapData";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "magdee-coral.vercel.app";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services } = await fetchSitemapData();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    // blog post sitemap lives at /blog/sitemap.xml
    { url: `${SITE}/blog/sitemap.xml`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE}/${s.slug}`,
    lastModified: new Date(s.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
