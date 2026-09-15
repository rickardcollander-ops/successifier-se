import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Successifier – AI-konsult, Customer Success och automation för svenska B2B-bolag";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "AI-konsulting som bygger och driftsätter, inte PowerPoint.",
    eyebrow: "Successifier.se",
  });
}
