import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Kundcase: Dold Adress och Serus om AI i kundservicen";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Kundcase: Dold Adress och Serus om AI i kundservicen", eyebrow: "Kundcase" });
}
