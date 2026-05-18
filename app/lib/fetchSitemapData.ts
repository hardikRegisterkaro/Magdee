const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://magdee-coral.vercel.app";

export interface SitemapEntry {
  id: string;
  slug: string;
  updatedAt: string;
}

export async function fetchSitemapData(): Promise<{
  posts: SitemapEntry[];
  services: SitemapEntry[];
}> {
  try {
    const res = await fetch(`${SITE}/api/sitemap`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { posts: [], services: [] };
    return await res.json();
  } catch {
    return { posts: [], services: [] };
  }
}
