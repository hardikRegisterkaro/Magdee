import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import TableOfContents, { TocItem } from "@/app/components/blog/TableOfContents";
import NewsletterMini from "@/app/components/blog/NewsletterMini";
import MobileSidebarMenu from "@/app/components/blog/MobileSidebarMenu";
import BlogFAQ from "@/app/components/blog/BlogFAQ";

/* ─── Helpers ─────────────────────────────────────────────────────────── */

/* Same palette and hash the backend uses — ensures color matches even if DB field is empty */
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

function computeReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractTocItems(html: string): TocItem[] {
  const items: TocItem[] = [];
  const usedIds = new Set<string>();
  const re = /<(h[23])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const level = (m[1] === "h2" ? 2 : 3) as 2 | 3;
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    if (!id) continue;
    let unique = id;
    let n = 2;
    while (usedIds.has(unique)) unique = `${id}-${n++}`;
    usedIds.add(unique);
    items.push({ id: unique, label: text, level });
  }
  return items;
}

function injectHeadingIds(html: string): string {
  const usedIds = new Set<string>();
  return html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    if (!id) return `<${tag}${attrs}>${inner}</${tag}>`;
    let unique = id;
    let n = 2;
    while (usedIds.has(unique)) unique = `${id}-${n++}`;
    usedIds.add(unique);
    return `<${tag}${attrs} id="${unique}">${inner}</${tag}>`;
  });
}

/* Paragraphs whose *entire* content is italic (TipTap renders quotes this way)
   get promoted to <blockquote> so the pull-quote CSS applies. */
function liftItalicQuotes(html: string): string {
  return html.replace(
    /<p>(\s*(?:<strong>\s*)?<em>[\s\S]*?<\/em>(?:\s*<\/strong>)?\s*)<\/p>/gi,
    (_, inner) => `<blockquote><p>${inner}</p></blockquote>`
  );
}

function wrapTables(html: string): string {
  return html
    .replace(/<table/gi, '<div class="table-scroll"><table')
    .replace(/<\/table>/gi, "</table></div>");
}

function buildSidebarSections(
  posts: { slug: string; title: string; category: { name: string }[] }[],
  currentSlug: string
) {
  const latest = posts.slice(0, 7).map((p) => ({
    slug: p.slug,
    title: p.title,
    active: p.slug === currentSlug,
  }));

  // Group by first category
  const byCategory = new Map<string, { slug: string; title: string; active: boolean }[]>();
  for (const p of posts) {
    const cat = p.category?.[0]?.name ?? "General";
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push({ slug: p.slug, title: p.title, active: p.slug === currentSlug });
  }

  const sections: { label: string; posts: { slug: string; title: string; active?: boolean }[] }[] =
    [{ label: "Latest", posts: latest }];
  for (const [label, catPosts] of byCategory) {
    sections.push({ label, posts: catPosts.slice(0, 6) });
  }
  return sections;
}

/* ─── Hatch divider ─────────────────────────────────────────────────── */

const HATCH_DIVIDER_STYLE: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.07) 0, rgba(0,0,0,0.07) 0.5px, transparent 0.5px, transparent 6px)",
};

