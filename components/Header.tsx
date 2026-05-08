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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b bg-white border-zinc-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <div className="flex flex-col w-full max-w-[1280px] mx-auto px-6 h-20 justify-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Plexus Tele-Solutions"
              width={180}
              height={72}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
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
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="material-symbols-outlined text-on-surface hidden md:inline-block"
            >
              search
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-block bg-primary text-on-primary px-5 py-2.5 font-label-caps uppercase scale-95 active:scale-100 transition-transform"
            >
              Get a Quote
            </Link>
            <button
              aria-label="Toggle menu"
              className="material-symbols-outlined md:hidden text-on-surface"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? "close" : "menu"}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-4 pt-4 border-t border-zinc-200 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-inter text-sm tracking-tight font-medium uppercase py-2 ${
                  isActive(link.href) ? "text-zinc-900" : "text-zinc-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-on-primary px-5 py-2.5 font-label-caps uppercase text-center mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
