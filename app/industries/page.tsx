import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Industries We Serve | BFSI, Manufacturing, IT, Healthcare, Retail",
  description:
    "Plexus Tele-Solutions delivers vertical-specific telecom, security and AV infrastructure to BFSI, manufacturing, IT/ITES, healthcare, hospitality, education, retail and government sectors across India.",
  keywords: [
    "BFSI security solutions",
    "manufacturing automation India",
    "healthcare networking",
    "hospitality AV systems",
    "retail surveillance",
    "government IT infrastructure",
    "education campus networking",
    "IT/ITES connectivity",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve | Plexus Tele-Solutions",
    description:
      "Vertical-specific infrastructure for BFSI, manufacturing, IT, healthcare, hospitality, education, retail and government.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Plexus Tele-Solutions",
    description:
      "Vertical-specific infrastructure across 8+ sectors with proven, sector-tailored deployments.",
  },
};

const bfsiImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWUPx8P6Ui7dZPsyrulTMS4Ax3z1-TCXlcr6ynwtKz3e7K7NncuvjBbCjXuI4ZVyE2z06fgK8PORO7GaPetbqPw0DTaH2_f-mhS9FkjwoFbBAMkr55bTV3YyfHboIj4E4-yR6DA2JZMMOZaKRG_pArRGZUEJBRNvl2b_NJGAI2zzP7l5CnTpaMrr06j7swAYFtnOIiVoYbinjYPp9GdIIAXaaoB-KrnWLbFH00vgEWz_rUpcT0G-mFQzwzOdnJu6wn9Rd5A6H0KRN_";
const mfgImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_maDL67TyxabIoD27ZAX0kFJxbC3SzwvZQfsXKNcpWx58yeBH4EtO3T1w2_HaOQVTXT6aaOANGaWC_wXODrMgZMtINAThLUYQByi2ztXwtwm9jZlYSGJXXKYgYi3iuL1Tgv8_HYwGpNIwVIlTTMnc9A1WV5H07tHLlbz4XSr8SV6oLDUhoI-zoW3pPSbRkt_xB_XC_OT2sWyyVafhCufRwkydhtesNvH3B6tGAIQl-TXE2PbpCH6I5uJZ5xIq7xgLxizafb_J-c7o";

