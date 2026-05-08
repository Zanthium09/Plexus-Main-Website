"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import { useState } from "react";

const filters = ["ALL RESOURCES", "BROCHURES", "DATASHEETS", "CASE STUDIES", "WHITE PAPERS"];

const resources = [
  {
    type: "CASE STUDY",
    badge: "bg-secondary",
    title: "Fiber Optic Backbone Integration for Global HQ",
    desc: "How Plexus engineered a multi-terabit connectivity lifeline for a Fortune 500 headquarters upgrade.",
    meta: "8 MIN READ",
    cta: "DOWNLOAD PDF",
    icon: "download",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7JKJFlI6X2-AgsHLl3_cSOBjmqJIDvD1qa02bkJAr05pah05aG2X4n7SCoRlCT0VhEQV5f5wT1-YV4VuPuEu2uLf4evWulq7B04ezCpa3DYBIVSRjU_VAoAs453mw5PRLm7GEa2XNWqW-yZ6S7HYhqqZrA3uKIk9tJkr0IfeqiokKOn5WwgW4rR4Ll84-WgO86QU8lHugRDcVnPRm1kZgfh0Dc3KlfHs0eV5Wrga_0Eg4sW5eEPh0HGg3RpH3xjhGV8N-gUB0hxRp",
  },
  {
    type: "DATASHEET",
    badge: "bg-primary",
    title: "Plexus Secure-Link Series: Technical Specs",
    desc: "Complete technical breakdown of our proprietary encrypted wireless communication nodes and security protocols.",
    meta: "TECHNICAL DOC",
    cta: "DOWNLOAD PDF",
    icon: "download",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCavzaSK2mDZWk_j5E3azMopr13Uh9vTtI2XzklPIycNiIlEHA8GxafaVgDYa6LiTEDj3dha_HMm9nS6fVsocYBFa_3Jz8AUg_PVlbGLWsAuPql074pFP_8Ktey6wuXHi5VN3-RFx5G37gw7GxwSFFxag_5NkFFFL10bq8Yke-C5BjFRa8fe8h9G-k0Cy5xtoL-wX52b1ku2_kZPBgYbv_PTLJC_WvO18UUiH6QC-ub-7weBaZvRRYrWALHntsHsBbPLCPgAfdQXsb7",
  },
  {
    type: "WHITE PAPER",
    badge: "bg-on-tertiary-container",
    title: "The Future of 5G Enterprise Integration",
    desc: "Analyzing the shift from traditional copper to hybrid cellular-mesh networking in commercial sectors.",
    meta: "12 PAGE READ",
    cta: "READ ONLINE",
    icon: "open_in_new",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPOsCkssP6eoIfIVtOz4a2qcws13hLxrW8l-cQV8gJky4C-VkO9aOwrm9oYhvf6ENuhTB8-6WknOSDbipz6TB0ZWrcgqrNVlzXCfKeYWLikIQITBva35Px-Ntsd8KRMvaR54bxriOm6_ZUInYQkjxnDpH8jW3_X0oBNsv58m6sZijydm0DkKOEVlVMRJDu0n-CI2ZHj5Q2e-Nanlhp11XTOMzxCPbG7JIX79trZAYX6we_QWpPy5Kg3piBSg8DQbE1mFj9Pzectr2M",
  },
  {
    type: "BROCHURE",
    badge: "bg-primary",
    title: "Enterprise Solutions Overview 2024",
    desc: "A comprehensive guide to Plexus telecommunications, AV, and security services for the modern enterprise.",
    meta: "MARCH 2024",
    cta: "DOWNLOAD PDF",
    icon: "download",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZxSiygvKBBMBAY6u90VHNlbZ8v4NLV2hnuujyMVwZu5M8Q1BCl7-e-tpOgr2jmOPRAQcd3ainb8boil8m5TsqTb3R5fpsKcPFAs1toZ4NQEin_0WKlkvmhlnZ3ceXQrn_XCJa7ng-PwazHSf7_CwoxKOAAMtECnNp5iltQaOYS6wlp29F5I6Hi0-bmYyrqogcVPwJL_M8c5NqLMgV3Hfho2cQvNRHHzDnGvPqJNZhL9SMvoRXq50hfJlWdMo14ItQFMihzCbnSOZx",
  },
  {
    type: "CASE STUDY",
    badge: "bg-secondary",
    title: "Smart Campus Connectivity: University of Tech",
    desc: "Implementing an IoT-ready wireless grid across a 500-acre academic campus with zero downtime.",
    meta: "10 MIN READ",
    cta: "DOWNLOAD PDF",
    icon: "download",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkIy9BpV1Rg584eGgPIptliWP95_MO0Nsh7vZh9fXt_Qxo6eDCaIOFpMt_y-hnJrz7Od-mL0zA_crdaJdGDRc2flaYUDWfeyiAtzok7gsKvIHnkKEwO2SwllsApLFKryNQ2X0VZRofWSX936w5ylzZd8uJ6CMQ-AUXw3SGw2Fx8BpUW02coLn9J84NmukGOAcBas8KmaKRWsp7vbL6m5vxA2FDC_Kp4fknB6fN1-XkCSQbQMTVcxyavMU-D70N1DyiZM-bDoBVQPag",
  },
  {
    type: "DATASHEET",
    badge: "bg-primary",
    title: "Unified Communications Gateway Specs",
    desc: "Detailed hardware specifications for our 2024 flagship VoIP and SIP Trunking integration gateways.",
    meta: "TECHNICAL DOC",
    cta: "DOWNLOAD PDF",
    icon: "download",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1u8yTCbVdF66a-gfkI6UwfP3Nchbgs2lrE0QfkCGFV1TszNRC_sFT5Ljzbdl5MCZF329Vp7fq0Cn1IVJH96lQdadAQ78V5ZVAXZIULVVa3q3ypolNQBH9tTW29-PxWNSqKIJ0YXvB2a50fmtWMPmXMrFBdzVExkIYTAoBj6iFfqGwntfJCw0Jd7hNQH_LUpgm4aVTB7fvnjmLbTzK2x59zOrmGoyq-9T2_sodfrLky6ji2CRq5Tvv45F3udwjFMBBpV-i8RHMozZ1",
  },
];

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("ALL RESOURCES");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  const filtered = resources.filter((r) => {
    const matchFilter =
      activeFilter === "ALL RESOURCES" ||
      r.type === activeFilter.replace(/S$/, "") ||
      `${r.type}S` === activeFilter;
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

      {/* Hero */}
      <section className="relative bg-surface py-section-padding overflow-hidden">
        <div className="absolute inset-0 pulse-bg opacity-40"></div>
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-caps text-secondary mb-stack-sm block">
              KNOWLEDGE CENTER
            </span>
            <h1 className="font-h1 text-h1 text-primary mb-stack-lg uppercase">
              Technical Resources & Insights
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Access our comprehensive library of technical documentation,
              industry analysis, and real-world deployment success stories.
              Engineering the future of business connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-outline-variant py-6">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row gap-gutter items-center justify-between">
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 font-label-caps border whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-on-surface-variant hover:text-primary border-outline-variant hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-3 bg-surface-container-low border-none focus:ring-2 focus:ring-primary font-body-md text-sm"
              placeholder="Search documentation..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-section-padding bg-background">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {filtered.map((r) => (
              <div
                key={r.title}
                className="group bg-white border border-outline-variant hover:border-primary transition-all duration-300 overflow-hidden flex flex-col shadow-sm hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${r.badge} text-white text-[10px] font-bold px-2 py-1 tracking-widest uppercase`}
                    >
                      {r.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-h3 text-h3 text-primary mb-stack-md mb-4 line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-stack-lg mb-6 flex-1">
                    {r.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-variant">
                    <span className="font-label-caps text-on-surface-variant">
                      {r.meta}
                    </span>
                    <a
                      href="#"
                      className="flex items-center gap-2 font-label-caps text-primary group-hover:text-secondary transition-colors"
                    >
                      {r.cta}{" "}
                      <span className="material-symbols-outlined text-sm">
                        {r.icon}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-on-surface-variant">
              No resources match your search.
            </div>
          )}
          <div className="mt-20 flex justify-center items-center gap-2 flex-wrap">
            <button
              aria-label="Previous page"
              className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors text-on-surface-variant"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-label-caps">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors text-on-surface-variant font-label-caps">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors text-on-surface-variant font-label-caps">
              3
            </button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors text-on-surface-variant font-label-caps">
              12
            </button>
            <button
              aria-label="Next page"
              className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors text-on-surface-variant"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-container-low border-t border-outline-variant py-section-padding">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-h2 text-h2 text-primary mb-stack-md mb-4 uppercase">
              Stay Connected to the Pulse
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Receive quarterly updates on emerging telecommunication
              technologies, technical white papers, and security industry
              trends.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="flex-1 bg-white border border-outline-variant px-6 py-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              placeholder="Business Email Address"
            />
            <button
              type="submit"
              className="bg-primary text-white px-10 py-4 font-label-caps hover:bg-secondary transition-all active:scale-95"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
