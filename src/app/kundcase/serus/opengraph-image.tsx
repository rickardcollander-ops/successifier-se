import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Kundcase: så tar Serus hand om repetitiva kundärenden med AI";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Kundcase: så tar Serus hand om repetitiva kundärenden med AI", eyebrow: "Kundcase" });
}
