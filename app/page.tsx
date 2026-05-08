import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import CountUpStats from "@/components/CountUpStats";
import {
  ServiceCatalogJsonLd,
  LocalBusinessJsonLd,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Plexus Tele-Solutions | Telecom, Security & AV Infrastructure Partner — India",
  description:
    "India's trusted enterprise infrastructure partner since 1989. Telecom, security surveillance, AV, networking, building automation and fire & access systems for 5000+ clients across BFSI, manufacturing, IT, healthcare and more.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: "call",
    title: "Telecommunications",
    desc: "Unified communication systems designed for seamless global connectivity.",
    bullets: ["IP PBX & Cloud Telephony", "Contact Center Solutions"],
  },
  {
    icon: "videocam",
    title: "Professional AV",
    desc: "Immersive audio-visual experiences for boardrooms and large auditoriums.",
    bullets: ["Video Conferencing", "Professional Sound Systems"],
  },
  {
    icon: "security",
    title: "Security Surveillance",
    desc: "AI-driven surveillance and monitoring for comprehensive perimeter safety.",
    bullets: ["IP CCTV & AI Analytics", "Command & Control Centers"],
  },
  {
    icon: "smart_toy",
    title: "Building Automation",
    desc: "Intelligent systems that optimize energy and improve workspace efficiency.",
    bullets: ["Lighting & HVAC Controls", "Smart Office Solutions"],
  },
  {
    icon: "lan",
    title: "IT & Networking",
    desc: "High-speed, redundant backbone infrastructure for data-intensive operations.",
    bullets: ["Structured Cabling", "Switching & Routing"],
  },
  {
    icon: "local_fire_department",
    title: "Fire & Access",
    desc: "Critical safety systems integrating biometric access and fire detection.",
    bullets: ["Biometric Access Control", "Addressable Fire Alarms"],
  },
];

