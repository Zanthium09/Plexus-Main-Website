"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  raw: number;       // numeric value to count up to
  prefix?: string;   // e.g. "" or "19"
  suffix?: string;   // e.g. "+", ""
  display?: string;  // fallback display (overrides count-up entirely)
  label: string;
}

const stats: Stat[] = [
  { raw: 89, prefix: "19", suffix: "", label: "FOUNDED" },
  { raw: 35, suffix: "+", label: "YEARS EXP" },
  { raw: 5000, suffix: "+", label: "CLIENTS" },
  { raw: 500, suffix: "+", label: "DEALER NETWORK" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, active]);

  return value;
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const count = useCountUp(stat.raw, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="font-h2 text-h2 text-white mb-1 tabular-nums">
        {stat.prefix ?? ""}
        {count}
        {stat.suffix ?? ""}
      </div>
      <div className="font-label-caps text-secondary-fixed opacity-80 text-xs tracking-widest">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10"
    >
      {stats.map((s, i) => (
        <StatItem key={s.label} stat={s} active={active} index={i} />
      ))}
    </div>
  );
}
