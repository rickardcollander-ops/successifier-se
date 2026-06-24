// IndexNow-submission för successifier.se
//
// Läser den live publicerade sitemap.xml, extraherar alla URL:er och skickar
// dem till IndexNow (Bing, Yandex m.fl.) så att de kröp om direkt i stället för
// att vänta på nästa schemalagda crawl. Kör om varje gång du publicerat nytt
// innehåll:  node scripts/indexnow-submit.mjs
//
// Nyckeln måste finnas publicerad på  https://<host>/<KEY>.txt  (se public/).

const KEY = "353fce3a7a4d405982de292bdfb12540";
const HOST = "successifier.se";
const SITEMAP = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP, { redirect: "follow" });
  if (!res.ok) throw new Error(`Kunde inte hämta sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) throw new Error("Inga <loc>-URL:er hittades i sitemap.");
  return urls;
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

async function submit(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  const text = await res.text();
  return { status: res.status, text };
}

async function main() {
  console.log(`Verifierar nyckel på ${KEY_LOCATION} ...`);
  await verifyKey();
  console.log("✓ Nyckeln är live.\n");

  const urls = await fetchSitemapUrls();
  console.log(`Hittade ${urls.length} URL:er i sitemap:`);
  urls.forEach((u) => console.log("  " + u));

  console.log(`\nSkickar till IndexNow (${ENDPOINT}) ...`);
  const { status, text } = await submit(urls);

  // 200 = accepterad, 202 = accepterad men nyckelvalidering pågår.
  if (status === 200 || status === 202) {
    console.log(`✓ IndexNow svarade HTTP ${status} – ${urls.length} URL:er inskickade.`);
  } else {
    console.error(`✗ IndexNow svarade HTTP ${status}: ${text}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fel: " + err.message);
  process.exit(1);
});
