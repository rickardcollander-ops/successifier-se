import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
export const SITE_URL = "https://www.successifier.se";
export const AUTHOR = {
  name: "Rickard Collander",
  id: `${SITE_URL}/#rickard-collander`,
  url: `${SITE_URL}/#om-oss`,
  image: `${SITE_URL}/rc2.jpg`,
  linkedin: "https://www.linkedin.com/in/rickard-collander/",
  jobTitle: "Grundare, Successifier.se",
};

// Slugifierar rubriktext till ett ankar-id (svenska tecken → ASCII).
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/é/g, "e")
    .replace(/&amp;|&/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

// Rubriker i markdown kan ha explicit id enligt "## Rubrik {#mitt-id}".
// Marked stöder inte syntaxen, så vi plockar ut id:t själva. Utan explicit id
// slugifieras rubriktexten så att innehållsförteckningens ankare fungerar.
const HEADING_ID_RE = /\s*\{#([A-Za-z0-9_-]+)\}\s*$/;

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href) && !href.startsWith(SITE_URL) && !href.startsWith("https://successifier.se");
}

// Centraliserad markdown-rendering så artikelmallarna (sv/en) beter sig lika.
// Bilder får explicita dimensioner (CLS/Core Web Vitals) och lazy-loading.
const md = new Marked({
  renderer: {
    heading(this: { parser: { parseInline(tokens: Tokens.Generic[]): string } }, token: Tokens.Heading) {
      const explicit = token.text.match(HEADING_ID_RE);
      let html = this.parser.parseInline(token.tokens).replace(HEADING_ID_RE, "");
      const plain = token.text.replace(HEADING_ID_RE, "").trim();
      const id = explicit ? explicit[1] : slugifyHeading(plain);
      html = html.trim();
      return `<h${token.depth} id="${id}">${html}</h${token.depth}>\n`;
    },
    link(this: { parser: { parseInline(tokens: Tokens.Generic[]): string } }, token: Tokens.Link) {
      const text = this.parser.parseInline(token.tokens);
      const titleAttr = token.title ? ` title="${token.title}"` : "";
      const ext = isExternal(token.href) ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `<a href="${token.href}"${titleAttr}${ext}>${text}</a>`;
    },
    image({ href, title, text }: Tokens.Image) {
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

export type Category = "ai-konsult" | "customer-success" | "marknad" | "saas";

export interface FaqItem {
  q: string;
  a: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  metaTitle?: string;
  date: string;
  updated: string;
  excerpt: string;
  summary?: string;
  tags: string[];
  keywords: string[];
  category: Category | null;
  image?: string;
  imageAlt?: string;
  wordCount: number;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
  faq: FaqItem[];
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

function toIso(value: unknown): string {
  if (!value) return "";
  const d = new Date(value as string);
  return isNaN(d.getTime()) ? "" : d.toISOString();
}

// Legacy-kluster för inlägg som saknar "category" i frontmatter.
const LEGACY_CLUSTERS: Record<Category, string[]> = {
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
  marknad: [
    "seo-konsult-for-b2b-foretag-sa-dominerar-du-google-med-ratt-strategi",
    "ai-synlighet-i-marknadsforing-2026-allt-du-behover-veta",
    "ai-driven-content-marknadsforing-b2b-strategi-som-skalar",
    "sa-okar-linkedin-annonsering-din-pipeline-som-b2b-konsult",
  ],
  saas: [],
};

const CATEGORY_LABELS: Record<Category, string> = {
  "ai-konsult": "AI-konsult & automation",
  "customer-success": "Customer Success & support",
  marknad: "SEO, GEO & marknadsföring",
  saas: "SaaS & tillväxt",
};

export function categoryLabel(category: Category | null): string | null {
  return category ? CATEGORY_LABELS[category] : null;
}

function resolveCategory(slug: string, raw: unknown): Category | null {
  if (typeof raw === "string" && raw in LEGACY_CLUSTERS) return raw as Category;
  for (const [cluster, slugs] of Object.entries(LEGACY_CLUSTERS)) {
    if (slugs.includes(slug)) return cluster as Category;
  }
  return null;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(content: string): number {
  return stripMarkdown(content).split(/\s+/).filter(Boolean).length;
}

// Plockar ut frågor och svar ur sektionen "## Vanliga frågor" (H3 = fråga,
// efterföljande stycken = svar) så att de kan exponeras som FAQPage-schema.
export function extractFaq(content: string): FaqItem[] {
  const lines = content.split("\n");
  const start = lines.findIndex((l) => /^##\s+Vanliga frågor/i.test(l) || /^##\s+Frequently Asked Questions/i.test(l));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  let current: FaqItem | null = null;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s/.test(line)) break;
    const q = line.match(/^###\s+(.+?)\s*(\{#[A-Za-z0-9_-]+\})?\s*$/);
    if (q) {
      if (current) items.push(current);
      current = { q: stripMarkdown(q[1]), a: "" };
      continue;
    }
    if (current && line.trim()) {
      current.a = (current.a ? current.a + " " : "") + stripMarkdown(line);
    }
  }
  if (current) items.push(current);
  return items.filter((f) => f.q && f.a);
}

function firstParagraph(content: string): string {
  const body = stripLeadingH1(content);
  const para = body.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !p.startsWith("#") && !p.startsWith("!") && !p.startsWith("|") && !p.startsWith("-"));
  return para ? stripMarkdown(para) : "";
}

function buildMeta(file: string, raw: string): PostMeta & { body: string } {
  const { data, content } = matter(raw);
  const slug = (data.slug as string) || slugFromFilename(file);
  const date = toIso(data.date);
  const updated = toIso(data.updated) || date;
  const wordCount = countWords(content);
  const imageMatch = content.match(/!\[([^\]]*)\]\(([^)\s]+)/);
  const image = (data.image as string) || (imageMatch ? imageMatch[2] : undefined);
  const imageAlt = (data.imageAlt as string) || (imageMatch ? imageMatch[1] : undefined);
  const excerpt = ((data.excerpt as string) || firstParagraph(content)).trim();
  return {
    slug,
    title: (data.title as string) || "",
    metaTitle: (data.metaTitle as string) || undefined,
    date,
    updated,
    excerpt,
    summary: (data.summary as string) || undefined,
    tags: (data.tags as string[]) || [],
    keywords: (data.keywords as string[]) || [],
    category: resolveCategory(slug, data.category),
    image: image && image.startsWith("/") ? image : undefined,
    imageAlt,
    wordCount,
    readingMinutes: Math.max(1, Math.round(wordCount / 200)),
    body: content,
  };
}

function isPublished(data: Record<string, unknown>): boolean {
  return data.status !== "draft";
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      if (!isPublished(matter(raw).data)) return null;
      const meta = buildMeta(file, raw);
      const { body: _body, ...rest } = meta;
      void _body;
      return rest as PostMeta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function clusterForSlug(slug: string): Category | null {
  const post = getAllPosts().find((p) => p.slug === slug);
  return post ? post.category : null;
}

export function getPostsByCategory(category: Category): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
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
    case "saas":
      return [s.konsult, s.support];
    default:
      return [s.konsult, s.support];
  }
}

// Relaterade artiklar: samma kluster först, fyll på med senaste från övriga.
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const all = getAllPosts();
  const cluster = clusterForSlug(slug);
  const sameCluster = cluster
    ? all.filter((p) => p.slug !== slug && p.category === cluster)
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
    const { data } = matter(raw);
    const postSlug = (data.slug as string) || slugFromFilename(file);
    if (postSlug !== slug || !isPublished(data)) continue;
    const meta = buildMeta(file, raw);
    const { body, ...rest } = meta;
    const content = stripLeadingH1(body);
    return { ...rest, content, faq: extractFaq(content) };
  }
  return null;
}
