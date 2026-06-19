"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateIn, { StaggerContainer } from "@/components/AnimateIn";
import { useState } from "react";

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlD9plwghc6ooj6TtheMfss_rstnEQdJ6m3pzmJGOhUpn3mQXEXLltrcUYmARqnuBzV5o_ywXV5LJ5HgoQOdgbhfBJLuH4_8M33cSPDmtOJHNlZezcD-dd9D3hHuIJt8jLMCcOlqNrAyE2FRyy-JCHo77xaNe98KTJ2ZdxgjqiATdUwIxrnMDrMSIU0sBDN8xqJoI9pSDmGJTCj__MPPFA9AMG7ZAyG3V-yD1b7DzNqvagnfjB464slwaUEgah4G_CWXRX7K3u8Lw1";

const valueProps = [
  ["settings_input_component", "Critical Impact", "Work on infrastructure projects that matter. From tele-health systems to financial backbones, your work literally saves lives and economies."],
  ["trending_up", "Growth Velocity", "We invest in the growth of our engineers with dedicated certification pathways for CISCO, Avaya, and Microsoft Azure systems."],
  ["security", "Elite Culture", "Join a meritocratic environment where technical precision is celebrated and operational excellence is the standard protocol."],
];

const positions = [
  { title: "Systems Engineer", location: "LONDON, UK • REMOTE OPTIONAL" },
  { title: "AV Solutions Lead", location: "SINGAPORE • ON-SITE" },
  { title: "Cybersecurity Analyst", location: "SYDNEY, AU • HYBRID" },
  { title: "Account Manager", location: "CHICAGO, IL • FIELD" },
];

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "Network Engineering",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    cv?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const nameOk = (v: string) => /^[A-Za-z][A-Za-z\s.'-]*$/.test(v.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!nameOk(form.firstName))
      next.firstName = "Enter a valid first name (letters only).";
    if (!nameOk(form.lastName))
      next.lastName = "Enter a valid last name (letters only).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (!cvFile) next.cv = "Please upload your CV (PDF).";
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={heroImg}
            alt="Modern office environment with engineers"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 pulse-bg opacity-20"></div>
        <div className="relative max-w-[1280px] mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="font-label-caps text-secondary-fixed-dim block mb-stack-md mb-4">
              CAREERS AT PLEXUS
            </span>
            <h1 className="font-h1 text-white text-h1 mb-stack-lg mb-8">
              Build the Lifeline
            </h1>
            <p className="font-body-lg text-white/80 mb-stack-lg mb-8">
              Join a team of elite engineers and technical specialists dedicated
              to maintaining the critical infrastructure that keeps global
              commerce in motion. Your expertise is the pulse of the digital
              age.
            </p>
            <a
              href="#positions"
              className="inline-block bg-white text-primary font-label-caps py-4 px-10 hover:border-b-2 hover:border-secondary transition-all"
            >
              VIEW OPEN ROLES
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-primary mb-4">Why Plexus?</h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              We provide the stability of an established corporate leader with
              the agility of a tech innovator.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {valueProps.map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white p-10 border border-outline-variant transition-all group hover:border-primary"
              >
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
                  {icon}
                </span>
                <h3 className="font-h3 text-h3 mb-4">{title}</h3>
                <p className="font-body-md text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="py-section-padding bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-4">
            <div>
              <span className="font-label-caps text-secondary block mb-2">
                OPPORTUNITIES
              </span>
              <h2 className="font-h2 text-h2 text-primary">Join the Network</h2>
            </div>
            <select
              aria-label="Department filter"
              className="border border-outline-variant font-label-caps text-[10px] px-4 py-2 bg-surface"
            >
              <option>ALL DEPARTMENTS</option>
              <option>ENGINEERING</option>
              <option>OPERATIONS</option>
              <option>SALES</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Featured */}
            <div className="sm:col-span-2 sm:row-span-2 bg-primary-container p-8 sm:p-12 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-secondary text-[10px] font-bold tracking-widest mb-6 uppercase">
                  HOT ROLE
                </span>
                <h3 className="font-h3 text-3xl mb-4">
                  Senior Network Architect
                </h3>
                <div className="flex flex-wrap gap-6 mb-8 text-white/60 font-label-caps text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>{" "}
                    Andheri , IND
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>{" "}
                    FULL-TIME
                  </span>
                </div>
                <p className="font-body-md text-white/70 mb-10 max-w-md">
                  Lead the design of next-generation unified communications for
                  Fortune 500 clients. Expertise in SIP and SD-WAN required.
                </p>
              </div>
              <a
                href="#apply"
                className="relative z-10 w-fit bg-white text-primary font-label-caps py-4 px-8 hover:bg-secondary-fixed transition-colors"
              >
                Apply Now
              </a>
              <div className="absolute right-0 bottom-0 opacity-10">
                <span className="material-symbols-outlined text-[200px]">
                  hub
                </span>
              </div>
            </div>
            {positions.map((p) => (
              <div
                key={p.title}
                className="bg-surface p-8 border border-outline-variant flex flex-col justify-between hover:border-primary transition-all"
              >
                <div>
                  <h3 className="font-h3 text-xl mb-2">{p.title}</h3>
                  <span className="font-label-caps text-[10px] text-on-surface-variant mb-4 block">
                    {p.location}
                  </span>
                </div>
                <a
                  href="#apply"
                  className="font-label-caps text-primary border-b border-primary w-fit pb-1 hover:text-secondary hover:border-secondary transition-all"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section
        id="apply"
        className="py-section-padding bg-surface-container-low border-t border-outline-variant"
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-h2 text-h2 text-primary mb-6">
                General Application
              </h2>
              <p className="font-body-lg text-on-surface-variant mb-8">
                Don&apos;t see a role that fits? Our network is always
                expanding. Submit your credentials for our talent pool and
                we&apos;ll contact you when a lifeline opens up.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white p-2">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-lg">Resume Review</h4>
                    <p className="text-sm text-on-surface-variant">
                      Our technical leads personally review every single
                      application within 48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary text-white p-2">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-lg">Tech Assessment</h4>
                    <p className="text-sm text-on-surface-variant">
                      Engineers will undergo a rigorous real-world scenario
                      evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 border border-outline-variant">
              {submitted ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-on-tertiary-container mb-4 block">
                    check_circle
                  </span>
                  <h3 className="font-h3 text-h3 mb-4">Application Received</h3>
                  <p className="text-on-surface-variant">
                    Thanks {form.firstName}! Our team will review your details
                    and contact you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant">
                        FIRST NAME <span className="text-secondary">*</span>
                      </label>
                      <input
                        required
                        value={form.firstName}
                        onChange={(e) =>
                          setForm({ ...form, firstName: e.target.value })
                        }
                        className="border border-outline-variant focus:ring-0 focus:border-primary p-3 bg-surface outline-none"
                        placeholder="John"
                        type="text"
                      />
                      {errors.firstName && (
                        <span className="text-xs text-secondary">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-[10px] text-on-surface-variant">
                        LAST NAME <span className="text-secondary">*</span>
                      </label>
                      <input
                        required
                        value={form.lastName}
                        onChange={(e) =>
                          setForm({ ...form, lastName: e.target.value })
                        }
                        className="border border-outline-variant focus:ring-0 focus:border-primary p-3 bg-surface outline-none"
                        placeholder="Doe"
                        type="text"
                      />
                      {errors.lastName && (
                        <span className="text-xs text-secondary">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      EMAIL ADDRESS <span className="text-secondary">*</span>
                    </label>
                    <input
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="border border-outline-variant focus:ring-0 focus:border-primary p-3 bg-surface outline-none"
                      placeholder="j.doe@example.com"
                      type="email"
                    />
                    {errors.email && (
                      <span className="text-xs text-secondary">{errors.email}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      AREA OF INTEREST
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                      className="border border-outline-variant focus:ring-0 focus:border-primary p-3 bg-surface outline-none"
                    >
                      <option>Network Engineering</option>
                      <option>Cybersecurity</option>
                      <option>Managed Services</option>
                      <option>Sales & Accounts</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-[10px] text-on-surface-variant">
                      UPLOAD CV (PDF) <span className="text-secondary">*</span>
                    </label>
                    <label
                      htmlFor="cv-upload"
                      className={`border-2 border-dashed p-8 text-center bg-surface-bright hover:bg-white transition-colors cursor-pointer block ${
                        errors.cv ? "border-secondary" : "border-outline-variant"
                      }`}
                    >
                      <span className="material-symbols-outlined text-outline mb-2 block">
                        upload_file
                      </span>
                      <p className="text-xs text-on-surface-variant">
                        {cvFile ? cvFile.name : "Drag and drop or click to upload"}
                      </p>
                      <input
                        id="cv-upload"
                        type="file"
                        accept="application/pdf"
                        className="sr-only"
                        onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                      />
                    </label>
                    {errors.cv && (
                      <span className="text-xs text-secondary">{errors.cv}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-label-caps py-5 hover:border-b-4 hover:border-secondary transition-all"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
