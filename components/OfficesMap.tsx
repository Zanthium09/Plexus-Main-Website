"use client";

import { useState } from "react";

const offices = [
  {
    id: "dombivli",
    name: "Dombivli Office",
    address: "RL-113 Lata Kunj, Milap Nagar, MIDC, Dombivli East - 421203, Maharashtra",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.!2d73.0877!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA2LjAiTiA3M8KwMDUnMTUuNiJF!5e0!3m2!1sen!2sin!4v1",
    gmapsLink:
      "https://www.google.com/maps/search/RL-113+Lata+Kunj+Milap+Nagar+MIDC+Dombivli+East+421203",
  },
  {
    id: "andheri",
    name: "Andheri Office",
    address: "A-102, New India Heights, Opp. Police Lane, Opp. Andheri Railway Station, Andheri (East), Mumbai",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.!2d72.8479!3d19.1196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEwLjYiTiA3MsKwNTAnNTIuNCJF!5e0!3m2!1sen!2sin!4v1",
    gmapsLink:
      "https://www.google.com/maps/search/New+India+Heights+Opp+Andheri+Railway+Station+Andheri+East+Mumbai",
  },
];

export default function OfficesMap() {
  const [active, setActive] = useState("dombivli");
  const current = offices.find((o) => o.id === active)!;

  return (
    <div className="flex flex-col gap-4">
      {/* Toggle Switches */}
      <div className="flex gap-2">
        {offices.map((o) => (
          <button
            key={o.id}
            onClick={() => setActive(o.id)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm ${
              active === o.id
                ? "bg-secondary text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {o.name}
          </button>
        ))}
      </div>

      {/* Bright Theme Map Container */}
      <div className="relative w-full rounded-lg overflow-hidden border border-zinc-800" style={{ height: "200px" }}>
        <iframe
          key={active}
          src={current.mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={current.name}
        />
      </div>

      {/* Address Text & Directions Anchor */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-zinc-400 text-xs leading-relaxed">{current.address}</p>
        
        <a
          href={current.gmapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-xs text-secondary hover:text-white transition-colors underline underline-offset-2"
        >
          Directions →
        </a>
      </div>
    </div>
  );
}