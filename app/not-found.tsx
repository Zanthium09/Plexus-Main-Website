import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <span className="font-label-caps text-secondary block mb-4">
          ERROR 404
        </span>
        <h1 className="font-h1 text-h1 text-on-background mb-6">
          Page Not Found
        </h1>
        <p className="font-body-lg text-on-surface-variant mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Try one of the links below to get back on track.
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          {quickLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="border border-primary text-primary font-label-caps py-3 px-6 hover:bg-primary hover:text-white transition-all text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
