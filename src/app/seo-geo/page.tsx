import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { ORG } from "@/lib/site";

const PAGE_URL = "https://www.successifier.se/seo-geo";

export const metadata: Metadata = {
  title: "GEO & SEO med SAMA: synlighet i Google och AI-svar",
  description:
    "Successifier driver SEO och GEO (Generative Engine Optimization) för svenska B2B-bolag med den egna plattformen SAMA: AI-omnämnanden i ChatGPT, Perplexity och Google AI, SEO-hälsa och content med människa i loopen.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI-synlighet",
    "SEO-konsult B2B",
    "SAMA",
    "synas i ChatGPT",
    "synas i Perplexity",
    "AI-driven SEO",
    "GEO-konsult Sverige",
  ],
  alternates: { canonical: "/seo-geo" },
  openGraph: {
    type: "website",
    title: "GEO & SEO med SAMA: synlighet i Google och AI-svar · Successifier",
    description:
      "AI-synlighet, SEO och content för B2B-bolag, drivet av vår egen plattform SAMA. Spårar AI-omnämnanden, mäter SEO-hälsa och publicerar content.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO & SEO med SAMA · Successifier",
    description: "Synlighet i Google, ChatGPT, Perplexity och Google AI för svenska B2B-bolag.",
  },
};

