"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isProductsPage = pathname === "/products" || pathname.startsWith("/products/");

  const handleSearchClick = () => {
    const el = document.getElementById("product-search");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => (el as HTMLInputElement).focus(), 350);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 border-b bg-white border-zinc-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all duration-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Plexus Tele-Solutions"
              width={220}
              height={88}
              className="h-[72px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm tracking-tight font-medium uppercase transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-zinc-900 border-b-2 border-zinc-900 pb-1"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Search icon — visible ONLY on Products page */}
            {isProductsPage && (
              <button
                aria-label="Search products"
                onClick={handleSearchClick}
                className="material-symbols-outlined text-on-surface hidden md:inline-block hover:text-primary transition-colors cursor-pointer"
              >
                search
              </button>
            )}

            <Link
              href="/contact"
              className="hidden md:inline-block bg-primary text-on-primary px-5 py-2.5 font-label-caps uppercase scale-95 active:scale-100 transition-transform"
            >
              Get a Quote
            </Link>

            {/* Mobile hamburger — only on small screens */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="material-symbols-outlined md:hidden text-on-surface text-2xl"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — rendered below the header bar, as an overlay */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-zinc-200 shadow-2xl z-50">
            <nav className="flex flex-col max-w-[1280px] mx-auto px-6 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-inter text-sm tracking-tight font-medium uppercase py-4 border-b border-zinc-100 last:border-0 ${
                    isActive(link.href)
                      ? "text-zinc-900 font-bold"
                      : "text-zinc-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-on-primary px-5 py-3 font-label-caps uppercase text-center mt-4 mb-4"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop — closes mobile menu when tapping outside */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-24 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
