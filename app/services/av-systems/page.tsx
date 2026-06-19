import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "AV Systems | Boardrooms, Digital Signage & Professional Audio",
  description:
    "Professional AV integration: immersive boardrooms, video conferencing, digital signage networks, sound masking and video walls — designed and deployed by certified AV engineers.",
  alternates: { canonical: "/services/av-systems" },
  openGraph: {
    title: "AV Systems | Plexus Tele-Solutions",
    description: "Immersive audio-visual experiences for boardrooms, auditoriums and enterprise spaces.",
    url: "/services/av-systems",
    type: "website",
  },
};

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKAd9y9unlgYGcYnZqFAADfyBbp-tQsZwggTrp-bNhLVHo8p_o4GJndbPZF6iSEAXIOKmpIJbvUIkjqI-FV3k3r0nmf4LAIvWlXnhY2zaEq4fLmazD3ydVJ9A8eIVZwPiL9G-yn5-813sPypk1bYKQzKIrNZndUGIAhQaWTjhi1uquxoQxlApN1LSqb6UgTvLJHMfRVfKVCq_yQgCpUD2mFWuAIiHI8WgO8N5yLazn3iZuuYO67XvvQbMz6R11m9J2lFlLF60csa7q";

const offerings = [
  ["meeting_room", "Boardroom AV", "Fully integrated meeting rooms with 4K displays, wireless presentation, and one-touch control systems."],
  ["video_call", "Video Conferencing", "Enterprise-grade VC systems from Poly and Cisco — optimized for hybrid and remote collaboration."],
  ["campaign", "Digital Signage", "Dynamic content networks across lobbies, retail floors, and campuses — managed from a central CMS."],
  ["surround_sound", "Professional Audio", "Acoustic design, sound masking, PA systems, and conference-grade microphone arrays."],
  ["tv", "Video Walls", "LED and LCD video wall installations for command centers, broadcast studios, and public venues."],
  ["settings_remote", "AV Control Systems", "Crestron and AMX control systems providing intuitive, unified management of all AV assets."],
];

const why = [
  ["verified", "CTS Certified", "Certified Technology Specialists ensuring design and installation to InfoComm standards."],
  ["architecture", "Acoustic Design", "Room acoustics analysis and treatment for optimal audio performance in any space."],
  ["integration_instructions", "System Integration", "Seamless integration with existing IT, telephony, and building management systems."],
  ["support_agent", "Post-Install Support", "SLA-backed maintenance, firmware updates, and on-site engineer response."],
];

const partners = ["BOSE", "POLY", "SAMSUNG", "NEC", "PANASONIC", "LG"];

export default function AVSystemsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "AV Systems" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-section-padding overflow-hidden bg-white border-b border-outline-variant">
        <div className="absolute inset-0 pulse-bg opacity-40" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-stack-lg">
            <AnimateIn direction="up" delay={0}>
              <span className="font-label-caps text-secondary tracking-[0.2em]">
                IMMERSIVE EXPERIENCES
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary max-w-xl">
                AV Systems
              </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                From executive boardrooms to large-format auditoriums, we design
                audio-visual environments that communicate with clarity, impact,
                and technical precision.
              </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.24}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-sm hover:border-b-2 hover:border-secondary transition-all"
                >
                  REQUEST AV DESIGN
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
            <div className="relative h-[460px] bg-surface-container rounded-lg overflow-hidden group">
              <Image
                src={heroImg}
                alt="Professional AV boardroom integration"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute bottom-6 left-6 bg-secondary text-white p-5 rounded shadow-xl max-w-[200px]">
                <p className="font-h3 text-h3 leading-tight">200+</p>
                <p className="font-label-caps text-[10px] uppercase mt-1">
                  Boardrooms Integrated
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
              Why Plexus for AV
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              We don&apos;t just mount screens — we engineer experiences. Every
              AV installation is acoustically modeled, technically integrated,
              and user-trained for day-one productivity.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label-caps py-4 px-8 border-b-2 border-on-tertiary-container"
            >
              Book a Consultation
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
                  Transform Your Spaces with Professional AV
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                  Let our AV engineers design a system that elevates your
                  communication, collaboration, and brand presence.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-base hover:border-b-4 hover:border-on-tertiary-container transition-all"
                >
                  Request an AV Consultation
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}