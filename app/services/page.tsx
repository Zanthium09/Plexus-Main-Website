// C:\Users\Neeraj\Desktop\plexussssss\Plexus-Main-Website\app\services
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Enterprise Services | Telecom, Security, AV, Networking & Automation",
  description:
    "End-to-end enterprise services: unified communications, IP CCTV surveillance, professional AV, structured cabling, building automation, biometric access control and addressable fire alarms — designed, deployed and supported pan-India.",
  keywords: [
    "unified communications India",
    "IP PBX deployment",
    "SIP trunking",
    "CCTV installation India",
    "AI video analytics",
    "professional AV integration",
    "video conferencing systems",
    "structured cabling India",
    "building automation",
    "biometric access control",
    "addressable fire alarm",
    "enterprise networking",
    "managed IT services",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Enterprise Services | Plexus Tele-Solutions",
    description:
      "Telecom, security surveillance, AV, networking, building automation and fire & access systems — engineered for Indian enterprises.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Services | Plexus Tele-Solutions",
    description:
      "Six core service domains delivered turnkey — design, install, integrate, support.",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFf3apJvQ6ioh7DAUDOjwnOsChsdtQDkl5FNLAlBrPQAGmX8C8JrhF6XB09Uiun7JOfnCB_8-j2kItSJxLA2B4hyRXqi2tZ76LZKbP8o7FzBc_pD_1a27kKirvYcMm44HMYevNYXYMLlIJqLApbnBX0nhbbYnS7ZkgHid1_rbewtB_A5GdgQb8ZgOl4eTcEzv6gHafCznMNY4ZajvMJafM72lfzpNWwkwWpNjWOEx-C-SRKOHcxgqFiljsG1pcdJhzz30fuopjNF73";

const domains = [
  {
    icon: "settings_phone",
    title: "Telecom",
    bullets: [
      "Unified Communications (UCaaS)",
      "SIP Trunking & VOIP Solutions",
      "Cloud PBX Architecture",
      "Legacy System Integration",
      "Contact Center Optimization",
    ],
    href: "/services/telecom-solutions",
  },
  {
    icon: "videocam",
    title: "Audio-Video",
    bullets: [
      "Immersive Boardroom AV",
      "Digital Signage Networks",
      "Professional Sound Masking",
      "Video Wall Installations",
      "Presentation Systems",
    ],
    href: "/services/av-systems",
  },
  {
    icon: "precision_manufacturing",
    title: "Automation",
    bullets: [
      "Smart Building Controls",
      "Energy Management Systems",
      "Lighting & HVAC Integration",
      "Centralized Control Hubs",
      "IoT Ecosystem Deployment",
    ],
    href: "/contact",
  },
  {
    icon: "shield",
    title: "Security & Surveillance",
    bullets: [
      "IP-Based Video Monitoring",
      "AI Analytics & Face Detection",
      "Remote Monitoring Centers",
      "Perimeter Intrusion Detection",
      "Evidence Archiving Solutions",
    ],
    href: "/services/security-surveillance",
  },
  {
    icon: "lan",
    title: "Networking",
    bullets: [
      "Managed Enterprise Wi-Fi",
      "SD-WAN Implementation",
      "Network Security & Firewalls",
      "Fiber Optic Backbones",
      "24/7 Network Operations",
    ],
    href: "/services/networking",
  },
  {
    icon: "lock_open",
    title: "Fire & Access Control",
    bullets: [
      "Biometric Access Systems",
      "Smart Card & Mobile Credential",
      "Fire Detection & Suppression",
      "Compliance Auditing",
      "Emergency Alert Systems",
    ],
    href: "/contact",
  },
];

const phases = [
  ["01", "Survey", "On-site technical assessment and requirement discovery to map existing infrastructure gaps."],
  ["02", "Design", "Customized engineering blueprints focusing on scalability, security, and integration synergy."],
  ["03", "Implement", "Professional deployment by certified engineers with minimal downtime and strict safety compliance."],
  ["04", "Support", "Post-launch 24/7 technical monitoring, maintenance, and periodic system optimization."],
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-section-padding border-b border-outline-variant">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-lg">
            <AnimateIn direction="up" delay={0}>
              <span className="inline-block font-label-caps text-secondary tracking-[0.2em]">
                PRECISION INFRASTRUCTURE
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary max-w-xl">
                Our Services — Engineering the Lifelines of Business
              </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                From mission-critical data networking to high-fidelity audio-visual systems,
                we design the silent infrastructure that drives organizational performance.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#domains"
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-sm hover:border-b-2 hover:border-secondary transition-all text-center"
                >
                  EXPLORE DOMAINS
                </a>
                <Link
                  href="/contact"
                  className="border border-primary text-primary px-8 py-4 font-label-caps text-sm hover:bg-primary hover:text-white transition-all text-center"
                >
                  CONTACT US
                </Link>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn direction="left" delay={0.15}>
            <div className="relative h-[300px] md:h-[500px] bg-surface-container rounded-lg overflow-hidden group">
              <Image
                src={heroImg}
                alt="High-tech server room with fiber optic cables"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="py-section-padding bg-surface-bright">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimateIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="font-h2 text-h2 text-primary mb-4">Core Competencies</h2>
              <div className="h-1 w-24 bg-secondary mx-auto" />
            </div>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" staggerDelay={0.09}>
            {domains.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-outline-variant p-8 group hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{d.icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-6">{d.title}</h3>
                <ul className="space-y-3 mb-8 font-body-md text-on-surface-variant">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm pt-1">check_circle</span> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={d.href}
                  className="font-label-caps text-primary flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  LEARN MORE <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Turnkey */}
      <section className="py-section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full pulse-bg opacity-10" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <AnimateIn direction="up">
            <div className="mb-16">
              <h2 className="font-h2 text-h2 mb-4">Turnkey Project Delivery</h2>
              <p className="font-body-lg text-on-primary-container max-w-2xl">
                A seamless, four-phase engineering lifecycle designed to minimize operational
                disruption while maximizing technological ROI.
              </p>
            </div>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter relative" staggerDelay={0.1}>
            {phases.map(([num, title, desc], i) => (
              <div key={num} className="relative">
                <div className="font-h1 text-h1 font-black text-on-primary-container opacity-20 mb-4">{num}</div>
                <h3 className="font-h3 text-xl mb-4">{title}</h3>
                <p className="font-body-md text-on-primary-container">{desc}</p>
                {i < phases.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-secondary">
                    <span className="material-symbols-outlined">trending_flat</span>
                  </div>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimateIn direction="up">
            <div className="bg-surface-container p-12 md:p-20 text-center rounded-sm border border-outline-variant relative overflow-hidden">
              <div className="absolute inset-0 pulse-bg opacity-20" />
              <div className="relative z-10">
                <h2 className="font-h2 text-h2 text-primary mb-6">
                  Ready to Strengthen Your Business Lifeline?
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                  Consult with our engineering experts to design a tailored infrastructure
                  strategy that supports your growth and security objectives.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-base hover:border-b-4 hover:border-on-tertiary-container transition-all active:scale-[0.98]"
                >
                  Request a Service Consultation
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
