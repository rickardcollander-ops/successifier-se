import HomePageContent from "@/components/HomePageContent";
import { dict } from "@/lib/i18n";

export const metadata = {
  title: "Successifier.se · Customer Success, AI & Automation",
  description:
    "Swedish consultancy for Customer Success, AI and automation. We drive SEO and marketing, with our own SAMA platform for AI visibility and GEO-readiness.",
  alternates: {
    canonical: "/en",
    languages: {
      "sv-SE": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
};

export default function EnglishHome() {
  return <HomePageContent t={dict.en} />;
}
