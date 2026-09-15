---
title: "GEO-checklista för B2B-sajter 2026: llms.txt, schema och citerbarhet"
metaTitle: "GEO-checklista 2026: llms.txt, schema & citerbarhet"
slug: "geo-checklista-for-b2b-sajter-2026-llms-txt-schema-och-citerbarhet"
date: 2026-09-15T08:00:00.000Z
updated: 2026-09-15T08:00:00.000Z
excerpt: "GEO-checklista i 12 punkter för svenska B2B-sajter: AI-crawlers i robots.txt, llms.txt, strukturerad data och innehåll som AI-sökmotorer faktiskt citerar."
summary: "För att bli citerad av ChatGPT, Perplexity och Gemini behöver en B2B-sajt släppa in AI-crawlers i robots.txt, publicera en automatiskt genererad llms.txt, ha konsekvent strukturerad data (Organization, Person, Article, FAQPage) och serverrenderat innehåll som öppnar med ett kort svar. Lägg till synliga uppdateringsdatum, IndexNow mot Bing och mätning av AI-omnämnanden per sökmotor, så har du grunden för GEO-readiness på plats."
language: "sv"
category: "marknad"
tags:
  - "GEO-checklista"
keywords:
  - "GEO-checklista"
  - "Generative Engine Optimization"
  - "llms.txt"
  - "AI-crawlers robots.txt"
  - "schema markup AI-synlighet"
  - "citerbarhet ChatGPT Perplexity"
status: "published"
---

# GEO-checklista för B2B-sajter 2026: llms.txt, schema och citerbarhet

Kort svar: en B2B-sajt blir citerad av AI-sökmotorer när tre saker stämmer samtidigt. AI-bottarna får hämta innehållet, innehållet är maskinläsbart (strukturerad data, llms.txt, serverrenderad HTML) och varje sida ger ett svar som går att lyfta ut ordagrant. Den här GEO-checklistan går igenom exakt vad det innebär i 12 punkter.

Generative Engine Optimization är inte ett nytt yrke, men det är en ny kravlista. De flesta svenska B2B-sajter vi tittar på har bra SEO-grund och ändå missar de tre eller fyra av punkterna nedan, oftast utan att någon vet om det. En felkonfigurerad robots.txt eller ett företagsnamn som stavas olika på tre ställen räcker för att en AI-modell ska välja en konkurrent som källa.

Checklistan är skriven för dig som är marknadschef, SEO-ansvarig eller webbansvarig och vill ha en konkret lista att gå igenom med utvecklare eller byrå. Strategin bakom finns i vår guide om [hur B2B-bolag rankar i ChatGPT och Perplexity](/blog/ai-synlighet-2026-hur-b2b-bolag-rankar-i-chatgpt-och-perplexity); här handlar det om tekniken.

## Innehåll

