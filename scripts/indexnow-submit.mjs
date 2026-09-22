// IndexNow-submission för successifier.se
//
// Skickar nya och ändrade URL:er till IndexNow (Bing, Yandex, Seznam m.fl.) så
// att de crawlas direkt i stället för att vänta på nästa schemalagda crawl.
//
// Lägen:
//   node scripts/indexnow-submit.mjs --changed [--snapshot fil.json] [--since ÅÅÅÅ-MM-DD]
//       Jämför den live sitemapen med en sparad ögonblicksbild (url → lastmod)
//       och skickar bara URL:er som är nya eller har fått nytt lastmod. Sparar
//       sedan den nya ögonblicksbilden. Utan tidigare ögonblicksbild skickas
//       inget, utom URL:er med lastmod >= --since om det anges. Körs automatiskt
//       efter varje produktionsdeploy av .github/workflows/indexnow.yml.
//   node scripts/indexnow-submit.mjs --urls <url> [<url> ...]
//       Skickar exakt de angivna URL:erna.
//   node scripts/indexnow-submit.mjs --all
//       Skickar alla URL:er i sitemapen. Använd sparsamt: IndexNow är till för
//       ändrade sidor, och att pinga oförändrade sidor urholkar förtroendet.
//   --dry-run  visar vad som skulle skickas utan att skicka.
//
// Nyckeln måste finnas publicerad på  https://<host>/<KEY>.txt  (se public/).
// Svaret från IndexNow loggas alltid (HTTP-status och eventuell text).

import fs from "fs";

const KEY = "353fce3a7a4d405982de292bdfb12540";
// Kanonisk host (matchar sitemap, metadataBase och structured data).
const HOST = "www.successifier.se";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

function parseArgs(argv) {
  const args = { mode: null, urls: [], snapshot: ".indexnow/snapshot.json", since: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--changed") args.mode = "changed";
    else if (a === "--all") args.mode = "all";
    else if (a === "--urls") args.mode = "urls";
    else if (a === "--snapshot") args.snapshot = argv[++i];
    else if (a === "--since") args.since = argv[++i] || null;
    else if (a === "--dry-run") args.dryRun = true;
    else if (args.mode === "urls") args.urls.push(...a.split(/[\s,]+/).filter(Boolean));
    else throw new Error(`Okänt argument: ${a}`);
  }
  if (!args.mode) throw new Error("Ange --changed, --urls <url ...> eller --all.");
  return args;
}

async function fetchSitemap() {
  const res = await fetch(SITEMAP, { redirect: "follow", headers: { "Cache-Control": "no-cache" } });
  if (!res.ok) throw new Error(`Kunde inte hämta sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  const entries = {};
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    const lastmod = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
    if (loc) entries[loc] = lastmod;
  }
  if (Object.keys(entries).length === 0) throw new Error("Inga <loc>-URL:er hittades i sitemap.");
  return entries;
}

async function verifyKey() {
  const res = await fetch(KEY_LOCATION, { redirect: "follow" });
  const body = res.ok ? (await res.text()).trim() : "";
  if (!res.ok || body !== KEY) {
    throw new Error(
      `Nyckelfilen är inte publicerad korrekt på ${KEY_LOCATION} ` +
        `(HTTP ${res.status}, innehåll "${body.slice(0, 40)}"). ` +
        "Deploya siten först så att public/-filen är live.",
    );
  }
}

function readSnapshot(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return null;
  }
}

function writeSnapshot(file, entries) {
  const dir = file.includes("/") ? file.slice(0, file.lastIndexOf("/")) : ".";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(entries, null, 2) + "\n");
}

function changedUrls(previous, current, since) {
  if (!previous) {
    if (!since) return [];
    return Object.entries(current)
      .filter(([, lastmod]) => lastmod && lastmod.slice(0, 10) >= since)
      .map(([url]) => url);
  }
  return Object.entries(current)
    .filter(([url, lastmod]) => !(url in previous) || previous[url] !== lastmod)
    .map(([url]) => url);
}

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const text = await res.text();
  return { status: res.status, text };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  let urls = [];
  let current = null;
  if (args.mode === "urls") {
    urls = args.urls;
  } else {
    current = await fetchSitemap();
    console.log(`Sitemap: ${Object.keys(current).length} URL:er.`);
    if (args.mode === "all") {
      urls = Object.keys(current);
    } else {
      const previous = readSnapshot(args.snapshot);
      if (!previous) {
        console.log(`Ingen tidigare ögonblicksbild (${args.snapshot}).` + (args.since ? ` Skickar URL:er med lastmod >= ${args.since}.` : " Sparar baslinje och skickar inget."));
      }
      urls = changedUrls(previous, current, args.since);
      const removed = previous ? Object.keys(previous).filter((u) => !(u in current)) : [];
      if (removed.length) {
        console.log(`Borttagna ur sitemap sedan förra körningen (${removed.length}):`);
        removed.forEach((u) => console.log("  - " + u));
        // Borttagna URL:er (301/404) skickas också, så att sökmotorn ser ändringen.
        urls.push(...removed);
      }
    }
  }

  const bad = urls.filter((u) => !u.startsWith(`https://${HOST}/`));
  if (bad.length) throw new Error(`URL:er utanför ${HOST}: ${bad.join(", ")}`);

  if (urls.length === 0) {
    console.log("Inga nya eller ändrade URL:er. Inget skickas till IndexNow.");
  } else {
    console.log(`URL:er att skicka (${urls.length}):`);
    urls.forEach((u) => console.log("  " + u));
    if (args.dryRun) {
      console.log("--dry-run: inget skickat.");
    } else {
      await verifyKey();
      const { status, text } = await submit(urls);
      // 200 = accepterad, 202 = accepterad men nyckelvalidering pågår.
      const ok = status === 200 || status === 202;
      console.log(`IndexNow svarade HTTP ${status}${text ? `: ${text.slice(0, 500)}` : ""}`);
      if (!ok) process.exitCode = 1;
    }
  }

  if (args.mode === "changed" && current && !args.dryRun && process.exitCode !== 1) {
    writeSnapshot(args.snapshot, current);
    console.log(`Ögonblicksbild sparad: ${args.snapshot}`);
  }
}

main().catch((err) => {
  console.error("Fel: " + err.message);
  process.exit(1);
});