const data: ServicePageData = {
  href: "/seo-geo",
  breadcrumb: "GEO & SEO med SAMA",
  eyebrow: "GEO & SEO · Drivet av SAMA",
  title: "Synlighet i Google och i AI-svaren, med en plattform vi byggt själva.",
  lead:
    "SAMA är AI-systemet vi använder för att driva kunders synlighet i Google, LinkedIn, Meta och AI-sökmotorer. Det spårar AI-omnämnanden, mäter SEO-hälsa och genererar och publicerar content, med människa i loopen.",
  shortAnswer:
    "Successifier driver SEO och GEO (Generative Engine Optimization) för svenska B2B-bolag med den egenutvecklade plattformen SAMA. SAMA spårar hur ofta ett varumärke nämns i ChatGPT, Perplexity och Google AI, mäter teknisk SEO-hälsa och genererar och publicerar content som en redaktör godkänner. Leveransen omfattar GEO-audit, schema och llms.txt, content-produktion och annonsering på Google, LinkedIn och Meta.",
  serviceName: "GEO & SEO med SAMA",
  serviceType: "Generative Engine Optimization / SEO / AI-driven marknadsföring",
  facts: [
    { value: "3", label: "AI-sökmotorer spåras: ChatGPT, Perplexity och Google AI" },
    { value: "1", label: "egen plattform (SAMA), byggd av oss, inte inköpt licens" },
    { value: "3", label: "annonskanaler: Google, LinkedIn och Meta" },
  ],
  deliverablesHeading: "Vad som ingår",
  deliverablesIntro:
    "Ni får systemet och teamet runt det: strategi, redaktör och optimering. Inte bara en licens.",
  deliverables: [
    {
      title: "GEO-audit & baseline",
      text: "Vi mäter hur er sajt och ert varumärke syns i AI-svar i dag: omnämnanden, citeringar, schema, llms.txt och citerbarhet per sida.",
    },
    {
      title: "AI-synlighet i SAMA",
      text: "Löpande spårning av AI-omnämnanden i ChatGPT, Perplexity och Google AI för en fast uppsättning frågor i er nisch, med trend över tid.",
    },
    {
      title: "Teknisk SEO & SEO-hälsa",
      text: "Sidstruktur, hastighet, indexering, strukturerad data och interna länkar. SAMA mäter hälsan och prioriterar åtgärder.",
    },
    {
      title: "Content med människa i loopen",
      text: "SAMA tar fram utkast utifrån sökord och AI-frågor. En redaktör granskar, faktakollar och publicerar. Varje artikel får FAQ-schema och citerbara stycken.",
    },
    {
      title: "Google Ads & Performance Max",
      text: "Sökannonsering med AI-styrd budgivning, kopplad till samma sökordsdata som SEO-arbetet.",
    },
    {
      title: "LinkedIn Ads, ABM & Meta",
      text: "Målgrupper från er ICP, copy och kampanjstruktur för pipeline i B2B, med attribution ner till affär.",
    },
  ],
  processHeading: "Från audit till mätbar synlighet",
  processIntro: "Vi börjar med en baseline så att varje åtgärd går att följa upp mot AI-omnämnanden, ranking och pipeline.",
  process: [
    { tag: "STEG 01 · 1–2 V", title: "Audit & baseline", text: "GEO- och SEO-audit av sajten, mätning av AI-omnämnanden och sökordsläge. Prioriterad åtgärdslista." },
    { tag: "STEG 02", title: "Grund", text: "Organization-schema, FAQ-schema, llms.txt, sidstruktur och citerbara faktastycken på de sidor som ska synas." },
    { tag: "STEG 03", title: "Content-motor", text: "SAMA producerar utkast per sökord och AI-fråga. Redaktör godkänner. Publicering, intern länkning och IndexNow." },
    { tag: "STEG 04", title: "Mätning & optimering", text: "Månadsvis uppföljning av AI-omnämnanden, positioner, trafik och pipeline. Vi justerar innehåll och kampanjer utifrån data." },
  ],
  citable: [
    {
      id: "vad-ar-sama",
      heading: "Vad är SAMA?",
      text: `SAMA är Successifiers egenutvecklade plattform för AI-synlighet, SEO och content. Den spårar AI-omnämnanden i ChatGPT, Perplexity och Google AI, mäter SEO-hälsa och genererar och publicerar content med människa i loopen. SAMA ägs och drivs av Successifier AB (org.nr ${ORG.orgNr}).`,
    },
    {
      id: "vad-ar-geo",
      heading: "Vad är GEO (Generative Engine Optimization)?",
      text: "GEO är arbetet med att få ett varumärke citerat och rekommenderat i AI-genererade svar, i ChatGPT, Perplexity, Google AI Overviews och liknande. Det bygger på konsekventa entitetsuppgifter, strukturerad data, llms.txt och innehåll som är skrivet för att kunna lyftas ut ordagrant.",
    },
    {
      id: "hur-mats-ai-synlighet",
      heading: "Hur mäts AI-synlighet?",
      text: "Successifier mäter AI-synlighet som andelen svar där varumärket nämns eller citeras för en fast uppsättning frågor i kundens nisch, körda återkommande i ChatGPT, Perplexity och Google AI. Andelen följs som en trend per månad tillsammans med Google-position och organisk trafik.",
    },
    {
      id: "geo-krav",
      heading: "Vad krävs för att en sida ska bli citerad av AI?",
      text: "En GEO-redo sida har ett kort, självständigt svar högst upp, Organization- eller Service-schema, FAQ-schema, tydliga siffror och tidsramar, och beskrivs i sajtens llms.txt. Entitetsuppgifter (bolagsnamn, ort, grundare, tjänster) ska vara identiska på sajten, LinkedIn och i bolagsregister.",
    },
    {
      id: "pris-seo-geo",
      heading: "Vad kostar GEO och SEO med SAMA?",
      text: "Fast pris för audit och baseline (2–4 veckor). Därefter ett månadsupplägg som omfattar SAMA, redaktör, optimering och rapportering. Annonsbudget tillkommer och betalas direkt till Google, LinkedIn eller Meta.",
    },
    {
      id: "for-vem-seo-geo",
      heading: "För vilka bolag passar det?",
      text: "B2B- och SaaS-bolag i Sverige som säljer komplexa tjänster och vill synas när köpare frågar ChatGPT, Perplexity eller Google om leverantörer. Allt innehåll produceras på svenska, med engelska vid behov.",
    },
  ],
  faqs: [
    {
      q: "Är SAMA en produkt vi kan köpa licens på?",
      a: "SAMA levereras som motor i vår marknadstjänst, tillsammans med strategi, redaktör och optimering. Vi visar plattformen live i strategisamtalet.",
    },
    {
      q: "Hur snabbt syns effekten i AI-svar?",
      a: "Grundarbetet (schema, llms.txt, citerbara sidor) plockas upp av AI-sökmotorer inom veckor. Bredare synlighet byggs över månader i takt med att content publiceras och länkas.",
    },
    {
      q: "Skriver AI allt innehåll?",
      a: "Nej. SAMA tar fram utkast och underlag. En redaktör granskar, faktakollar och godkänner innan publicering. Innehållet ska hålla för att citeras som källa.",
    },
    {
      q: "Jobbar ni med vår befintliga sajt och vårt CMS?",
      a: "Ja. Vi arbetar i er befintliga plattform och rekommenderar byte bara när det är motiverat.",
    },
    {
      q: "Rapporterar ni på pipeline eller bara trafik?",
      a: "Vi rapporterar AI-omnämnanden, positioner, trafik och pipeline med attribution, i ett format som håller för ledning och styrelse.",
    },
  ],
  category: "marknad",
  guidesHeading: "Läs vidare om GEO, SEO och AI-synlighet",
  ctaHeading: "Vill ni se SAMA live?",
  ctaText: "Boka ett strategisamtal på 30 minuter. Vi visar plattformen och gör en första bedömning av er AI-synlighet.",
};

export default function SeoGeoPage() {
  return <ServicePage data={data} />;
}
