"use client";

// C:\Users\Neeraj\Desktop\plexussssss\Plexus-Main-Website\components\HeroSection.tsx
//
// REQUIRES: Paste the CSS block from hero-globals-addition.css into your globals.css
// IMAGE:    public/hero-image.png

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Animated mesh canvas (desktop/tablet only) ───────────────────────────────
function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let H = 0;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const NODE_COUNT = 42;
    const CONNECT_DIST = 160;
    const nodes: Node[] = [];

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const spawn = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(187, 0, 20, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(187, 0, 20, 0.25)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      spawn();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hero-mesh-canvas"
    />
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="hero-root">

      {/* ── Left content pane ── */}
      <div className="hero-left">

        {/* Canvas — purely client-side, no SSR output */}
        <MeshCanvas />

        {/* Content — NO AnimateIn wrappers, renders on first paint with no delay */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span className="hero-eyebrow-text">Powering Enterprises Since 1989</span>
          </div>

          <h1 className="hero-h1">
            The <span className="hero-accent">Lifeline</span> of Modern
            Business Communication
          </h1>

          <p className="hero-desc">
            For 35+ years, Plexus Tele-Solutions has powered 5000+ enterprises
            with mission-critical security, automation, and AV infrastructure.
          </p>

          <div className="hero-ctas">
            <Link href="/services" className="hero-btn-primary">
              EXPLORE OUR SERVICES
            </Link>
            <Link href="/contact" className="hero-btn-outline">
              TALK TO AN EXPERT &rarr;
            </Link>
          </div>

          <div className="hero-stats">
            <span className="hero-stat">Since 1989</span>
            <span className="hero-stat">5000+ Clients</span>
            <span className="hero-stat">Pan-India Service</span>
            <span className="hero-stat">500+ Dealers</span>
          </div>

        </div>
      </div>

      {/* ── Right image pane ── */}
      <div className="hero-right">
        <Image
          src="/landing-pagebg.png"
          alt="Plexus Tele-Solutions enterprise infrastructure — security cameras, telecom systems, AV equipment, networking and automation solutions"
          fill
          priority
          quality={90}
          sizes="(max-width: 640px) 100vw, 60vw"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
        {/* Gradient overlays as divs — avoids pseudo-element hydration mismatch */}
        <div className="hero-img-fade-left" />
        <div className="hero-img-fade-edges" />
      </div>

    </section>
  );
}