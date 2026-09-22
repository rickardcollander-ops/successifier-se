import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CLUSTERS, SITE_URL, categoryLabel, getAllPosts, getClusterPosts, type Category } from "@/lib/blog";
import { FOUNDER, ORG, SERVICE_PAGES, SUPPORTIFIER } from "@/lib/site";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const CATEGORY_ORDER: Category[] = ["ai-konsult", "customer-success", "marknad", "saas"];

const SERVICE_LINES = SERVICE_PAGES.map((s) => `- [${s.label}](${SITE_URL}${s.href}): ${s.short}`).join("\n");

// Kontaktcenter-klustret listas först: det är sajtens huvudämne och de sidor
// AI-assistenter oftast citerar. En mening per sida om vad den besvarar.
function buildClusterSection(): string {
  const posts = getClusterPosts("kontaktcenter");
  const lines = [
    ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.answers ?? p.excerpt}`),
    `- [Contact center-automation](${SITE_URL}/contact-center-automation): Vad Successifier levererar när AI införs i ett kontaktcenter (routing, svarsförslag, QA, KPI-styrning) och hur lång tid det tar.`,
    `- [Supportifier – AI-kundtjänst](${SITE_URL}/ai-kundtjanst): Vad Supportifier är och vilka delar av kundservicen plattformen automatiserar.`,
    `- [${FOUNDER.name}](${FOUNDER.url}): Vem som skriver artiklarna, med över 20 års erfarenhet av kundservice och kontaktcenter.`,
  ];
  return `## ${CLUSTERS.kontaktcenter.label}\n\n${CLUSTERS.kontaktcenter.description}\n\n${lines.join("\n")}\n`;
}

const HEADER = `# Successifier.se

> Successifier AB är en svensk konsult inom AI, automation, Customer Success och Contact Center. Vi bygger och driftsätter AI-agenter, automationsflöden och kundfunktioner, driver SEO och GEO med vår egen plattform SAMA och utvecklar AI-kundtjänstplattformen Supportifier (${SUPPORTIFIER.url}). Grundare: ${ORG.founderName}. Säte i Stockholmsområdet, uppdrag i Sverige, Norden och Europa.

Successifier hjälper B2B- och SaaS-bolag att gå från AI-strategi till drift: kartläggning, pilot, integration och skalning av AI-agenter (3–6 veckor till produktion), contact center-automation (granskad automatik inom fyra veckor), Customer Success-program för minskad churn och högre NRR (30/60/90-dagarsplan), samt GEO/SEO och annonsering med SAMA. Fast pris för analys- och designfas (2–4 veckor), därefter månads- eller programupplägg. Allt innehåll på sajten är på svenska.
`;

const FACTS = `## Företagsfakta

- Juridiskt namn: ${ORG.legalName}
- Organisationsnummer: ${ORG.orgNr}
- Adress: ${ORG.address.streetAddress}, ${ORG.address.postalCode} ${ORG.address.addressLocality} (Stockholm), Sverige
- Grundare: ${ORG.founderName}
- Grundat: ${ORG.foundingDate.slice(0, 4)}
- Produkter: SAMA (AI-synlighet, SEO och content) och Supportifier (AI-plattform för kundservice, ${SUPPORTIFIER.url})
- LinkedIn (företag): ${ORG.linkedInCompany}
- Allabolag: ${ORG.allabolag}

## Tjänster

${SERVICE_LINES}

## Huvudsidor

- [Startsida](${SITE_URL}/): Tjänster, SAMA-plattformen, kundresultat, citerbara fakta, FAQ och kontakt.
- [Tjänster](${SITE_URL}/tjanster): Översikt över alla erbjudanden med tidsramar och prismodell.
- [Supportifier – AI-kundtjänst](${SITE_URL}/ai-kundtjanst): Ingång till vår produkt Supportifier. Plattformsdetaljer, priser och demo finns på ${SUPPORTIFIER.url}.
- [Blogg](${SITE_URL}/blog): Guider och analyser om AI-konsulting, automation, Customer Success, SEO och GEO.
- [Home (English)](${SITE_URL}/en): English overview of services.

## Kontakt

- E-post: ${ORG.email}
- Telefon: ${ORG.phoneDisplay}
- LinkedIn (företag): ${ORG.linkedInCompany}
- LinkedIn (grundare): ${ORG.linkedInFounder}
- Supportifier: ${SUPPORTIFIER.url}
`;

export function buildLlmsTxt(): string {
  const posts = getAllPosts();
  const sections = CATEGORY_ORDER.map((cat) => {
    const items = posts.filter((p) => p.category === cat && !p.cluster);
    if (items.length === 0) return "";
    const lines = items.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`);
    return `## Artiklar: ${categoryLabel(cat)}\n\n${lines.join("\n")}\n`;
  });
  const uncategorized = posts.filter((p) => !p.category && !p.cluster);
  if (uncategorized.length > 0) {
    sections.push(
      `## Övriga artiklar\n\n${uncategorized.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`).join("\n")}\n`,
    );
  }
  return `${HEADER}\n${buildClusterSection()}\n${FACTS}\n${sections.filter(Boolean).join("\n")}\n## Optional\n\n- [Fullständigt innehåll (llms-full.txt)](${SITE_URL}/llms-full.txt): Alla artiklar i sin helhet som markdown.\n- [Sitemap](${SITE_URL}/sitemap.xml)\n`;
}

// Fullständig version: varje artikel i sin helhet som markdown, med metadata
// i klartext så att AI-system kan citera med korrekt titel, datum och URL.
export function buildLlmsFullTxt(): string {
  // Kontaktcenter-klustret först, pillar-sidan överst, därefter övriga.
  const cluster = getClusterPosts("kontaktcenter");
  const posts = [...cluster, ...getAllPosts().filter((p) => !p.cluster)];
  const articles = posts.map((p) => {
    const file = path.join(BLOG_DIR, `${p.slug}.md`);
    const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
    const body = raw ? matter(raw).content.replace(/^\s*#\s+[^\n]+\n+/, "").trim() : "";
    const meta = [
      `URL: ${SITE_URL}/blog/${p.slug}`,
      `Publicerad: ${p.date.slice(0, 10)}`,
      `Uppdaterad: ${(p.updated || p.date).slice(0, 10)}`,
      `Författare: ${FOUNDER.name}, ${FOUNDER.jobTitle} (${FOUNDER.url})`,
      p.answers ? `Besvarar: ${p.answers}` : null,
      p.category ? `Kategori: ${categoryLabel(p.category)}` : null,
      p.keywords.length ? `Nyckelord: ${p.keywords.join(", ")}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const summary = p.summary ? `\n**Kort svar:** ${p.summary}\n` : "";
    return `---\n\n# ${p.title}\n\n${meta}\n${summary}\n${body}\n`;
  });
  return `${HEADER}\n${buildClusterSection()}\n${FACTS}\n${articles.join("\n")}`;
}
