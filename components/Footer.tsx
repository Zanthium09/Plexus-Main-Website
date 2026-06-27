"use client";

import Link from "next/link";
import AnimateIn, { StaggerContainer } from "./AnimateIn";
import OfficesMap from "./OfficesMap";

const SITE_URL = "https://www.plexustelesolutions.com";

function ShareButton() {
  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Plexus Tele-Solutions",
          text: "Check out Plexus Tele-Solutions — India's leading telecom, security & AV infrastructure provider since 1989.",
          url: SITE_URL,
        });
      } catch {
        // user cancelled — do nothing
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(SITE_URL);
      alert("Link copied to clipboard!");
    } else {
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(SITE_URL)}`,
        "_blank"
      );
    }
  };

  return (
    <button
      aria-label="Share this website"
      onClick={handleShare}
      className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
    >
      <span className="material-symbols-outlined text-sm">share</span>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-50 border-t border-zinc-800 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 lifeline-pulse opacity-5 pointer-events-none" />
      
      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-[1280px] mx-auto px-6 relative z-10"
        staggerDelay={0.08}
      >
        {/* Brand */}
        <div className="md:col-span-2">
          <span className="text-xl font-bold text-white mb-4 block">
            Plexus Tele-Solutions Pvt. Ltd.
          </span>
          <p className="font-inter text-sm leading-relaxed text-zinc-400 max-w-sm">
            A premier sales and service organization specializing in telecom,
            security, and AV infrastructure. Powering Indian enterprises since 1989.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              aria-label="Call Plexus Tele-Solutions"
              href="tel:+917045405405"
              className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
            
            <a
              aria-label="Email us"
              href="mailto:sales@plexussol.net"
              className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <ShareButton />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
            Services
          </h4>
          <ul className="space-y-4 font-inter text-sm">
            <li><Link href="/services/telecom-solutions" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Telecom Solutions</Link></li>
            <li><Link href="/services/security-surveillance" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Security Surveillance</Link></li>
            <li><Link href="/services/av-systems" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">AV Systems</Link></li>
            <li><Link href="/services/networking" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Networking</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
            Quick Links
          </h4>
          <ul className="space-y-4 font-inter text-sm">
            <li><Link href="/about" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
            <li><Link href="/partners" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Partners</Link></li>
            <li><Link href="/careers" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</Link></li>
            <li><Link href="/contact" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block">Contact</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">
            Our Offices
          </h4>
          <OfficesMap />
        </div>
      </StaggerContainer>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center md:text-left relative z-10">
        <p className="font-inter text-sm text-zinc-500">
          © 2026 Plexus Tele-Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}