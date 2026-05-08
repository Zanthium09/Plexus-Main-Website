import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Case Studies, Whitepapers & Technical Insights",
  description:
    "Plexus Tele-Solutions resource hub — case studies, technical whitepapers, deployment briefs and industry insights on telecom, security surveillance, AV integration and building automation.",
  keywords: [
    "telecom case studies",
    "security surveillance whitepapers",
    "enterprise AV case studies",
    "system integration insights",
    "Plexus resources",
    "infrastructure deployment briefs",
  ],
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | Plexus Tele-Solutions",
    description:
      "Case studies, whitepapers and technical insights from real enterprise deployments.",
    url: "/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Plexus Tele-Solutions",
    description:
      "Case studies, whitepapers and deployment briefs.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
