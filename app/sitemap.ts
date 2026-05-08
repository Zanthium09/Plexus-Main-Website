import type { MetadataRoute } from "next";

const SITE_URL = "https://plexustelesolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.95, changeFrequency: "monthly" },
    { path: "/telecom-solutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.85, changeFrequency: "monthly" },
    { path: "/partners", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
