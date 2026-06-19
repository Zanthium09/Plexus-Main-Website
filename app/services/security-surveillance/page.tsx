import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Security Surveillance | AI CCTV, Command Centers & Perimeter Safety",
  description:
    "Enterprise-grade IP surveillance: AI-powered CCTV, command & control centers, perimeter intrusion detection and remote monitoring — deployed pan-India by certified engineers.",
  alternates: { canonical: "/services/security-surveillance" },
  openGraph: {
    title: "Security Surveillance | Plexus Tele-Solutions",
    description: "AI-driven IP surveillance and monitoring for comprehensive enterprise security.",
    url: "/services/security-surveillance",
    type: "website",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBD0BgRs0h7J3gCcTvKdO9c7tw7JslMjl935JQL9rAMRERvIh-G9GrohJjwY3MZqnKhadGsEhQ6nXICzdF8dlOACcr7sSzdd9MTMquKOsc8U0OCVMFUxtAr4wU1_2AlohrjD4f8nf9k9Vjna33rOgIF0s58eCmhGBz97hXdvG7UfUswtN18Eczj6A9-2ErztoGf9aMIgIFLptRfKENtJTwWOE1V-H_6fXlZrV38CQ3Ngg9SQtv0YfgPd2bUCMm-k8FKDOSeKb4YY0ZX";

const offerings = [
  ["videocam", "IP CCTV Systems", "High-definition IP cameras with night vision, wide-angle coverage, and tamper detection for complete facility visibility."],
  ["psychology", "AI Video Analytics", "Real-time behavioral analysis, face detection, crowd monitoring, and anomaly alerts powered by edge AI."],
  ["monitor", "Command & Control Centers", "Centralized surveillance hubs integrating multiple feeds, alarms, and response workflows into a unified interface."],
  ["sensors", "Perimeter Intrusion Detection", "Smart sensor networks covering fences, entry points, and blind zones — with instant alert escalation."],
  ["cloud_sync", "Remote Monitoring", "24/7 off-site surveillance and incident response through our certified monitoring operations center."],
  ["folder_open", "Evidence Archiving", "Scalable NVR/DVR storage with encrypted cloud backup, audit trails, and legal-grade retrieval."],
];

const why = [
  ["verified", "OEM Certified", "Certified installers for Hikvision, Dahua, and Matrix — ensuring warranty-backed deployments."],
  ["speed", "Rapid Deployment", "Structured cabling and camera commissioning completed with zero operational disruption."],
  ["security", "Cybersecure Systems", "VLAN-isolated camera networks and encrypted streams meeting IS0 27001 compliance."],
  ["support_agent", "24/7 Monitoring", "Round-the-clock SOC coverage with defined SLA response times for all severity levels."],
];

const partners = ["HIKVISION", "DAHUA", "MATRIX", "BOSCH", "AXIS"];

export default function SecuritySurveillancePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Security Surveillance" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-section-padding overflow-hidden bg-white border-b border-outline-variant">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-lg">
            <AnimateIn direction="up" delay={0}>
              <span className="font-label-caps text-secondary tracking-[0.2em]">
                INTELLIGENT SURVEILLANCE
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary max-w-xl">
                Security Surveillance
              </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                AI-driven surveillance infrastructure that monitors, detects, and
                responds — protecting assets, people, and perimeters around the clock.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.24}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-sm hover:border-b-2 hover:border-secondary transition-all"
                >
                  GET A SECURITY AUDIT
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
                alt="Security surveillance command center"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute bottom-6 left-6 bg-secondary text-white p-5 rounded shadow-xl max-w-[180px]">
                <p className="font-h3 text-h3 leading-tight">500+</p>
                <p className="font-label-caps text-[10px] uppercase mt-1">
                  AI Cameras Deployed
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
              Why Plexus for Security
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              We engineer surveillance ecosystems — not just install cameras.
              Every deployment is planned for scalability, cybersecurity, and
              long-term operational reliability.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label-caps py-4 px-8 border-b-2 border-on-tertiary-container"
            >
              Request a Site Survey
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
                  Ready to Secure Your Premises?
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                  Our security engineers will conduct a site assessment and deliver
                  a comprehensive surveillance blueprint tailored to your risk profile.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-base hover:border-b-4 hover:border-on-tertiary-container transition-all"
                >
                  Schedule a Security Consultation
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}