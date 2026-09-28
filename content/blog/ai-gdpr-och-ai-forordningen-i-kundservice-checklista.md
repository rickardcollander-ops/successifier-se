---
title: "AI och GDPR/AI-förordningen i kundservice – checklista för svenska företag"
metaTitle: "AI i kundservice: GDPR och AI-förordningen"
slug: "ai-gdpr-och-ai-forordningen-i-kundservice-checklista"
date: 2026-09-22T13:00:00.000Z
updated: 2026-09-22T13:00:00.000Z
excerpt: "Checklista för AI i kundservice enligt GDPR och AI-förordningen: roller, PuB-avtal, DPIA, inspelade samtal, röst-AI och träning på kunddata, fas för fas."
summary: "Ett svenskt företag som inför AI i kundservice är normalt personuppgiftsansvarigt och behöver ett personuppgiftsbiträdesavtal som omfattar leverantörens underbiträden, en rättslig grund per ändamål, en konsekvensbedömning eller dokumenterat skäl till varför den inte krävs, en uppdaterad registerförteckning och en informationstext till kunderna. AI-förordningen kräver att kunden får veta när den interagerar med AI. Kontrollera tredjelandsöverföringar, stäng av träning på kunddata och stäm av tidsplanen med jurist."
category: "customer-success"
cluster: "kontaktcenter"
answers: "Vad ett svenskt företag behöver göra enligt GDPR och AI-förordningen när det inför AI i kundservice, fas för fas från upphandling till drift."
tags:
  - "AI i kontaktcenter"
  - "GDPR och AI"
keywords:
  - "AI GDPR kundservice"
  - "AI-förordningen kundtjänst"
  - "GDPR checklista AI"
  - "personuppgiftsbiträdesavtal AI"
  - "konsekvensbedömning AI kundservice"
  - "inspelade samtal GDPR"
  - "AI-förordningen artikel 50"
imageAlt: "Kundserviceledare och jurist går igenom en checklista för GDPR och AI-förordningen"
status: "published"
---

# AI och GDPR/AI-förordningen i kundservice – checklista för svenska företag

När ni inför AI i kundservice är ni normalt personuppgiftsansvariga. Ni behöver ett biträdesavtal som omfattar leverantörens underbiträden, rättslig grund per ändamål, en konsekvensbedömning, uppdaterad registerförteckning och en informationstext till kunderna. AI-förordningen kräver dessutom att kunden får veta när den pratar med AI. Stäng av träning på kunddata och kontrollera tredjelandsöverföringar.

Den här artikeln ingår i vår serie [AI i kontaktcenter 2026](/blog/ai-i-kontaktcenter-2026-komplett-guide-for-svenska-kundserviceledare). Den beskriver skyldigheterna på principnivå och ger en checklista i fyra faser. Den är inte juridisk rådgivning. Låt er jurist eller ert dataskyddsombud bedöma just er situation.

## Innehåll

