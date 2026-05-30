import { getFooterMenu } from "@/app/lib/footer-menu";
import type { ContactSubChild } from "@/app/lib/footer-menu";
import Image from "next/image";

export default async function DynamicFooter() {
  const data = await getFooterMenu();
  if (!data) return null;

  const address = data.contact_details.find((d) => d.type === "address");
  const socialGroup = data.contact_details.find(
    (d) => d.type === "social" && d.has_sub_child && Array.isArray(d.sub_child)
  );
  const socialLinks = socialGroup
    ? (socialGroup.sub_child as ContactSubChild[])
    : [];
  const copyright = data.contact_details.find((d) => d.title === "Copyright");
  const info = data.contact_details.find((d) => d.title === "Info");

  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              {/* <span
                aria-hidden
                className="inline-block h-8 w-8 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #2a4bff 0%, #7c5cff 100%)",
                }}
              /> */}
              {/* <span className="font-display text-[20px] font-semibold tracking-tight text-ink">
                MagDee
              </span> */}
              <Image
                src="/Magdee_logo.png"
                alt="MagDee"
                width={3074}
                height={799}
                priority
                unoptimized
                className="h-8 w-auto"
              />
            </div>

            {address?.value && (
              <p className="mt-4 max-w-[18rem] text-[13.5px] leading-[1.55] text-ink-soft">
                {address.value}
              </p>
            )}

            {socialLinks.length > 0 && (
              <div className="mt-5 flex items-center gap-2">
                {socialLinks.map((s, i) => (
                  <SocialLink key={i} href={s.url || s.value || "#"} label={s.title} image={s.image}>
                    <SocialIcon title={s.title} />
                  </SocialLink>
                ))}
              </div>
            )}
          </div>

          {/* Nav columns */}
          {data.main_menu.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                — {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {Array.isArray(col.child_menu) &&
                  col.child_menu.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url || "#"}
                        className="text-[14px] text-ink transition-colors hover:text-brand"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-6 sm:mt-16">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3" style={{ background: "#ff6a3d" }} />
                <span className="inline-block h-3 w-3 border border-line bg-surface" />
                <span className="inline-block h-3 w-3" style={{ background: "#0f9d6e" }} />
              </span>
              {info?.value || "Made in India · Designed in Coimbatore"}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              {copyright?.value || "© 2026 MagDee Technologies"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  image,
  children,
}: {
  href: string;
  label: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-soft transition-colors hover:border-ink/20 hover:text-ink"
    >
      {image ? (
        <img src={image} alt={label} className="h-4 w-4 object-contain" />
      ) : (
        children
      )}
    </a>
  );
}

function SocialIcon({ title }: { title: string }) {
  const t = title.toLowerCase();
  if (t.includes("twitter") || t.includes(" x ") || t === "x") {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M12.6 1.5h2.3l-5 5.7 5.9 7.8h-4.6l-3.6-4.7-4.1 4.7H1.2l5.4-6.1L0.9 1.5h4.7l3.3 4.4 3.7-4.4Zm-.8 12.1h1.3L4.3 2.8H2.9l8.9 10.8Z" />
      </svg>
    );
  }
  if (t.includes("linkedin")) {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M3.5 0a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-1.4 4.6h2.8V16H2.1V4.6Zm5 0h2.6v1.6h.04c.36-.66 1.24-1.36 2.56-1.36 2.74 0 3.25 1.74 3.25 4v6.16h-2.8v-5.46c0-1.3 0-2.98-1.85-2.98-1.86 0-2.14 1.42-2.14 2.88V16H7.1V4.6Z" />
      </svg>
    );
  }
  if (t.includes("github")) {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.88 2.34.67.07-.52.28-.88.51-1.08-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.74-3.65 3.94.29.25.55.74.55 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    );
  }
  // Generic globe icon for unknown social platforms
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm5.3 5h-2.1a9.6 9.6 0 0 0-1-2.6A6.5 6.5 0 0 1 13.3 5ZM8 1.5c.7 1 1.3 2.2 1.6 3.5H6.4C6.7 3.7 7.3 2.5 8 1.5Zm-5.3 3.5a6.5 6.5 0 0 1 3.1-2.6A9.6 9.6 0 0 0 4.8 5H2.7ZM2 8c0-.5 0-1 .1-1.5h2.5A12 12 0 0 0 4.5 8c0 .5 0 1 .1 1.5H2.1A6.5 6.5 0 0 1 2 8Zm.7 3h2.1c.2.9.6 1.8 1 2.6A6.5 6.5 0 0 1 2.7 11ZM8 14.5c-.7-1-1.3-2.2-1.6-3.5h3.2c-.3 1.3-.9 2.5-1.6 3.5Zm2-5H6c-.1-.5-.1-1-.1-1.5s0-1 .1-1.5h4c.1.5.1 1 .1 1.5s0 1-.1 1.5Zm.2 4.6c.4-.8.8-1.7 1-2.6h2.1a6.5 6.5 0 0 1-3.1 2.6Zm1.3-4.1c.1-.5.1-1 .1-1.5s0-1-.1-1.5h2.5c.1.5.1 1 .1 1.5s0 1-.1 1.5h-2.5Z" />
    </svg>
  );
}
