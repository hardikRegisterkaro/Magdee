import { fetchSitemapData } from "../lib/fetchSitemapData";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://magdee-coral.vercel.app";

export const revalidate = 86400;

export async function GET() {
  const { posts } = await fetchSitemapData();

  const urls = posts
    .map(
      (p) => `
  <url>
    <loc>${SITE}/blog/${p.slug}</loc>
    <lastmod>${new Date(p.updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
