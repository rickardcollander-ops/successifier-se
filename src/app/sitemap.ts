import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.successifier.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts.reduce((acc, p) => (p.updated > acc ? p.updated : acc), "");
  const latestDate = latest ? new Date(latest) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: latestDate, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/ai-konsult`, lastModified: latestDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-kundtjanst`, lastModified: latestDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: latestDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/en`, lastModified: latestDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/en/blog`, lastModified: latestDate, changeFrequency: "weekly", priority: 0.5 },
  ];

  // Artiklarna finns bara på svenska; /en/blog/[slug] har canonical mot
  // /blog/[slug] och listas därför inte här.
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
