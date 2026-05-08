import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Matrix, Dahua & Legrand — Authorized Partner Catalog",
  description:
    "Browse 120+ enterprise communication, surveillance and electrical infrastructure products from Matrix Comsec, Dahua Technology and Legrand — official authorized partner catalog with full specs and brochures.",
  keywords: [
    "Matrix Comsec products",
    "Matrix IP PBX",
    "Matrix biometric attendance",
    "Dahua CCTV India",
    "Dahua IP cameras",
    "Dahua NVR",
    "Legrand wiring devices",
    "Legrand structured cabling",
    "MCB and switchgear India",
    "enterprise product catalog",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Plexus Tele-Solutions",
    description:
      "120+ products from Matrix, Dahua and Legrand — communication, surveillance and electrical infrastructure.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Catalog | Plexus Tele-Solutions",
    description:
      "Authorized partner catalog: Matrix Comsec, Dahua and Legrand.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
