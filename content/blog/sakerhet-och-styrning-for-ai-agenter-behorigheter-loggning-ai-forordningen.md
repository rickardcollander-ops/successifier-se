---
title: "Säkerhet och styrning för AI-agenter: behörigheter, loggning och AI-förordningen"
metaTitle: "Säkerhet och styrning för AI-agenter"
slug: "sakerhet-och-styrning-for-ai-agenter-behorigheter-loggning-ai-forordningen"
date: 2026-10-09T08:00:00.000Z
updated: 2026-10-09T08:00:00.000Z
excerpt: "Så styr du AI-agenter säkert: minsta behörighet, nivåer av mänsklig kontroll, loggning, skydd mot prompt injection, GDPR och AI-förordningen."
summary: "En AI-agent ska ha ett eget konto med minsta möjliga behörighet, en bestämd nivå av mänsklig kontroll per åtgärd och en logg över varje steg den tar. Behandla allt agenten läser som opålitligt, eftersom prompt injection kan styra om den, och låt koden, inte modellen, avgöra vad den får göra. GDPR gäller fullt ut när agenten behandlar personuppgifter, och AI-förordningen kräver bland annat att människor informeras när de interagerar med ett AI-system, om det inte är uppenbart. Stäm av klassning och tidsplan med jurist."
language: "sv"
category: "ai-konsult"
cluster: "agenter"
answers: "Hur ett företag styr AI-agenter säkert med behörigheter, mänsklig kontroll, loggning och skydd mot prompt injection, och vad GDPR och AI-förordningen kräver."
tags:
  - "AI-agenter"
  - "AI-styrning"
keywords:
  - "säkerhet AI-agenter"
  - "styrning AI-agenter"
  - "AI governance"
  - "prompt injection"
  - "AI-förordningen AI-agenter"
  - "human in the loop"
  - "behörigheter AI-agent"
status: "published"
---

# Säkerhet och styrning för AI-agenter: behörigheter, loggning och AI-förordningen

En AI-agent ska styras som en ny medarbetare med systemåtkomst: ett eget konto med minsta möjliga behörighet, tydliga gränser för vad den får göra utan godkännande och en logg över allt den gör. Skillnaden mot en medarbetare är att agenten kan luras av text den läser, att den arbetar i en takt där ett fel kan upprepas hundratals gånger innan någon märker det, och att den omfattas av både GDPR och AI-förordningen.

Artikeln går igenom behörigheter, mänsklig kontroll, loggning, skydd mot prompt injection och regelefterlevnad, för dig som ska godkänna att en agent får agera i era system. Den beskriver regelverken på principnivå och är inte juridisk rådgivning. Låt er jurist eller ert dataskyddsombud bedöma just er situation.

Vill du först förstå vad en AI-agent är, läs [Agentic AI för företag](/blog/agentic-ai-for-foretag-vad-det-ar-nar-det-passar-och-hur-du-kommer-igang).

## Innehåll

