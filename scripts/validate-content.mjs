// Kontrollerar bloggartiklarna innan bygget (npm run build kör den via
// "prebuild"). Fel stoppar bygget, varningar skrivs bara ut.
//
// Fel: synliga platshållare, externa bilder (blockeras av CSP img-src 'self'),
// innehållsförteckningar som pekar på ankare som inte finns, saknad titel/datum.
// Varningar: fält som SEO/GEO-mallen förutsätter (metaTitle, excerpt, summary,
// category, updated) saknas eller har olämplig längd.
//
// Kör:  node scripts/validate-content.mjs

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CATEGORIES = ["ai-konsult", "customer-success", "marknad", "saas"];

function slugifyHeading(text) {
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

const errors = [];
const warnings = [];

for (const file of fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (data.status === "draft") continue;
  const err = (msg) => errors.push(`${file}: ${msg}`);
  const warn = (msg) => warnings.push(`${file}: ${msg}`);

  if (!data.title) err("title saknas");
  if (!data.date) err("date saknas");

  if (/\[(KÄLLA|EGET EXEMPEL)[^\]]*\]/.test(content)) err("synlig platshållare ([KÄLLA…] eller [EGET EXEMPEL…])");

  for (const m of content.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)/g)) {
    err(`extern bild ${m[1].slice(0, 60)}…: kör node scripts/localize-blog-images.mjs`);
  }

  const ids = new Set();
  for (const m of content.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const explicit = m[1].match(/\{#([^}]+)\}\s*$/);
    if (explicit && !/^[A-Za-z0-9_-]+$/.test(explicit[1])) err(`rubrik-id {#${explicit[1]}} får bara innehålla a–z, 0–9, - och _`);
    ids.add(explicit ? explicit[1] : slugifyHeading(m[1].trim()));
  }
  for (const m of content.matchAll(/\]\(#([^)\s]+)\)/g)) {
    if (!ids.has(m[1])) err(`länk till #${m[1]} saknar motsvarande rubrik`);
  }

  const metaTitle = data.metaTitle || data.title || "";
  if (!data.metaTitle) warn("metaTitle saknas (titeln används i sökresultatet)");
  if (metaTitle.length > 60) warn(`metaTitle är ${metaTitle.length} tecken (max 60)`);
  const excerpt = data.excerpt || "";
  if (!excerpt) warn("excerpt saknas (används som meta description)");
  else if (excerpt.length < 70 || excerpt.length > 165) warn(`excerpt är ${excerpt.length} tecken (70–165)`);
  if (excerpt.endsWith("…")) warn("excerpt slutar med … (ser maskinklippt ut)");
  if (!data.summary) warn("summary saknas (artikeln får inget Kort svar)");
  if (!CATEGORIES.includes(data.category)) warn(`category saknas eller är okänd (${data.category ?? "–"})`);
  if (!data.updated) warn("updated saknas");
  if (data.canonical_url) warn("canonical_url ignoreras av sajten, ta bort fältet");
  if (!/\]\(\/(blog|ai-|agentiska|customer-success|contact-center|seo-geo|tjanster)/.test(content)) {
    warn("inga interna länkar i texten");
  }
}

for (const w of warnings) console.warn(`varning  ${w}`);
for (const e of errors) console.error(`FEL      ${e}`);
console.log(`validate-content: ${errors.length} fel, ${warnings.length} varningar`);
if (errors.length > 0) process.exit(1);
