import type { CSSProperties } from "react";

/* ─── Hatch pattern ── */
const HATCH_STYLE: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 0.5px, transparent 0.5px, transparent 7px)",
};

/* ─── Helpers ── */

const CATEGORY_PALETTE = [
  "#1e40af", "#6d28d9", "#0f766e", "#b45309",
  "#be123c", "#15803d", "#c2410c", "#7c3aed",
];
function generateCategoryColor(name: string): string {
  const hash = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function formatDate(iso: string): string {
  return new Date(iso)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toUpperCase();
}

/* ─── Types ── */

type ApiPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  publishedAt: string | null;
  readTimeMinutes: number;
  featuredImage: string | null;
  category: { id: string; name: string; slug: string; color: string }[];
};

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function BlogListingPage() {
  const BACKEND = process.env.BACKEND_API_URL ?? "http://localhost:3000";

  let posts: ApiPost[] = [];
  try {
    const res = await fetch(`${BACKEND}/api/post/client/all-blog`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      posts = data.posts ?? [];
    }
  } catch {
    // render empty list on error
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mx-auto max-w-290">

        {/* Left hatch strip (desktop only) */}
        <div
          className="pointer-events-none absolute top-0 hidden h-full w-8 border border-black/8 lg:block"
          style={{ ...HATCH_STYLE, right: "100%" }}
        />

        {/* Right hatch strip (desktop only) */}
        <div
          className="pointer-events-none absolute top-0 hidden h-full w-8 border border-black/8 lg:block"
          style={{ ...HATCH_STYLE, left: "100%" }}
        />

        {/* ── Hero ── */}
        <div className="px-4 pb-0 pt-10 sm:px-10 sm:pt-16">
          <div
            className="blog-fade-up flex items-center gap-2"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="font-mono text-[10px] font-bold tracking-[2.5px] text-brand">
              THE MAGDEE BLOG
            </span>
          </div>

          <h1
            className="blog-fade-up mt-4 text-[36px] font-bold leading-none tracking-[-1.5px] text-ink sm:text-[56px] sm:tracking-[-2.5px] lg:text-[72px]"
            style={{ animationDelay: "80ms" }}
          >
            Latest updates.
          </h1>

          <p
            className="blog-fade-up mt-4 max-w-140 text-[14px] leading-6 text-ink-soft sm:text-[16px] sm:leading-7"
            style={{ animationDelay: "160ms" }}
          >
            Engineering notes, product thinking, and studio dispatches — from the team building
            patient AI in Coimbatore.
          </p>

          <div
            className="blog-line-grow mt-14 h-px w-full bg-line"
            style={{ animationDelay: "240ms" }}
          />
        </div>

        {/* ── Post list ── */}
        <div className="px-4 sm:px-10">
          {posts.length === 0 && (
            <p className="py-20 text-center text-sm text-muted">No posts published yet.</p>
          )}
          {posts.map((post, i) => {
            const cat = post.category?.[0];
            const color = cat?.color || generateCategoryColor(cat?.name ?? "");
            const categoryBg = hexToRgba(color, 0.08);
            const categoryBorder = hexToRgba(color, 0.18);
            const dateShort = post.publishedAt ? formatDate(post.publishedAt) : "";
            const readTime = `${post.readTimeMinutes ?? "?"} MIN READ`;

            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col transition-colors duration-300 sm:flex-row sm:items-stretch"
              >
                {/* Date column */}
                <div className="relative w-full pt-6 sm:w-50 sm:shrink-0 sm:border-r sm:border-line sm:py-8 sm:pr-10 sm:pt-8">
                  <span
                    className="blog-fade-up mb-4 block font-mono text-[10px] font-bold tracking-[1.8px] text-muted transition-colors duration-300 group-hover:text-ink-soft sm:text-[10.5px]"
                    style={{ animationDelay: `${300 + i * 55}ms` }}
                  >
                    {dateShort}
                  </span>

                  {/* Featured image — below date, desktop only */}
                  <div
                    className="blog-fade-up hidden overflow-hidden rounded-xl sm:block"
                    style={{ animationDelay: `${320 + i * 55}ms` }}
                  >
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-27.5 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="flex h-27.5 w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
                        style={{ background: hexToRgba(color, 0.08) }}
                      >
                        <span
                          className="font-mono text-[32px] font-bold uppercase tracking-tight opacity-30"
                          style={{ color }}
                        >
                          {post.title.slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content column */}
                <div className="relative flex flex-1 items-start pb-6 sm:py-8 sm:pl-10">
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    {/* Meta */}
                    <div
                      className="blog-fade-up flex items-center gap-2.5"
                      style={{ animationDelay: `${320 + i * 55}ms` }}
                    >
                      {cat && (
                        <span
                          className="inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold tracking-[1.3px]"
                          style={{
                            background: categoryBg,
                            borderColor: categoryBorder,
                            color,
                          }}
                        >
                          {cat.name.toUpperCase()}
                        </span>
                      )}
                      <span className="font-mono text-[9.5px] font-bold tracking-[1.3px] text-muted">
                        {readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="blog-fade-up mt-2.5 text-[17px] font-bold leading-6 tracking-[-0.3px] text-ink transition-colors duration-300 group-hover:text-brand sm:text-[20px] sm:leading-7 sm:tracking-[-0.4px]"
                      style={{ animationDelay: `${340 + i * 55}ms` }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p
                        className="blog-fade-up mt-2 max-w-150 text-[13px] leading-5.5 text-ink-soft sm:text-[14px] sm:leading-6"
                        style={{ animationDelay: `${360 + i * 55}ms` }}
                      >
                        {post.excerpt}
                      </p>
                    )}

                    {/* Read more — reveals on hover */}
                    <div className="mt-3 flex translate-y-1 items-center gap-1.5 text-[12.5px] font-semibold text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Read more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Row bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
              </a>
            );
          })}
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
}
