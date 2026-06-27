"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const brands = [
  { name: "Airtel",          file: "airtel.png" },
  { name: "Apson",           file: "apson.png" },
  { name: "Beetel",          file: "beetel.png" },
  { name: "Cisco",           file: "cisco.png" },
  { name: "Dahua",           file: "dahua.png" },
  { name: "Hikvision",       file: "hikvison.png" },
  { name: "Legrand",         file: "legrand.png" },
  { name: "LG",              file: "lg.png" },
  { name: "Matrix",          file: "matrix.png" },
  { name: "NEC",             file: "nec.png" },
  { name: "Panasonic",       file: "panasonic.png" },
  { name: "Poly",            file: "poly.png" },
  { name: "Samsung",         file: "samsung.png" },
  { name: "tatacommunications", file: "tatacommunications.png" },  // update filename if different
];

export default function BrandsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <div className="relative w-full" onMouseEnter={pause} onMouseLeave={resume}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          animation: "scroll-brands 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...Array(2)].flatMap((_, i) =>
          brands.map((b) => (
            <Link
              href="/partners"
              key={`${b.name}-${i}`}
              aria-label={`${b.name} — view our technology partners`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
              style={{ width: "clamp(100px, 12vw, 160px)", padding: "0.75rem" }}
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
              <Image
                src={`/partanersLOGO/${b.file}`}
                alt={b.name}
                width={150}
                height={70}
                className="object-contain transition-transform duration-300 hover:scale-105 w-full h-auto"
                style={{ maxHeight: "clamp(40px, 5vw, 70px)" }}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}