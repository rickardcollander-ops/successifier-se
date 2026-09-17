import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { ORG } from "@/lib/site";

const PAGE_URL = "https://www.successifier.se/customer-success";

export const metadata: Metadata = {
  title: "Customer Success-konsult: minska churn och skydda NRR",
  description:
    "Successifier bygger Customer Success-funktioner för bolag med återkommande intäkter: operating model, health scoring, renewal-playbooks och QBR-struktur. Första workshop inom 1–2 veckor, 30/60/90-dagarsplan.",
  keywords: [
    "Customer Success-konsult",
    "Customer Success Sverige",
    "minska churn",
    "NRR",
    "health scoring",
    "renewal playbook",
    "Customer Success operating model",
    "CS-konsult SaaS",
  ],
  alternates: { canonical: "/customer-success" },
  openGraph: {
    type: "website",
    title: "Customer Success-konsult: minska churn och skydda NRR · Successifier",
    description:
      "Operating model, health scoring, renewal- och expansion-playbooks och ledningsrapportering. Byggt av någon som lett CS- och supportfunktioner i över tio år.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Success-konsult · Successifier",
    description: "Minska churn och skydda NRR med ett CS-system teamet driver vidare själva.",
  },
};

const data: ServicePageData = {
  href: "/customer-success",
  breadcrumb: "Customer Success",
  eyebrow: "Customer Success · Revenue Protection",
  title: "Customer Success som skyddar intäkterna, byggt för att drivas av ert team.",
  lead:
    "Vi etablerar operating model, segmentering, health scoring och playbooks för renewal och expansion. Ni får ett system med tydliga ägare, triggers och uppföljning, inte en rapport.",
  shortAnswer:
    "Successifier bygger Customer Success-funktioner för bolag med återkommande intäkter: operating model och segmentering, health scoring och churn-risksystem, renewal- och expansion-playbooks, QBR-struktur och ledningsrapportering på NRR. Grundaren Rickard Collander har över tio års erfarenhet av att bygga och leda Customer Success- och supportfunktioner i SaaS- och scale-up-bolag. Första workshop inom 1–2 veckor, därefter en 30/60/90-dagarsplan.",
  serviceName: "Customer Success-konsulting",
  serviceType: "Customer Success / Revenue Protection",
  facts: [
    { value: "10+ år", label: "erfarenhet av att leda Customer Success och support" },
    { value: "1–2 v", label: "till första workshop" },
    { value: "30/60/90", label: "dagarsplan med tydliga milstolpar och ägare" },
  ],
  deliverablesHeading: "Vad vi bygger",
  deliverablesIntro:
    "Customer Success, support och Revenue Operations etableras som ett sammanhängande affärssystem, inte isolerade initiativ.",
  deliverables: [
    {
      title: "Operating model & segmentering",
      text: "Vilka kunder får vilken typ av uppföljning, av vem och hur ofta. Roller, ansvar och kapacitet per segment.",
    },
    {
      title: "Health scoring & churn-risk",
      text: "Signaler från användning, support, betalning och engagemang vägs ihop till en riskmodell med triggers och ägare.",
    },
    {
      title: "Renewal & expansion-playbooks",
      text: "Steg-för-steg-flöden för förnyelse, merförsäljning och räddning av riskkunder, byggda i era befintliga verktyg.",
    },
    {
      title: "Onboarding & time-to-value",
      text: "Milstolpar som gör kundens värde tydligt och repeterbart från dag ett, med mätning av tid till första värde.",
    },
    {
      title: "QBR- och ledningsstruktur",
      text: "Format för kundmöten och för ledningsrapportering: NRR, kundportfölj, intäktsrisk och expansion i ett format som håller för styrelse.",
    },
    {
      title: "AI i Customer Success",
      text: "AI-agenter som sammanfattar kundhistorik, flaggar risk och förbereder QBR-underlag, samt Supportifier för AI-driven kundtjänst.",
    },
  ],
  processHeading: "Diagnose, Architect, Implement & Enable",
  processIntro: "Systematiskt, ledningsvänligt och byggt för att hålla när uppdraget är avslutat.",
  process: [
    { tag: "STEG 01 · 1–2 V", title: "Diagnose", text: "Vi kartlägger affärsmodell, kundportfölj, teamstruktur och systemlandskap och identifierar var intäktsrisk faktiskt uppstår." },
    { tag: "STEG 02 · 2–4 V", title: "Architect", text: "Operating model, KPI-struktur, playbooks och systemflöden som hänger ihop, från styrelserapport till daglig uppgift." },
    { tag: "STEG 03 · 30/60/90", title: "Implement", text: "Vi bygger i era verktyg: health score, dashboards, playbooks och automationer, med milstolpar per 30 dagar." },
    { tag: "STEG 04", title: "Enable", text: "Vi tränar teamet och etablerar uppföljning. Lösningen lever vidare utan konsultberoende." },
  ],
  citable: [
    {
      id: "vem-cs-konsult",
      heading: "Vem erbjuder Customer Success-konsulting i Sverige?",
      text: `Successifier AB (org.nr ${ORG.orgNr}), Stockholm, bygger Customer Success-funktioner för B2B- och SaaS-bolag med återkommande intäkter. Grundaren Rickard Collander har över tio års erfarenhet av att bygga och leda globala Customer Success- och supportfunktioner med ansvar för NRR, CSAT och SLA.`,
    },
    {
      id: "tidsram-cs",
      heading: "Hur lång tid tar det att etablera Customer Success?",
      text: "Första workshop inom 1–2 veckor. Analys- och designfasen tar 2–4 veckor. Implementationen följer en 30/60/90-dagarsplan med milstolpar för health scoring, playbooks och rapportering.",
    },
    {
      id: "pris-cs",
      heading: "Vad kostar en Customer Success-konsult?",
      text: "Fast pris för analys- och designfasen (2–4 veckor). Därefter löpande stöd per månad eller ett programbaserat upplägg. Alltid tydlig leverans och tydligt ansvar.",
    },
    {
      id: "resultat-cs",
      heading: "Vilka resultat ger arbetet?",
      text: "Typiska utfall är minskad churn genom en strukturerad risk- och renewalmodell, kortare time-to-value genom playbooks och milstolpar, och tydlig ledningsrapportering på NRR och intäktsrisk. Hos ett tjänstebolag i tillväxtfas etablerade Successifier kundfunktionen från grunden, med processer och verktyg som teamet tog över.",
    },
    {
      id: "verktyg-cs",
      heading: "Vilka verktyg arbetar ni i?",
      text: "Era befintliga: CRM, CS-plattform, supportsystem och BI. Vi rekommenderar byte av verktyg endast när det är motiverat, och bygger health score, dashboards och playbooks där teamet redan arbetar.",
    },
    {
      id: "for-vem-cs",
      heading: "För vilka bolag passar det?",
      text: "SaaS- och tjänstebolag med återkommande intäkter som har churn eller intäktstapp de inte fullt ut förstår orsaken till, eller som vill skala leverans och support utan att anställa linjärt.",
    },
  ],
  cases: [
    {
      title: "Tjänstebolag i tillväxtfas",
      result: "Strukturerat CS-arbete från grunden",
      detail: "Successifier etablerade kundfunktion, definierade processer och implementerade verktyg som gav teamet ett driftbart system att ta över.",
    },
    {
      title: "SaaS-bolag, 80 anställda",
      result: "AI-agenter halverade handläggningstid",
      detail: "Processanalys följt av AI-agenter som automatiserar ärendehantering och intern routing i supportfunktionen, utan att byta plattform.",
    },
  ],
  casesNote: "Kundnamn och detaljer publiceras efter godkännande.",
  faqs: [
    {
      q: "Hur snabbt kan vi komma igång?",
      a: "Ofta med en första workshop inom 1–2 veckor, följt av en 30/60/90-dagarsplan.",
    },
    {
      q: "Jobbar ni med våra befintliga verktyg?",
      a: "Ja. Målet är förbättring med minimal friktion. Vi rekommenderar förändringar endast när det är motiverat.",
    },
    {
      q: "Är detta bara strategi?",
      a: "Nej. Vi levererar strategi och implementation: processer, dashboards, playbooks och enablement som teamet driver vidare.",
    },
    {
      q: "Vad mäter ni?",
      a: "NRR, churn, expansion, time-to-value, health score-täckning och CSAT, i ett format som håller för ledning och styrelse.",
    },
  ],
  category: "customer-success",
  guidesHeading: "Läs vidare om Customer Success",
  ctaHeading: "Vilken intäktsrisk är störst hos er just nu?",
  ctaText: "Boka ett strategisamtal på 30 minuter. Ingen pitch. Vi identifierar er största intäkts- eller leveransrisk.",
};

export default function CustomerSuccessPage() {
  return <ServicePage data={data} />;
}
