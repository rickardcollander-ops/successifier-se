// Självhostar och optimerar bloggbilder.
//
// Går igenom content/blog/*.md, hittar den första markdown-bilden i varje
// inlägg och ser till att den ligger lokalt som /blog/<slug>.webp:
//   - externa URL:er (t.ex. Supabase) laddas ner
//   - inbäddade data:-URI:er avkodas
//   - lokala PNG/JPG konverteras
// Bilden skalas till max 1536 px bredd och sparas som WebP (kvalitet 82),
// vilket krymper ~2,3 MB PNG till ~100–200 kB. Markdown-referensen skrivs
// om till den lokala sökvägen, och gamla PNG-original i public/blog tas bort.
//
// Kör:  node scripts/localize-blog-images.mjs
// Kräver: sharp (devDependency).

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content/blog");
const OUT_DIR = path.join(ROOT, "public/blog");
const MAX_WIDTH = 1536;
const QUALITY = 82;

const IMAGE_RE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/;

fs.mkdirSync(OUT_DIR, { recursive: true });

async function loadSource(src) {
  if (src.startsWith("data:")) {
    const m = src.match(/^data:[^;]+;base64,(.*)$/s);
    if (!m) throw new Error("Okänt data:-URI-format");
    return Buffer.from(m[1], "base64");
  }
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src, { redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status} vid hämtning av ${src}`);
    return Buffer.from(await res.arrayBuffer());
  }
  const local = path.join(ROOT, "public", src.replace(/^\//, ""));
  if (!fs.existsSync(local)) throw new Error(`Lokal bild saknas: ${local}`);
  return fs.readFileSync(local);
}

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  let changed = 0;

  for (const file of files) {
    const mdPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(mdPath, "utf8");
    const slugMatch = raw.match(/^slug:\s*"?([^"\n]+)"?\s*$/m);
    const slug = slugMatch ? slugMatch[1].trim() : file.replace(/\.md$/, "");
    const m = raw.match(IMAGE_RE);
    if (!m) {
      console.log(`– ${slug}: ingen bild`);
      continue;
    }
    const [full, alt, src] = m;
    const target = `/blog/${slug}.webp`;
    const outPath = path.join(OUT_DIR, `${slug}.webp`);

    if (src === target && fs.existsSync(outPath)) {
      console.log(`= ${slug}: redan lokal WebP`);
      continue;
    }

    try {
      const input = await loadSource(src);
      const buf = await sharp(input)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toBuffer();
      fs.writeFileSync(outPath, buf);

      const next = raw.replace(full, `![${alt}](${target})`);
      fs.writeFileSync(mdPath, next);
      changed++;

      // Ta bort gammalt lokalt original om det låg i public/blog.
      if (src.startsWith("/blog/") && src !== target) {
        const old = path.join(ROOT, "public", src.replace(/^\//, ""));
        if (fs.existsSync(old)) fs.unlinkSync(old);
      }
      console.log(`✓ ${slug}: ${(input.length / 1024).toFixed(0)} kB → ${(buf.length / 1024).toFixed(0)} kB`);
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`\nKlart. ${changed} inlägg uppdaterade.`);
}

main();
