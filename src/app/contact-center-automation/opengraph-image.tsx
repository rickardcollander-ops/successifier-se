import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "AI i kontaktcenter och kundtjänst: automation som håller";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "AI i kontaktcenter och kundtjänst: automation som håller", eyebrow: "Kontaktcenter" });
}
