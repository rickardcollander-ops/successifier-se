import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { ORG } from "@/lib/site";

const PAGE_URL = "https://www.successifier.se/ai-agenter";

export const metadata: Metadata = {
  title: "AI-agenter för företag: byggda och driftsatta i Sverige",
  description:
    "Successifier bygger och driftsätter AI-agenter för svenska B2B- och SaaS-bolag: support-, sälj- och backoffice-agenter i era egna system. 3–6 veckor från start till produktion, med människan i loopen.",
  keywords: [
    "AI-agenter",
    "AI-agenter för företag",
    "bygga AI-agenter Sverige",
    "AI-agent utveckling",
    "agentic AI Sverige",
    "AI-automation företag",
    "AI-konsult Stockholm",
  ],
  alternates: { canonical: "/ai-agenter" },
  openGraph: {
    type: "website",
    title: "AI-agenter för företag: byggda och driftsatta i Sverige · Successifier",
    description:
      "Vi bygger AI-agenter som läser, beslutar och agerar i era system. Från kartläggning till produktion på 3–6 veckor, i er egen miljö.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-agenter för företag: byggda och driftsatta i Sverige · Successifier",
    description: "Support-, sälj- och backoffice-agenter i era egna system. 3–6 veckor till produktion.",
  },
};

