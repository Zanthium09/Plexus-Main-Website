import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Plexus Tele-Solutions",
    short_name: "Plexus",
    description:
      "India's leading provider of telecom, security, AV and automation infrastructure for enterprises since 1989.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9f9",
    theme_color: "#bb0014",
    orientation: "portrait-primary",
    lang: "en-IN",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
