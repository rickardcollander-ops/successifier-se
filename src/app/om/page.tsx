import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/site/SimplePage";
import { dict } from "@/lib/i18n";
import { FOUNDER, ORG, PAGE_UPDATED, SERVICE_PAGES, SITE_URL, SUPPORTIFIER } from "@/lib/site";

const PATH = "/om";
const PAGE_URL = `${SITE_URL}${PATH}`;
const t = dict.sv;

const SHORT_ANSWER = `${ORG.legalName} (org.nr ${ORG.orgNr}) är en svensk AI-konsult i Stockholmsområdet, grundad ${ORG.foundingDate.slice(0, 4)} av ${ORG.founderName}. Vi bygger och driftsätter AI-agenter, AI-kundtjänst och automationsflöden, och bygger Customer Success-funktioner för B2B- och SaaS-bolag. Vi utvecklar AI-kundtjänstplattformen Supportifier och SEO/GEO-plattformen SAMA.`;

export const metadata: Metadata = {
  title: "Om Successifier AB: AI-konsult och Customer Success",
  description:
    "Successifier AB är en svensk AI-konsult som bygger och driftsätter AI-agenter, AI-kundtjänst och Customer Success. Grundad 2026 av Rickard Collander.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: "Om Successifier AB · Successifier",
    description: "Svensk AI-konsult som bygger och driftsätter AI-agenter, AI-kundtjänst och Customer Success.",
    url: PAGE_URL,
    siteName: "Successifier.se",
    locale: "sv_SE",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: SHORT_ANSWER,
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[PATH],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": ORG.id },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#kort-svar"] },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Om oss", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ label: "Om oss" }]}
      eyebrow="Om oss"
      title="Successifier bygger AI som fungerar i drift, inte bara i en pilot"
      lead={t.about.p2}
      shortAnswer={SHORT_ANSWER}
      updated={PAGE_UPDATED[PATH]}
    >
      <h2>Vilka är vi?</h2>
      <p>{t.about.p1}</p>
      <p>{t.about.p3}</p>
      <p>
        Grundaren <Link href={FOUNDER.path}>{FOUNDER.name}</Link> har över 20 års erfarenhet av kundservice och
        kontaktcenter, bland annat från Scania, Releasy och Telia.
      </p>

      <h2>Vad gör Successifier?</h2>
      <ul>
        {SERVICE_PAGES.map((s) => (
          <li key={s.href}>
            <Link href={s.href}>{s.label}</Link>: {s.short}
          </li>
        ))}
      </ul>

      <h2>Vilka produkter har Successifier?</h2>
      <ul>
        <li>
          <strong>Supportifier</strong>: {SUPPORTIFIER.description} Läs mer på <Link href="/ai-kundtjanst">vår sida om Supportifier</Link> eller på{" "}
          <a href={SUPPORTIFIER.url}>supportifier.se</a>.
        </li>
        <li>
          <strong>SAMA</strong>: vår plattform för SEO, GEO och content, som vi använder för att driva kunders synlighet i Google och i AI-svar.{" "}
          <Link href="/seo-geo">Mer om SAMA</Link>.
        </li>
        <li>
          <strong>Successifier Customer Success-plattform</strong>: programvara för health scoring, churn och expansion, med engelskspråkig sajt på{" "}
          <a href={ORG.comSite}>successifier.com</a>.
        </li>
      </ul>

      <h2>Hur arbetar vi?</h2>
      <ol>
        <li><strong>{t.approach.s1Title}.</strong> {t.approach.s1Text}</li>
        <li><strong>{t.approach.s2Title}.</strong> {t.approach.s2Text}</li>
        <li><strong>{t.approach.s3Title}.</strong> {t.approach.s3Text}</li>
      </ol>
      <p>
        Ett exempel är <Link href="/kundcase/dold-adress">kundcaset från Dold Adress</Link>, där återkommande kundmail
        nu besvaras automatiskt i kundens egen ton.
      </p>

      <h2>Bolagsfakta</h2>
      <ul>
        <li>Juridiskt namn: {ORG.legalName}</li>
        <li>Organisationsnummer: {ORG.orgNr}</li>
        <li>Momsregistreringsnummer: {ORG.vatId}</li>
        <li>Adress: {ORG.address.streetAddress}, {ORG.address.postalCode} {ORG.address.addressLocality}</li>
        <li>Grundat: {ORG.foundingDate.slice(0, 4)}</li>
        <li>
          Profiler: <a href={ORG.linkedInCompany}>LinkedIn</a>, <a href={ORG.allabolag}>Allabolag</a>
        </li>
      </ul>
      <p>
        <Link href="/kontakt">Kontakta oss</Link> eller boka ett strategisamtal.
      </p>
    </SimplePage>
  );
}
