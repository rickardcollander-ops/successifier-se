import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Agentiska flöden: AI-agenter som driver hela processer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Agentiska flöden: AI-agenter som driver hela processer", eyebrow: "Agentiska flöden" });
}
