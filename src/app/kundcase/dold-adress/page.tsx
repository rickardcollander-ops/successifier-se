import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SimplePage, { serif } from "@/components/site/SimplePage";
import { dict } from "@/lib/i18n";
import { ORG, PAGE_UPDATED, SITE_URL } from "@/lib/site";

const PATH = "/kundcase/dold-adress";
const PAGE_URL = `${SITE_URL}${PATH}`;
const CUSTOMER_URL = "https://www.doldadress.se";

// Bara det kunden själv sagt (de två publicerade citaten från Ida Rosell)
// och det som redan står på sajten. Lägg till siffror först när kunden har
// godkänt dem.
const QUOTE_LONG = dict.sv.testimonial.quote;
const QUOTE_SHORT = dict.sv.about.quote;
const PERSON = dict.sv.testimonial.name;
const ROLE = dict.sv.testimonial.title;

const SHORT_ANSWER =
  "Dold Adress hade en växande mängd kundmail och hann inte med utan att tumma på kvaliteten. Successifier byggde en lösning som besvarar de återkommande ärendena automatiskt, i Dold Adress personliga och diskreta ton, och låter teamet lägga tiden på ärenden som kräver en människa. Resultatet blev kortare svarstider, enligt Dold Adress COO Ida Rosell.";

export const metadata: Metadata = {
  title: "Kundcase Dold Adress: automatiserad kundmail med AI",
  description:
    "Så automatiserade Successifier kundmailen hos Dold Adress: återkommande ärenden besvaras automatiskt i rätt ton, med kortare svarstider som resultat.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    title: "Kundcase Dold Adress: automatiserad kundmail med AI · Successifier",
    description: "Återkommande kundmail besvaras automatiskt i Dold Adress personliga och diskreta ton. Kortare svarstider och ett team som fokuserar på rätt ärenden.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

export default function DoldAdressCasePage() {
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
        name: "Dold Adress",
        url: CUSTOMER_URL,
      },
      {
        "@type": "Quotation",
        "@id": `${PAGE_URL}#citat`,
        text: QUOTE_LONG,
        inLanguage: "sv-SE",
        creator: { "@type": "Person", name: PERSON, jobTitle: "COO", worksFor: { "@id": `${PAGE_URL}#kund` } },
        about: { "@id": ORG.id },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kundcase: Dold Adress", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ label: "Kundcase: Dold Adress" }]}
      eyebrow="Kundcase · AI-kundtjänst"
      title="Dold Adress: kundmail som besvaras automatiskt, utan att tappa tonen"
      lead="Dold Adress hjälper privatpersoner att ta bort och dölja sina personuppgifter på nätet. Kunderna skriver ofta i känsliga lägen, så varje svar måste vara personligt och diskret."
      shortAnswer={SHORT_ANSWER}
      updated={PAGE_UPDATED[PATH]}
    >
      <h2>Utgångsläget</h2>
      <p>
        Mängden kundmail växte. Teamet kände att de inte riktigt hann med utan att tumma på kvaliteten, och en stor
        del av mailen var återkommande frågor som tog tid från de ärenden som verkligen behövde en människa.
      </p>

      <h2>Vad Successifier gjorde</h2>
      <p>
        Vi byggde en lösning som tar hand om de återkommande ärendena automatiskt. Kravet var att svaren skulle låta
        som Dold Adress: personliga och diskreta, eftersom det är så viktigt i deras bransch. Ärenden som kräver
        bedömning lämnas till teamet. Hur vi bygger den här typen av lösningar beskriver vi på sidan om vår
        plattform för AI-kundtjänst, <Link href="/ai-kundtjanst">Supportifier</Link>.
      </p>

      <h2>Resultatet</h2>
      <ul>
        <li>Kortare svarstider för kunderna.</li>
        <li>Teamet lägger tiden på ärenden som verkligen kräver en människa.</li>
        <li>Tonen i svaren är densamma som tidigare: personlig och diskret.</li>
      </ul>

      <figure className="not-prose my-10 rounded-[6px] p-6 sm:p-8" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
        <blockquote id="citat" className="text-[20px] leading-[1.45] tracking-[-0.01em]" style={serif}>
          “{QUOTE_LONG}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
            <Image src="/ida-rosell.webp" alt={PERSON} width={112} height={112} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>{PERSON}</div>
            <div className="text-[13px]" style={{ color: "var(--faint-2)" }}>
              {ROLE},{" "}
              <a href={CUSTOMER_URL} target="_blank" rel="noopener noreferrer">doldadress.se</a>
            </div>
          </div>
        </figcaption>
      </figure>

      <p>
        <em>“{QUOTE_SHORT}”</em> – {PERSON}, {ROLE}
      </p>

      <h2>Vill ni göra samma sak?</h2>
      <p>
        Läs hur vi inför <Link href="/contact-center-automation">AI i kontaktcenter och kundtjänst</Link>, eller den
        praktiska guiden <Link href="/blog/ai-kundtjanst-for-e-post-sa-automatiserar-du-supportinkorgen-utan-att-tappa-kvaliteten">AI-kundtjänst för e-post</Link>.
        Ni kan också <Link href="/kontakt">boka ett samtal</Link> direkt.
      </p>
    </SimplePage>
  );
}
