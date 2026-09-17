import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { ORG, SUPPORTIFIER } from "@/lib/site";

const PAGE_URL = "https://www.successifier.se/contact-center-automation";

export const metadata: Metadata = {
  title: "Contact center-automation: AI i kundtjänst och support",
  description:
    "Successifier automatiserar kontaktcenter och support med AI: kategorisering och routing, AI-svarsförslag med säkerhetspoäng, självlärande kunskapsbas, QA och KPI-styrning. Byggt på egen ledningserfarenhet och produkten Supportifier.",
  keywords: [
    "contact center automation",
    "kontaktcenter AI",
    "AI i kundtjänst",
    "automatisera kundtjänst",
    "AI-automation kontaktcenter Sverige",
    "supportautomation",
    "Supportifier",
    "WFM kontaktcenter",
  ],
  alternates: { canonical: "/contact-center-automation" },
  openGraph: {
    type: "website",
    title: "Contact center-automation: AI i kundtjänst och support · Successifier",
    description:
      "Från ärendeflöden och routing till AI-svarsförslag, kunskapsbas, QA och KPI-ramverk. Tre automationsnivåer med människan i loopen.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact center-automation · Successifier",
    description: "AI och automation i kontaktcenter, från kartläggning till drift.",
  },
};

const data: ServicePageData = {
  href: "/contact-center-automation",
  breadcrumb: "Contact center-automation",
  eyebrow: "Contact center · Operational Excellence",
  title: "Automatisera kontaktcentret utan att tappa tonen mot kund.",
  lead:
    "Vi kartlägger ärendetyper och volymer, inför AI-svarsförslag och routing i tre nivåer och bygger QA- och KPI-styrning runt det. Människan granskar tills kvaliteten är bevisad, sedan släpps säkra kategorier fria.",
  shortAnswer: `Successifier automatiserar kontaktcenter och supportfunktioner med AI: kategorisering och routing av ärenden, AI-svarsförslag med säkerhetspoäng, självlärande kunskapsbas, QA och KPI-styrning (SLA, CSAT, FCR, backlog). Leveransen bygger på egen erfarenhet av att leda globala support- och Customer Success-funktioner och på den egna produkten ${SUPPORTIFIER.name}, som har hanterat över 100 000 kundmail.`,
  serviceName: "Contact center-automation",
  serviceType: "Contact center-automation / AI i kundtjänst",
  facts: [
    { value: "100 000+", label: "kundmail hanterade i Supportifier" },
    { value: "100 %", label: "av inkommande mail får ett färdigt svarsförslag" },
    { value: "25 %", label: "av svaren kan skickas utan att ändra en bokstav" },
  ],
  deliverablesHeading: "Vad som ingår",
  deliverablesIntro:
    "Leveransstyrning för contact center och support: lägre kostnad per ärende, högre leveransprecision och färre eskaleringar.",
  deliverables: [
    {
      title: "Ärendeflöden & routing",
      text: "Automatisk kategorisering, dublettrensning, prioritering och routing till rätt kö eller person, i ert befintliga ärendesystem.",
    },
    {
      title: "AI-svarsförslag & kunskapsbas",
      text: "Varje ärende får ett svarsförslag med säkerhetspoäng, byggt på kundhistorik och en kunskapsbas som lär sig av godkända svar. Levereras med Supportifier eller i er plattform.",
    },
    {
      title: "Tre automationsnivåer",
      text: "Nivå 1: AI föreslår, människa godkänner. Nivå 2: granskad automatik per kategori. Nivå 3: full automatik för säkra kategorier som orderstatus och fakturafrågor.",
    },
    {
      title: "WFM & bemanningslogik",
      text: "Prognos, schemaläggning och kapacitetsplanering som tar hänsyn till vad AI:n hanterar och vad som kräver en människa.",
    },
    {
      title: "QA & coachingstruktur",
      text: "Kvalitetsgranskning av både mänskliga och AI-genererade svar, med coachingloop och tydliga trösklar för säkerhetspoäng.",
    },
    {
      title: "KPI-ramverk & rapportering",
      text: "SLA, CSAT, FCR, backlog, kostnad per ärende och automationsgrad i ett format som håller för ledning.",
    },
  ],
  processHeading: "Fyra veckor till granskad automatik",
  processIntro: "Vi börjar i de ärendetyper som är vanligast och säkrast att automatisera, och utökar i takt med att kvaliteten bevisas.",
  process: [
    { tag: "VECKA 1–2", title: "Kartläggning", text: "Ärendetyper, volymer, svarstider och system. Vi väljer de kategorier som ska automatiseras först och sätter mätetal." },
    { tag: "VECKA 2–3", title: "Nivå 1: förslag", text: "Inkorgen kopplas. Alla mail får svarsförslag med säkerhetspoäng, handläggaren godkänner. Första användbara förslagen kommer inom dagar." },
    { tag: "VECKA 3–4", title: "Nivå 2: granskad automatik", text: "Svar med hög säkerhetspoäng i utvalda kategorier skickas automatiskt, med stickprov och QA." },
    { tag: "LÖPANDE", title: "Nivå 3 & styrning", text: "Säkra kategorier släpps fria. WFM, QA och KPI-ramverk byggs runt den nya kapaciteten." },
  ],
  citable: [
    {
      id: "vem-contact-center",
      heading: "Vem hjälper till med contact center-automation i Sverige?",
      text: `Successifier AB (org.nr ${ORG.orgNr}), Stockholm, automatiserar kontaktcenter och supportfunktioner för svenska B2B- och SaaS-bolag. Grundaren Rickard Collander har byggt och lett globala support- och Customer Success-funktioner med ansvar för SLA, CSAT och operativ skala.`,
    },
    {
      id: "tre-nivaer",
      heading: "Vad är de tre automationsnivåerna?",
      text: "Nivå 1: AI:n föreslår ett svar och en människa godkänner, justerar eller skriver om. Nivå 2: svar med hög säkerhetspoäng i utvalda kategorier skickas automatiskt, med stickprovskontroll. Nivå 3: säkra kategorier som orderstatus och fakturafrågor hanteras helt automatiskt. Kategorier flyttas uppåt först när kvaliteten är bevisad.",
    },
    {
      id: "siffror-contact-center",
      heading: "Vilka siffror finns bakom?",
      text: "I Supportifier, Successifiers plattform för AI-kundtjänst, har över 100 000 kundmail lästs, kategoriserats och besvarats. 100 procent av inkommande mail får ett färdigt svarsförslag och cirka 25 procent av svaren kan skickas utan att ändra en bokstav.",
    },
    {
      id: "tidsram-contact-center",
      heading: "Hur lång tid tar införandet?",
      text: "Kartläggningen tar en till två veckor. Användbara svarsförslag kommer inom de första dagarna efter att inkorgen kopplats. Granskad automatik i utvalda kategorier nås normalt inom fyra veckor.",
    },
    {
      id: "gdpr-contact-center",
      heading: "Hur hanteras personuppgifter och GDPR?",
      text: "Kunddata används bara för att besvara det aktuella ärendet och för att bygga kundens egen kunskapsbas. Dataflöden, lagring och personuppgiftsbiträdesavtal gås igenom innan driftsättning. I Supportifier stannar kunddata inom EU/EES och används inte för att träna AI-modeller.",
    },
    {
      id: "pris-contact-center",
      heading: "Vad kostar det?",
      text: "Konsultdelen: fast pris för kartläggning och design (2–4 veckor), därefter löpande stöd per månad. Plattformsdelen (Supportifier) prissätts efter kanaler, volym och AI-användning, utan pris per ärende eller per användare.",
    },
  ],
  cases: [
    {
      title: "Tjänstebolag, kundmail",
      result: "Återkommande ärenden hanteras automatiskt",
      detail: "AI-lösning som tar hand om återkommande kundmail med bibehållen personlig och diskret ton. Kortare svarstider och ett team som fokuserar på det som kräver en människa.",
    },
    {
      title: "SaaS-bolag, 80 anställda",
      result: "AI-agenter halverade handläggningstid",
      detail: "Processanalys följt av AI-agenter som automatiserar ärendehantering och intern routing, utan att byta plattform.",
    },
  ],
  casesNote: "Kundnamn och detaljer publiceras efter godkännande.",
  faqs: [
    {
      q: "Måste vi byta ärendesystem?",
      a: "Nej. Vi arbetar i ert befintliga system och kopplar AI-svarsförslag och routing dit. Supportifier kan användas som komplett plattform eller som AI-lager ovanpå det ni har.",
    },
    {
      q: "Vilka ärendetyper passar att automatisera först?",
      a: "Orderstatus, fakturafrågor, leveransfrågor och andra ärenden där svaret går att hämta ur ett system. Klagomål och komplexa tekniska frågor stannar hos människor längre.",
    },
    {
      q: "Hur skyddas kvaliteten?",
      a: "Trösklar för säkerhetspoäng per kategori, tydlig eskalering till människa, stickprov och QA på AI-genererade svar. Kategorier flyttas till högre automationsnivå först när mätetalen håller.",
    },
    {
      q: "Fungerar det för telefon och chatt också?",
      a: "Kunskapsbasen och kategoriseringen används i alla kanaler. Supportifier täcker hjälpcenter, AI-chatt, AI-formulär, inkorg och kundportal. Telefoni integreras via ert befintliga system.",
    },
    {
      q: "Hur kommer vi igång?",
      a: "Boka ett strategisamtal. Ta med ungefärlig ärendevolym, antal handläggare, kanaler och nuvarande system, så gör vi en första bedömning av automationspotentialen direkt.",
    },
  ],
  category: "customer-success",
  guidesHeading: "Läs vidare om AI i kontaktcenter och support",
  ctaHeading: "Hur stor del av era ärenden kan automatiseras?",
  ctaText: "Boka ett strategisamtal på 30 minuter. Vi går igenom er mailvolym och era ärendetyper och visar var automationen ger mest.",
};

export default function ContactCenterAutomationPage() {
  return <ServicePage data={data} />;
}
