import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SimplePage, { serif } from "@/components/site/SimplePage";
import { ORG, PAGE_UPDATED, SITE_URL } from "@/lib/site";

const PATH = "/kundcase/serus";
const PAGE_URL = `${SITE_URL}${PATH}`;

// Samma citat som på supportifier.se/kundberattelser. Bygger på texten Filip
// Landgren godkände per mejl 2026-06-29, anpassad till Supportifier 2026-10-10.
// Ändra inte ordalydelsen och lägg inte till siffror utan att Serus godkänt dem.
const PERSON = "Filip Landgren";
const ROLE = "CEO och grundare, Serus";
const QUOTE_LONG =
  "På Serus jobbar vi med automation och AI varje dag, så vi har högt ställda krav på vad vi släpper in i vår egen verksamhet. Supportifier tar hand om de repetitiva ärendena utan att tappa precision eller ton mot kund, och exakt den balansen är svår att få till. Resultatet är kortare svarstider och ett team som kan lägga sin tid på det som kräver omdöme. Teamet bakom är raka, snabba och bygger lösningar som håller i drift, inte bara i en demo.";
const QUOTE_SHORT =
  "Vi bygger för skala och kan inte kompromissa med kvaliteten i kunddialogen. Supportifier håller måttet: snabbare svar, mindre manuellt arbete och en kundupplevelse som faktiskt blev bättre. Teamet bakom förstår både tekniken och var den gör verklig nytta.";

const SHORT_ANSWER =
  "Serus arbetar själva med automation och AI och har höga krav på vad de släpper in i den egna verksamheten. Med Supportifier, Successifiers plattform för AI-kundtjänst, besvaras de repetitiva kundärendena utan att precisionen eller tonen mot kund går förlorad. Resultatet blev kortare svarstider och ett team som lägger tiden på ärenden som kräver omdöme, enligt Serus vd och grundare Filip Landgren.";

export const metadata: Metadata = {
  title: "Kundcase Serus: repetitiva kundärenden med AI",
  description:
    "Så tar Supportifier hand om Serus repetitiva kundärenden med samma precision och ton. Kortare svarstider och mer tid för ärenden som kräver omdöme.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Kundcase Serus: repetitiva kundärenden med AI · Successifier",
    description: "Repetitiva kundärenden besvaras med AI utan att tappa precision eller ton. Kortare svarstider och mer tid för det som kräver omdöme.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

export default function SerusCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: SHORT_ANSWER,
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[PATH],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${PAGE_URL}#kund` },
        mentions: [{ "@id": "https://supportifier.se/#software" }],
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#kort-svar"] },
      },
      {
        "@type": "Organization",
        "@id": `${PAGE_URL}#kund`,
        name: "Serus",
      },
      {
        "@type": "Quotation",
        "@id": `${PAGE_URL}#citat`,
        text: QUOTE_LONG,
        inLanguage: "sv-SE",
        creator: { "@type": "Person", name: PERSON, jobTitle: "CEO och grundare", worksFor: { "@id": `${PAGE_URL}#kund` } },
        about: { "@id": ORG.id },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kundcase", item: `${SITE_URL}/kundcase` },
          { "@type": "ListItem", position: 3, name: "Serus", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ href: "/kundcase", label: "Kundcase" }, { label: "Serus" }]}
      eyebrow="Kundcase · AI-kundtjänst"
      title="Serus: repetitiva kundärenden med AI, utan att tappa precision eller ton"
      lead="Serus arbetar själva med automation och AI varje dag. Därför var kraven höga på det som skulle få svara deras kunder."
      shortAnswer={SHORT_ANSWER}
      updated={PAGE_UPDATED[PATH]}
    >
      <h2>Utgångsläget</h2>
      <p>
        Serus ville att de repetitiva kundärendena skulle hanteras automatiskt, men utan att tappa precision eller ton
        mot kund. Den balansen är svår att få till. Ett bolag som själv bygger med AI vet hur lätt det är att få en
        lösning som fungerar i en demo men inte håller i drift.
      </p>

      <h2>Vad Successifier gjorde</h2>
      <p>
        Serus använder <Link href="/ai-kundtjanst">Supportifier</Link>, vår plattform för AI-kundtjänst. Svaren
        bygger på en granskad kunskapsbas, så AI:n svarar bara på det som har stöd i underlaget och lämnar över till
        en människa när det saknas. Kravet var detsamma som hos Serus egna kunder: rätt svar, i rätt ton, varje gång.
        Hur vi bygger kunskapsbasen beskriver vi i guiden{" "}
        <Link href="/blog/kunskapsbas-for-ai-i-kundservice-sa-bygger-du-den">Kunskapsbas för AI i kundservice</Link>.
      </p>

      <h2>Resultatet</h2>
      <ul>
        <li>Kortare svarstider och snabbare svar till kunderna.</li>
        <li>Mindre manuellt arbete med de repetitiva ärendena.</li>
        <li>Teamet lägger tiden på ärenden som kräver omdöme.</li>
        <li>Precisionen och tonen mot kund är densamma.</li>
      </ul>

      <figure className="not-prose my-10 rounded-[6px] p-6 sm:p-8" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
        <blockquote id="citat" className="text-[20px] leading-[1.45] tracking-[-0.01em]" style={serif}>
          “{QUOTE_LONG}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
            <Image src="/filip-landgren.webp" alt={PERSON} width={112} height={112} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>{PERSON}</div>
            <div className="text-[13px]" style={{ color: "var(--faint-2)" }}>{ROLE}</div>
          </div>
        </figcaption>
      </figure>

      <p>
        <em>“{QUOTE_SHORT}”</em> – {PERSON}, {ROLE}
      </p>

      <h2>Vill ni göra samma sak?</h2>
      <p>
        Läs även <Link href="/kundcase/dold-adress">kundcaset från Dold Adress</Link>, hur vi inför{" "}
        <Link href="/contact-center-automation">AI i kontaktcenter och kundtjänst</Link>, eller den praktiska guiden{" "}
        <Link href="/blog/ai-kundtjanst-for-e-post-sa-automatiserar-du-supportinkorgen-utan-att-tappa-kvaliteten">AI-kundtjänst för e-post</Link>.
        Ni kan också <Link href="/kontakt">boka ett samtal</Link> direkt.
      </p>
    </SimplePage>
  );
}