- [Varför kräver AI-agenter annan styrning än en chatbot?](#varfor-styrning)
- [Hur sätter du behörigheter enligt minsta privilegium?](#behorigheter)
- [Vilka nivåer av mänsklig kontroll ska en agent ha?](#manniskan-i-loopen)
- [Vad ska loggas, och hur länge?](#loggning)
- [Hur skyddar du agenten mot prompt injection?](#prompt-injection)
- [Vad kräver GDPR när en agent behandlar personuppgifter?](#gdpr)
- [Vad kräver AI-förordningen av den som använder AI-agenter?](#ai-forordningen)
- [Checklista innan agenten får skarpa behörigheter](#checklista)
- [Vanliga frågor](#vanliga-fragor)

## Viktigaste punkterna

| Punkt | Vad det innebär |
| --- | --- |
| Eget konto, minsta behörighet | Agenten får bara de verktyg och rättigheter processen kräver, och behörigheten kontrolleras i målsystemet, inte av modellen. |
| Mänsklig kontroll sätts per åtgärd | Varje åtgärd placeras på en nivå, från förslag till eget ansvar, och vissa åtgärder kräver alltid en människa. |
| Allt loggas | Underlag, beslut, verktygsanrop och resultat loggas så att ett fel kan utredas och styrningen kan visas för revision. |
| Allt agenten läser är opålitligt | Prompt injection gör att text i mail, dokument och webbsidor kan försöka styra agenten, så skyddet måste sitta i koden. |
| GDPR gäller fullt ut | Rättslig grund, uppgiftsminimering, säkerhet, biträdesavtal och ofta en konsekvensbedömning krävs när agenten behandlar personuppgifter. |
| AI-förordningen kräver transparens | Människor ska informeras när de interagerar med ett AI-system om det inte är uppenbart, och vissa användningsområden är högrisk. |

## Varför kräver AI-agenter annan styrning än en chatbot? {#varfor-styrning}

AI-agenter kräver annan styrning eftersom de agerar i era system, inte bara svarar på frågor. En chatbot som svarar fel ger ett dåligt svar. En agent som agerar fel kan skicka mail till fel kund, ändra en order, kreditera ett belopp eller lämna ut uppgifter, och göra det i stor skala innan någon upptäcker det. Agenten har dessutom verktyg, fattar beslut i flera steg och läser text från omvärlden, som kundmail och bilagor, där instruktioner kan gömma sig.

OWASP, som tar fram säkerhetsriktlinjer för språkmodellsapplikationer, kallar risken *excessive agency*: att ett system får mer funktionalitet, fler behörigheter eller större självständighet än uppgiften kräver. Den finns som [LLM06 i OWASP Top 10 för LLM-applikationer](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/), och avsnitten om behörigheter och mänsklig kontroll nedan bygger på dess rekommendationer.

Hur styrningen passar in i hela leveransen beskriver vi i [Så bygger Successifier AI-agenter](/blog/sa-bygger-successifier-ai-agenter-metod-styrning-och-leverans#styrning).

## Hur sätter du behörigheter enligt minsta privilegium? {#behorigheter}

Minsta privilegium betyder att agenten bara får de verktyg och rättigheter som just den processen kräver, och inget mer. Det är det enskilt viktigaste skyddet, eftersom det begränsar skadan även när allt annat fallerar.

Gör så här:

1. **Ge agenten ett eget tekniskt konto.** Aldrig en delad administratörsinloggning eller en medarbetares konto. Då syns agentens handlingar i loggarna och kan stängas av på ett ställe.
2. **Lista verktygen per process.** En agent som ska svara på orderfrågor behöver kunna läsa orderstatus. Den behöver inte kunna ändra leveransadress eller kreditera.
3. **Skilj på läsa och skriva.** Läsrättigheter kan vara bredare, skrivrättigheter ska vara smala och listade per verktyg.
4. **Bygg smala verktyg.** Ett verktyg som heter "uppdatera ärendestatus" är säkrare än ett generellt verktyg som kan anropa valfritt API.
5. **Kontrollera behörigheten i målsystemet.** Lita inte på att modellen avstår. Det är systemet som tar emot anropet som ska neka det som inte är tillåtet.
6. **Sätt gränser i koden.** Beloppsgränser, tillåtna kundsegment och antal åtgärder per timme ska vara hårda regler, inte instruktioner i en prompt.

| Verktyg | Exempel | Rättighet | Kräver godkännande |
| --- | --- | --- | --- |
| Läsa kund och order | Hämta orderstatus för avsändarens order | Läs, bara egen kunds data | Nej |
| Uppdatera ärende | Sätta kategori, prioritet, status | Skriv, bara ärendefält | Nej |
| Skicka svar till kund | Svara på mail i ärendet | Skriv, bara till ärendets avsändare | Beror på nivå, se nästa avsnitt |
| Kreditera eller återbetala | Kreditera en faktura | Skriv, med beloppsgräns | Ja, alltid |
| Ändra kunduppgifter | Ny adress, nytt kontonummer | Ingen, eller skriv med kontroll | Ja, alltid |

Regeln om att bara skicka till ärendets avsändare hindrar agenten från att skicka uppgifter till en adress som någon lurat in i ett mail.

## Vilka nivåer av mänsklig kontroll ska en agent ha? {#manniskan-i-loopen}

Mänsklig kontroll ska sättas per åtgärd och per ärendekategori, inte för agenten som helhet. Samma agent kan få skicka svar på orderfrågor själv men behöva godkännande för varje kreditering.

Vi arbetar med tre nivåer, plus en lista med åtgärder som aldrig blir självständiga:

| Nivå | Vad agenten gör | Vad människan gör | När den passar |
| --- | --- | --- | --- |
| 1. Agenten föreslår | Förbereder åtgärden eller svaret | Godkänner, ändrar eller avvisar varje gång | Startläget för allt, och för nya kategorier |
| 2. Granskad autonomi | Agerar själv när säkerheten är hög, lämnar över annars | Stickprov och granskning i efterhand | Kategorier där mätetalen visat att kvaliteten håller |
| 3. Eget ansvar | Hanterar kategorin helt inom fasta gränser | Följer mätetalen, inte varje ärende | Säkra, regelstyrda kategorier med låg risk |
| Alltid människa | Förbereder underlag | Fattar beslutet | Ekonomiska åtgärder över en gräns, avtalsändringar, beslut med rättsliga följder för en person |

Två regler gör nivåerna trovärdiga. **En kategori flyttas uppåt först när data visar att det håller**, aldrig på känsla. Och **det ska gå att flytta nedåt direkt**, till exempel när en process ändras eller felfrekvensen ökar. Mer om nivåerna i praktiken finns i [Agentiska flöden: autonomi i nivåer](/blog/agentiska-floden-sa-later-du-ai-agenter-driva-hela-processer#autonomi-i-nivaer).

Den sista raden i tabellen har också en juridisk sida. Enligt GDPR art. 22 har en person som huvudregel rätt att inte bli föremål för ett beslut som enbart grundas på automatiserad behandling, om beslutet har rättsliga följder eller på liknande sätt påverkar personen i betydande grad. Det finns undantag, men de kräver skyddsåtgärder. Låt därför en människa äga sådana beslut.

## Vad ska loggas, och hur länge? {#loggning}

Loggen ska göra det möjligt att i efterhand förstå vad agenten gjorde, varför och med vilket resultat. Den behövs för att utreda fel, för att visa revision och kunder att processen är under kontroll och för att förbättra agenten.

| Logga | Varför |
| --- | --- |
| Vad som utlöste agenten | För att koppla handlingen till ett ärende eller en händelse |
| Vilket underlag den hämtade | För att se om felet låg i datan eller i beslutet |
| Vilket beslut den fattade, med säkerhetspoäng | För att kalibrera trösklarna |
| Vilka verktyg den anropade, med parametrar och svar | För att se exakt vad som ändrades i vilket system |
| Om en människa godkände, ändrade eller avvisade | För att mäta kvaliteten och följa upp nivåerna |
| Version av instruktioner och modell | För att veta vilket beteende som gällde vid tidpunkten |

Loggen ska gå att läsa av en människa utan teknisk bakgrund.

Lagringstiden kräver en avvägning. Loggarna innehåller ofta personuppgifter, och då gäller GDPR:s princip om lagringsminimering: uppgifterna ska inte sparas längre än vad som är nödvändigt för ändamålet. Samtidigt behöver loggarna finnas kvar tillräckligt länge för att utreda fel och reklamationer. Bestäm en lagringstid per loggtyp, motivera den i er registerförteckning och begränsa vem som får läsa loggarna.

För de system som klassas som högrisk enligt AI-förordningen finns särskilda krav. Enligt art. 26.6 ska den som använder ett högrisksystem spara de automatiskt genererade loggar som den har kontroll över under en period som är lämplig för ändamålet, minst sex månader om inte annan lagstiftning, särskilt om dataskydd, säger något annat.

## Hur skyddar du agenten mot prompt injection? {#prompt-injection}

Prompt injection är när text som modellen läser ändrar dess beteende på ett sätt som inte var avsett. Det är nummer ett i [OWASP Top 10 för LLM-applikationer, LLM01](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), och för agenter är det den viktigaste säkerhetsrisken eftersom en lurad agent kan agera.

OWASP skiljer på två former:

- **Direkt prompt injection.** Användaren skriver själv in instruktioner som försöker få modellen att bryta mot sina regler, till exempel "ignorera dina tidigare instruktioner".
- **Indirekt prompt injection.** Instruktionerna ligger i innehåll som modellen läser, som ett kundmail, en bilaga, en webbsida eller ett dokument. Texten kan vara osynlig för en människa men läsbar för modellen.

En agent som läser inkommande mail är per definition exponerad för indirekt prompt injection. Därför måste skyddet byggas så att agenten inte *kan* göra skada även om den luras.

OWASP lyfter bland annat dessa åtgärder, som vi använder i alla agenter vi bygger:

- **Minsta privilegium.** Agenten har bara de verktyg och rättigheter den behöver, och känsliga funktioner hanteras i kod i stället för att lämnas till modellen.
- **Mänskligt godkännande för högriskåtgärder.** En lurad agent kan föreslå en kreditering, men inte genomföra den.
- **Separera och märk opålitligt innehåll.** Kundens text behandlas som data, inte som instruktioner, och hålls åtskild från agentens egna instruktioner.
- **Validera utdata med deterministisk kod.** Ett svar som ska innehålla ett ordernummer kontrolleras mot ordersystemet innan det skickas.
- **Filtrera in- och utdata.** Fånga känd attackformulering och svar som innehåller uppgifter som inte ska lämnas ut.
- **Testa regelbundet med attacker.** Lägg in försök till prompt injection i testsetet och behandla modellen som en opålitlig användare.

Samma princip gäller agentens kunskapsunderlag. Om vem som helst kan publicera i kunskapsbasen kan den användas för indirekt prompt injection. Mer om det i [Kunskapsbas för AI i kundservice](/blog/kunskapsbas-for-ai-i-kundservice-sa-bygger-du-den#kallor).

## Vad kräver GDPR när en agent behandlar personuppgifter? {#gdpr}

GDPR gäller fullt ut när en AI-agent behandlar personuppgifter, precis som för andra system. Att behandlingen görs av en AI ändrar inte kraven, men den gör några av dem svårare att uppfylla. [Dataskyddsförordningen (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj) ställer bland annat dessa krav som är centrala för agenter:

| Krav | Artikel | Vad det betyder för en agent |
| --- | --- | --- |
| Principerna, bland annat uppgiftsminimering och lagringsminimering | Art. 5 | Agenten ska bara hämta de uppgifter uppgiften kräver, och loggar och kopior ska inte sparas längre än nödvändigt |
| Rättslig grund | Art. 6 | Varje ändamål behöver en grund, och förbättring av agenten kan vara ett eget ändamål |
| Automatiserade beslut | Art. 22 | Beslut med rättsliga eller liknande betydande följder ska inte fattas enbart av agenten utan skyddsåtgärder |
| Inbyggt dataskydd | Art. 25 | Skydden ska byggas in i agentens design, inte läggas till efteråt |
| Biträden | Art. 28 | Leverantörer av plattform, modell och drift behöver biträdesavtal som omfattar underbiträden |
| Säkerhet | Art. 32 | Lämpliga tekniska och organisatoriska åtgärder, som behörighetsstyrning och loggning |
| Konsekvensbedömning | Art. 35 | Krävs när behandlingen sannolikt leder till hög risk, och ny teknik är en av omständigheterna som pekas ut |

Integritetsskyddsmyndigheten har en [vägledning om GDPR och AI](https://www.imy.se/verksamhet/dataskydd/innovationsportalen/vagledning-om-gdpr-och-ai/) som går igenom principer, rättslig grund, transparens och automatiserade beslut. En fas för fas-genomgång för kundservice, med dokumenten ni behöver, finns i vår [checklista för GDPR och AI-förordningen i kundservice](/blog/ai-gdpr-och-ai-forordningen-i-kundservice-checklista).

## Vad kräver AI-förordningen av den som använder AI-agenter? {#ai-forordningen}

AI-förordningen, [förordning (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj), ställer krav utifrån vad AI-systemet används till och vilken roll ni har. För de flesta agenter i kundservice och administration är tre delar mest relevanta: rollerna, transparenskraven och frågan om högrisk.

**Roller.** Förordningen skiljer bland annat på *leverantör*, som utvecklar ett AI-system eller låter utveckla det och släpper ut det eller tar det i bruk under eget namn, och *tillhandahållare*, som använder ett AI-system under sin egen behörighet. Ett företag som låter bygga en egen agent och tar den i bruk under eget namn kan därför ha leverantörsskyldigheter, inte bara skyldigheter som användare. Klargör rollerna i avtalet med den som bygger agenten.

**Transparens.** Enligt art. 50.1 ska leverantörer se till att AI-system som är avsedda att interagera direkt med människor utformas så att människorna informeras om att de interagerar med ett AI-system, om det inte är uppenbart för en rimligt välinformerad person. Informationen ska ges tydligt senast vid första interaktionen. För en agent som svarar kunder i chatt eller mail betyder det i praktiken att svaren ska märkas som AI-genererade, eller att det på annat sätt ska vara tydligt.

**AI-kunnighet.** Enligt art. 4 ska både leverantörer och tillhandahållare vidta åtgärder för att främja AI-kunnighet hos den personal som arbetar med AI-systemen. Det gäller alltså också de handläggare som granskar och godkänner agentens arbete.

**Högrisk.** De flesta agenter i kundservice är inte högrisksystem. Men vissa användningsområden i förordningens bilaga III är det, till exempel AI som bedömer fysiska personers kreditvärdighet, AI för riskbedömning och prissättning av liv- och sjukförsäkringar, och AI som fördelar arbetsuppgifter utifrån anställdas individuella beteende eller personliga egenskaper eller som övervakar och utvärderar deras prestationer. En agent som används för något sådant omfattas av betydligt mer omfattande krav på riskhantering, dokumentation, loggning och mänsklig tillsyn.

**Tidsplan.** Förordningen tillämpas stegvis. Kraven på AI-kunnighet har gällt sedan februari 2025, och transparenskraven i art. 50 gäller från den 2 augusti 2026. Tidsplanen för högriskkraven ändrades sommaren 2026 genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj), som bland annat skjuter upp kraven för högrisksystem enligt bilaga III till den 2 december 2027. Stäm av den konsoliderade versionen och vilka datum som gäller för just era system med jurist.

## Checklista innan agenten får skarpa behörigheter {#checklista}

- [ ] Agenten har ett eget tekniskt konto som kan stängas av på ett ställe
- [ ] Verktygen är listade per process, med läs- och skrivrättigheter var för sig
- [ ] Behörigheten kontrolleras i målsystemen, inte bara i agentens instruktioner
- [ ] Beloppsgränser, mottagarregler och volymtak finns i koden
- [ ] Varje åtgärd har en nivå av mänsklig kontroll, och listan över åtgärder som alltid kräver en människa är beslutad
- [ ] Loggningen omfattar underlag, beslut, verktygsanrop, mänskliga beslut och version
- [ ] Lagringstid och läsbehörighet för loggarna är beslutade och dokumenterade
- [ ] Testsetet innehåller försök till direkt och indirekt prompt injection
- [ ] Rättslig grund, registerförteckning, biträdesavtal och konsekvensbedömning är klara
- [ ] Kunder informeras om att de interagerar med AI där det inte är uppenbart
- [ ] Roll enligt AI-förordningen är klarlagd, och användningen är bedömd mot högriskområdena
- [ ] Personalen som arbetar med agenten har fått utbildning
- [ ] Det finns en rutin för att sänka agentens nivå eller stänga av den vid incident

Säkerheten och styrningen är en del av kostnaden för en agent, och den ska finnas i kalkylen. Hur den räknas visar vi i [Vad kostar en AI-agent?](/blog/vad-kostar-en-ai-agent-kostnadsposter-och-raknemodell#forvaltning-och-styrning)

## Vanliga frågor {#vanliga-fragor}

### Vad betyder minsta privilegium för en AI-agent?

Att agenten bara får de verktyg och rättigheter som just dess process kräver. Den har ett eget tekniskt konto, smala skrivrättigheter per verktyg och hårda gränser i koden. Behörigheten kontrolleras i målsystemet, så att agenten inte kan göra mer än tillåtet även om den luras.

### Kan prompt injection stoppas helt?

Nej, inte med säkerhet. Därför ska skyddet byggas så att en lurad agent inte kan orsaka allvarlig skada: minsta privilegium, mänskligt godkännande för högriskåtgärder, separering av opålitligt innehåll, validering av utdata och regelbundna tester med attacker.

### Måste kunden få veta att svaret kommer från en AI-agent?

Enligt AI-förordningens art. 50.1 ska människor informeras när de interagerar direkt med ett AI-system, om det inte är uppenbart. Kravet gäller från den 2 augusti 2026. GDPR kräver dessutom att kunden får information om hur personuppgifterna behandlas. Märk svar som skickas av en agent tydligt.

### Är en AI-agent i kundservice ett högrisksystem?

Normalt inte. Men användning inom vissa områden i förordningens bilaga III är högrisk, till exempel kreditvärdighetsbedömning av privatpersoner och prissättning av liv- och sjukförsäkringar. Bedöm vad agenten faktiskt gör, inte vad den kallas, och stäm av klassningen med jurist.

### Hur länge ska vi spara agentens loggar?

Så länge det behövs för ändamålet, till exempel att utreda fel och reklamationer, men inte längre eftersom loggarna ofta innehåller personuppgifter. För högrisksystem kräver AI-förordningen att den som använder systemet sparar loggarna i minst sex månader, om inte annan lagstiftning säger något annat.

## Nästa steg {#nasta-steg}

Styrning är det som gör det möjligt att ge en AI-agent skarpa behörigheter över huvud taget. I våra projekt byggs behörigheter, loggning, godkännandesteg och dataskyddsgenomgång in redan i kartläggningen och piloten, så att en avgränsad agent kan vara i produktion inom tre till sex veckor utan att styrningen kommer i efterhand.

Läs mer om hur vi bygger [AI-agenter](/ai-agenter) och [agentiska flöden](/agentiska-floden), eller [kontakta oss](/kontakt) så går vi igenom vad som krävs för att en agent ska få agera i era system.
