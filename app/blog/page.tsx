/* ─── Static mock posts ─────────────────────────────────────────────── */

const POSTS = [
  {
    slug: "tamil-first",
    category: "Engineering",
    categoryColor: "#1e40af",
    categoryBg: "rgba(30,64,175,0.08)",
    categoryBorder: "rgba(30,64,175,0.18)",
    dateShort: "MAY 12, 2026",
    readTime: "9 MIN READ",
    title: "Why we built MagDee for Tamil first",
    excerpt:
      "Most Indian AI products treat Tamil as a translation problem. We built MagDee assuming the opposite — that Tamil was the source language and English came along for the ride.",
  },
  {
    slug: "voychef-9-months",
    category: "Studio",
    categoryColor: "#6d28d9",
    categoryBg: "rgba(109,40,217,0.07)",
    categoryBorder: "rgba(109,40,217,0.15)",
    dateShort: "APR 28, 2026",
    readTime: "7 MIN READ",
    title: "Shipping VOChef in 9 months",
    excerpt:
      "From first commit to first real kitchen. A retrospective on what we got right, what broke, and the one decision we almost didn't make.",
  },
  {
    slug: "patient-ai",
    category: "Studio",
    categoryColor: "#6d28d9",
    categoryBg: "rgba(109,40,217,0.07)",
    categoryBorder: "rgba(109,40,217,0.15)",
    dateShort: "APR 10, 2026",
    readTime: "5 MIN READ",
    title: "The Patient AI manifesto",
    excerpt:
      "Ambient intelligence shouldn't rush you. We wrote down everything we believe about building AI that waits, listens, and earns trust over time.",
  },
  {
    slug: "mee-tory-listens",
    category: "Engineering",
    categoryColor: "#1e40af",
    categoryBg: "rgba(30,64,175,0.08)",
    categoryBorder: "rgba(30,64,175,0.18)",
    dateShort: "MAR 22, 2026",
    readTime: "6 MIN READ",
    title: "How Mee Tory listens",
    excerpt:
      "The architecture behind a memory layer that stores what actually matters — not transcripts, not summaries, but meaning.",
  },
  {
    slug: "naming-a-company",
    category: "Studio",
    categoryColor: "#6d28d9",
    categoryBg: "rgba(109,40,217,0.07)",
    categoryBorder: "rgba(109,40,217,0.15)",
    dateShort: "MAR 5, 2026",
    readTime: "4 MIN READ",
    title: "Notes on naming a company",
    excerpt:
      "We went through 47 names in six weeks. Here is what we learned about naming something you have to live with forever.",
  },
  {
    slug: "q1-beta",
    category: "Studio",
    categoryColor: "#6d28d9",
    categoryBg: "rgba(109,40,217,0.07)",
    categoryBorder: "rgba(109,40,217,0.15)",
    dateShort: "FEB 18, 2026",
    readTime: "8 MIN READ",
    title: "What we learned from Q1 beta",
    excerpt:
      "Three hundred households, two cities, one broken assumption. A candid debrief on our first real-world test.",
  },
  {
    slug: "on-device-inference",
    category: "Engineering",
    categoryColor: "#1e40af",
    categoryBg: "rgba(30,64,175,0.08)",
    categoryBorder: "rgba(30,64,175,0.18)",
    dateShort: "FEB 2, 2026",
    readTime: "11 MIN READ",
    title: "On-device inference for ₹15K phones",
    excerpt:
      "Running a 3B parameter model on a Snapdragon 680 without catching fire. The tricks, the trade-offs, and the surprising result.",
  },
  {
    slug: "tokenization-tamil",
    category: "Engineering",
    categoryColor: "#1e40af",
    categoryBg: "rgba(30,64,175,0.08)",
    categoryBorder: "rgba(30,64,175,0.18)",
    dateShort: "JAN 20, 2026",
    readTime: "10 MIN READ",
    title: "Tokenization in Tamil",
    excerpt:
      "Why standard BPE destroys Tamil morphology, and how we rebuilt the tokenizer from scratch to fix it.",
  },
];

