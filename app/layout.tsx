import type { Metadata, Viewport } from "next";
import { Inter, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const SITE_URL = "https://www.plexustelesolutions.com";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1c1c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Plexus Tele-Solutions | Telecom, Security & AV Infrastructure in India",
    template: "%s | Plexus Tele-Solutions",
  },
  description:
    "Plexus Tele-Solutions is a leading provider of telecom, security surveillance, AV, networking and building automation infrastructure for enterprises across India. Trusted by 5000+ clients since 1989.",
  applicationName: "Plexus Tele-Solutions",
  generator: "Next.js",
  keywords: [
    "Plexus Tele-Solutions",
    "telecom solutions India",
    "IP PBX",
    "cloud telephony",
    "contact center solutions",
    "CCTV surveillance India",
    "security surveillance",
    "AV systems",
    "video conferencing",
    "structured cabling",
    "building automation",
    "biometric access control",
    "fire alarm systems",
    "Avaya partner India",
    "Cisco partner India",
    "Hikvision India",
    "Dahua India",
    "Matrix Comsec",
    "Legrand India",
    "enterprise communication",
    "BFSI security",
    "smart office solutions",
    "Pan-India service",
    "system integrator India",
  ],
  authors: [{ name: "Plexus Tele-Solutions", url: SITE_URL }],
  creator: "Plexus Tele-Solutions",
  publisher: "Plexus Tele-Solutions",
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Plexus Tele-Solutions",
    title:
      "Plexus Tele-Solutions | Telecom, Security & AV Infrastructure in India",
    description:
      "Powering 5000+ enterprises with mission-critical telecom, security surveillance, AV, networking and building-automation infrastructure across India since 1989.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plexus Tele-Solutions — The Lifeline of Modern Business Communication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plexus Tele-Solutions | Telecom, Security & AV Infrastructure in India",
    description:
      "Powering 5000+ Indian enterprises with telecom, security, AV and automation infrastructure since 1989.",
    images: ["/og-image.png"],
    creator: "@plexustelesol",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons + manifest are auto-wired by Next.js conventions:
  //   - app/icon.png → favicon
  //   - app/apple-icon.png → apple-touch-icon
  //   - app/manifest.ts → /manifest.webmanifest
  verification: {
    // Add real values once you have them in Google Search Console / Bing
    // google: "google-site-verification-token",
    // other: { "msvalidate.01": "bing-verification-token" },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937, 78.9629",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Plexus Tele-Solutions",
  alternateName: "Plexus",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Leading provider of telecom, security surveillance, AV, networking and building automation infrastructure for Indian enterprises since 1989.",
  foundingDate: "1989",
  slogan: "The Lifeline of Modern Business Communication",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-1800-753-9870",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "sales@plexussol.net",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Telecommunications",
    "IP PBX",
    "Cloud Telephony",
    "Contact Center Solutions",
    "Security Surveillance",
    "CCTV Systems",
    "Audio-Visual Integration",
    "Video Conferencing",
    "Structured Cabling",
    "Networking",
    "Building Automation",
    "Access Control",
    "Fire Alarm Systems",
  ],
  sameAs: [
    "https://www.linkedin.com/company/plexus-tele-solutions",
    "https://www.facebook.com/plexustelesolutions",
    "https://twitter.com/plexustelesol",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Plexus Tele-Solutions",
  description:
    "Telecom, security, AV and automation infrastructure for Indian enterprises.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${workSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link rel="dns-prefetch" href="https://www.matrixcomsec.com" />
        <link rel="dns-prefetch" href="https://material.dahuasecurity.com" />
        <link rel="dns-prefetch" href="https://assets.legrand.com" />
      </head>
      <body className="bg-background font-body-md text-on-background">
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
