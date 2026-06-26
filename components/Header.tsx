"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { href: "/services/telecom-solutions", label: "Telecom Solutions",       icon: "settings_phone" },
  { href: "/services/security-surveillance", label: "Security Surveillance", icon: "security" },
  { href: "/services/av-systems",            label: "AV Systems",            icon: "videocam" },
  { href: "/services/networking",            label: "Networking",            icon: "lan" },
];

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/about",      label: "About" },
  { href: "/services",   label: "Services", hasDropdown: true },
  { href: "/products",   label: "Products" },
  { href: "/industries", label: "Industries" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted]           = useState(false);
  const dropdownRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
              src="/navlogo.png"
              alt="Plexus Tele-Solutions"
              width={210}
              height={88}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((o) => !o)}
                    className={`flex items-center gap-1 font-inter text-sm tracking-tight font-medium uppercase transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-zinc-900 border-b-2 border-zinc-900 pb-1"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-zinc-200 shadow-xl rounded-sm z-50 overflow-hidden">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-xs font-label-caps text-zinc-400 hover:text-primary hover:bg-zinc-50 border-b border-zinc-100 transition-colors"
                      >
                        All Services →
                      </Link>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors hover:bg-zinc-50 hover:text-primary ${
                            pathname.startsWith(s.href)
                              ? "text-primary bg-zinc-50 border-l-2 border-primary"
                              : "text-zinc-700"
                          }`}
                        >
                          <span className="material-symbols-outlined text-base text-secondary">
                            {s.icon}
                          </span>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {isProductsPage && (
              <button
                aria-label="Search products"
                onClick={handleSearchClick}
                className="material-symbols-outlined text-on-surface hidden lg:inline-block hover:text-primary transition-colors cursor-pointer"
              >
                search
              </button>
            )}
            <Link
              href="/contact"
              className="hidden lg:inline-block bg-primary text-on-primary px-5 py-2.5 font-label-caps uppercase scale-95 active:scale-100 transition-transform"
            >
              Get a Quote
            </Link>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="material-symbols-outlined lg:hidden text-on-surface text-2xl"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-zinc-200 shadow-2xl z-50">
            <nav className="flex flex-col max-w-[1280px] mx-auto px-6 py-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="w-full flex items-center justify-between font-inter text-sm tracking-tight font-medium uppercase py-4 border-b border-zinc-100 text-zinc-500"
                    >
                      Services
                      <span
                        className={`material-symbols-outlined text-base transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="bg-zinc-50 border-b border-zinc-100">
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-3 text-xs font-label-caps text-zinc-400 border-b border-zinc-100"
                        >
                          All Services →
                        </Link>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 px-6 py-3.5 text-sm font-medium border-b border-zinc-100 last:border-0 transition-colors ${
                              pathname.startsWith(s.href)
                                ? "text-primary font-semibold"
                                : "text-zinc-600"
                            }`}
                          >
                            <span className="material-symbols-outlined text-base text-secondary">
                              {s.icon}
                            </span>
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-inter text-sm tracking-tight font-medium uppercase py-4 border-b border-zinc-100 last:border-0 ${
                      isActive(link.href) ? "text-zinc-900 font-bold" : "text-zinc-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-24 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}