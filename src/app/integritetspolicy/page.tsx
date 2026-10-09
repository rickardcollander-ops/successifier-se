import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/site/SimplePage";
import { ORG, PAGE_UPDATED, SITE_URL } from "@/lib/site";

const PATH = "/integritetspolicy";
const PAGE_URL = `${SITE_URL}${PATH}`;

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Hur Successifier AB behandlar personuppgifter och cookies på successifier.se: vilka uppgifter, varför, hur länge och vilka rättigheter du har.",
  alternates: { canonical: PATH },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Integritetspolicy",
        inLanguage: "sv-SE",
        dateModified: PAGE_UPDATED[PATH],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": ORG.id },
      },
    ],
  };

  return (
    <SimplePage
      jsonLd={jsonLd}
      breadcrumb={[{ label: "Integritetspolicy" }]}
      eyebrow="Integritet"
      title="Integritetspolicy"
      lead={`Här beskriver vi hur ${ORG.legalName} behandlar personuppgifter när du besöker successifier.se, bokar ett möte eller kontaktar oss.`}
      updated={PAGE_UPDATED[PATH]}
    >
      <h2>Personuppgiftsansvarig</h2>
      <p>
        {ORG.legalName}, org.nr {ORG.orgNr}, {ORG.address.streetAddress}, {ORG.address.postalCode}{" "}
        {ORG.address.addressLocality}. Frågor om personuppgifter skickar du till{" "}
        <a href={`mailto:${ORG.email}`}>{ORG.email}</a>.
      </p>

      <h2>Vilka uppgifter behandlar vi och varför?</h2>
      <ul>
        <li>
          <strong>När du kontaktar oss</strong> via e-post eller telefon: namn, kontaktuppgifter och det du skriver.
          Syftet är att besvara dig och, om du vill, inleda ett samarbete. Rättslig grund: berättigat intresse,
          och avtal om ett uppdrag blir av.
        </li>
        <li>
          <strong>När du bokar ett möte</strong> i den inbäddade kalendern: namn, e-post och den tid du väljer.
          Bokningen hanteras av Google Calendar (Google Ireland Ltd). Rättslig grund: berättigat intresse av att
          genomföra mötet du bokat.
        </li>
        <li>
          <strong>När du besöker sajten</strong>: om du godkänner statistikcookies använder vi Google Analytics 4
          för att se hur sajten används, till exempel vilka sidor som läses och var besökarna kommer ifrån. IP-adresser
          lagras inte av Google Analytics 4. Rättslig grund: samtycke. Utan samtycke sätts inga statistikcookies.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Statistikcookies från Google Analytics (<code>_ga</code>, <code>_ga_*</code>) sätts bara om du har godkänt
        dem i cookierutan. Ditt val sparas i webbläsarens lokala lagring så att rutan inte visas igen. Du kan ändra
        ditt val när som helst via länken <em>Cookieinställningar</em> längst ner på sidan.
      </p>

      <h2>Hur länge sparar vi uppgifterna?</h2>
      <p>
        E-post och mötesbokningar sparas så länge det behövs för kontakten och ett eventuellt uppdrag, och därefter
        så länge bokföringslagen kräver för uppgifter som ingår i räkenskapsinformation. Statistikdata i Google
        Analytics sparas i 14 månader.
      </p>

      <h2>Vilka delar vi uppgifter med?</h2>
      <p>
        Våra leverantörer av e-post, kalender och statistik (Google) behandlar uppgifter för vår räkning. Google kan
        överföra uppgifter till USA. Överföringen sker med stöd av EU:s beslut om adekvat skyddsnivå (EU–US Data
        Privacy Framework) eller EU-kommissionens standardavtalsklausuler. Vi säljer aldrig personuppgifter.
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Du har rätt att begära tillgång till, rättelse av eller radering av dina uppgifter, att invända mot
        behandling som bygger på berättigat intresse och att återkalla ett samtycke. Kontakta oss på{" "}
        <a href={`mailto:${ORG.email}`}>{ORG.email}</a>. Om du är missnöjd med hur vi behandlar dina uppgifter kan
        du klaga hos <a href="https://www.imy.se">Integritetsskyddsmyndigheten (IMY)</a>.
      </p>

      <p>
        Läs också <Link href="/om">om oss</Link>.
      </p>
    </SimplePage>
  );
}
