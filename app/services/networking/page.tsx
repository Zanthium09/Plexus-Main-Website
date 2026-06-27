import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Networking | Structured Cabling, SD-WAN, Wi-Fi & Network Security",
  description:
    "Enterprise networking solutions: structured cabling, managed Wi-Fi, SD-WAN, fiber optic backbones, network security and 24/7 NOC — built for high-availability and scalability.",
  alternates: { canonical: "/services/networking" },
  openGraph: {
    title: "Networking | Plexus Tele-Solutions",
    description: "High-speed, redundant backbone infrastructure for data-intensive enterprise operations.",
    url: "/services/networking",
    type: "website",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxbqogWuZfzMMHD4TwjWPdQvxSq2-kiBBaHPc7oun027H7dhaArwVPoHQ5BwX_Yipzw11HiqIFqsZ5rTSN4i67H2fLAxwEBgb2eMnyY7W0Oumn_XJdA0GJ2v2atvsMy-Z5cxrQ8P6haKAJcLMeX016li4Cv-pgiTtDLJwxKR0m-RIDA5NYbu6ArC5kECv2tmgAPcc9yD-0lGioQTmXc3acEIN9T3WW3GYwMZMdoTHDKSvxmHeUDe5J6qFxbXt4LoifAOTaHi6cBQ4";

const offerings = [
  ["cable", "Structured Cabling", "Cat6A/Cat7 and fiber optic cabling infrastructure designed for 10Gbps+ throughput and future bandwidth demands."],
  ["wifi", "Managed Enterprise Wi-Fi", "High-density Wi-Fi 6/6E deployments with seamless roaming, central policy management, and RF optimization."],
  ["router", "SD-WAN & Routing", "Software-defined WAN solutions that intelligently route traffic for performance, redundancy, and cost efficiency."],
  ["security", "Network Security", "Next-gen firewalls, micro-segmentation, NAC, and zero-trust architecture for perimeter and internal threat defense."],
  ["hub", "Core & Distribution Switching", "High-availability switching fabric with redundant paths, spanning tree optimization, and QoS policies."],
  ["monitoring", "24/7 NOC Services", "Proactive monitoring, incident management, and performance optimization through our Network Operations Center."],
];

const why = [
  ["verified", "Cisco & Fortinet Certified", "Partner-certified engineers for enterprise-class design and deployment."],
  ["speed", "High Availability Design", "Redundant architecture with sub-second failover for zero-downtime operations."],
  ["hub", "End-to-End Delivery", "From passive cabling to active configuration — single-vendor accountability."],
  ["support_agent", "Proactive NOC", "24/7 monitoring with defined SLA tiers and dedicated account management."],
];

const partners = ["CISCO", "FORTINET", "ARUBA", "LEGRAND", "NETGEAR", "AIRTEL"];

export default function NetworkingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Networking" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-section-padding overflow-hidden bg-white border-b border-outline-variant">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-lg">
            <AnimateIn direction="up" delay={0}>
              <span className="font-label-caps text-secondary tracking-[0.2em]">
                HIGH-PERFORMANCE INFRASTRUCTURE
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary max-w-xl">
                Networking
              </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Redundant, scalable network infrastructure engineered for the
                data-intensive demands of modern enterprise — from the server
                room to the last mile.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.24}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-sm hover:border-b-2 hover:border-secondary transition-all"
                >
                  GET A NETWORK ASSESSMENT
                </Link>
                <Link
                  href="/services"
                  className="border border-primary text-primary px-8 py-4 font-label-caps text-sm hover:bg-primary hover:text-white transition-all"
                >
                  ALL SERVICES
                </Link>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn direction="left" delay={0.15}>
            <div className="relative h-[300px] md:h-[460px] bg-surface-container rounded-lg overflow-hidden group">
              <Image
                src={heroImg}
                alt="Enterprise server room and network infrastructure"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute bottom-6 left-6 bg-secondary text-white p-5 rounded shadow-xl max-w-[200px]">
                <p className="font-h3 text-h3 leading-tight">10Gbps+</p>
                <p className="font-label-caps text-[10px] uppercase mt-1">
                  Backbone Throughput
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="font-label-caps text-center text-on-surface-variant mb-10 opacity-60">
            CERTIFIED TECHNOLOGY PARTNERS
          </p>
          <div className="flex flex-wrap justify-around items-center gap-8 grayscale opacity-70 hover:grayscale-0 transition-all">
            {partners.map((b) => (
              <div key={b} className="font-black text-xl text-slate-400">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimateIn direction="up">
            <div className="mb-16">
              <h2 className="font-h2 text-h2 text-primary mb-4">Our Offerings</h2>
              <div className="h-1 w-20 bg-secondary" />
            </div>
          </AnimateIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" staggerDelay={0.08}>
            {offerings.map(([icon, title, desc]) => (
              <div
                key={title}
                className="group border border-outline-variant p-8 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-4">{title}</h3>
                <p className="font-body-md text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Plexus */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
          <div className="md:col-span-1">
            <h2 className="font-h2 text-h2 text-primary mb-6">
              Why Plexus for Networking
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              We architect networks that carry mission-critical workloads with
              the resilience, security, and throughput your business demands
              — today and at scale.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label-caps py-4 px-8 border-b-2 border-on-tertiary-container"
            >
              Download Network Brochure
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {why.map(([icon, title, desc]) => (
              <div key={title} className="bg-white p-6 border border-outline-variant hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-secondary mb-4 block">{icon}</span>
                <h4 className="font-h3 text-lg mb-2">{title}</h4>
                <p className="text-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
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
                  Build a Network That Never Lets You Down
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                  Our network architects will assess your current infrastructure
                  and design a future-ready solution with guaranteed uptime SLAs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-base hover:border-b-4 hover:border-on-tertiary-container transition-all"
                >
                  Request a Network Consultation
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}