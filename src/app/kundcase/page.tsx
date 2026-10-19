import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SimplePage, { serif } from "@/components/site/SimplePage";
import { PAGE_UPDATED, SITE_URL } from "@/lib/site";

const PATH = "/kundcase";
const PAGE_URL = `${SITE_URL}${PATH}`;

// Samma kundberättelser som på supportifier.se/kundberattelser. Bara det
// kunderna själva har godkänt; inga siffror förrän de är godkända.
const CASES = [
  {
    href: "/kundcase/dold-adress",
    company: "Dold Adress",
    title: "Växande inflöde av kundmail, bibehållen omtanke",
    text: "Återkommande kundmail besvaras automatiskt i Dold Adress personliga och diskreta ton. Resultatet blev kortare svarstider och ett team som fokuserar på det som kräver en människa.",
    person: "Ida Rosell, COO",
    image: "/ida-rosell.webp",
  },
  {
    href: "/kundcase/serus",
    company: "Serus",
    title: "Höga krav, samma ton mot kund",
    text: "Ett bolag som själva arbetar med AI låter Supportifier ta hand om de repetitiva ärendena utan att tappa precision eller ton. Snabbare svar och mindre manuellt arbete.",
    person: "Filip Landgren, CEO och grundare",
    image: "/filip-landgren.webp",
  },
];

const SHORT_ANSWER =
  "Successifier har infört AI i kundservicen hos bland andra Dold Adress och Serus, med Supportifier, vår plattform för AI-kundtjänst. I båda fallen besvaras återkommande ärenden automatiskt i kundens egen ton, och båda kunderna beskriver kortare svarstider och ett team som kan lägga tiden på ärenden som kräver en människa.";

export const metadata: Metadata = {
  title: "Kundcase: AI i kundservicen hos Dold Adress och Serus",
  description:
    "Kundcase från Successifier: så besvaras återkommande kundärenden med AI hos Dold Adress och Serus, med kortare svarstider och kundens egen ton.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Kundcase: AI i kundservicen hos Dold Adress och Serus · Successifier",
    description: "Så besvaras återkommande kundärenden med AI hos Dold Adress och Serus, med kortare svarstider och kundens egen ton.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

export default function KundcasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: SHORT_ANSWER,
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[PATH],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${PAGE_URL}#lista` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#kort-svar"] },
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#lista`,
        itemListElement: CASES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Kundcase: ${c.company}`,
          url: `${SITE_URL}${c.href}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kundcase", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ label: "Kundcase" }]}
      eyebrow="Kundcase"
      title="Kundcase: AI i kundservicen, med kundernas egna ord"
      lead="Två bolag som behövde svara fler kunder snabbare, utan att tumma på kvaliteten eller tonen."
      shortAnswer={SHORT_ANSWER}
      updated={PAGE_UPDATED[PATH]}
    >
      <div className="not-prose my-10 grid gap-6">
        {CASES.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block rounded-[6px] p-6 no-underline sm:p-8"
            style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)", color: "var(--ink)" }}
          >
            <div className="text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>{c.company}</div>
            <h2 className="mt-2 text-[24px] font-medium leading-[1.2]" style={serif}>{c.title}</h2>
            <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: "var(--muted)" }}>{c.text}</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
                <Image src={c.image} alt={c.person} width={80} height={80} className="h-full w-full object-cover" />
              </div>
              <span className="text-[14px]" style={{ color: "var(--faint-2)" }}>{c.person}</span>
              <span className="ml-auto text-[14px]" style={{ color: "var(--accent)" }}>Läs kundcaset →</span>
            </div>
          </Link>
        ))}
      </div>

      <h2>Vill ni veta hur det skulle se ut hos er?</h2>
      <p>
        Läs hur vi inför <Link href="/contact-center-automation">AI i kontaktcenter och kundtjänst</Link> och bygger{" "}
        <Link href="/ai-agenter">AI-agenter</Link>, eller <Link href="/kontakt">boka ett samtal</Link> om era största
        ärendetyper.
      </p>
    </SimplePage>
  );
}
