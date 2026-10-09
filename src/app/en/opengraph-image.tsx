import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Successifier: AI consulting, Customer Success and automation in Sweden";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "AI consulting, Customer Success and automation in Sweden", eyebrow: "Successifier" });
}
