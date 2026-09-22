import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { PAGE_UPDATED, SITE_URL } from "@/lib/site";

// lastmod ska spegla sidans senaste faktiska innehållsändring, aldrig bygg-
// eller deploytid. Statiska sidor läser PAGE_UPDATED (src/lib/site.ts),
// artiklar läser "updated" i frontmatter. Bloggens översikt ändras när en
// artikel publiceras eller uppdateras och får därför det senaste av dem.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPost = posts.reduce((acc, p) => (p.updated > acc ? p.updated : acc), "");

  const page = (
    path: string,
    changeFrequency: "weekly" | "monthly",
    priority: number,
  ): MetadataRoute.Sitemap[number] => {
    const updated = PAGE_UPDATED[path];
    if (!updated) throw new Error(`PAGE_UPDATED saknar datum för ${path} (src/lib/site.ts)`);
    return { url: `${SITE_URL}${path === "/" ? "/" : path}`, lastModified: new Date(updated), changeFrequency, priority };
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    page("/", "weekly", 1),
    page("/tjanster", "monthly", 0.9),
    page("/ai-agenter", "monthly", 0.9),
    page("/ai-konsult", "monthly", 0.9),
    page("/seo-geo", "monthly", 0.9),
    page("/customer-success", "monthly", 0.9),
    page("/contact-center-automation", "monthly", 0.9),
    page("/ai-kundtjanst", "monthly", 0.8),
    { url: `${SITE_URL}/blog`, lastModified: new Date(latestPost), changeFrequency: "weekly", priority: 0.8 },
    page("/om/rickard-collander", "monthly", 0.6),
    page("/en", "monthly", 0.7),
    { url: `${SITE_URL}/en/blog`, lastModified: new Date(latestPost), changeFrequency: "weekly", priority: 0.5 },
  ];

  // Artiklarna finns bara på svenska; /en/blog/[slug] har canonical mot
  // /blog/[slug] och listas därför inte här.
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly" as const,
    priority: post.pillar ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