/* ─── Hatch pattern ── */
const HATCH_STYLE: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 0.5px, transparent 0.5px, transparent 7px)",
};

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function BlogListingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* ── Main content container ── */}
      <div className="relative mx-auto max-w-290">

        {/* Left hatch strip — outside container, one inner border on right (desktop only) */}
        <div
          className="pointer-events-none absolute top-0 hidden h-full w-8 border border-black/8 lg:block"
          style={{ ...HATCH_STYLE, right: "100%" }}
        />

        {/* Right hatch strip — outside container, one inner border on left (desktop only) */}
        <div
          className="pointer-events-none absolute top-0 hidden h-full w-8 border border-black/8 lg:block"
          style={{ ...HATCH_STYLE, left: "100%" }}
        />

        {/* ── Hero ── */}
        <div className="px-4 pb-0 pt-10 sm:px-10 sm:pt-16">
          {/* Badge */}
          <div
            className="blog-fade-up flex items-center gap-2"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="font-mono text-[10px] font-bold tracking-[2.5px] text-brand">
              THE MAGDEE BLOG
            </span>
          </div>

          {/* Title */}
          <h1
            className="blog-fade-up mt-4 text-[36px] font-bold leading-none tracking-[-1.5px] text-ink sm:text-[56px] sm:tracking-[-2.5px] lg:text-[72px]"
            style={{ animationDelay: "80ms" }}
          >
            Latest updates.
          </h1>

          {/* Subtitle */}
          <p
            className="blog-fade-up mt-4 max-w-140 text-[14px] leading-6 text-ink-soft sm:text-[16px] sm:leading-7"
            style={{ animationDelay: "160ms" }}
          >
            Engineering notes, product thinking, and studio dispatches — from the team building
            patient AI in Coimbatore.
          </p>

          {/* Divider */}
          <div
            className="blog-line-grow mt-14 h-px w-full bg-line"
            style={{ animationDelay: "240ms" }}
          />
        </div>

        {/* ── Post list ── */}
        <div className="px-4 sm:px-10">
          {POSTS.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col transition-colors duration-300 sm:flex-row sm:items-stretch"
            >
              {/* Date column */}
              <div className="relative w-full pt-6 sm:w-50 sm:shrink-0 sm:border-r sm:border-line sm:py-8 sm:pr-10 sm:pt-8">
                <span
                  className="blog-fade-up block font-mono text-[10px] font-bold tracking-[1.8px] text-muted transition-colors duration-300 group-hover:text-ink-soft sm:text-[10.5px] mb-4"
                  style={{ animationDelay: `${300 + i * 55}ms` }}
                >
                  {post.dateShort}
                </span>
              </div>

              {/* Content column */}
              <div className="relative flex-1 pb-6 sm:py-8 sm:pl-10">
                {/* Meta */}
                <div
                  className="blog-fade-up flex items-center gap-2.5"
                  style={{ animationDelay: `${320 + i * 55}ms` }}
                >
                  <span
                    className="inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold tracking-[1.3px]"
                    style={{
                      background: post.categoryBg,
                      borderColor: post.categoryBorder,
                      color: post.categoryColor,
                    }}
                  >
                    {post.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[9.5px] font-bold tracking-[1.3px] text-muted">
                    {post.readTime}
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
                <p
                  className="blog-fade-up mt-2 max-w-150 text-[13px] leading-5.5 text-ink-soft sm:text-[14px] sm:leading-6"
                  style={{ animationDelay: `${360 + i * 55}ms` }}
                >
                  {post.excerpt}
                </p>

                {/* Read more — reveals on hover */}
                <div className="mt-3 flex translate-y-1 items-center gap-1.5 text-[12.5px] font-semibold text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Read more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Row bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
            </a>
          ))}
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
}