- [Två regelverk som ställer olika frågor](#tva-regelverk)
- [Roller och dokument](#roller-och-dokument)
- [Checklista i fyra faser](#checklista)
- [Inspelade samtal och röst-AI](#inspelade-samtal-och-rost-ai)
- [Känsliga personuppgifter i ärenden](#kansliga-personuppgifter)
- [Modellträning på kunddata](#modelltraning)
- [Vanliga frågor](#vanliga-fragor)

## Två regelverk som ställer olika frågor {#tva-regelverk}

GDPR och AI-förordningen överlappar men frågar efter olika saker. GDPR handlar om personuppgifterna: vilka ni behandlar, varför, med vilket stöd och hur de skyddas. AI-förordningen, förordning (EU) 2024/1689, handlar om själva AI-systemet: vilken risk det innebär och vilka krav som följer av det.

I kundservice gäller i praktiken båda samtidigt. Ett kundmail som en AI läser och besvarar innehåller personuppgifter, och AI:n som svarar är ett AI-system som interagerar med en människa.

**GDPR i korthet.** De bärande delarna för ett AI-projekt i kundservice är:

- **Principerna i art. 5:** ändamålsbegränsning, uppgiftsminimering, korrekthet, lagringsminimering, säkerhet och ansvarsskyldighet. Ansvarsskyldigheten betyder att ni ska kunna visa att ni följer reglerna, inte bara göra det.
- **Rättslig grund enligt art. 6:** varje ändamål behöver en grund. Att besvara en kunds fråga stöds ofta av avtal eller berättigat intresse, men analys och förbättring av AI:n kan vara ett nytt ändamål som behöver en egen bedömning.
- **Information enligt art. 13–14:** kunden ska få veta hur uppgifterna behandlas, även när en AI är inblandad.
- **Automatiserade beslut enligt art. 22:** beslut som enbart grundas på automatiserad behandling och som har rättsliga följder eller på liknande sätt påverkar kunden i betydande grad är som huvudregel inte tillåtna, med vissa undantag och skyddsåtgärder.
- **Biträden enligt art. 28, konsekvensbedömning enligt art. 35 och tredjelandsöverföring enligt art. 44 ff.** Dessa tre går vi igenom nedan.

IMY är svensk tillsynsmyndighet för GDPR.

**AI-förordningen i korthet.** Förordningen delar in AI-användning i riskklasser. I stora drag:

| Riskklass | Exempel som kan beröra kundservice | Konsekvens i princip |
| --- | --- | --- |
| Förbjudna metoder (art. 5) | Känsloigenkänning riktad mot anställda på arbetsplatsen, manipulativa tekniker | Får inte användas |
| Hög risk (art. 6 och bilaga III) | AI som avgör kreditvärdighet eller prissättning av vissa försäkringar | Omfattande krav på riskhantering, dokumentation och mänsklig tillsyn |
| Transparenskrav (art. 50) | AI-chatt, röst-AI, automatiska AI-svar till kunder | Kunden ska informeras om att den interagerar med AI, om det inte är uppenbart |
| Övrig användning | Intern kategorisering, sammanfattningar åt handläggare | Få specifika krav, men krav på AI-kunnighet (art. 4) gäller brett |

De flesta AI-tillämpningar i kundservice hamnar i transparensklassen. Men klassningen beror på vad AI:n faktiskt gör. En AI som bara svarar på leveransfrågor och en AI som beslutar om avbetalning hos ett kreditbolag kan hamna i olika klasser, även om de ligger i samma plattform.

Förordningens skyldigheter börjar gälla stegvis och tidsplanen har diskuterats politiskt. Stäm av vilka datum som gäller för era system med jurist, i stället för att lita på en bloggtext. Det gäller även den här.

## Roller och dokument {#roller-och-dokument}

Den vanligaste oklarheten i AI-projekt är vem som har vilken roll. Rollen avgör ansvaret, och ansvaret avgör vilka dokument som behövs.

| Roll | Vem det brukar vara | Huvudansvar | Nyckeldokument |
| --- | --- | --- | --- |
| Personuppgiftsansvarig | Ert företag | Ändamål, rättslig grund, information till kunder, DPIA, de registrerades rättigheter | Registerförteckning, DPIA, informationstext, lagringstider |
| Personuppgiftsbiträde | Plattformsleverantören, en partner med åtkomst till ärenden | Behandla bara enligt era instruktioner, säkerhet, bistå er | PuB-avtal, säkerhetsbeskrivning, egen förteckning (art. 30.2) |
| Underbiträde | Molnleverantör, leverantör av AI-modellen, tjänst för transkribering | Samma skyldigheter som biträdet, via avtal i kedjan | Underbiträdeslista, avtal i kedjan, överföringsmekanism |
| Egen ansvarig (varningsflagga) | En leverantör som använder data för egna syften, till exempel träning | Egen rättslig grund och egen information | Kräver separat analys innan avtal |

Kärnan i art. 28 är att biträdet bara får behandla uppgifter enligt er dokumenterade instruktion. Underbiträden får anlitas bara med ert förhandstillstånd, särskilt eller generellt, och samma skyldigheter ska föras vidare i kedjan.

| Dokument | Vad det ska svara på | Regelstöd | Vem som äger det |
| --- | --- | --- | --- |
| PuB-avtal | Instruktioner, säkerhet, underbiträden, radering, revision | GDPR art. 28 | Inköp och jurist |
| Konsekvensbedömning (DPIA) | Risker för kunderna och vilka åtgärder som minskar dem | GDPR art. 35 | Projektägare, med dataskyddsombud |
| Registerförteckning | Vilka behandlingar som finns, ändamål, kategorier, mottagare, lagringstid | GDPR art. 30 | Personuppgiftsansvarig |
| Informationstext till kunder | Hur AI används, rättslig grund, rättigheter, att kunden möter AI | GDPR art. 13–14, AI-förordningen art. 50 | Kundservice och jurist |
| Intresseavvägning | Varför ert intresse väger tyngre än kundens, när ni använder berättigat intresse | GDPR art. 6.1 f | Jurist och projektägare |
| Överföringsanalys | Om data lämnar EU/EES och på vilken grund | GDPR art. 44 ff. | Jurist och informationssäkerhet |

## Checklista i fyra faser {#checklista}

Checklistan följer ett införande från första idé till daglig drift. Den passar ihop med vår [30-dagarsplan för AI-automation i kontaktcenter](/blog/ai-automation-i-svenska-kontaktcenter-sa-kom-igang-pa-30-dagar) och med dataskyddsfaktorerna i guiden om [hur du väljer AI-plattform](/blog/sa-valjer-du-ai-plattform-for-automatiserad-kundkontakt-12-faktorer).

### Fas 1: Före upphandling

- [ ] Beskriv ändamålen: vilka ärendetyper, vilka kanaler och om AI:n ska föreslå, svara eller agera i system.
- [ ] Kartlägg vilka personuppgifter ärendena innehåller, inklusive personnummer och känsliga uppgifter.
- [ ] Välj rättslig grund per ändamål och dokumentera intresseavvägningen där ni använder berättigat intresse.
- [ ] Riskklassa användningen enligt AI-förordningen: förbjudet, hög risk, transparenskrav eller övrigt.
- [ ] Avgör om en DPIA krävs och starta den tidigt. Dokumentera skälen om ni bedömer att den inte krävs.
- [ ] Ställ krav i förfrågan: lagring inom EU/EES, ingen träning på er data, underbiträdeslista, loggning, radering och exit.
- [ ] Involvera dataskyddsombud och informationssäkerhet innan leverantörerna bokas in för demo.

### Fas 2: I avtalet

- [ ] PuB-avtal med det innehåll art. 28 kräver: instruktioner, sekretess, säkerhet, underbiträden, bistånd, radering eller återlämnande och revision.
- [ ] Underbiträden: aktuell förteckning, avisering vid ändringar och rätt att invända.
- [ ] Skriftligt åtagande att kunddata, promptar och AI-svar inte används för att träna leverantörens eller tredje parts modeller.
- [ ] Var data lagras och varifrån support och drift har åtkomst. Åtkomst från tredjeland kan också vara en överföring.
- [ ] Överföringsmekanism om data lämnar EU/EES, till exempel adekvansbeslut eller standardavtalsklausuler med kompletterande bedömning.
- [ ] Lagringstider för ärenden, loggar, transkript och promptar.
- [ ] Incidentanmälan till er utan dröjsmål, så att ni hinner anmäla till IMY inom 72 timmar enligt art. 33.
- [ ] Rollfördelning enligt AI-förordningen: vad leverantören ansvarar för som leverantör av systemet och vad ni ansvarar för som tillhandahållare.
- [ ] Exit: export av data och kunskapsbas i läsbart format och radering med intyg.

### Fas 3: Före driftstart

- [ ] DPIA klar och åtgärderna genomförda. Om hög restrisk kvarstår: förhandssamråd med IMY enligt art. 36.
- [ ] Registerförteckningen uppdaterad med den nya behandlingen.
- [ ] Informationstext publicerad i integritetspolicyn och där kunden möter AI:n.
- [ ] AI-märkning i chatt, röst-AI och automatiskt skickade mail.
- [ ] Tydlig väg till en människa i varje kanal.
- [ ] Lista över beslut AI:n aldrig fattar ensam, till exempel avslag på reklamation, ersättning eller kredit.
- [ ] Maskning eller filtrering av känsliga uppgifter och behörighetsstyrning i plattformen.
- [ ] Utbildning för handläggare och teamledare om hur AI:n fungerar och var dess gränser går.

### Fas 4: I drift

- [ ] Stickproven på AI-svar granskar även dataskydd, till exempel att svar inte röjer uppgifter om fel person.
- [ ] Ny ärendekategori eller högre automationsnivå innebär att DPIA och riskklassning ses över.
- [ ] Begäran om tillgång och radering omfattar även transkript, loggar och AI-genererade sammanfattningar.
- [ ] Nya underbiträden granskas innan de godkänns.
- [ ] Gallring sker enligt beslutade lagringstider, även i plattformen.
- [ ] Ny funktion, som röst eller AI-agenter som agerar i system, får en egen bedömning innan den slås på.
- [ ] Årlig översyn av avtal, DPIA, registerförteckning och informationstext.

Ägarskapet för checklistan hör hemma i den styrning vi beskriver i [arkitekturen och rollerna för ett AI-drivet customer engagement center](/blog/customer-engagement-center-med-ai-arkitektur-roller-och-plan).

## Inspelade samtal och röst-AI {#inspelade-samtal-och-rost-ai}

Samtalsinspelning är vanligt i svenska kontaktcenter sedan länge. AI ändrar vad inspelningarna används till. När samtal transkriberas, sammanfattas och analyseras av AI kan det vara ett nytt ändamål jämfört med det ni informerade om när inspelningen började. Enligt ändamålsbegränsningen i art. 5 behöver ni då bedöma om det nya ändamålet är förenligt med det ursprungliga, eller om det krävs ny grund och ny information.

Fyra frågor att reda ut:

- **Information i början av samtalet.** Säger ert meddelande att samtalet spelas in och att AI kan användas för att analysera det? Om kunden talar med en röst-AI ska det framgå, eftersom art. 50 kräver information om att kunden interagerar med AI.
- **Röstbiometri.** Röst blir en biometrisk uppgift när den behandlas tekniskt för att identifiera en person, till exempel vid röstinloggning. Då rör det sig om känsliga personuppgifter enligt art. 9, som kräver ett särskilt undantag, i praktiken ofta uttryckligt samtycke.
- **Känsloanalys.** AI som tolkar känslor utifrån rösten är ett område där AI-förordningen är strikt. Känsloigenkänning riktad mot anställda på arbetsplatsen hör till de förbjudna metoderna, med snäva undantag. Känsloigenkänning mot kunder kan ha andra krav. Låt jurist bedöma innan ni slår på sådana funktioner, även om de ingår i plattformen.
- **Lagringstid.** Transkript är lättare att söka i än ljudfiler och lever därför ofta längre. Sätt lagringstider för båda.

Skillnaden mellan röst-AI, AI-agenter och traditionell IVR går vi igenom i jämförelsen [AI-agenter, chatbots och IVR i svensk kundservice](/blog/ai-agenter-vs-chatbots-vs-ivr-i-svensk-kundservice).

## Känsliga personuppgifter i ärenden {#kansliga-personuppgifter}

Kunder skriver det de skriver. En fråga om en försenad leverans kan innehålla en upplysning om sjukdom. En reklamation kan nämna en diagnos, en fackförening eller en religiös högtid. Sådana uppgifter är känsliga enligt art. 9 och får bara behandlas om ett undantag gäller.

Ni kan inte hindra kunder från att skriva känsliga uppgifter. Ni kan däremot styra vad AI:n gör med dem:

- **Minimera.** Låt AI:n bara få tillgång till de fält och den historik som behövs för ärendet.
- **Maska.** Filtrera bort personnummer, kortnummer och liknande innan text skickas vidare till en AI-modell, där plattformen stödjer det.
- **Styr kategorier.** Håll ärendetyper där känsliga uppgifter är vanliga på nivån där AI föreslår och en människa skickar. Automatiken ska ligga i ärenden där sådana uppgifter sällan förekommer.
- **Gallra.** Känsliga uppgifter ska inte ligga kvar i AI-loggar längre än i ärendesystemet.

Branscher med tystnadsplikt eller särskild sekretess, som bank, försäkring, vård och offentlig sektor, har regler utöver GDPR. De behöver vägas in redan i fas 1.

## Modellträning på kunddata {#modelltraning}

Här finns den största skillnaden mellan leverantörer, och den syns sällan i en demo. Frågan är om era kunders ärenden används för att träna eller förbättra AI-modeller, och i så fall vems.

Principen är enkel. Om leverantören använder er data för sina egna syften, till exempel för att förbättra sin modell åt alla kunder, agerar den inte längre bara på er instruktion. Den blir då i regel personuppgiftsansvarig för den behandlingen. Det kräver en egen rättslig grund, och ni behöver ha informerat era kunder om att deras uppgifter lämnas ut för ett sådant syfte. I de flesta kundserviceprojekt är det enklaste att avtala bort det helt.

Skilj på tre saker när ni frågar leverantören:

1. **Träning av grundmodellen.** Används data för att träna den underliggande språkmodellen, hos leverantören eller hos dess underbiträde?
2. **Er egen kunskapsbas.** Att AI:n lär sig av era godkända svar, inom er egen miljö, är något annat. Det är ofta själva poängen, men det ska också beskrivas i DPIA och registerförteckning.
3. **Loggar för felsökning.** Hur länge sparas promptar och svar hos modelleverantören, och vem kan läsa dem?

I vår egen plattform Supportifier stannar kunddata inom EU/EES och används inte för att träna AI-modeller. Kräv samma besked skriftligt av alla leverantörer ni utvärderar, oavsett vilken väg ni väljer i frågan om att [bygga eller köpa AI-kundtjänst](/blog/bygga-eller-kopa-ai-kundtjanst-inhouse-partner-eller-saas).

Hur regelefterlevnaden fungerar i en e-postinkorg med tre automationsnivåer beskriver vi i guiden om [AI-kundtjänst för e-post](/blog/ai-kundtjanst-for-e-post-sa-automatiserar-du-supportinkorgen-utan-att-tappa-kvaliteten).

## Vanliga frågor {#vanliga-fragor}

### Måste vi göra en konsekvensbedömning (DPIA) innan vi inför AI i kundservice?

En DPIA krävs enligt art. 35 när behandlingen sannolikt leder till hög risk för de registrerade, och användning av ny teknik är en av omständigheterna som förordningen pekar ut. För AI som läser kundärenden är det därför klokt att göra en. Om ni bedömer att den inte krävs ska ni dokumentera varför.

### Behöver kunden veta att svaret kommer från en AI?

Ja, när kunden interagerar med ett AI-system och det inte är uppenbart ska kunden informeras enligt AI-förordningens art. 50. Dessutom kräver GDPR art. 13–14 att kunden får veta hur uppgifterna behandlas. Märk AI-chatt, röst-AI och automatiskt skickade svar tydligt.

### Är ett automatiskt AI-svar ett automatiserat beslut enligt art. 22?

Ett svar på en leveransfråga är normalt inte ett beslut med rättsliga eller liknande betydande följder. Ett automatiskt avslag på en reklamation, en ersättning eller en kredit kan däremot vara det. Lista de beslut AI:n aldrig ska fatta ensam och låt en människa äga dem.

### Får leverantören av AI-modellen ligga utanför EU?

Det kan vara tillåtet om överföringen har stöd i art. 44 ff., till exempel ett adekvansbeslut eller standardavtalsklausuler med kompletterande bedömning. Tänk på att även åtkomst från tredjeland, som support, kan räknas som överföring. Kräv en fullständig lista över underbiträden och var de behandlar data.

### När börjar AI-förordningens krav gälla?

Förordningen tillämpas stegvis, och olika delar börjar gälla vid olika tidpunkter. Tidsplanen har också diskuterats efter att förordningen antogs. Stäm av vilka datum som gäller för era system med jurist innan ni planerar ert införande.

### Vem ansvarar om AI:n lämnar ut uppgifter till fel kund?

Som personuppgiftsansvarig har ni ansvaret gentemot kunden och tillsynsmyndigheten, även om felet uppstått hos leverantören. Avtalet med leverantören reglerar hur ansvaret fördelas mellan er. Därför ska stickproven i drift också granska dataskydd, inte bara ton och korrekthet.
