import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";
import { dict } from "@/lib/i18n";

const description =
  "Swedish consultancy for AI agents, AI customer service and Customer Success. We build and run AI in your systems, and drive SEO and GEO with our SAMA platform.";

export const metadata: Metadata = {
  // Mallen i layout lägger till " · Successifier".
  title: "AI consulting, Customer Success & automation",
  description,
  alternates: {
    canonical: "/en",
    languages: {
      "sv-SE": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "AI consulting, Customer Success & automation · Successifier",
    description,
    url: "https://www.successifier.se/en",
    siteName: "Successifier.se",
    locale: "en_GB",
    alternateLocale: ["sv_SE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI consulting, Customer Success & automation · Successifier",
    description,
  },
};

// Rotlayouten sätter lang="sv" för hela sajten. Den engelska startsidan
// märks upp med lang="en" på sin egen omslutande nivå.
export default function EnglishHome() {
  return (
    <div lang="en">
      <HomePageContent t={dict.en} />
    </div>
  );
}
