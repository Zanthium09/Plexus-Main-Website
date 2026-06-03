"use client";

import Link from "next/link";

type Director = {
  name: string;
  role: string;
  linkedin: string;
  img: string;
};

const FALLBACK_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Uf1zzxGkLHluLwm7jYc-bQlSCIB1Z6wYdywX8-vqtiFa1TMCrKJ-Hr3ShQ7_T0GbtQh5iepL1ExUcD0d-I0crpjYPpVgxBbDe8W4M0F5ZOnuK-H608fSzuXDsdI-U60v7ZgTwouxfGM-3if81sWvgO9HaFwhAYzpfUV3KwI6fMqDfDoVLQ-rDpJhSwv8HxrARuhL35UEGWzQxXk12967mGwILyCcA-v2Yvby6rV7dNUJ6vFo2uAqgnQfEEr4_VzXVrzy86jht-np";

export default function DirectorCard({ d }: { d: Director }) {
  return (
    <div className="group">
      <div className="aspect-[4/5] bg-surface-container-high mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={d.img}
          alt={`${d.name}, ${d.role}`}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
          }}
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-h3 text-lg font-bold">{d.name}</h4>
          <p className="text-sm text-on-surface-variant">{d.role}</p>
        </div>
        <a
          href={d.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${d.name} LinkedIn profile`}
          className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-sm">link</span>
        </a>
      </div>
    </div>
  );
}
