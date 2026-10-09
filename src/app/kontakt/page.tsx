import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/site/SimplePage";
import BookingEmbed from "@/components/site/BookingEmbed";
import { ORG, PAGE_UPDATED, SITE_URL, SUPPORTIFIER } from "@/lib/site";

const PATH = "/kontakt";
const PAGE_URL = `${SITE_URL}${PATH}`;

const SHORT_ANSWER = `Boka ett strategisamtal på 30 minuter i kalendern nedan, mejla ${ORG.email} eller ring ${ORG.phoneDisplay}. ${ORG.legalName} finns i Stockholmsområdet och tar uppdrag i hela Sverige, Norden och Europa.`;

export const metadata: Metadata = {
  title: "Kontakta Successifier: boka ett strategisamtal",
  description: `Boka ett strategisamtal om AI-agenter, AI-kundtjänst eller Customer Success. E-post ${ORG.email}, telefon ${ORG.phoneDisplay}.`,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Kontakta Successifier · Successifier",
    description: "Boka ett strategisamtal på 30 minuter om AI-agenter, AI-kundtjänst eller Customer Success.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: SHORT_ANSWER,
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[PATH],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORG.id },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kontakt", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ label: "Kontakt" }]}
      eyebrow="Kontakt"
      title="Boka ett strategisamtal"
      lead="30 minuter. Ingen pitch. Vi går igenom var AI, automation eller Customer Success gör störst skillnad hos er."
      shortAnswer={SHORT_ANSWER}
    >
      <h2>Direktkontakt</h2>
      <ul>
        <li>E-post: <a href={`mailto:${ORG.email}`}>{ORG.email}</a></li>
        <li>Telefon: <a href={`tel:${ORG.phone}`}>{ORG.phoneDisplay}</a></li>
        <li>Adress: {ORG.legalName}, {ORG.address.streetAddress}, {ORG.address.postalCode} {ORG.address.addressLocality}</li>
        <li>LinkedIn: <a href={ORG.linkedInCompany}>Successifier</a></li>
      </ul>
      <p>
        Gäller det Supportifier, vår plattform för AI-kundtjänst? Boka en demo på{" "}
        <a href={SUPPORTIFIER.bookUrl}>supportifier.se</a>.
      </p>

      <h2>Boka en tid</h2>
      <div className="not-prose">
        <BookingEmbed locale="sv" />
      </div>

      <p>
        Vill du veta mer först? Läs <Link href="/om">om oss</Link>, se våra <Link href="/tjanster">tjänster</Link> eller{" "}
        <Link href="/kundcase/dold-adress">kundcaset från Dold Adress</Link>.
      </p>
    </SimplePage>
  );
}
