import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://industrial-learning-hub.vercel.app";

  const routes = ["", "/courses", "/freebies", "/blog", "/about", "/contact", "/legal"].map((p) => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  return routes;
}
