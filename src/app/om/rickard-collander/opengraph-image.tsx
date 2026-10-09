import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Rickard Collander: 20+ år inom kundservice och kontaktcenter";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Rickard Collander: 20+ år inom kundservice och kontaktcenter", eyebrow: "Författare" });
}
