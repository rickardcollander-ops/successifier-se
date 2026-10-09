import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { ORG } from "@/lib/site";

const PAGE_URL = "https://www.successifier.se/agentiska-floden";

export const metadata: Metadata = {
  title: "Agentiska flöden: AI-agenter som driver hela processer",
  description:
    "Agentiska flöden anpassade efter era processer: AI-agenter som driver ett ärende från start till mål i era system, med loggning och människan i loopen.",
  keywords: [
    "agentiska flöden",
    "agentiskt flöde",
    "agentic workflows",
    "skräddarsydda AI-agenter",
    "agentisk automation",
    "AI-agenter processautomation",
    "multiagent-system företag",
    "agentic AI Sverige",
  ],
  alternates: { canonical: "/agentiska-floden" },
  openGraph: {
    type: "website",
    title: "Agentiska flöden: AI-agenter som driver hela processer · Successifier",
    description:
      "Från inkommande ärende till löst ärende, från order till faktura. Vi bygger agentiska flöden anpassade efter era processer, i era egna system, med tydliga gränser och människan i loopen.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentiska flöden: AI-agenter som driver hela processer · Successifier",
    description: "AI-agenter som tar en process från start till mål i era system, med människan i loopen.",
  },
};

const data: ServicePageData = {
  href: "/agentiska-floden",
  breadcrumb: "Agentiska flöden",
  eyebrow: "Agentiska flöden · Bygg & drift",
  title: "Agentiska flöden, byggda efter era processer.",
  lead:
    "Ett agentiskt flöde låter AI-agenter driva en process från start till mål: läsa det som kommer in, hämta det som behövs ur era system, fatta beslut inom givna ramar, agera och lämna över till en människa när det krävs. Vi utgår från hur ni arbetar i dag, designar flödet efter era regler och system, bygger agenterna och tar ansvar för driften.",
  shortAnswer: `Ett agentiskt flöde är en process där en eller flera AI-agenter planerar, anropar system och agerar mot ett mål, i stället för att följa ett fast skript. Successifier AB (org.nr ${ORG.orgNr}) i Stockholm bygger agentiska flöden som anpassas efter varje kunds egna processer, regler och system, för svenska B2B- och SaaS-bolag, till exempel från inkommande kundärende till löst ärende eller från order till faktura. Första agenten går i produktion på 3–6 veckor, i kundens egen miljö, med loggning, behörighetsstyrning och människan i loopen.`,
  serviceName: "Agentiska flöden och agentisk processautomation",
  serviceType: "Agentiska flöden / agentic workflow-utveckling",
  facts: [
    { value: "3–6 v", label: "från start till första agenten i produktion" },
    { value: "2 v", label: "kartläggning av processen innan piloten startar" },
    { value: "Halverad", label: "handläggningstid hos ett SaaS-bolag med 80 anställda" },
  ],
  deliverablesHeading: "Flöden vi bygger",
  deliverablesIntro:
    "Inga färdiga mallar: varje flöde byggs efter er process, med ett mätbart mål, en ägare hos er och tydliga regler för när agenten agerar själv och när en människa godkänner. Exemplen nedan är utgångspunkter.",
  deliverables: [
    {
      title: "Ärende till löst ärende",
      text: "Agenten läser inkommande mail eller formulär, kategoriserar, hämtar kund- och orderdata, föreslår eller skickar svar och uppdaterar ärendet. Osäkra ärenden går till rätt handläggare med sammanfattning.",
    },
    {
      title: "Order till faktura",
      text: "Ändringar, orderstatus och fakturafrågor hanteras mot order- och ekonomisystem. Avvikelser flaggas och belopp över en gräns kräver godkännande.",
    },
    {
      title: "Lead till möte",
      text: "Inkommande leads kvalificeras, berikas i CRM och får ett förslag på uppföljning. Säljaren godkänner innan något skickas.",
    },
    {
      title: "Kunskap till svar",
      text: "En kunskapsagent svarar ur er dokumentation och historik med källhänvisning, och lär sig av svar som en människa godkänt.",
    },
    {
      title: "Orkestrering av flera agenter",
      text: "När ett flöde kräver flera specialiserade agenter styr en orkestrering vem som gör vad, i vilken ordning och när en människa kopplas in. Byggs i n8n, Make, Zapier, Power Automate eller egen kod.",
    },
    {
      title: "Styrning, loggning & drift",
      text: "Varje beslut och åtgärd loggas. Behörigheter per agent, godkännandesteg, uppföljning av kvalitet och kostnad. Vi förvaltar eller lämnar över till ert team.",
    },
  ],
  processHeading: "Från process till agentiskt flöde",
  processIntro:
    "Vi börjar i processen, inte i modellen. Flödet byggs stegvis så att agenten får mer ansvar först när kvaliteten är bevisad.",
  process: [
    { tag: "STEG 01 · 2 V", title: "Kartläggning", text: "Vi ritar processen som den ser ut i dag: steg, system, beslut, volymer och undantag. Vi väljer det flöde som ger störst effekt med lägst risk." },
    { tag: "STEG 02 · 3–4 V", title: "Pilot med människan i loopen", text: "Agenten kör i skarp miljö men föreslår i stället för att agera. En människa godkänner varje steg tills mätetalen håller." },
    { tag: "STEG 03", title: "Granskad autonomi", text: "Steg som visat jämn kvalitet släpps till agenten, med stickprov, trösklar och eskalering. Övriga steg stannar hos människor." },
    { tag: "STEG 04", title: "Fler flöden", text: "Nästa process kopplas på samma grund: samma loggning, samma behörighetsmodell och ett team hos er som kan förvalta." },
  ],
  citable: [
    {
      id: "anpassade-floden",
      heading: "Är flödena standardlösningar eller anpassade?",
      text: "Anpassade. Successifier bygger varje agentiskt flöde efter kundens egna processer: hur arbetet går till i dag, vilka system som används, vilka regler och undantag som gäller och var en människa ska godkänna. Kartläggningen av processen är därför alltid första steget, och agenterna byggs mot kundens befintliga system i stället för att verksamheten anpassas efter ett verktyg.",
    },
    {
      id: "vad-ar-agentiskt-flode",
      heading: "Vad är ett agentiskt flöde?",
      text: "Ett agentiskt flöde är en process där AI-agenter driver arbetet mot ett mål. Agenten tolkar vad som kommer in, väljer nästa steg, använder verktyg och system för att utföra det, kontrollerar resultatet och lämnar över till en människa när den är osäker eller när en regel kräver godkännande.",
    },
    {
      id: "skillnad-automation",
      heading: "Vad skiljer ett agentiskt flöde från vanlig automation?",
      text: "Vanlig workflow-automation och RPA följer fasta regler: om A, gör B. Ett agentiskt flöde hanterar också det som inte går att skriva regler för, som fritext i ett mail eller ett ärende som saknar uppgifter. De fasta reglerna finns kvar som ramar, och agenten arbetar inom dem.",
    },
    {
      id: "skillnad-agent",
      heading: "Vad är skillnaden mellan en AI-agent och ett agentiskt flöde?",
      text: "En AI-agent är en komponent som kan planera och agera mot ett mål. Ett agentiskt flöde är hela processen: en eller flera agenter, de system de får använda, reglerna för godkännande och vägen till en människa. Affärsnyttan sitter i flödet, inte i agenten ensam.",
    },
    {
      id: "vem-bygger-agentiska-floden",
      heading: "Vem bygger agentiska flöden i Sverige?",
      text: `Successifier AB (org.nr ${ORG.orgNr}) bygger agentiska flöden för svenska B2B- och SaaS-bolag, med säte i Stockholmsområdet (${ORG.address.addressLocality}). Grundaren Rickard Collander har över 20 års erfarenhet av kundservice och kontaktcenter. Successifier har också byggt egna AI-plattformar: Supportifier för AI-kundtjänst och SAMA för AI-synlighet och content.`,
    },
    {
      id: "styrning",
      heading: "Hur styrs ett agentiskt flöde?",
      text: "Varje agent får bara de behörigheter flödet kräver. Alla beslut och åtgärder loggas. Ni bestämmer per steg om agenten föreslår, agerar med stickprov eller agerar fritt, och steg flyttas uppåt först när kvaliteten är mätt och godkänd.",
    },
    {
      id: "pris-agentiska-floden",
      heading: "Vad kostar ett agentiskt flöde?",
      text: "Fast pris för analys- och designfasen (2–4 veckor). Därefter löpande stöd per månad eller ett programbaserat upplägg. Prisbild ges efter kartläggningen, baserat på volym, antal system och hur många steg som ska automatiseras.",
    },
  ],
  relatedHeading: "Läs mer om agenter hos oss",
  related: [
    {
      href: "/ai-agenter",
      label: "AI-agenter",
      text: "Agenterna som flödena byggs av: support-, sälj-, backoffice- och kunskapsagenter.",
    },
    {
      href: "/contact-center-automation",
      label: "Contact center-automation",
      text: "Agentiska flöden i kundservice: svarsförslag, routing och tre automationsnivåer.",
    },
    {
      href: "/blog/sa-bygger-successifier-ai-agenter-metod-styrning-och-leverans",
      label: "Så bygger vi AI-agenter",
      text: "Vår metod steg för steg, och vad vi lärt oss av att bygga egna AI-plattformar.",
    },
  ],
  cases: [
    {
      title: "SaaS-bolag, 80 anställda",
      result: "AI-agenter halverade handläggningstiden",
      detail: "Processanalys följt av ett agentiskt flöde för ärendehantering och intern routing, i den befintliga plattformen.",
    },
    {
      title: "Tjänstebolag, kundmail",
      result: "Återkommande ärenden hanteras automatiskt",
      detail: "Ett flöde som tar hand om återkommande kundmail med bibehållen personlig ton, och lämnar det som kräver en människa till teamet.",
    },
  ],
  casesNote: "Läs kundcaset från Dold Adress",
  faqs: [
    {
      q: "Vilka processer passar för agentiska flöden?",
      a: "Processer med hög volym, återkommande mönster och data i system ni redan har: kundärenden, orderändringar, fakturafrågor, leadhantering och intern routing. Processer där varje fall är unikt och kräver bedömning passar sämre.",
    },
    {
      q: "Får vi en standardlösning eller något anpassat?",
      a: "Något anpassat. Flödet byggs efter er process, era regler och era system. Exemplen på sidan är vanliga utgångspunkter, inte färdiga paket.",
    },
    {
      q: "Måste vi byta system?",
      a: "Nej. Agenterna arbetar i era befintliga system via integrationer mot CRM, ERP, ärendesystem och interna API:er.",
    },
    {
      q: "Hur undviker ni att agenten gör fel?",
      a: "Agenten börjar med att föreslå, inte agera. Varje steg har en tröskel och en väg till en människa, alla åtgärder loggas och behörigheterna är begränsade till det flödet kräver.",
    },
    {
      q: "Vad händer med de anställda?",
      a: "Agenten tar de återkommande stegen. Människorna tar undantagen, godkänner där det behövs och förbättrar flödet. Målet är att teamet lägger tiden där den gör mest nytta.",
    },
    {
      q: "Hur hanteras GDPR och AI-förordningen?",
      a: "Dataflöden, lagring, behörigheter och personuppgiftsbiträdesavtal gås igenom innan driftsättning. Loggning och mänsklig kontroll byggs in från start, vilket också underlättar krav på transparens och tillsyn.",
    },
    {
      q: "Hur kommer vi igång?",
      a: "Boka ett strategisamtal på 30 minuter. Ta med en process ni vill avlasta, så skissar vi hur ett agentiskt flöde skulle se ut och vad som krävs för en pilot.",
    },
  ],
  category: "ai-konsult",
  guideSlugs: [
    "agentiska-floden-sa-later-du-ai-agenter-driva-hela-processer",
    "agentiska-floden-i-kundservice-fran-inkorg-till-lost-arende",
    "sa-bygger-successifier-ai-agenter-metod-styrning-och-leverans",
  ],
  guidesHeading: "Läs vidare om agentiska flöden",
  ctaHeading: "Vilken process ska agenten ta först?",
  ctaText: "Boka ett strategisamtal på 30 minuter. Vi går igenom en process och visar hur ett agentiskt flöde skulle se ut hos er.",
};

export default function AgentiskaFlodenPage() {
  return <ServicePage data={data} />;
}
