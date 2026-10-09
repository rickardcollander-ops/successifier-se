import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Om Successifier AB: AI-konsult och Customer Success i Stockholm";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Om Successifier AB: AI-konsult och Customer Success i Stockholm", eyebrow: "Om oss" });
}