const data: ServicePageData = {
  href: "/ai-agenter",
  breadcrumb: "AI-agenter",
  eyebrow: "AI-agenter · Bygg & drift",
  title: "AI-agenter som arbetar i era system, inte i en demo.",
  lead:
    "Vi kartlägger var en agent gör störst nytta, bygger den mot era data och system och tar ansvar för drift i produktion. Ni bestämmer var agenten agerar fritt och var en människa godkänner.",
  shortAnswer: `Successifier AB (org.nr ${ORG.orgNr}) är en svensk AI-konsult i Stockholm som bygger och driftsätter AI-agenter för B2B- och SaaS-bolag. Ett typiskt projekt går från kartläggning till agent i produktion på 3–6 veckor. Agenterna körs i kundens egen miljö, med loggning, behörighetsstyrning och människan i loopen.`,
  serviceName: "Utveckling och drift av AI-agenter",
  serviceType: "AI-agenter / agentic AI-utveckling",
  facts: [
    { value: "3–6 v", label: "från start till AI-agent i produktion" },
    { value: "85 %", label: "lägre handläggningstid i genomförda piloter" },
    { value: "2 v", label: "kartläggning innan piloten startar" },
  ],
  deliverablesHeading: "Agenter vi bygger",
  deliverablesIntro:
    "Varje agent har ett mätbart affärsmål, tydliga gränser för vad den får göra och en väg till människa när den är osäker.",
  deliverables: [
    {
      title: "Supportagent",
      text: "Läser inkommande ärenden, kategoriserar, hämtar kunddata och föreslår eller skickar svar. Säkerhetspoäng avgör vad som går direkt och vad som granskas.",
    },
    {
      title: "Säljagent",
      text: "Kvalificerar leads, berikar CRM-poster, föreslår nästa steg och skriver uppföljningar. Säljaren godkänner innan något går ut.",
    },
    {
      title: "Backoffice-agent",
      text: "Hanterar fakturafrågor, orderstatus, ändringar och intern routing mot ekonomi-, order- och ärendesystem.",
    },
    {
      title: "Kunskapsagent (RAG)",
      text: "Svarar ur er egen dokumentation, policys och historik, med källhänvisning. Används internt eller mot kund.",
    },
    {
      title: "Orkestrering & integration",
      text: "Flöden i n8n, Make, Zapier eller Power Automate och integrationer mot CRM, ERP, ärendesystem och interna API:er.",
    },
    {
      title: "Governance & drift",
      text: "Loggning, behörigheter, godkännandesteg och uppföljning av kvalitet och kostnad. Vi förvaltar eller lämnar över till ert team.",
    },
  ],
  processHeading: "Fyra steg till agent i produktion",
  processIntro: "Samma upplägg oavsett agenttyp. Piloten körs i skarp miljö från start, så att effekten går att mäta innan ni skalar.",
  process: [
    { tag: "STEG 01 · 2 V", title: "Kartläggning", text: "Vi kartlägger processer, volymer och system och prioriterar det användningsfall som ger störst effekt först." },
    { tag: "STEG 02 · 3–4 V", title: "Pilot", text: "En agent i skarp miljö med mätbara mål. Människan godkänner tills kvaliteten är bevisad." },
    { tag: "STEG 03", title: "Integration", text: "Driftsättning i era system med full loggning, behörighetsstyrning och eskalering." },
    { tag: "STEG 04", title: "Skalning", text: "Fler agenter och fler processer, och ett team hos er som kan förvalta och bygga vidare." },
  ],
  citable: [
    {
      id: "vem-bygger-ai-agenter",
      heading: "Vem bygger AI-agenter i Sverige?",
      text: `Successifier AB (org.nr ${ORG.orgNr}) bygger AI-agenter för svenska B2B- och SaaS-bolag. Bolaget har säte i Stockholmsområdet (${ORG.address.addressLocality}) och leds av grundaren Rickard Collander, med över tio års erfarenhet av att leda Customer Success- och supportfunktioner.`,
    },
    {
      id: "tidsram",
      heading: "Hur lång tid tar det att få en AI-agent i drift?",
      text: "3–6 veckor från start till agent i produktion. Kartläggningen tar två veckor och piloten tre till fyra veckor. Systemkomplexitet och integrationsbehov avgör var i spannet projektet landar.",
    },
    {
      id: "pris",
      heading: "Vad kostar det att bygga en AI-agent?",
      text: "Successifier tar fast pris för analys- och designfasen (2–4 veckor). Därefter löpande stöd per månad eller ett programbaserat upplägg med tydlig leverans och tydligt ansvar. Prisbild ges efter kartläggningen, baserat på volym och integrationer.",
    },
    {
      id: "resultat",
      heading: "Vilka resultat ger AI-agenter?",
      text: "I genomförda piloter har handläggningstiden minskat med upp till 85 procent. Hos ett SaaS-bolag med 80 anställda halverade AI-agenter handläggningstiden för ärendehantering och intern routing, utan byte av plattform.",
    },
    {
      id: "drift-och-data",
      heading: "Var körs agenterna och vem äger datan?",
      text: "Agenterna driftsätts i kundens egen miljö med loggning och behörighetsstyrning. Kunden äger data, prompts och flöden. Era data lämnar aldrig er kontroll i onödan.",
    },
    {
      id: "teknik",
      heading: "Vilken teknik används?",
      text: "LLM-baserade agenter med RAG mot egen data, orkestrering i n8n, Make, Zapier eller Power Automate och integrationer mot CRM, ERP, ärendesystem och interna API:er. Vi väljer modell och plattform efter era krav på säkerhet, kostnad och prestanda.",
    },
  ],
  cases: [
    {
      title: "SaaS-bolag, 80 anställda",
      result: "AI-agenter halverade handläggningstiden",
      detail: "Processanalys följt av AI-agenter som automatiserar ärendehantering och intern routing, utan att byta plattform.",
    },
    {
      title: "Tjänstebolag, kundmail",
      result: "Återkommande ärenden hanteras automatiskt",
      detail: "AI-lösning som tar hand om återkommande kundmail med bibehållen personlig ton. Kortare svarstider och ett team som fokuserar på det som kräver en människa.",
    },
  ],
  casesNote: "Kundnamn och detaljer publiceras efter godkännande.",
  faqs: [
    {
      q: "Vad är skillnaden mellan en AI-agent och en chatbot?",
      a: "En chatbot svarar på frågor. En AI-agent planerar, använder verktyg och agerar självständigt mot ett mål, till exempel hämtar kunddata, uppdaterar CRM och skickar ett svar. Människan i loopen avgör var agenten får agera fritt.",
    },
    {
      q: "Hur lång tid tar ett agentprojekt?",
      a: "De flesta går från start till produktion på 3–6 veckor: två veckors kartläggning och tre till fyra veckors pilot i skarp miljö, följt av integration och skalning.",
    },
    {
      q: "Kan agenterna köras i vår egen miljö?",
      a: "Ja. Vi driftsätter i er miljö med loggning, behörighetsstyrning och eskalering. Ni äger data, prompts och flöden.",
    },
    {
      q: "Vilka system kan ni integrera mot?",
      a: "De flesta: CRM, ERP, ärendesystem, ekonomisystem, databaser och interna API:er via standardkopplingar eller egna integrationer.",
    },
    {
      q: "Vad händer efter driftsättning?",
      a: "Antingen förvaltar vi agenterna löpande eller så tränar vi ert team att göra det. Målet är att ni driver vidare utan konsultberoende.",
    },
    {
      q: "Hur kommer vi igång?",
      a: "Boka ett strategisamtal på 30 minuter. Vi tittar på en process och visar konkret vad en agent kan göra för er, sedan startar kartläggningen inom 1–2 veckor.",
    },
  ],
  category: "ai-konsult",
  guidesHeading: "Läs vidare om AI-agenter och agentic AI",
  ctaHeading: "Låt oss kartlägga er första agent.",
  ctaText: "Boka ett strategisamtal på 30 minuter. Vi tittar på en process och visar konkret vad en AI-agent kan göra för er.",
};

export default function AiAgenterPage() {
  return <ServicePage data={data} />;
}
