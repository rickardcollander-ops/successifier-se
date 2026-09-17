// Centrala företagsfakta. Används av Organization-schemat (layout), llms.txt,
// tjänstesidorna och sidfoten så att samma uppgifter återges identiskt överallt.
// Konsekventa entitetsuppgifter är en förutsättning för att AI-sökmotorer och
// Google ska koppla ihop sajten med bolaget, LinkedIn-sidan och Allabolag.

export const SITE_URL = "https://www.successifier.se";

export const ORG = {
  id: `${SITE_URL}/#organization`,
  name: "Successifier",
  legalName: "Successifier AB",
  // Organisationsnummer enligt Bolagsverket/Allabolag.
  orgNr: "559566-3864",
  // Svenskt momsregistreringsnummer: SE + organisationsnummer utan bindestreck + 01.
  vatId: "SE559566386401",
  foundingDate: "2026-01-08",
  founderName: "Rickard Collander",
  email: "rc@successifier.com",
  phone: "+46722136422",
  phoneDisplay: "+46 72 213 64 22",
  address: {
    streetAddress: "Stensövägen 6",
    postalCode: "138 30",
    addressLocality: "Älta",
    addressRegion: "Stockholms län",
    addressCountry: "SE",
  },
  // Publika profiler som beskriver samma bolag (sameAs i schema.org).
  linkedInCompany: "https://www.linkedin.com/company/successifier/",
  linkedInFounder: "https://www.linkedin.com/in/rickard-collander/",
  allabolag: "https://www.allabolag.se/foretag/successifier-ab/älta/internet-konsulter-operatörer/2KJIHVCI5YFHL",
  // Microsoft Partner-profilen: klistra in den publika profil-URL:en från
  // Microsofts partnerkatalog (marketplace.microsoft.com/…/partner-dir) här.
  // Tom sträng = utelämnas ur sameAs tills länken finns.
  microsoftPartner: "",
} as const;

export const SUPPORTIFIER = {
  name: "Supportifier",
  url: "https://supportifier.se",
  bookUrl: "https://supportifier.se/boka",
  platformUrl: "https://supportifier.se/plattform",
  onboardingUrl: "https://supportifier.se/kom-igang",
  pricingUrl: "https://supportifier.se/priser",
  integrationsUrl: "https://supportifier.se/integrationer",
  securityUrl: "https://supportifier.se/sakerhet",
  description:
    "Supportifier är en svensk AI-plattform för kundservice, utvecklad av Successifier AB. En gemensam kunskapsbas driver hjälpcenter, AI-chatt, AI-formulär, supportinkorg med AI-svarsförslag och kundportal.",
} as const;

// Tjänstesidorna, i den ordning de listas i menyer, sitemap och llms.txt.
export const SERVICE_PAGES = [
  {
    href: "/ai-agenter",
    label: "AI-agenter",
    short: "Vi bygger och driftsätter AI-agenter i era system, 3–6 veckor till produktion.",
  },
  {
    href: "/ai-konsult",
    label: "AI-konsult & agentic AI",
    short: "Kartläggning, pilot, integration och skalning av agentic AI med människan i loopen.",
  },
  {
    href: "/seo-geo",
    label: "GEO & SEO med SAMA",
    short: "Synlighet i Google och AI-svar (ChatGPT, Perplexity, Google AI) med vår egen plattform SAMA.",
  },
  {
    href: "/customer-success",
    label: "Customer Success",
    short: "Operating model, health scoring och renewal-playbooks som skyddar NRR och minskar churn.",
  },
  {
    href: "/contact-center-automation",
    label: "Contact center-automation",
    short: "AI och automation i kontaktcenter: routing, svarsförslag, QA och KPI-styrning.",
  },
  {
    href: "/ai-kundtjanst",
    label: "Supportifier – AI-kundtjänst",
    short: "Vår produkt för AI-kundtjänst: kunskapsbas, hjälpcenter, AI-chatt och inkorg med svarsförslag.",
  },
] as const;

export function orgSameAs(): string[] {
  return [ORG.linkedInCompany, ORG.linkedInFounder, ORG.allabolag, ORG.microsoftPartner].filter(Boolean);
}
