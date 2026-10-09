import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Customer Success: minska churn och skydda NRR";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ title: "Customer Success: minska churn och skydda NRR", eyebrow: "Customer Success" });
}
