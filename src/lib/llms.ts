import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SITE_URL, categoryLabel, getAllPosts, type Category } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const CATEGORY_ORDER: Category[] = ["ai-konsult", "customer-success", "marknad", "saas"];

const HEADER = `# Successifier.se

> Svensk konsult inom AI, automation, Customer Success och Contact Center. Vi bygger och driftsätter AI-agenter, automationsflöden och kundfunktioner, och driver SEO och marknadsföring på Google, LinkedIn och Meta med vår egen plattform SAMA för AI-synlighet, GEO-readiness och content-publicering. Grundare: Rickard Collander. Baserade i Sverige, uppdrag internationellt.

Successifier hjälper B2B- och SaaS-bolag att gå från AI-strategi till drift: kartläggning, pilot, integration och skalning av AI-agenter (3–6 veckor till produktion), AI-kundtjänst för e-post (Successifier Support), Customer Success-program för minskad churn och högre NRR, samt AI-driven SEO/GEO och annonsering. Allt innehåll på sajten är på svenska.

## Huvudsidor

- [Startsida](${SITE_URL}/): Tjänster inom AI-konsulting, automation, Customer Success och AI-driven marknadsföring samt SAMA-plattformen. Innehåller FAQ och kontakt.
- [AI-konsult & agentic AI](${SITE_URL}/ai-konsult): Kartläggning, design, utveckling, integration och drift av autonoma AI-agenter, med människan i loopen.
- [Successifier Support – AI-kundtjänst för e-post](${SITE_URL}/ai-kundtjanst): AI som läser, kategoriserar och föreslår svar på kundmail med säkerhetspoäng och självlärande kunskapsbas. Över 100 000 hanterade mail.
- [Blogg](${SITE_URL}/blog): Guider och analyser om AI-konsulting, automation, Customer Success, SEO och GEO.
- [Home (English)](${SITE_URL}/en): English overview of services.

## Kontakt

- E-post: rc@successifier.com
- Telefon: +46 72 213 64 22
- LinkedIn: https://www.linkedin.com/in/rickard-collander/
`;

export function buildLlmsTxt(): string {
  const posts = getAllPosts();
  const sections = CATEGORY_ORDER.map((cat) => {
    const items = posts.filter((p) => p.category === cat);
    if (items.length === 0) return "";
    const lines = items.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`);
    return `## Artiklar: ${categoryLabel(cat)}\n\n${lines.join("\n")}\n`;
  });
  const uncategorized = posts.filter((p) => !p.category);
  if (uncategorized.length > 0) {
    sections.push(
      `## Övriga artiklar\n\n${uncategorized.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`).join("\n")}\n`,
    );
  }
  return `${HEADER}\n${sections.filter(Boolean).join("\n")}\n## Optional\n\n- [Fullständigt innehåll (llms-full.txt)](${SITE_URL}/llms-full.txt): Alla artiklar i sin helhet som markdown.\n- [Sitemap](${SITE_URL}/sitemap.xml)\n`;
}

// Fullständig version: varje artikel i sin helhet som markdown, med metadata
// i klartext så att AI-system kan citera med korrekt titel, datum och URL.
export function buildLlmsFullTxt(): string {
  const posts = getAllPosts();
  const articles = posts.map((p) => {
    const file = path.join(BLOG_DIR, `${p.slug}.md`);
    const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
    const body = raw ? matter(raw).content.replace(/^\s*#\s+[^\n]+\n+/, "").trim() : "";
    const meta = [
      `URL: ${SITE_URL}/blog/${p.slug}`,
      `Publicerad: ${p.date.slice(0, 10)}`,
      `Uppdaterad: ${(p.updated || p.date).slice(0, 10)}`,
      `Författare: Rickard Collander, Successifier.se`,
      p.category ? `Kategori: ${categoryLabel(p.category)}` : null,
      p.keywords.length ? `Nyckelord: ${p.keywords.join(", ")}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const summary = p.summary ? `\n**Kort svar:** ${p.summary}\n` : "";
    return `---\n\n# ${p.title}\n\n${meta}\n${summary}\n${body}\n`;
  });
  return `${HEADER}\n${articles.join("\n")}`;
}