/* ─── Page ──────────────────────────────────────────────────────────── */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const BACKEND = process.env.BACKEND_API_URL ?? "http://localhost:3000";

  const [postRes, allRes] = await Promise.all([
    fetch(`${BACKEND}/api/post/client/detail-blog?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    }),
    fetch(`${BACKEND}/api/post/client/all-blog`, { cache: "no-store" }),
  ]);

  if (!postRes.ok) notFound();
  const postData = await postRes.json();
  if (!postData.success || !postData.post) notFound();
  const post = postData.post;

  const allData = allRes.ok ? await allRes.json() : { posts: [] };
  const allPosts: { slug: string; title: string; category: { name: string }[] }[] =
    allData.posts ?? [];

  // Content processing
  const rawContent = post.content ?? "";
  const processedContent = wrapTables(injectHeadingIds(liftItalicQuotes(rawContent)));
  const tocItems = extractTocItems(rawContent);
  const readTimeMinutes = computeReadTime(rawContent);

  // Category
  const category = post.category?.[0] as
    | { id: string; name: string; slug: string; color: string }
    | undefined;
  const categoryColor = category?.color || generateCategoryColor(category?.name ?? "");
  const categoryBg = hexToRgba(categoryColor, 0.1);
  const categoryBorder = hexToRgba(categoryColor, 0.2);
  const categoryNames = (post.category ?? []).map((c: { name: string }) => c.name).join(", ");

  // Author
  const authorUsername = post.author?.username ?? "Team";
  const authorInitial = authorUsername[0].toUpperCase();

  // Dates
  const publishedDate = post.publishedAt ? formatDate(post.publishedAt) : "";
  const updatedDate = post.updatedAt ? formatDate(post.updatedAt) : "";

  // Sidebar
  const sidebarSections = buildSidebarSections(allPosts, slug);

  // Prev / next (allPosts sorted newest-first)
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Mobile sidebar menu ── */}
      <MobileSidebarMenu sections={sidebarSections} />

      {/* ── 3-column body ── */}
      <div className="mx-auto flex w-full max-w-[1440px]">

        {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
        <aside
          className="blog-slide-left hidden w-[268px] shrink-0 flex-col pb-[48px] pl-[32px] pr-[16px] pt-[32px] lg:flex"
          style={{ animationDelay: "0ms" }}
        >
          <div className="sticky top-[88px] flex flex-col gap-[20px]">
          {/* Nav sections */}
          {sidebarSections.map((section) => (
            <div key={section.label}>
              <p className="mb-[2px] text-[13px] font-semibold text-[#0a192f]">{section.label}</p>
              <div className="flex flex-col gap-[2px]">
                {section.posts.map((p) => (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className={`flex w-[220px] items-center rounded-[6px] py-[7px] pl-[12px] pr-[8px] text-[12.5px] leading-normal transition-colors ${
                      p.active
                        ? "bg-[#f1f5f9] font-semibold text-[#0a192f]"
                        : "font-normal text-[#4a5568] hover:bg-[#f1f5f9] hover:text-[#0a192f]"
                    }`}
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
          </div>
        </aside>

        {/* ── Hatch divider: left │ main ── */}
        <div
          className="hidden w-3 shrink-0 self-stretch border-x border-[#e8eaf0] lg:block"
          style={HATCH_DIVIDER_STYLE}
        />

        {/* ── MAIN ARTICLE ─────────────────────────────────── */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-12">
          {/* Eye row — category + read time + date */}
          <div className="blog-fade-up flex items-center gap-2.5" style={{ animationDelay: "60ms" }}>
            {category && (
              <span
                className="inline-flex items-center rounded-full border px-[8px] py-[3px]"
                style={{ background: categoryBg, borderColor: categoryBorder }}
              >
                <span
                  className="font-mono text-[9px] font-bold tracking-[1.3px]"
                  style={{ color: categoryColor }}
                >
                  {category.name.toUpperCase()}
                </span>
              </span>
            )}
            <span className="font-mono text-[9.5px] font-bold tracking-[1.3px] text-[#4a5568]">
              {readTimeMinutes} MIN READ{publishedDate ? `  ·  ${publishedDate}` : ""}
            </span>
          </div>

          {/* Title */}
          <h1
            className="blog-fade-up mt-3 max-w-182.5 text-[48px] font-bold leading-13.5 tracking-[-1.6px] text-[#0a192f]"
            style={{ animationDelay: "140ms" }}
          >
            {post.title}
          </h1>

          {/* 16px gap */}
          <div className="h-[16px]" />

          {/* Excerpt / lead paragraph */}
          {post.excerpt && (
            <p
              className="blog-fade-up max-w-182.5 text-[17px] font-normal leading-7 text-[#4a5568]"
              style={{ animationDelay: "210ms" }}
            >
              {post.excerpt}
            </p>
          )}

          {/* 24px gap */}
          <div className="h-[24px]" />

          {/* Byline */}
          <div
            className="blog-fade-up flex items-center gap-3"
            style={{ animationDelay: "270ms" }}
          >
            <div
              className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full text-center text-[14px] font-bold text-white"
              style={{ background: "linear-gradient(to right, #1e40af, #3b5bdb)" }}
            >
              {authorInitial}
            </div>
            <div className="flex min-w-0 flex-col gap-px">
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0">
                <span className="text-[13.5px] font-semibold text-[#0a192f]">{authorUsername}</span>
                {categoryNames && (
                  <>
                    <span className="text-[13px] font-normal text-[#a0aec0]">·</span>
                    <span className="text-[13px] font-normal text-[#4a5568]">
                      Posted to {categoryNames}
                    </span>
                  </>
                )}
              </div>
              {updatedDate && (
                <p className="font-mono text-[9.5px] font-normal tracking-[0.8px] text-[#718096] sm:text-[10px] sm:tracking-[1.1px]">
                  Last updated {updatedDate}
                </p>
              )}
            </div>
          </div>

          {/* 32px + divider + 32px */}
          <div className="h-[32px]" />
          <div className="h-px max-w-[730px] bg-[#e2e8f0]" />
          <div className="h-[32px]" />

          {/* Featured image */}
          {post.featuredImage && (
            <div className="mb-8 max-w-182.5">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded-2xl border border-[#e2e8f0] object-cover"
              />
            </div>
          )}

          {/* ── Article body ── */}
          <div
            className="article-body max-w-[730px]"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* FAQ section */}
          {post.faq_items?.length > 0 && (
            <BlogFAQ items={post.faq_items} />
          )}

          {/* 48px gap + divider + 24px */}
          <div className="h-[48px]" />
          <div className="h-px max-w-[730px] bg-[#e2e8f0]" />
          <div className="h-[24px]" />

          {/* Prev / Next navigation */}
          <div className="flex max-w-[730px] items-center justify-between gap-4">
            {prevPost ? (
              <a
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-[14px] rounded-[12px] border border-[#e2e8f0] bg-white py-[14px] pl-[18px] pr-[22px] transition-colors hover:bg-[#f1f5f9]"
              >
                <ArrowLeftIcon />
                <div className="flex flex-col gap-[2px]">
                  <span className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#4a5568]">
                    PREVIOUS
                  </span>
                  <span className="text-[13.5px] font-semibold text-[#0a192f]">
                    {prevPost.title}
                  </span>
                </div>
              </a>
            ) : (
              <div />
            )}
            {nextPost ? (
              <a
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-[14px] rounded-[12px] border border-[#e2e8f0] bg-white py-[14px] pl-[22px] pr-[18px] text-right transition-colors hover:bg-[#f1f5f9]"
              >
                <div className="flex flex-col items-end gap-[2px]">
                  <span className="font-mono text-[9px] font-bold tracking-[1.3px] text-[#4a5568]">
                    NEXT
                  </span>
                  <span className="text-[13.5px] font-semibold text-[#0a192f]">
                    {nextPost.title}
                  </span>
                </div>
                <ArrowRightIcon />
              </a>
            ) : (
              <div />
            )}
          </div>

          {/* 32px gap */}
          <div className="h-[32px]" />

          {/* Helpful reaction row */}
          {/* <div className="flex max-w-[730px] items-center justify-center">
            <div className="inline-flex items-center gap-[12px] rounded-full border border-[#e2e8f0] bg-white py-[8px] pl-[18px] pr-[8px] shadow-[0px_2px_6px_0px_rgba(10,25,47,0.04)]">
              <span className="text-[13px] font-medium text-[#0a192f]">Was this helpful?</span>
              <div className="flex items-center gap-[6px]">
                {[
                  { emoji: "😍", bg: "#ffedd5" },
                  { emoji: "🙂", bg: "#dbeafe" },
                  { emoji: "😐", bg: "#e5e7eb" },
                  { emoji: "😕", bg: "#fee2e2" },
                ].map(({ emoji, bg }) => (
                  <button
                    key={emoji}
                    type="button"
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[14px] transition-opacity hover:opacity-80"
                    style={{ background: bg }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div> */}

          <div className="h-[64px]" />
        </main>

        {/* ── Hatch divider: main │ right ── */}
        <div
          className="hidden w-3 shrink-0 self-stretch border-x border-[#e8eaf0] xl:block"
          style={HATCH_DIVIDER_STYLE}
        />

        {/* ── RIGHT TOC ─────────────────────────────────────── */}
        <aside
          className="blog-slide-right hidden w-69 shrink-0 flex-col gap-3.5 px-8 py-12 xl:flex"
          style={{ animationDelay: "120ms" }}
        >
          <div className="sticky top-[88px]">
            <TableOfContents items={tocItems} />
            <div className="h-[24px]" />
            <NewsletterMini />
          </div>
        </aside>

      </div>
    </div>
  );
}

/* ─── Icon components ────────────────────────────────────────────────── */

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a192f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a192f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