- [Så använder du checklistan](#sa-anvander-du-checklistan)
- [Crawlbarhet: släpp in rätt AI-bottar](#crawlbarhet-ai-bottar)
- [llms.txt och llms-full.txt](#llms-txt)
- [Strukturerad data som bygger entiteter](#strukturerad-data)
- [Citerbart innehåll](#citerbart-innehall)
- [Entitetskonsekvens och färskhet](#entitetskonsekvens-och-farskhet)
- [Teknisk grund och mätning](#teknik-och-matning)
- [Nästa steg](#nasta-steg)

## Viktigaste punkterna

| Punkt | Vad det innebär |
| --- | --- |
| Crawlbarhet kommer först | Om GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot eller Bingbot blockeras i robots.txt spelar resten av checklistan ingen roll. |
| llms.txt är en karta, inte magi | Filen hjälper AI-system att hitta dina viktigaste sidor, men den ersätter inte bra innehåll och bör genereras automatiskt från din sajt. |
| Strukturerad data bygger entiteter | Konsekventa Organization-, Person- och Article-scheman med samma @id gör att AI-modeller kopplar ihop företag, författare och innehåll. |
| Citerbarhet är ett format | Kort svar högst upp, en definition per sida, frågor som rubriker och tabeller med siffror gör texten möjlig att lyfta ut i ett AI-svar. |
| Mät per sökmotor | AI-synlighet syns inte i vanlig rank-tracking; du behöver prompttester, referral-data från AI-domäner och ett verktyg som följer omnämnanden över tid. |

## Så använder du checklistan {#sa-anvander-du-checklistan}

Gå igenom punkterna i ordning. De första sex avgör om AI-systemen alls kan läsa och förstå sajten; de sista sex avgör om de väljer att citera dig. Kolumnen "verifiera med" anger hur du kontrollerar att punkten faktiskt är klar, inte bara beställd.

| Punkt | Vad du gör | Verifiera med |
| --- | --- | --- |
| 1. AI-bottar i robots.txt | Tillåt explicit GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot och Bingbot | Hämta /robots.txt och läs varje User-agent-block |
| 2. Bing-index | Verifiera sajten i Bing Webmaster Tools och skicka sitemap | Sök `site:dindomän.se` i Bing |
| 3. llms.txt | Publicera /llms.txt med H1, blockquote och länklistor | Öppna filen i webbläsaren, validera markdown |
| 4. llms-full.txt och automatik | Generera båda filerna vid varje publicering | Kontrollera att ny artikel dyker upp inom en timme |
| 5. Organization, Person, Article | JSON-LD på alla sidor med datePublished och dateModified | Schema-validator och sidkälla |
| 6. FAQPage, BreadcrumbList, @id | Samma @id för företag och författare på hela sajten | Sök efter @id i renderad HTML på tre olika sidor |
| 7. Kort svar högst upp | Första stycket besvarar sidans fråga på 2–3 meningar | Läs bara första stycket; står svaret där? |
| 8. Q&A, tabeller, siffror med källa | Minst en tabell och en FAQ-sektion per pelarsida | Manuell genomgång av 10 viktigaste sidorna |
| 9. Entitetskonsekvens | Samma namn och beskrivning på sajt, LinkedIn, kataloger | Jämför sida vid sida i ett kalkylblad |
| 10. Färskhet | Kvartalsrutin, dateModified, lastmod i sitemap, IndexNow | Sitemap-lastmod matchar sidans dateModified |
| 11. Teknisk grund | Canonical, hreflang, Core Web Vitals, serverrenderad HTML, alt-texter | Visa sidkälla utan JavaScript |
| 12. Mätning | Prompttester per sökmotor, GA4-referral från AI-domäner | Månadsrapport med omnämnandegrad per motor |

## Crawlbarhet: släpp in rätt AI-bottar {#crawlbarhet-ai-bottar}

Det här är punkten där flest sajter faller. Många CMS-mallar, säkerhetsplugin och CDN-regler blockerar okända user agents som standard, och AI-bottar räknas ofta som okända.

### 1. Skriv explicita regler för AI-crawlers i robots.txt

AI-bolagen använder olika bottar för olika syften, och de ska behandlas olika. En träningscrawler samlar data till framtida modeller; en sökcrawler hämtar sidor som kan citeras i ett svar direkt. Vill du synas i AI-svar måste sökcrawlerna få komma in.

| Bot | Ägare | Används till | Rekommendation för B2B |
| --- | --- | --- | --- |
| GPTBot | OpenAI | Träningsdata | Tillåt om du vill finnas i modellens grundkunskap |
| OAI-SearchBot | OpenAI | ChatGPT:s sökfunktion | Tillåt |
| ChatGPT-User | OpenAI | Hämtning när en användare ber om en sida | Tillåt |
| ClaudeBot | Anthropic | Crawling för Claude | Tillåt |
| PerplexityBot | Perplexity | Perplexitys index | Tillåt |
| Google-Extended | Google | Styr om innehåll får användas för Gemini-träning | Tillåt; påverkar inte vanlig Google-sökning |
| Bingbot | Microsoft | Bing-index, som även Copilot bygger på | Tillåt alltid |

Ett minimalt exempel som släpper in bottarna men håller dem borta från interna sökresultat och kundportaler:

```txt
# robots.txt – AI-crawlers
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Google-Extended
Allow: /
Disallow: /sok/
Disallow: /portal/

User-agent: *
Allow: /
Disallow: /sok/
Disallow: /portal/

Sitemap: https://www.dindoman.se/sitemap.xml
```

Kontrollera också brandvägg och CDN. Enligt vår erfarenhet är det vanligare att en WAF-regel stoppar PerplexityBot med ett 403-svar än att robots.txt gör det, och det syns aldrig i din SEO-rapport. Titta i serverloggarna efter user agents som får 403 eller 429.

### 2. Se till att du finns i Bings index

ChatGPT:s sökfunktion har byggts upp med Bings index som en viktig grund, och Microsoft Copilot bygger helt på det. Ändå är det många svenska B2B-bolag som aldrig har öppnat Bing Webmaster Tools. Verifiera domänen, skicka in din sitemap och sök `site:dindomän.se` i Bing för att se hur många sidor som faktiskt är indexerade. Ligger antalet långt under Google har du ett indexeringsproblem som direkt begränsar synligheten i ChatGPT.

## llms.txt och llms-full.txt {#llms-txt}

Filen llms.txt är ett förslag till standard för hur en sajt beskriver sig själv för språkmodeller, publicerat på [llmstxt.org](https://llmstxt.org). Tanken är enkel: en markdownfil på rotnivå som säger vad sajten är, vilka sidor som är viktigast och var maskinvänliga versioner finns.

### 3. Publicera en korrekt strukturerad llms.txt

Formatet är avsiktligt strikt så att det kan parsas. Strukturen ser ut så här:

- En H1 med sajtens eller företagets namn (obligatorisk)
- Ett blockquote med en kort beskrivning av vad sajten erbjuder
- Valfria stycken med kontext, till exempel vilka ni hjälper och var ni finns
- H2-sektioner med länklistor i formatet `- [Titel](URL): kort beskrivning`
- En sektion med rubriken "Optional" för sidor som kan hoppas över vid begränsat utrymme

```md
# Successifier

> Konsult inom AI, automation, Customer Success och AI-driven SEO/GEO
> för svenska B2B-bolag. Grundare: Rickard Collander.

Successifier hjälper B2B-bolag att bli synliga i AI-sökmotorer och att
automatisera kundprocesser. Plattformen SAMA mäter AI-omnämnanden,
GEO-readiness och SEO-hälsa.

## Tjänster

- [AI-driven SEO och GEO](https://www.successifier.se/#tjanster): Synlighet i ChatGPT, Perplexity och Google
- [SAMA-plattformen](https://www.successifier.se/#sama): Mätning av AI-omnämnanden och GEO-readiness

## Guider

- [GEO-checklista för B2B-sajter 2026](https://www.successifier.se/blog/geo-checklista-for-b2b-sajter-2026-llms-txt-schema-och-citerbarhet): 12 tekniska punkter för citerbarhet

## Optional

- [Om oss](https://www.successifier.se/#om): Bakgrund och kontakt
```

Skriv beskrivningarna som om du förklarar sajten för en ny kollega: konkret, utan slogans. Länka bara till sidor som faktiskt är starka; en lista med 400 URL:er är sämre än 25 välvalda.

### 4. Generera llms.txt och llms-full.txt automatiskt

llms-full.txt är en konvention där hela innehållet i de länkade sidorna ligger som ren markdown i en enda fil, så att ett AI-system slipper hämta sida för sida. Båda filerna blir snabbt inaktuella om någon uppdaterar dem för hand. Bygg i stället genereringen in i publiceringsflödet: när en artikel får status publicerad ska den dyka upp i llms.txt inom samma bygge, och llms-full.txt ska renderas från samma källa som sidorna.

Vår egen sajt gör detta med ett byggsteg som läser bloggens frontmatter, och samma princip fungerar i WordPress, Webflow eller ett headless-CMS. Det viktiga är att det inte finns ett manuellt steg som kan glömmas.

## Strukturerad data som bygger entiteter {#strukturerad-data}

Strukturerad data enligt [schema.org](https://schema.org) är det närmaste du kommer att prata direkt med en maskin. För GEO handlar det mindre om rika resultat i Google och mer om att AI-system ska kunna koppla ihop vem som skrev vad, för vilket företag och när.

### 5. Organization, Person och Article på varje sida

Tre typer bär det mesta av jobbet på en B2B-sajt:

- **Organization** på hela sajten: namn, logotyp, URL, beskrivning och `sameAs` till LinkedIn och andra profiler. Beskrivningen ska vara ordagrant samma som på LinkedIn-sidan.
- **Person** för varje författare: namn, jobbtitel, `worksFor` som pekar på Organization och `sameAs` till LinkedIn-profilen. Det är så en AI-modell förstår att artikeln är skriven av en namngiven expert.
- **Article** eller **BlogPosting** för varje inlägg: `headline`, `author`, `publisher`, `datePublished` och `dateModified`. Datumen ska matcha det som står synligt på sidan.

Använd JSON-LD i `<head>`, inte microdata i brödtexten. Det är enklare att generera från ett CMS och lättare att validera.

### 6. FAQPage, BreadcrumbList och konsekventa @id

FAQPage ger sällan rika resultat i Google för vanliga företagssajter längre, men markeringen gör dina frågor och svar maskinläsbara på ett sätt som passar AI-svar utmärkt. Markera bara frågor som faktiskt finns synliga på sidan.

BreadcrumbList talar om var sidan hör hemma i sajtens hierarki, vilket hjälper modeller att förstå att "GEO-checklista" hör under "Blogg" hos "Successifier".

Den detalj som oftast missas är `@id`. Ge Organization ett fast id, till exempel `https://www.dindoman.se/#organization`, och varje författare ett eget, till exempel `https://www.dindoman.se/#rickard-collander`. Referera sedan till samma id från `publisher`, `author` och `worksFor` på alla sidor. Då blir företaget och personerna en entitet var, inte tjugo halvt överlappande kopior.

## Citerbart innehåll {#citerbart-innehall}

När tekniken är på plats avgör formatet. AI-system lyfter helst ut text som redan är ett svar: kort, avgränsad och utan att läsaren behöver kontext från tre stycken innan.

### 7. Öppna med ett kort svar och en definition per sida

Varje sida bör ha ett "kort svar"-block direkt under H1: två till tre meningar som besvarar den fråga sidan finns för. Formulera det så att det håller även om det lyfts ur sitt sammanhang. Den här artikeln gör det i första stycket.

Ge dessutom exakt en tydlig definition per sida. En sida som definierar både "GEO", "AI-synlighet" och "llms.txt" på samma nivå gör det svårt för en modell att veta vad sidan är källa för. Definiera huvudbegreppet, länka till andra sidor för resten.

### 8. Q&A-sektioner, tabeller, siffror med källa och rubriker som frågor

Fyra format som enligt vår erfarenhet återkommer i AI-citeringar:

- **Rubriker som frågor.** "Ska vi blockera AI-bottar?" matchar hur användaren faktiskt frågar, och svaret under rubriken blir det som citeras.
- **Q&A-sektioner.** En FAQ på fyra till fem frågor per pelarsida, med svar på två till fyra meningar.
- **Tabeller.** Jämförelser och stegvisa listor som tabeller går att återge nästan ordagrant.
- **Siffror med källa.** Ange alltid var en siffra kommer ifrån. Saknar du en källa, skriv "enligt vår erfarenhet" eller använd ett tydligt markerat exempel i stället för att gissa.

Det här formatet är lättare att hålla om innehållet produceras systematiskt; se vår guide om [AI-driven content-marknadsföring för B2B](/blog/ai-driven-content-marknadsforing-b2b-strategi-som-skalar) för hur du bygger ett sådant flöde utan att kvaliteten sjunker.

## Entitetskonsekvens och färskhet {#entitetskonsekvens-och-farskhet}

AI-modeller bygger sin bild av ditt företag från många källor. Om källorna säger olika saker blir bilden suddig, och suddiga entiteter citeras sällan.

### 9. Samma företag överallt, plus riktiga författarsidor

Gör en enkel inventering i ett kalkylblad: företagsnamn, en menings beskrivning, ort, grundare och kategori. Jämför sedan sajtens Om-sida, LinkedIn-sidan, Allabolag, branschkataloger och Google-företagsprofil. Varje avvikelse ("Successifier AB" på ett ställe, "Successifier" på ett annat, "AI-byrå" här och "konsult" där) är en signal som ska rättas.

Bygg också riktiga författarsidor. En sida per skribent med foto, bakgrund, expertområden, länk till LinkedIn och lista över artiklar är det tydligaste E-E-A-T-beviset du kan ge, och den är samtidigt hemvist för Person-schemat i punkt 5. Det gäller även små bolag: en grundare med en välgjord författarsida slår en anonym "redaktionen".

### 10. Färskhet: dateModified, kvartalsrutin, lastmod och IndexNow

AI-sökmotorer som hämtar i realtid väger aktualitet tungt. Fyra saker att få på plats:

1. Visa uppdateringsdatum synligt på sidan och i `dateModified`, och ändra det bara när innehållet faktiskt ändrats.
2. Inför en kvartalsrutin där de 20 viktigaste sidorna granskas, uppdateras och får nytt datum.
3. Se till att `lastmod` i sitemap.xml sätts från samma fält som `dateModified`, inte från byggtidpunkten.
4. Aktivera [IndexNow](https://www.indexnow.org) så att Bing och andra deltagande sökmotorer får en signal direkt när en sida ändras, i stället för att vänta på nästa crawl.

Ett vanligt misstag är att sitemapen får nytt lastmod på alla sidor vid varje deploy. Då blir signalen värdelös, eftersom allt ser nytt ut hela tiden.

## Teknisk grund och mätning {#teknik-och-matning}

De två sista punkterna är sällan spännande men avgör om allt annat ger effekt.

### 11. Canonical, hreflang, Core Web Vitals, serverrenderad HTML och alt-texter

- **Canonical** på varje sida, självrefererande där inget annat gäller, så att AI-system inte sprider signaler mellan dubbletter med och utan efterföljande snedstreck.
- **hreflang** om du har svenska och engelska versioner. Utan den kan en modell citera fel språkversion i ett svenskt svar.
- **Core Web Vitals** (LCP, INP, CLS) i grönt. Långsamma sidor crawlas mindre, av alla bottar.
- **Serverrenderad HTML.** Det här är den kritiska punkten: innehåll som bara finns efter att JavaScript kört är osynligt för flera AI-crawlers. Testa genom att stänga av JavaScript i webbläsaren eller hämta sidan med curl. Syns brödtexten, tabellerna och FAQ:n i råkällan är du säker.
- **Alt-texter** på bilder som beskriver innehållet, inte nyckelord. Multimodala modeller läser dem.

Det mesta här överlappar med klassisk teknisk SEO, och en genomgång enligt vår guide för [SEO-konsult för B2B-företag](/blog/seo-konsult-for-b2b-foretag-sa-dominerar-du-google-med-ratt-strategi) täcker det mesta. Skillnaden är att kravet på serverrenderad HTML är hårdare för GEO än för Google, som renderar JavaScript i högre grad.

### 12. Mät AI-omnämnanden per sökmotor

Utan mätning vet du inte om checklistan gav effekt. Tre nivåer, från enklast till mest komplett:

| Nivå | Metod | Vad du får |
| --- | --- | --- |
| Manuellt | 20–30 köparfrågor körs månadsvis i ChatGPT, Perplexity, Gemini och Copilot | Omnämns vi, i vilket sammanhang, med vilken källa |
| GA4 | Segment för referral från chatgpt.com, perplexity.ai, copilot.microsoft.com och gemini.google.com | Faktisk trafik och konverteringar från AI-svar |
| Plattform | Automatiserad spårning av omnämnandegrad, källor och GEO-readiness per sökmotor över tid | Trend, konkurrentjämförelse och prioriterad åtgärdslista |

De manuella testerna beskrivs i detalj i vår guide om [AI-synlighet i marknadsföring 2026](/blog/ai-synlighet-i-marknadsforing-2026-allt-du-behover-veta). För den tredje nivån använder vi [SAMA-plattformen](/#sama), som mäter AI-omnämnandegrad per sökmotor, poängsätter GEO-readiness enligt punkterna ovan och följer SEO-hälsan i samma vy. Poängen är inte verktyget i sig utan att mätningen sker regelbundet och på samma sätt varje gång.

## Vanliga frågor

### Ersätter GEO SEO?

Nej. GEO bygger på samma grund som SEO: crawlbarhet, tydlig struktur, auktoritet och färskhet. Skillnaden ligger i formatet på innehållet och i några tekniska tillägg som llms.txt, explicita regler för AI-crawlers och hårdare krav på serverrenderad HTML. En sajt med dålig SEO får sällan bra GEO, men en sajt med bra SEO kan ändå vara osynlig i AI-svar om checklistan ovan inte är gjord.

### Hur lång tid tar det innan vi syns i AI-svar?

Perplexity och ChatGPT:s sökfunktion hämtar i realtid, så tekniska fixar som robots.txt och serverrenderad HTML kan ge effekt inom några veckor. Att bli en återkommande källa i en kategori tar längre tid, enligt vår erfarenhet oftast ett kvartal eller två, eftersom det kräver att innehållet både är citerbart och plockas upp av andra källor. Grundkunskapen i modellerna uppdateras ännu långsammare.

### Ska vi blockera AI-bottar för att skydda vårt innehåll?

För en B2B-sajt vars affär bygger på att bli hittad är svaret nästan alltid nej, åtminstone för sökcrawlerna (OAI-SearchBot, PerplexityBot, Bingbot). Träningscrawlers som GPTBot och Google-Extended är ett affärsbeslut: blockerar du dem minskar chansen att varumärket finns i framtida modellers grundkunskap. Skydda i stället kundportaler och intern data med inloggning, inte med robots.txt.

### Behövs llms.txt verkligen?

Det är fortfarande en föreslagen standard, och AI-bolagen har inte offentligt bekräftat i vilken grad de använder den. Kostnaden är dock nära noll om filen genereras automatiskt, och den tvingar dig att formulera vad sajten är och vilka sidor som räknas. Vi rekommenderar att publicera den, men att inte förvänta sig mätbar effekt av filen ensam.

### Hur mäter vi om GEO-arbetet fungerar?

Kombinera tre källor: månatliga prompttester med samma frågelista i varje sökmotor, ett GA4-segment för referral-trafik från AI-domäner, och ett verktyg som spårar omnämnandegrad och GEO-readiness över tid. Rapportera per sökmotor, eftersom Perplexity, ChatGPT och Gemini beter sig olika, och koppla siffrorna till pipeline i stället för bara trafik.

## Nästa steg {#nasta-steg}

Börja med punkt 1, 2 och 11: crawlbarhet, Bing-index och serverrenderad HTML. Det är de tre som blockerar allt annat och de går att kontrollera på en eftermiddag. Ta sedan strukturerad data och llms.txt i ett gemensamt utvecklingssprint, och lägg innehållsformatet i redaktionsrutinen.

Vill du veta hur din sajt ligger till i dag? [Boka ett strategisamtal](/#kontakt) så går vi igenom er GEO-readiness punkt för punkt och visar hur [SAMA](/#sama) mäter AI-omnämnanden för er domän och era konkurrenter.
