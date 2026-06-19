"use client";

import Image from "next/image";
import { useState } from "react";
import AnimateIn, { StaggerContainer } from "./AnimateIn";

const certs = [
  { file: "image.png",        alt: "Certificate 1" },
  { file: "image copy.png",   alt: "Certificate 2" },
  { file: "image copy 2.png", alt: "Certificate 3" },
  { file: "image copy 3.png", alt: "Certificate 4" },
  { file: "image copy 4.png", alt: "Certificate 5" },
  { file: "image copy 5.png", alt: "Certificate 6" },
  { file: "image copy 6.png", alt: "Certificate 7" },
];

function CertificationsCarousel() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const VISIBLE = 3;
  const maxIndex = certs.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <>
      {/* Carousel */}
      <div className="relative flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        {/* Cards */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% / 3 + 0.44rem)))` }}
          >
            {certs.map((c, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="flex-shrink-0 cursor-zoom-in rounded-lg overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ width: "calc(100% / 3 - 0.67rem)" }}
              >
                <Image
                  src={`/certifications/${c.file}`}
                  alt={c.alt}
                  width={400}
                  height={560}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-1.5 bg-outline-variant"
            }`}
          />
        ))}
      </div>

      {/* Lightbox Pop-up (No Scrollbars) */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-8 select-none"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.max((l ?? 0) - 1, 0)); }}
            disabled={lightbox === 0}
            className="absolute left-4 z-50 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white disabled:opacity-10 disabled:pointer-events-none transition-colors duration-200"
            aria-label="Previous certificate"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>

          {/* Dynamic Scaling Image Wrapper */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/certifications/${certs[lightbox].file}`}
              alt={certs[lightbox].alt}
              fill
              sizes="(max-w-7xl) 100vw"
              priority
              className="object-contain pointer-events-auto rounded-lg drop-shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.min((l ?? 0) + 1, certs.length - 1)); }}
            disabled={lightbox === certs.length - 1}
            className="absolute right-4 z-50 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white disabled:opacity-10 disabled:pointer-events-none transition-colors duration-200"
            aria-label="Next certificate"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}

export default function CertificationsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimateIn direction="up">
          <div className="mb-10">
            <span className="font-label-caps text-secondary">CERTIFICATIONS</span>
            <h2 className="font-h2 text-h2 text-primary mt-3">
              Certified. Trusted. Verified.
            </h2>
          </div>
        </AnimateIn>
        <CertificationsCarousel />
      </div>
    </section>
  );
}