import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Centraliserad markdown-rendering så artikelmallarna (sv/en) beter sig lika.
// Bilder får explicita dimensioner (CLS/Core Web Vitals) och lazy-loading.
const md = new Marked({
  renderer: {
    image({ href, title, text }) {
      const titleAttr = title ? ` title="${title}"` : "";
      const alt = text ?? "";
      return `<img src="${href}" alt="${alt}"${titleAttr} width="1536" height="1024" loading="lazy" decoding="async" />`;
    },
  },
});

export function renderMarkdown(content: string): string {
  return md.parse(content) as string;
}

// Tar bort artikelns inledande H1 (markdownens "# Titel") eftersom mallen
// redan renderar titeln som sidans enda <h1>. Undviker dubbla H1-taggar.
function stripLeadingH1(content: string): string {
  return content.replace(/^\s*#\s+[^\n]+\n+/, "");
}

export interface PostMeta {
  slug: string;
  title: string;
  metaTitle?: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: (data.slug as string) || slugFromFilename(file),
        title: (data.title as string) || "",
        metaTitle: (data.metaTitle as string) || undefined,
        date: data.date ? new Date(data.date as string).toISOString() : "",
        excerpt: (data.excerpt as string) || "",
        tags: (data.tags as string[]) || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Kurerade ämneskluster för intern länkning. Taggarna är unika per inlägg,
// så relaterade artiklar väljs utifrån tema i stället för taggöverlapp.
const CLUSTERS: Record<string, string[]> = {
  "ai-konsult": [
    "varfor-varje-b2b-bolag-i-sverige-behover-en-ai-konsult-2026",
    "ai-konsult-for-b2b-5-projekt-som-ger-roi-inom-90-dagar",
    "ai-konsult-i-sverige-hur-hittar-du-ratt-partner-for-ditt-b2b-bolag",
  ],
  "customer-success": [
    "customer-success-plattform-for-saas-sa-valjer-du-ratt-2026",
    "customer-success-plattform-sa-integrerar-du-den-med-ditt-crm",
    "de-7-basta-customer-success-verktygen-for-b2b-2026",
    "ai-automation-i-kontaktcenter-sverige-fran-kostnadscenter-till-strategisk-tillga",
  ],
  "marknad": [
    "seo-konsult-for-b2b-foretag-sa-dominerar-du-google-med-ratt-strategi",
    "ai-synlighet-i-marknadsforing-2026-allt-du-behover-veta",
    "ai-driven-content-marknadsforing-b2b-strategi-som-skalar",
    "sa-okar-linkedin-annonsering-din-pipeline-som-b2b-konsult",
  ],
};

export function clusterForSlug(slug: string): string | null {
  for (const [cluster, slugs] of Object.entries(CLUSTERS)) {
    if (slugs.includes(slug)) return cluster;
  }
  return null;
}

export interface RelatedService {
  href: string;
  label: string;
  description: string;
}

// Relevant tjänstesida per kluster, för "Relaterade tjänster" på artiklar.
export function relatedServices(slug: string, locale: "sv" | "en" = "sv"): RelatedService[] {
  const cluster = clusterForSlug(slug);
  const homeAnchor = locale === "en" ? "/en#sama" : "/#sama";
  const sv = {
    konsult: { href: "/ai-konsult", label: "AI-konsult & agentic AI", description: "Vi kartlägger, bygger och driftsätter autonoma AI-agenter i er verksamhet." },
    support: { href: "/ai-kundtjanst", label: "Successifier Support", description: "AI-kundtjänst som läser, sorterar och föreslår svar på era kundmail." },
    sama: { href: homeAnchor, label: "SAMA – AI-synlighet & SEO", description: "Vår plattform som driver synlighet på Google, LinkedIn och i AI-svar." },
  };
  // Engelska tjänstesidor finns inte separat – vi länkar till sektioner på /en.
  const en = {
    konsult: { href: "/ai-konsult", label: "AI consulting & agentic AI", description: "We map, build, and deploy autonomous AI agents in your operations." },
    support: { href: "/ai-kundtjanst", label: "Successifier Support", description: "AI customer service that reads, sorts, and drafts replies to your emails." },
    sama: { href: homeAnchor, label: "SAMA – AI visibility & SEO", description: "Our platform driving visibility on Google, LinkedIn, and in AI answers." },
  };
  const s = locale === "en" ? en : sv;
  switch (cluster) {
    case "ai-konsult":
      return [s.konsult, s.sama];
    case "customer-success":
      return [s.support, s.konsult];
    case "marknad":
      return [s.sama, s.konsult];
    default:
      return [s.konsult, s.support];
  }
}

// Relaterade artiklar: samma kluster först, fyll på med senaste från övriga.
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
  const cluster = clusterForSlug(slug);
  const sameCluster = cluster
    ? all.filter((p) => p.slug !== slug && clusterForSlug(p.slug) === cluster)
    : [];
  const rest = all.filter(
    (p) => p.slug !== slug && !sameCluster.some((c) => c.slug === p.slug),
  );
  return [...sameCluster, ...rest].slice(0, limit);
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const postSlug = (data.slug as string) || slugFromFilename(file);
    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: (data.title as string) || "",
        metaTitle: (data.metaTitle as string) || undefined,
        date: data.date ? new Date(data.date as string).toISOString() : "",
        excerpt: (data.excerpt as string) || "",
        tags: (data.tags as string[]) || [],
        content: stripLeadingH1(content),
      };
    }
  }
  return null;
}
