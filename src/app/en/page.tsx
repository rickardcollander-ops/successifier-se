import HomePageContent from "@/components/HomePageContent";
import { dict } from "@/lib/i18n";

export const metadata = {
  title: "Successifier.se — Customer Success, AI, Automation & the SAMA Platform",
  description:
    "Swedish consultancy specialising in Customer Success, Contact Center, AI and automation. We drive SEO and marketing on Google, LinkedIn and Meta — with our own SAMA platform for AI visibility, GEO-readiness and content publishing.",
};

export default function EnglishHome() {
  return <HomePageContent t={dict.en} />;
}