const minorSectors = [
  ["code", "IT/ITES", "High-density workspace connectivity and global collaboration AV setups.", "SD-WAN & Smart Boards"],
  ["medical_services", "Healthcare", "Tele-medicine integration and critical patient monitoring networks.", "HIPAA Wi-Fi & IP-PA"],
  ["school", "Education", "Campus-wide connectivity and interactive smart-classroom AV.", "FTTH & Digital Signage"],
  ["hotel", "Hospitality", "Premium guest Wi-Fi and integrated property management systems.", "GPON & High-Speed IP"],
];

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      {/* Hero */}
      <section className="relative py-section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <AnimateIn direction="up" delay={0}>
            <span className="font-label-caps text-secondary mb-4 block">Our Expertise</span>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.08}>
            <h1 className="font-h1 text-h1 max-w-3xl mb-6">
              Empowering Critical Sectors with Unfailing Connectivity
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.16}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              We engineer the lifelines of modern industry. From high-frequency trading floors
              to mission-critical healthcare facilities, Plexus provides the infrastructure
              that never sleeps.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-8 py-20">
        {/* BFSI */}
        <div id="bfsi" className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-20 scroll-mt-28">
          <AnimateIn direction="right">
            <div className="aspect-video bg-surface-container overflow-hidden rounded-lg shadow-sm border border-outline-variant relative">
              <Image src={bfsiImg} alt="Banking floor" fill className="object-cover" />
            </div>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.1}>
            <div className="pl-0 md:pl-12">
              <span className="font-label-caps text-on-surface-variant">Sector 01</span>
              <h2 className="font-h2 text-h2 mb-6">BFSI: Banking & Financial Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-h3 text-h3 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">security</span> The Challenge
                  </h3>
                  <p className="text-on-surface-variant">
                    Millisecond latency can cost millions. BFSI requires 99.999% uptime,
                    uncompromising security protocols, and real-time disaster recovery paths.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                  <h4 className="font-label-caps text-on-surface mb-3">Our Recommended Stack</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Low-latency Dark Fiber Architecture",
                      "Tier-4 Data Center Integrated AV Systems",
                      "Biometric Security & Surveillance Grids",
                    ].map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">check_circle</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-8 items-center pt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <span className="font-label-caps">Trusted By:</span>
                  <span className="font-bold text-xl">FINCORP</span>
                  <span className="font-bold text-xl">GLOBAL-BANK</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Manufacturing */}
        <div id="manufacturing" className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center mb-20 scroll-mt-28">
          <AnimateIn direction="right" className="order-2 md:order-1">
            <div className="pr-0 md:pr-12">
              <span className="font-label-caps text-on-surface-variant">Sector 02</span>
              <h2 className="font-h2 text-h2 mb-6">Manufacturing & Industry 4.0</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-h3 text-h3 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">precision_manufacturing</span> The Challenge
                  </h3>
                  <p className="text-on-surface-variant">
                    Harsh environments and vast floor plans demand robust cabling and
                    industrial-grade wireless that bridges the gap between OT and IT.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                  <h4 className="font-label-caps text-on-surface mb-3">Our Recommended Stack</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Industrial IoT Backbone (LoRaWAN/5G)",
                      "Ruggedized Structured Cabling",
                      "Perimeter AI-Analytics Surveillance",
                    ].map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">check_circle</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-8 items-center pt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <span className="font-label-caps">Trusted By:</span>
                  <span className="font-bold text-xl">AUTO-LINE</span>
                  <span className="font-bold text-xl">STEEL-SYNC</span>
                </div>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.1} className="order-1 md:order-2">
            <div className="aspect-video bg-surface-container overflow-hidden rounded-lg shadow-sm border border-outline-variant relative">
              <Image src={mfgImg} alt="Manufacturing assembly line" fill className="object-cover" />
            </div>
          </AnimateIn>
        </div>

        {/* Minor sector grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter" staggerDelay={0.08}>
          {minorSectors.map(([icon, title, desc, stack]) => (
            <div
              key={title}
              id={title.toLowerCase().replace(/[^a-z]+/g, "-")}
              className="bg-white p-8 border border-outline-variant hover:border-primary transition-all scroll-mt-28"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">{icon}</span>
              <h3 className="font-h3 text-h3 mb-3">{title}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{desc}</p>
              <div className="pt-4 border-t border-surface-container">
                <span className="font-label-caps text-[10px]">KEY STACK</span>
                <p className="text-xs font-bold uppercase mt-1">{stack}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Government / Retail */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-6" staggerDelay={0.12}>
          <div id="government" className="bg-primary text-on-primary p-12 flex flex-col justify-between scroll-mt-28">
            <div>
              <span className="font-label-caps text-secondary mb-4 block">Public Works</span>
              <h3 className="font-h2 text-h2 mb-4">Government</h3>
              <p className="text-on-primary-container mb-8">
                Secure, scalable networks for municipalities and state-wide infrastructure projects.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs uppercase font-bold">
                  <span className="material-symbols-outlined text-sm">lock</span> Secure Gateway
                </li>
                <li className="flex items-center gap-2 text-xs uppercase font-bold">
                  <span className="material-symbols-outlined text-sm">videocam</span> City Surveillance
                </li>
              </ul>
              <Link
                href="/contact"
                className="border border-white/30 px-6 py-2 text-xs uppercase font-bold hover:bg-white hover:text-primary transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div id="retail" className="bg-surface-container p-12 flex flex-col justify-between border border-outline-variant scroll-mt-28">
            <div>
              <span className="font-label-caps text-secondary mb-4 block">Commerce</span>
              <h3 className="font-h2 text-h2 mb-4">Retail</h3>
              <p className="text-on-surface-variant mb-8">
                Data-driven retail environments with heat-mapping and seamless POS connectivity.
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs uppercase font-bold">
                  <span className="material-symbols-outlined text-sm">analytics</span> Consumer Analytics
                </li>
                <li className="flex items-center gap-2 text-xs uppercase font-bold">
                  <span className="material-symbols-outlined text-sm">wifi</span> Free Guest Wi-Fi
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-primary text-on-primary px-6 py-2 text-xs uppercase font-bold hover:bg-secondary transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="bg-primary-container text-on-primary py-section-padding">
        <AnimateIn direction="up" className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-h1 text-h1 mb-8 text-white">Ready to strengthen your lifeline?</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-12 max-w-2xl mx-auto">
            Our engineers are standing by to design a custom infrastructure stack tailored
            to your industry&apos;s specific challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-label-caps hover:bg-secondary hover:text-white transition-all"
            >
              Request a Site Survey
            </Link>
            <Link
              href="/partners"
              className="border border-white/20 text-white px-10 py-4 font-label-caps hover:bg-white/10 transition-all"
            >
              View Our Partners
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
