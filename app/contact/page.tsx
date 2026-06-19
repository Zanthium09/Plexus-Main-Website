"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import LocationsMap, { locations } from "@/components/LocationsMap";
import { useState } from "react";

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmcjOg2zMbswC8qV3mTosllMwzEPFs3RwF7oAySmZgC_-8VOF_ddlFar2uUBy905NQTnQbNnAiAofWxFHi4K9CC44QX_9OtXJpNEsCtQvkfcOeSaVa_Q8f_Mb7lG_1etJHn8mi0qUHrrd8GGAhITqbCOSSgIEBgLICDRBQi-T-09D9W2kfHZ_cQMtLOdXp1vbW1kuGaKggJ4gfwLF2qWez2yxZqHr3985TwkfQGwjsiaaYediezHpCiPRPuVuncV2LprtWx1jv6QM1";

const tabs = ["General", "Request Quote", "Partner/Dealer", "Support"];

const tabEmail = (tab: string) =>
  tab === "Support" ? "support@plexussol.net" : "sales@plexussol.net";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [activeLocation, setActiveLocation] = useState("dombivli");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    interest: "Tele-Solutions Infrastructure",
    branch: "Dombivli HQ",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = tabEmail(activeTab);
    const subject = encodeURIComponent(
      `[${activeTab}] Inquiry from ${form.fullName} – ${form.company}`
    );
    const body = encodeURIComponent(
      `Inquiry Type: ${activeTab}\nName: ${form.fullName}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Interest: ${form.interest}\nPreferred Branch: ${form.branch}\n\nMessage:\n${form.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      {/* Hero */}
      <section className="relative py-section-padding px-8 bg-white border-b border-outline-variant pulse-bg">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <AnimateIn direction="up" delay={0}>
              <span className="font-label-caps text-secondary uppercase tracking-widest mb-4 block">
                Connect with Experts
              </span>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.08}>
              <h1 className="font-h1 text-h1 text-primary mb-6">
                Building the Lifelines of Global Business
              </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.16}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Our infrastructure experts are standing by to engineer your
                mission-critical connectivity. Reach out to our regional hubs for
                tailored enterprise solutions.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn direction="left" delay={0.15}>
            <div className="relative h-[400px] w-full bg-slate-100 overflow-hidden rounded-xl border border-outline-variant">
              <Image
                src={heroImg}
                alt="Corporate office lobby"
                fill
                className="object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Locations */}
      <section className="py-section-padding px-8 bg-surface" id="locations">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-8 border border-outline-variant rounded-lg bg-white">
            <h2 className="font-h2 text-h2 text-primary mb-8">Our Locations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: stacked location cards */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setActiveLocation(loc.id)}
                    className={`flex-1 p-6 border rounded-lg transition-all cursor-pointer ${
                      activeLocation === loc.id
                        ? "border-primary ring-1 ring-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-h3 text-h3 text-primary">{loc.name}</h3>
                        <p className="font-label-caps text-on-surface-variant text-[10px] mt-1">
                          {loc.tag}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-secondary">
                        location_on
                      </span>
                    </div>
                    <div className="space-y-3 font-body-md text-on-surface-variant text-sm">
                      <p className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm mt-1">
                          map
                        </span>
                        <span>{loc.address}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm">
                          call
                        </span>
                        <a
                          href={`tel:${loc.phone.replace(/\s/g, "")}`}
                          className="hover:text-primary"
                        >
                          {loc.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm">
                          mail
                        </span>
                        <a href={`mailto:${loc.email}`} className="hover:text-primary">
                          {loc.email}
                        </a>
                      </p>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        loc.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-6 w-full inline-block text-center border border-primary text-primary font-label-caps py-2.5 hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                ))}
              </div>

              {/* Right: map */}
              <div className="lg:col-span-8 relative rounded-lg border border-outline-variant overflow-hidden h-[320px] sm:h-[420px] lg:h-full min-h-[480px]">
                <LocationsMap active={activeLocation} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-section-padding px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <AnimateIn direction="up">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-primary">Inquiry Gateway</h2>
              <p className="text-on-surface-variant font-body-md mt-2">
                Route your request to the right department for an accelerated response.
              </p>
            </div>
          </AnimateIn>
          <div className="max-w-3xl mx-auto border border-outline-variant rounded shadow-lg overflow-hidden">
            <div className="flex bg-surface-container-low border-b border-outline-variant overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 py-4 px-6 font-label-caps text-xs whitespace-nowrap transition-colors ${
                    activeTab === t
                      ? "border-b-2 border-secondary bg-white text-primary"
                      : "text-on-surface-variant hover:bg-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-on-tertiary-container mb-4 block">
                    mark_email_read
                  </span>
                  <h3 className="font-h3 text-h3 mb-4">Inquiry Received</h3>
                  <p className="text-on-surface-variant mb-2">
                    Thank you {form.fullName}. Your {activeTab} enquiry has been
                    directed to{" "}
                    <span className="font-semibold text-primary">
                      {tabEmail(activeTab)}
                    </span>
                    . Our team at {form.branch} will reach out within 24 business
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Company Name
                    </label>
                    <input
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                      placeholder="Enterprise Ltd."
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Phone Number
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Email Address
                    </label>
                    <input
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                      placeholder="john@enterprise.com"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Service Interest
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                    >
                      <option>Tele-Solutions Infrastructure</option>
                      <option>AV Integration</option>
                      <option>Security Systems</option>
                      <option>Managed IT Services</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Preferred Branch
                    </label>
                    <select
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                    >
                      <option>Dombivli HQ</option>
                      <option>Andheri Branch</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      Message / Requirement Details
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="border border-outline-variant focus:border-primary focus:ring-0 outline-none rounded-none p-3 text-sm font-body-md"
                      placeholder="Briefly describe your infrastructure needs..."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button
                      className="w-full bg-primary text-on-primary py-4 font-label-caps tracking-widest hover:shadow-xl hover:translate-y-[-2px] transition-all"
                      type="submit"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-section-padding px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
            staggerDelay={0.1}
          >
            {[
              {
                title: "Sales Inquiries",
                desc: "Enterprise deals and project consulting.",
                email: "sales@plexussol.net",
                phone: "+91 7045106106",
                border: "border-secondary",
              },
              {
                title: "Technical Support",
                desc: "24/7 Managed services and ticketing.",
                email: "support@plexussol.net",
                phone: "022-25109063",
                border: "border-primary",
              },
              {
                title: "Careers",
                desc: "Join our engineering elite team.",
                email: "deepak@plexussol.net",
                phone: "+91 7045405405",
                border: "border-tertiary-fixed-dim",
              },
            ].map((c) => (
              <div key={c.title} className={`p-8 border-l-4 ${c.border} bg-white shadow-sm`}>
                <h4 className="font-h3 text-h3 mb-2">{c.title}</h4>
                <p className="text-on-surface-variant text-sm mb-4">{c.desc}</p>
                <p className="font-bold text-primary">{c.email}</p>
                <p className="text-on-surface-variant">{c.phone}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}