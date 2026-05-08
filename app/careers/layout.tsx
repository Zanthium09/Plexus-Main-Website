import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Build the Lifeline at Plexus Tele-Solutions",
  description:
    "Join Plexus Tele-Solutions — work on critical telecom, security and AV infrastructure for India's largest enterprises. Open roles in network engineering, cybersecurity, AV solutions and account management.",
  keywords: [
    "telecom jobs India",
    "network engineer jobs",
    "cybersecurity careers India",
    "AV engineer jobs",
    "system integrator careers",
    "Plexus careers",
    "OEM certified engineer jobs",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Plexus Tele-Solutions",
    description:
      "Build mission-critical infrastructure with India's most trusted system integrator. Open roles across engineering, operations and sales.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Plexus Tele-Solutions",
    description:
      "Open roles in network engineering, cybersecurity, AV and account management.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
