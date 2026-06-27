"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

// ─── Mesh canvas (desktop/tablet only) ──────────────────────────────────────
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

    // Node type
    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    };

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

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Draw edges
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

      // Draw nodes
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
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      {/* Inline styles — scoped, no styled-jsx, no external CSS file needed */}
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          /* Full viewport minus the two navbar bars (top bar ~36px + main nav ~68px = 104px) */
          height: calc(100vh - 104px);
          min-height: 560px;
          max-height: 900px;
          overflow: hidden;
          background: #f9f9f9;
          display: flex;
          align-items: stretch;
        }

        /* ── Grid dot pattern — entire hero bg ── */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#d8d8d8 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.55;
          z-index: 0;
        }

        /* ── LEFT PANE ── */
        .hero-left {
          position: relative;
          z-index: 10;
          width: 50%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem) clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4.5rem);
        }

        /* ── RIGHT PANE — image ── */
        .hero-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%; /* intentionally wider than 50% so image overlaps mesh area */
          height: 100%;
          z-index: 1;
        }

        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Pin to RIGHT so the right-side crop from image 2 is what shows */
          object-position: right center;
          display: block;
        }

        /* Left gradient fade — bleeds 30% into the image, perfectly seamless */
        .hero-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 45%;
          height: 100%;
          background: linear-gradient(
            to right,
            #f9f9f9 0%,
            rgba(249,249,249,0.97) 15%,
            rgba(249,249,249,0.80) 40%,
            rgba(249,249,249,0.30) 70%,
            transparent 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Top + bottom subtle fades for polish */
        .hero-right::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(249,249,249,0.18) 0%, transparent 12%),
            linear-gradient(to top, rgba(249,249,249,0.18) 0%, transparent 12%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── CONTENT ── */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1.25rem;
        }

        .hero-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #bb0014;
          animation: heroPulseDot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes heroPulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }

        .hero-eyebrow-text {
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #444748;
        }

        .hero-h1 {
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.25rem);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #000000;
          margin: 0 0 1.25rem 0;
        }

        .hero-h1 .hero-accent {
          color: #bb0014;
          text-decoration: underline;
          text-decoration-thickness: 3px;
          text-underline-offset: 7px;
        }

        .hero-desc {
          font-family: var(--font-work-sans), 'Work Sans', sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.1rem);
          line-height: 1.65;
          color: #444748;
          margin: 0 0 2rem 0;
          max-width: 42ch;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .hero-btn-primary {
          background: #000000;
          color: #ffffff;
          padding: 14px 32px;
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-color 0.25s ease, background 0.25s ease;
          display: inline-block;
          white-space: nowrap;
        }

        .hero-btn-primary:hover {
          border-bottom-color: #bb0014;
        }

        .hero-btn-outline {
          border: 1.5px solid #000000;
          color: #000000;
          padding: 13px 32px;
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.22s ease, color 0.22s ease;
          display: inline-block;
          white-space: nowrap;
        }

        .hero-btn-outline:hover {
          background: #000000;
          color: #ffffff;
        }

        /* ── STAT STRIP at bottom of left pane ── */
        .hero-stats {
          padding-top: 1.5rem;
          border-top: 1px solid #c4c7c7;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
        }

        .hero-stat {
          font-family: var(--font-inter), Inter, sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444748;
        }

        /* ── MESH CANVAS — hide on mobile ── */
        .hero-mesh-canvas {
          display: block;
        }

        /* ── TABLET (≤900px) ── */
        @media (max-width: 900px) {
          .hero-root {
            height: calc(100vh - 104px);
            min-height: 500px;
          }

          .hero-left {
            width: 55%;
            padding: 2rem 1.5rem 2rem 2rem;
          }

          .hero-right {
            width: 55%;
          }

          .hero-h1 {
            font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          }

          .hero-desc {
            font-size: 0.9rem;
          }
        }

        /* ── MOBILE (≤640px) ── */
        @media (max-width: 640px) {
          .hero-root {
            height: calc(100vh - 104px);
            min-height: 480px;
            align-items: flex-end;
          }

          /* On mobile: image fills entire hero */
          .hero-right {
            width: 100%;
            left: 0;
          }

          /* Stronger overlay so text is readable */
          .hero-right::before {
            width: 100%;
            background: linear-gradient(
              to right,
              rgba(249,249,249,0.97) 0%,
              rgba(249,249,249,0.90) 40%,
              rgba(249,249,249,0.60) 75%,
              rgba(249,249,249,0.30) 100%
            );
          }

          /* Kill the mesh on mobile */
          .hero-mesh-canvas {
            display: none !important;
          }

          /* Left pane goes full width, content sits on top of image */
          .hero-left {
            width: 100%;
            padding: 2rem 1.25rem 2.5rem;
            justify-content: flex-end;
          }

          .hero-h1 {
            font-size: clamp(1.6rem, 7vw, 2rem);
          }

          .hero-desc {
            font-size: 0.875rem;
            max-width: 100%;
          }

          .hero-ctas {
            flex-direction: column;
            gap: 0.75rem;
          }

          .hero-btn-primary,
          .hero-btn-outline {
            text-align: center;
            width: 100%;
            max-width: 280px;
          }

          .hero-stats {
            gap: 0.75rem 1.5rem;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-eyebrow-dot {
            animation: none;
          }
          .hero-mesh-canvas {
            display: none !important;
          }
        }
      `}</style>

      <section className="hero-root">
        {/* ── Left content pane ── */}
        <div className="hero-left">
          {/* Mesh canvas sits inside left pane, covering it + bleeding into image */}
          <MeshCanvas />

          {/* All content is relative z-index 10 above canvas */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <AnimateIn direction="up" delay={0}>
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                <span className="hero-eyebrow-text">Powering Enterprises Since 1989</span>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.08}>
              <h1 className="hero-h1">
                The{" "}
                <span className="hero-accent">Lifeline</span>
                {" "}of Modern Business Communication
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.16}>
              <p className="hero-desc">
                For 35+ years, Plexus Tele-Solutions has powered 5000+ enterprises
                with mission-critical security, automation, and AV infrastructure.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.24}>
              <div className="hero-ctas">
                <Link href="/services" className="hero-btn-primary">
                  EXPLORE OUR SERVICES
                </Link>
                <Link href="/contact" className="hero-btn-outline">
                  TALK TO AN EXPERT →
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.32}>
              <div className="hero-stats">
                <span className="hero-stat">Since 1989</span>
                <span className="hero-stat">5000+ Clients</span>
                <span className="hero-stat">Pan-India Service</span>
                <span className="hero-stat">500+ Dealers</span>
              </div>
            </AnimateIn>
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
            style={{
              objectFit: "cover",
              objectPosition: "right center",
            }}
          />
        </div>
      </section>
    </>
  );
}