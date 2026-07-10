// C:\Users\Neeraj\Desktop\plexussssss\Plexus-Main-Website\app\telecom-solutions

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Telecom Solutions | IP PBX, SIP Trunking, Contact Center & UC",
  description:
    "Enterprise-grade telecom solutions: IP PBX, SIP trunking, unified communications, contact center design, EPABX and cloud telephony — engineered for crystal-clear voice and zero downtime.",
  keywords: [
    "IP PBX India",
    "SIP trunking",
    "EPABX systems",
    "cloud telephony",
    "unified communications",
    "contact center solutions",
    "call center design",
    "VOIP solutions India",
    "enterprise telephony",
    "Avaya IP Office",
  ],
  alternates: { canonical: "/services/telecom-solutions" },
  openGraph: {
    title: "Telecom Solutions | Plexus Tele-Solutions",
    description:
      "IP PBX, SIP trunking, UC, contact centers and EPABX — built for enterprise reliability.",
    url: "/services/telecom-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telecom Solutions | Plexus Tele-Solutions",
    description:
      "Modern voice infrastructure for the connected enterprise — design through deployment.",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBP7Tj6SM2X0gFUOe6VDIh4S_UGs3XPSy7ob9TlaGaKEX-2bvI0XjxdZ3bFoPpl8bVB8lHL6ON0N3DMkBy0EJ0SdiyLwsM6ChzjJBMZSRrqbxbj-L2G5nwx-WSb0jOXh66RYxiQxiA2akCd02dnCefX1GXw4UKAniS82yGJayy5bqsEz8Cdi3T8oqOU6EoIrMEC52Nd31Fm29aA9pJtTsk_7Jeazwvpk_Yg4lshF7fRiZeqHuervs9ldZudhT8FYXp1iTlG4QXbC9Om";

const offerings = [
  ["architecture", "Communication Design", "Bespoke network topologies engineered to eliminate bottlenecks and ensure seamless data-voice flow.", "View Framework"],
  ["settings_input_component", "IP/SIP Telephony", "Modern voice solutions utilizing high-definition SIP trunking for crystal-clear international communication.", "Protocol Specs"],
  ["hub", "Unified Comms", "Bridging voice, video, and text into a single, cohesive infrastructure for the modern mobile workforce.", "Ecosystem"],
  ["support_agent", "Call Center Design", "High-volume communication architecture featuring advanced IVR and intelligent routing algorithms.", "Efficiency Data"],
  ["developer_board", "EPABX", "Robust hardware switching systems engineered for enterprise reliability and modular expansion.", "Hardware Options"],
];

const why = [
  ["verified", "25+ Years Experience", "Proven track record in engineering complex tele-solutions for Fortune 500 enterprises."],
  ["speed", "Rapid Deployment", "Agile installation protocols that minimize operational downtime during infrastructure upgrades."],
  ["security", "Secure Encryption", "End-to-end voice encryption meeting the highest global compliance standards (HIPAA, GDPR)."],
  ["eco", "Future-Proof Tech", "Scalable modular systems designed to integrate upcoming 6G and AI-driven voice protocols."],
];

const products = [
  {
    cat: "IP TELEPHONY",
    name: "Enterprise IP Phone X-200",
    desc: "4K Audio, Integrated PoE, Bluetooth 5.0",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwnDQLhpkAQBSvDwK0vKXJVjlLM-0vbrWHLMtsg_FvYvlBSSEyXJLeBppY16u-Kq01KBvb49k7PjEcpsDkyD4X9iRxeP_106CJEW2bj4j4BZ0HHJGxD6JrqelBIa0JfIla_B84HQekDHG0xKqBkwA4BG_DdiPJBhnD6-9aa5sqMY6DrxYjLBHe5fgbS7MPfpI1BYI9OIE6MVlT4jgeWPGXPCA993I-XwWHUWmPVS2VpSz4IOx8uB_cg5UOKmUN-5lh-SmK4VtrcanD",
  },
  {
    cat: "PBX SYSTEMS",
    name: "Matrix ETERNITY GENX",
    desc: "Hybrid PBX, Up to 2000 Users, Modular Architecture",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeKXMm5R0Ili3_BYLFlkFIBPB4jGl5gipkw2Tnn6N-TcEBFMLTcy8PQ0NCiZwCZ7NRqXhGv5YA3sGfiIUAK0MHLMLw19CK1_LbKrgHlVdzvUDAWGxt-WgH3VyxrZ5fR6ytci6e_e5VYH6OVS5fOGdqAFVluyBDO97Kftm1jzhnSTxELUdGGVAXS_pxzsDCQLIImrVBn_S0PCpaxqnKrXpl4AmPeIy7QjbrMyGypFwH7uV3Cjh2pkkxtmvEqhp2I7RExL64i1psYMQX",
  },
  {
    cat: "UNIFIED COMMS",
    name: "Poly Voyager Focus 2",
    desc: "Active Noise Cancelling, Triple connectivity",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDALv1x92nPmlD6ttwQtHcWWOzhBc4JrZoKBzJtu79KLGATC8aPktWv36jr7p_llswW36_bpx0Ik1Lk5ky-9LkUwUF74ZnvxfUWdIUlo11HFO8ftb6aMdAyNCwpuaIGSLIarNpa57earkZjeZBtn5L0-CzPDS3dgIKcKxGY3gNQN0EZVyhRlZhhQhViZQIN7cMcLkpcaD6fHVw0gETXOV_y15qq6OGNRrpQjImPGhFbwtRLR13eevZlof6lMZvZpAwa0YpO7NEskJfv",
  },
];

export default function TelecomPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Telecom Solutions" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-section-padding flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 pulse-bg opacity-40"></div>
        <div className="max-w-[1280px] mx-auto px-8 w-full grid md:grid-cols-2 items-center gap-gutter z-10 relative">
          <div className="space-y-stack-lg">
            <span className="font-label-caps text-secondary tracking-[0.2em]">
              MISSION CRITICAL CONNECTIVITY
            </span>
            <h1 className="font-h1 text-h1 text-primary">Telecom Solutions</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Communication networks engineered for clarity, scale, and uptime.
              We design the lifelines that keep global enterprises connected in
              an era of rapid digital convergence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-primary text-on-primary font-label-caps py-4 px-8 border-b-2 border-transparent hover:border-on-tertiary-container transition-all text-center"
              >
                Explore Engineering
              </Link>
              <Link
                href="/contact"
                className="border border-primary text-primary font-label-caps py-4 px-8 hover:bg-surface-container transition-all text-center"
              >
                Technical Specs
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-video bg-surface-container overflow-hidden rounded-lg shadow-sm border border-outline-variant relative">
              <Image
                src={heroImg}
                alt="High-tech server room with fiber optic cables"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-on-secondary p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-h3 text-h3 leading-tight">99.9%</p>
              <p className="font-label-caps text-[10px] uppercase">
                Guaranteed Network Uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="font-label-caps text-center text-on-surface-variant mb-10 opacity-60">
            CERTIFIED STRATEGIC PARTNERS
          </p>
          <div className="flex flex-wrap justify-around items-center gap-12 grayscale opacity-70 hover:grayscale-0 transition-all">
            {["Panasonic", "NEC", "Matrix", "Poly", "Avaya"].map((b) => (
              <div key={b} className="font-h3 font-black text-slate-400">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-stack-lg">
            <h2 className="font-h2 text-h2 text-primary mb-4">Our Offerings</h2>
            <div className="h-1 w-20 bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {offerings.map(([icon, title, desc, cta]) => (
              <div
                key={title}
                className="group border border-outline-variant p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <span className="material-symbols-outlined text-4xl mb-6 text-primary group-hover:text-secondary transition-colors block">
                  {icon}
                </span>
                <h3 className="font-h3 text-h3 mb-4">{title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  {desc}
                </p>
                <a
                  href="/contact"
                  className="font-label-caps text-secondary inline-flex items-center gap-2"
                >
                  {cta}{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Plexus */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
          <div className="md:col-span-1">
            <h2 className="font-h2 text-h2 text-primary mb-6">
              Why Plexus for Telecom
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              We don&apos;t just sell hardware; we engineer communication
              lifelines that scale with your corporate ambition.
            </p>
            <a
              href="/brochures/plexus-telecom-solutions.pdf"
              download
              className="inline-block bg-primary text-on-primary font-label-caps py-4 px-8 border-b-2 border-on-tertiary-container"
            >
              Download Brochure
            </a>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {why.map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white p-6 border border-outline-variant hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-secondary mb-4 block">
                  {icon}
                </span>
                <h4 className="font-h3 text-lg mb-2">{title}</h4>
                <p className="text-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-section-padding bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <h2 className="font-h2 text-h2 text-primary">Featured Products</h2>
              <p className="font-body-md text-on-surface-variant">
                Precision hardware from our global technology partners.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                aria-label="Next"
                className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {products.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-square bg-surface-container mb-6 overflow-hidden border border-outline-variant group-hover:border-primary transition-all relative">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-label-caps text-secondary text-[10px] mb-1">
                  {p.cat}
                </p>
                <h4 className="font-h3 text-lg mb-2">{p.name}</h4>
                <p className="text-xs text-on-surface-variant mb-4">{p.desc}</p>
                <Link
                  href="/products"
                  className="text-primary font-label-caps text-xs flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  SPECIFICATIONS{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            ))}
            <div className="group">
              <div className="aspect-square bg-surface-container mb-6 overflow-hidden border border-outline-variant flex items-center justify-center p-8 text-center flex-col">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">
                  inventory
                </span>
                <h4 className="font-h3 text-sm">Custom Configuration?</h4>
                <p className="text-[10px] mt-2 mb-4">
                  Our engineers can source and integrate any telecom hardware to
                  your specific requirements.
                </p>
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary font-label-caps text-[10px] py-2 px-4"
                >
                  CONSULT ENGINEER
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
