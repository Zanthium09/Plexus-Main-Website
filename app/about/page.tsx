import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import DirectorCard from "@/components/DirectorCard";

export const metadata: Metadata = {
  title: "About Plexus Tele-Solutions | 35+ Years Powering Indian Enterprises",
  description:
    "Founded in 1989, Plexus Tele-Solutions is one of India's most trusted system integrators — delivering telecom, security, AV and automation infrastructure to 5000+ enterprises. Meet our leadership and learn our story.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Plexus Tele-Solutions | 35+ Years Powering Indian Enterprises",
    description:
      "Founded in 1989. Trusted by 5000+ enterprises across BFSI, manufacturing, IT, healthcare, hospitality, education, retail and government sectors.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Plexus Tele-Solutions | 35+ Years of Reliability",
    description:
      "India's trusted system integrator since 1989, serving 5000+ enterprises with mission-critical infrastructure.",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDYoqOoaF3AF4InzHdN1V5rEGJcuHu6ajMkEz8ekEAR7sx-5b3Em9w1SPMvaTrMuNjIwJ1ldFkHVJmsj2IOQoCNBns8XfYAFLDm9CpVNy6xh5TP2Gj4R6sYbsocdgfj8vV0iaYmwmesGHeF6wG_DLwgKBRg9OoIN-fyQNJtRtI2FHt9BgSwKCq-ZTQTSHcghXHPwbfneG77d5MjQaEro0LEmUTzOYl-EIB6wxG7LeH1EJm-erX9D_eWZdTmC1e_vdCXw1pK_mwx29Gx";

const directors = [
  {
    name: "Deepak Satish Patwatkar",
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/deepak-patwatkar-36967a177/",
    img: "/Director-img.jpeg",
  },
];

const timeline = [
  {
    year: "1989",
    title: "The Foundation",
    desc: "Founded as a technology startup focused on revolutionary fax-machine distribution and maintenance in India's emerging market.",
    side: "right",
  },
  {
    year: "1995",
    title: "Strategic Partnership",
    desc: "Appointed as an authorized Panasonic Service Partner, solidifying our reputation for technical excellence and reliability.",
    side: "left",
  },
  {
    year: "2007",
    title: "Plexus Inc.",
    desc: "Formally incorporated as Plexus Tele-Solutions, shifting focus towards integrated enterprise infrastructure.",
    side: "right",
  },
  {
    year: "TODAY",
    title: "The Lifeline",
    desc: "A pan-India leader in AV, Security, and IT networking solutions, powering the nation's most critical business hubs.",
    side: "left",
    today: true,
  },
];

const pillars = [
  ["history", "35 Years Legacy", "Decades of navigating technological shifts from analog fax to high-speed fiber and AI surveillance."],
  ["verified_user", "Certified Excellence", "Partnerships with global tech giants ensuring we deploy the highest grade of certified hardware."],
  ["support_agent", "24/7 Lifeline Support", "Our commitment doesn't end at install. We provide round-the-clock proactive system monitoring."],
  ["precision_manufacturing", "Custom Integration", "We don't believe in off-the-shelf. Every system is bespoke to your specific facility architecture."],
  ["hub", "Pan-India Reach", "Headquartered in Maharashtra with a logistical network that covers every tier-1 and tier-2 city."],
  ["lightbulb", "Innovation First", "Constantly researching the next frontier in smart-office and industrial automation solutions."],
];

const approach = [
  ["hearing", "Listen", "Deep immersion into your operational workflow."],
  ["biotech", "Diagnose", "Identifying bottlenecks and security vulnerabilities."],
  ["architecture", "Design", "Crafting custom architecture that scales."],
  ["verified", "Deliver", "Precision deployment and lifetime maintenance."],
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-section-padding">
        <div className="absolute inset-0 lifeline-pulse opacity-40" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary-container text-white font-label-caps mb-6">
                  ESTABLISHED 1989
                </span>
                <h1 className="font-h1 text-h1 text-on-background mb-8">
                  For 35 years, we&apos;ve been India&apos;s quiet lifeline.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  Our journey began in 1989 as a pioneering fax-machine startup,
                  navigating the early days of Indian telecommunications. Today,
                  we stand as the backbone for critical enterprise connectivity
                  and security infrastructure.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.12}>
              <div className="relative aspect-video bg-surface-container-high overflow-hidden shadow-xl">
                <Image
                  src={heroImg}
                  alt="Modern corporate skyscraper symbolizing growth and stability"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="py-section-padding bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <h2 className="font-h2 text-h2 text-center mb-16">The Evolution of Connectivity</h2>
          </AnimateIn>

          <div className="relative border-l-2 border-primary ml-4 md:ml-0 md:border-l-0 md:before:content-[''] md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:w-0.5 md:before:bg-surface-variant">
            {timeline.map((t, i) => (
              <AnimateIn
                key={i}
                direction={t.side === "right" ? "left" : "right"}
                delay={i * 0.12}
                className="relative mb-16 last:mb-0 md:flex md:justify-between md:items-center"
              >
                {t.side === "right" && <div className="hidden md:block w-5/12" />}
                {t.side === "left" && (
                  <div className="w-full md:w-5/12 pr-0 md:pr-12 pl-8 md:pl-0">
                    <div
                      className={`p-8 ${
                        t.today
                          ? "bg-primary text-white border border-primary"
                          : "bg-white border border-outline-variant hover:border-primary transition-colors"
                      } text-right`}
                    >
                      <span className={`font-h3 text-h3 block mb-2 ${t.today ? "text-white" : "text-secondary"}`}>
                        {t.year}
                      </span>
                      <h4 className="font-h3 text-xl mb-3 uppercase">{t.title}</h4>
                      <p className={t.today ? "text-zinc-400" : "text-on-surface-variant"}>{t.desc}</p>
                    </div>
                  </div>
                )}
                <div className="absolute left-[-9px] md:left-1/2 md:ml-[-8px] w-4 h-4 rounded-full bg-secondary z-10 border-4 border-white" />
                {t.side === "right" && (
                  <div className="w-full md:w-5/12 pl-8 md:pl-0">
                    <div className="p-8 bg-white border border-outline-variant hover:border-primary transition-colors">
                      <span className="font-h3 text-h3 text-secondary block mb-2">{t.year}</span>
                      <h4 className="font-h3 text-xl mb-3 uppercase">{t.title}</h4>
                      <p className="text-on-surface-variant">{t.desc}</p>
                    </div>
                  </div>
                )}
                {t.side === "left" && <div className="hidden md:block w-5/12" />}
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────────────── */}
      <section className="py-section-padding bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-px bg-surface-variant">
          <AnimateIn direction="right" className="bg-white p-16 flex flex-col justify-center">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">visibility</span>
            <h2 className="font-h2 text-h2 mb-6">Our Vision</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              To be the invisible yet indispensable lifeline that empowers businesses through
              seamless, high-integrity connectivity and security infrastructure across the globe.
            </p>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.1} className="bg-white p-16 flex flex-col justify-center">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">track_changes</span>
            <h2 className="font-h2 text-h2 mb-6">Our Mission</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              To deliver precision-engineered solutions that don&apos;t just meet specifications,
              but solve real-world operational challenges with unshakeable reliability.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────────────── */}
      <section className="py-section-padding bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 mb-4">The Solution-First Methodology</h2>
              <div className="w-24 h-1 bg-secondary mx-auto" />
            </div>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20" staggerDelay={0.1}>
            {approach.map(([icon, title, desc]) => (
              <div key={title} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <h4 className="font-h3 text-lg mb-2 uppercase tracking-widest">{title}</h4>
                <p className="text-zinc-400 text-sm">{desc}</p>
              </div>
            ))}
          </StaggerContainer>

          <AnimateIn direction="up" delay={0.2}>
            <div className="max-w-3xl mx-auto border-l-4 border-secondary pl-8 py-4">
              <blockquote className="font-h2 text-2xl italic text-zinc-300">
                &ldquo;We don&apos;t sell what we have. We sell what solves your problem.&rdquo;
              </blockquote>
              <p className="mt-4 font-label-caps text-secondary">— PLEXUS PHILOSOPHY</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────────────── */}
      <section className="py-section-padding bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <h2 className="font-h2 text-h2 text-center mb-16">The Core Pillars of Our Authority</h2>
          </AnimateIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-gutter" staggerDelay={0.09}>
            {pillars.map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white p-10 border border-outline-variant hover:border-primary transition-all duration-300"
              >
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">{icon}</span>
                <h3 className="font-h3 text-h3 mb-4">{title}</h3>
                <p className="text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────────── */}
      <section className="py-section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <div className="mb-16">
              <h2 className="font-h2 text-h2 mb-4">Steering the Mission</h2>
              <p className="text-on-surface-variant font-body-lg">
                A leadership team combining decades of technical expertise with forward-thinking strategy.
              </p>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {directors.map((d) => (
              <DirectorCard key={d.name} d={d} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Band ─────────────────────────────────────────────────── */}
      <section className="bg-secondary py-16">
        <AnimateIn direction="up" className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-h2 text-h2 text-white mb-8">Want to partner with the Plexus lifeline?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-12 py-4 bg-white text-secondary font-label-caps uppercase text-sm font-bold tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="px-12 py-4 border-2 border-white text-white font-label-caps uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-secondary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
