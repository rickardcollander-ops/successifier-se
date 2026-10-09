import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "AI-konsult i Sverige: från kartläggning till AI i drift";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "AI-konsult i Sverige: från kartläggning till AI i drift", eyebrow: "AI-konsult" });
}
