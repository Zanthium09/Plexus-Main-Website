//C:\Users\Neeraj\Desktop\plexussssss\Plexus-Main-Website\app\page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import CountUpStats from "@/components/CountUpStats";
import BrandsMarquee from "@/components/BrandsMarquee";
import HeroSection from "@/components/HeroSection";

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

const aboutImg1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBlm7CkNYx6ffEEV29s9lAj1G_8RBpgBYTPalG7eCNLJQd5n4sYj1Sz9bco_uEY6uqdYYRu0GgovFtXMfUTYzEacOvBpsx59rPFqnTOJr28ImCNGrYGLTgwjqd_SlUBlu6_8u5DDv3ASD9YcmdQIQBJ3rqk2IhnoUMTB_PeqRm1QddlPwpLKc6NON-35V8aY8R8QAwvPquhRHJ37djeujhFIiaGNPiCrS5xbZTZ3hvbPso9WgdMDaPGKUg2uZOyTKpI9smIDY1W4S3n";
const aboutImg2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCv2V4ivufhig8i2drs4uuBGFfvCQ4ft7ga5uARQSB7EtmGp8WiCNkEedQXE7mukaD-44WCyrJg4NYzicr49v6Ox9bemJ8ftUfh_xuXfhAx2H42FpYrSBokrm7HLStZGOo44JJeusDuBKiT5ADB1xD21mMmfV-a9ZOOeKVNYb7Lu4XaSEY5oNfdMfi_hmGEfA7uRKOHg1rdEkxwbrmve1WQoQDnaZxxxKaQWhUx-gNPvFsff6AJkicBXsnrcuAO4NdnaheDajdu3Q0x";

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
      <HeroSection />

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
                  We are the distributer of Matrix, Dahua and Legrand.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  We don&apos;t just sell equipment, we design the vital infrastructure
                  that keeps your business connected, secure, and operational around
                  the clock.
                </p>
                <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                  {[
                    {
                      logo: "/partanersLOGO/matrix.png",
                      title: "Matrix Distributer",
                      subtitle: "Telecom & Security Solutions",
                      href: "/products?brand=Matrix",
                    },
                    {
                      logo: "/partanersLOGO/dahua.png",
                      title: "Dahua Distributer",
                      subtitle: "Video Surveillance & Security Solutions",
                      href: "/products?brand=Dahua",
                    },
                    {
                      logo: "/partanersLOGO/legrand.png",
                      title: "Legrand Distributer",
                      subtitle: "Electrical & Digital Building Solutions",
                      href: "/products?brand=Legrand",
                    },
                    {
                      icon: "hub",
                      title: "Pan-India Reach",
                      subtitle: "Delivering Across Every Corner of India",
                      href: "/contact",
                    },
                  ].map(({ logo, icon, title, subtitle, href }) => (
                    <Link
                      key={title}
                      href={href}
                      className="p-6 rounded-2xl bg-surface border border-outline-variant hover:border-primary hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group"
                    >
                      <div className="rounded-xl bg-primary/10 p-4 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {logo ? (
                          <Image
                            src={logo}
                            alt={title}
                            width={400}
                            height={260}
                            className="h-10 w-auto object-contain"
                          />
                        ) : (
                          <span className="material-symbols-outlined text-secondary text-4xl block">
                            {icon}
                          </span>
                        )}
                      </div>
                      <h3 className="font-h3 text-sm mb-2">{title}</h3>
                      <p className="text-xs text-on-surface-variant mb-4">{subtitle}</p>
                      <span className="w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </span>
                    </Link>
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
                  className="rounded-lg shadow-lg w-full h-auto"
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

          <StaggerContainer className="grid md:grid-cols-3 gap-gutter items-stretch" staggerDelay={0.08}>
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 border border-outline-variant group hover:border-primary transition-all shadow-sm h-full flex flex-col"
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
                The Plexus Differentiator: Unmatched Reliability
              </h2>
            </div>
            <a
              href="/company-profile.pdf"
              download
              className="bg-primary text-on-primary px-8 py-4 font-label-caps h-fit"
            >
              DOWNLOAD PROFILE
            </a>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Turnkey Solutions — spans 2 cols on lg */}
            <div className="md:col-span-1 lg:col-span-2 bg-primary-container text-white p-8 md:p-10 flex flex-col justify-between min-h-[220px]">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
              <div>
                <h3 className="font-h3 text-h3 mb-2">Turnkey Solutions</h3>
                <p className="opacity-80">
                  From design to deployment, we handle the entire lifecycle of your infrastructure.
                </p>
              </div>
            </div>

            {/* Trained Manpower */}
            <div className="bg-surface-container-high p-8 border border-outline-variant flex flex-col justify-between min-h-[220px]">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">groups</span>
              <div>
                <h3 className="font-h3 text-xl mb-2">Trained Manpower</h3>
                <p className="text-sm text-on-surface-variant">OEM certified engineers with decades of combined expertise.</p>
              </div>
            </div>

            {/* Rapid Support — spans 2 rows on lg */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-secondary text-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-end min-h-[220px]">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-9xl">speed</span>
              </div>
              <h3 className="font-h2 text-3xl lg:text-4xl mb-4">Rapid Support</h3>
              <p className="opacity-90">
                SLA-driven maintenance and on-site support across Pan-India locations.
              </p>
            </div>

            {/* 35+ Years */}
            <div className="bg-surface p-8 border border-outline-variant flex flex-col justify-center min-h-[180px]">
              <h3 className="font-h2 text-h2 text-primary">35+</h3>
              <p className="font-label-caps text-secondary">YEARS OF STABILITY</p>
            </div>

            {/* Global Partnerships — spans 2 cols on md+ */}
            <div className="md:col-span-1 lg:col-span-2 bg-surface-container-highest p-8 md:p-10 flex gap-8 items-center border border-outline-variant min-h-[180px]">
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
      </section>
      <section className="py-20 border-y border-outline-variant bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <AnimateIn direction="up">
            <h2 className="font-label-caps text-center text-on-surface-variant">
              STRATEGIC TECHNOLOGY PARTNERS
            </h2>
          </AnimateIn>
        </div>
        <BrandsMarquee />
      </section>
      {/* ── Industries ──────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          <AnimateIn direction="up">
            <div className="text-center mb-16">
              <span className="font-label-caps text-secondary">SECTORS WE SERVE</span>
              <h2 className="font-h2 text-h2 text-primary mt-4">Built for Every Industry</h2>
            </div>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.07}>
            {industries.map((i) => (
              <Link
                href={`/industries#${i.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
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
              href="tel:+917045405405"
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