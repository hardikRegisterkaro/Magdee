import type { MetadataRoute } from "next";
import { fetchSitemapData } from "./lib/fetchSitemapData";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://magdee-coral.vercel.app";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await fetchSitemapData();

  return posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}
