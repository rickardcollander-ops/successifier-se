import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Tjänster: AI-agenter, agentiska flöden, GEO/SEO och Customer Success";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Tjänster: AI-agenter, agentiska flöden, GEO/SEO och Customer Success", eyebrow: "Tjänster" });
}
