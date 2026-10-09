import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "GEO & SEO med SAMA: synlighet i Google och AI-svar";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "GEO & SEO med SAMA: synlighet i Google och AI-svar", eyebrow: "GEO & SEO" });
}
