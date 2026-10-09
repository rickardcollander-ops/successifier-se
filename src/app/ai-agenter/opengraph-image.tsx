import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "AI-agenter som arbetar i era system, inte i en demo.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "AI-agenter som arbetar i era system, inte i en demo.", eyebrow: "AI-agenter" });
}
