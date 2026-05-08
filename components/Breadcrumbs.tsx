import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

const SITE_URL = "https://www.plexustelesolutions.com";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? {
            item: item.href.startsWith("http")
              ? item.href
              : `${SITE_URL}${item.href}`,
          }
        : {}),
    })),
  };

  return (
    <section
      aria-label="Breadcrumb"
      className="max-w-[1280px] mx-auto px-6 py-6 border-b border-surface-variant"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex font-label-caps text-on-primary-container gap-2 items-center text-xs uppercase tracking-widest">
        <ol className="flex items-center gap-2 list-none">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary" aria-current="page">
                  {item.label}
                </span>
              )}
              {idx < items.length - 1 && (
                <span
                  className="material-symbols-outlined text-[14px]"
                  aria-hidden="true"
                >
                  chevron_right
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
