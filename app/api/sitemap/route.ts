import { NextResponse } from "next/server";

const CMS = process.env.BACKEND_API_URL || "http://localhost:3000";

// Revalidate cached response every 24 hours
export const revalidate = 86400;

export async function GET() {
  const [postsRes, servicesRes] = await Promise.allSettled([
    fetch(`${CMS}/api/post/client/sitemap`, { next: { revalidate: 86400 } }),
    fetch(`${CMS}/api/services/client/sitemap`, { next: { revalidate: 86400 } }),
  ]);

  const posts =
    postsRes.status === "fulfilled" && postsRes.value.ok
      ? (await postsRes.value.json()).posts ?? []
      : [];

  const services =
    servicesRes.status === "fulfilled" && servicesRes.value.ok
      ? (await servicesRes.value.json()).services ?? []
      : [];

  return NextResponse.json({ posts, services });
}