const industries = [
  { icon: "account_balance", name: "BFSI", desc: "Banks & Financial Institutions" },
  { icon: "factory", name: "Manufacturing", desc: "Industrial Automation" },
  { icon: "apartment", name: "IT/ITES", desc: "Tech Parks & SEZs" },
  { icon: "hotel", name: "Hospitality", desc: "Hotels & Resorts" },
  { icon: "medical_services", name: "Healthcare", desc: "Hospitals & Labs" },
  { icon: "school", name: "Education", desc: "Universities & Schools" },
  { icon: "shopping_cart", name: "Retail", desc: "Malls & Store Chains" },
  { icon: "gavel", name: "Government", desc: "Public Sector Projects" },
];

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDi3QnuvdY25j_G1Y7mXi2S_R_8zOAjjrefAuf5giRXbJF4EE4R4fsNYGBLAZAQm4iKInvHY000113Hn0CIHwUVmyyl_FXC8FQCA5RTM_TN_zGiNxc1mkGv76AWrbFCeOYeuazVajMYmUQfYu6TmNtU36WugyTsomUJ4817t2YXvQ61eFRkUmnTGLskU2SclFd78tUlIPJsB0HREamTZZ-xJ55vVwGeIFC8PU8y9ERdD7JuzkFEhCZHYMJ145Jp8sGYRBWO0R-xPgYF";
const aboutImg1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBlm7CkNYx6ffEEV29s9lAj1G_8RBpgBYTPalG7eCNLJQd5n4sYj1Sz9bco_uEY6uqdYYRu0GgovFtXMfUTYzEacOvBpsx59rPFqnTOJr28ImCNGrYGLTgwjqd_SlUBlu6_8u5DDv3ASD9YcmdQIQBJ3rqk2IhnoUMTB_PeqRm1QddlPwpLKc6NON-35V8aY8R8QAwvPquhRHJ37djeujhFIiaGNPiCrS5xbZTZ3hvbPso9WgdMDaPGKUg2uZOyTKpI9smIDY1W4S3n";
const aboutImg2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCv2V4ivufhig8i2drs4uuBGFfvCQ4ft7ga5uARQSB7EtmGp8WiCNkEedQXE7mukaD-44WCyrJg4NYzicr49v6Ox9bemJ8ftUfh_xuXfhAx2H42FpYrSBokrm7HLStZGOo44JJeusDuBKiT5ADB1xD21mMmfV-a9ZOOeKVNYb7Lu4XaSEY5oNfdMfi_hmGEfA7uRKOHg1rdEkxwbrmve1WQoQDnaZxxxKaQWhUx-gNPvFsff6AJkicBXsnrcuAO4NdnaheDajdu3Q0x";
const caseImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBD0BgRs0h7J3gCcTvKdO9c7tw7JslMjl935JQL9rAMRERvIh-G9GrohJjwY3MZqnKhadGsEhQ6nXICzdF8dlOACcr7sSzdd9MTMquKOsc8U0OCVMFUxtAr4wU1_2AlohrjD4f8nf9k9Vjna33rOgIF0s58eCmhGBz97hXdvG7UfUswtN18Eczj6A9-2ErztoGf9aMIgIFLptRfKENtJTwWOE1V-H_6fXlZrV38CQ3Ngg9SQtv0YfgPd2bUCMm-k8FKDOSeKb4YY0ZX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKAd9y9unlgYGcYnZqFAADfyBbp-tQsZwggTrp-bNhLVHo8p_o4GJndbPZF6iSEAXIOKmpIJbvUIkjqI-FV3k3r0nmf4LAIvWlXnhY2zaEq4fLmazD3ydVJ9A8eIVZwPiL9G-yn5-813sPypk1bYKQzKIrNZndUGIAhQaWTjhi1uquxoQxlApN1LSqb6UgTvLJHMfRVfKVCq_yQgCpUD2mFWuAIiHI8WgO8N5yLazn3iZuuYO67XvvQbMz6R11m9J2lFlLF60csa7q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxbqogWuZfzMMHD4TwjWPdQvxSq2-kiBBaHPc7oun027H7dhaArwVPoHQ5BwX_Yipzw11HiqIFqsZ5rTSN4i67H2fLAxwEBgb2eMnyY7W0Oumn_XJdA0GJ2v2atvsMy-Z5cxrQ8P6haKAJcLMeX016li4Cv-pgiTtDLJwxKR0m-RIDA5NYbu6ArC5kECv2tmgAPcc9yD-0lGioQTmXc3acEIN9T3WW3GYwMZMdoTHDKSvxmHeUDe5J6qFxbXt4LoifAOTaHi6cBQ4",
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <ServiceCatalogJsonLd
        services={services.map((s) => ({
          name: s.title,
          description: s.desc,
          url: "/services",
        }))}
      />
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 md:pt-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 -z-10" />
        <div className="container-max max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="space-y-8">
            <AnimateIn direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container font-label-caps rounded-full text-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Powering Enterprises Since 1989
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary">
                The{" "}
                <span className="text-secondary underline decoration-4 underline-offset-8">
                  Lifeline
                </span>{" "}
                of Modern Business Communication.
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                For 35+ years, Plexus Tele-Solutions has powered 5000+ enterprises
                with mission-critical security, automation, and AV infrastructure.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps border-b-2 border-transparent hover:border-on-tertiary-container transition-all inline-block"
                >
                  EXPLORE OUR SERVICES
                </Link>
                <Link
                  href="/contact"
                  className="border border-primary text-primary px-8 py-4 font-label-caps hover:bg-surface-container transition-colors inline-block"
                >
                  TALK TO AN EXPERT →
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.32}>
              <div className="pt-8 border-t border-outline-variant flex flex-wrap gap-x-8 gap-y-4 text-on-surface-variant font-label-caps">
                <div>SINCE 1989</div>
                <div>5000+ CLIENTS</div>
                <div>PAN-INDIA SERVICE</div>
                <div>500+ DEALERS</div>
              </div>
            </AnimateIn>
          </div>

          {/* Image column */}
          <AnimateIn direction="left" delay={0.2} duration={0.7}>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/5 rounded-full blur-3xl" />
              <Image
                src={heroImg}
                alt="Modern enterprise server hardware and networking equipment"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover rounded shadow-2xl relative z-10"
                priority
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Count-Up Stats Bar ───────────────────────────────────────── */}
      <section className="bg-primary text-on-primary py-12 relative overflow-hidden">
        <div className="absolute inset-0 lifeline-pulse opacity-10" />
        <CountUpStats />
      </section>

      {/* ── About Snapshot ──────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <div>
                <span className="font-label-caps text-secondary">OUR IDENTITY</span>
                <h2 className="font-h2 text-h2 text-primary mt-4 mb-6">
                  A hardcore Sales and Service organization dedicated to your growth.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  We don&apos;t just sell equipment; we design the vital infrastructure
                  that keeps your business connected, secure, and operational around
                  the clock.
                </p>
                <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                  {[
                    ["verified", "Certified Expertise"],
                    ["settings_suggest", "Custom Integration"],
                    ["support_agent", "24/7 Support"],
                    ["hub", "Pan-India Reach"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="p-6 bg-surface border border-outline-variant hover:border-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">
                        {icon}
                      </span>
                      <h3 className="font-h3 text-sm mb-2">{title}</h3>
                    </div>
                  ))}
                </StaggerContainer>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.1}>
              <div className="relative grid grid-cols-2 gap-4">
                <Image
                  src={aboutImg1}
                  alt="Corporate professionals collaborating in a high-tech boardroom"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg translate-y-8 w-full h-auto"
                />
                <Image
                  src={aboutImg2}
                  alt="Technician installing security camera systems"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────────────────────── */}
      <section className="section-padding bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-caps text-secondary uppercase">Core Competencies</span>
              <h2 className="font-h2 text-h2 text-primary mt-4">
                Enterprise Grade Infrastructure
              </h2>
            </div>
          </AnimateIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-gutter" staggerDelay={0.08}>
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 border border-outline-variant group hover:border-primary transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-secondary transition-colors mb-6 block">
                  {s.icon}
                </span>
                <h3 className="font-h3 text-h3 mb-4">{s.title}</h3>
                <p className="text-on-surface-variant mb-6">{s.desc}</p>
                <ul className="space-y-2 text-sm font-medium">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Why Plexus (Bento) ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label-caps text-secondary">WHY CHOOSE US</span>
              <h2 className="font-h2 text-h2 text-primary mt-4">
                The Plexus Differentiator: Unmatched Reliability.
              </h2>
            </div>
            <Link href="/about" className="bg-primary text-on-primary px-8 py-4 font-label-caps h-fit">
              DOWNLOAD PROFILE
            </Link>
          </div>

          {/* Outer flex: left 75% (2 rows) + right 25% (Rapid Support, full height) */}
          <div className="flex gap-4 h-[560px]">

            {/* Left column: 2 rows stacked */}
            <div className="flex flex-col gap-4 flex-[3]">

              {/* Row 1: Turnkey (2/3) + Trained Manpower (1/3) */}
              <div className="flex gap-4 flex-1">
                <div className="flex-[2] bg-primary-container text-white p-10 flex flex-col justify-between border-b-4 border-on-tertiary-container">
                  <span className="material-symbols-outlined text-4xl">inventory_2</span>
                  <div>
                    <h3 className="font-h3 text-h3 mb-2">Turnkey Solutions</h3>
                    <p className="opacity-80">
                      From design to deployment, we handle the entire lifecycle of your infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex-[1] bg-surface-container-high p-8 border border-outline-variant flex flex-col justify-between">
                  <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">groups</span>
                  <div>
                    <h3 className="font-h3 text-xl mb-2">Trained Manpower</h3>
                    <p className="text-sm text-on-surface-variant">OEM certified engineers with decades of combined expertise.</p>
                  </div>
                </div>
              </div>

              {/* Row 2: 35+ Years (1/3) + Global Partnerships (2/3) */}
              <div className="flex gap-4 flex-1">
                <div className="flex-[1] bg-surface p-8 border border-outline-variant flex flex-col justify-center">
                  <h3 className="font-h2 text-h2 text-primary">35+</h3>
                  <p className="font-label-caps text-secondary">YEARS OF STABILITY</p>
                </div>
                <div className="flex-[2] bg-surface-container-highest p-10 flex gap-8 items-center border border-outline-variant">
                  <div className="flex-1">
                    <h3 className="font-h3 text-h3 mb-2">Global Partnerships</h3>
                    <p>Authorized representatives for world-leading technology brands.</p>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    {["P", "B", "C"].map((l) => (
                      <div key={l} className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm font-bold">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right column: Rapid Support, full height */}
            <div className="flex-[1] bg-secondary text-white p-10 relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-9xl">speed</span>
              </div>
              <h3 className="font-h2 text-4xl mb-4">Rapid Support</h3>
              <p className="opacity-90">
                SLA-driven maintenance and on-site support across Pan-India locations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Brands Wall ─────────────────────────────────────────────── */}
      <section className="py-20 border-y border-outline-variant bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <h2 className="font-label-caps text-center text-on-surface-variant mb-12">
              STRATEGIC TECHNOLOGY PARTNERS
            </h2>
          </AnimateIn>
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            staggerDelay={0.07}
          >
            {["PANASONIC", "BOSE", "HIKVISION", "CISCO", "POLY", "NEC"].map((b) => (
              <div key={b} className="flex justify-center font-black text-2xl">
                {b}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <div className="text-center mb-16">
              <span className="font-label-caps text-secondary">SECTORS WE SERVE</span>
              <h2 className="font-h2 text-h2 text-primary mt-4">Built for Every Industry.</h2>
            </div>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.07}>
            {industries.map((i) => (
              <Link
                href="/industries"
                key={i.name}
                className="group p-8 border border-outline-variant hover:bg-primary transition-all block"
              >
                <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-white mb-4 block">
                  {i.icon}
                </span>
                <h3 className="font-h3 text-lg group-hover:text-white">{i.name}</h3>
                <p className="text-xs text-on-surface-variant group-hover:text-white/70 mt-2">{i.desc}</p>
              </Link>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Featured Deployments ─────────────────────────────────────── */}
      <section className="section-padding bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <h2 className="font-h2 text-h2 mb-12">Featured Deployments</h2>
          </AnimateIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-gutter" staggerDelay={0.1}>
            {[
              {
                tag: "NETWORKING",
                title: "Unified Backbone for Fortune 500 HQ",
                desc: "Deploying 10Gbps structured cabling across 20 floors with zero downtime.",
                img: caseImgs[0],
              },
              {
                tag: "AV INTEGRATION",
                title: "Digital Boardroom for Tech Giant",
                desc: "Seamless Bose audio and Poly video integration for multi-national collaboration.",
                img: caseImgs[1],
              },
              {
                tag: "SECURITY",
                title: "City-Wide Surveillance Network",
                desc: "Integrating 500+ AI-enabled Hikvision cameras into a central command hub.",
                img: caseImgs[2],
              },
            ].map((c) => (
              <div key={c.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-label-caps text-secondary">{c.tag}</span>
                <h3 className="font-h3 text-xl mt-2 mb-4 group-hover:text-secondary transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{c.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full lifeline-pulse opacity-5 rotate-12" />
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up" distance={24}>
            <div className="max-w-4xl">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-8 block">
                format_quote
              </span>
              <p className="font-h2 text-h2 italic text-primary leading-tight mb-8">
                &ldquo;Plexus Tele-Solutions has been our go-to partner for over a decade.
                Their ability to deliver complex infrastructure projects on time and provide
                relentless support is what makes them a true lifeline for our operations.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-dim rounded-full" />
                <div>
                  <div className="font-bold text-lg">CTO, Leading BFSI Firm</div>
                  <div className="text-sm text-on-surface-variant">Mumbai, India</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 lifeline-pulse opacity-20" />
        <AnimateIn direction="up" className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-h1 text-h1 mb-8">Have a project that needs a lifeline?</h2>
          <p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto opacity-80">
            Join 5000+ enterprises who trust Plexus for their mission-critical communications and security.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-5 font-label-caps hover:bg-secondary hover:text-white transition-all"
            >
              CONSULT AN EXPERT
            </Link>
            <a
              href="tel:+18007539870"
              className="border border-white text-white px-10 py-5 font-label-caps hover:bg-white hover:text-primary transition-all"
            >
              CALL US NOW
            </a>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
