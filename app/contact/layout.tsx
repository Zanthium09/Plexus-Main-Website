import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Plexus Tele-Solutions | Get a Quote, Pan-India Service",
  description:
    "Talk to a Plexus Tele-Solutions expert. Request a quote for telecom, security, AV or networking infrastructure. Pan-India installation and 24/7 SLA-driven support. Call 1800-753-9870.",
  keywords: [
    "contact Plexus Tele-Solutions",
    "telecom solutions quote",
    "CCTV installation quote India",
    "AV systems consultation",
    "structured cabling quote",
    "enterprise IT support India",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Plexus Tele-Solutions",
    description:
      "Talk to an expert. Get a quote for telecom, security, AV or networking infrastructure across India.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Plexus Tele-Solutions",
    description:
      "Get a quote, request a site visit, or talk to a specialist. Pan-India service.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
