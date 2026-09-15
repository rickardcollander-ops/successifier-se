import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Genererar Open Graph-bilder (1200×630) i sajtens papper/grön-identitet.
// Används som standardbild för sajten och per artikel (titel + kategori).
export function renderOgImage({
  title,
  eyebrow,
  footer = "successifier.se",
}: {
  title: string;
  eyebrow?: string;
  footer?: string;
}) {
  const size = title.length > 90 ? 44 : title.length > 60 ? 52 : 62;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#F2EEE6",
          color: "#1A1815",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>Successifier</div>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#14433B" }} />
          {eyebrow && (
            <div style={{ marginLeft: 18, fontSize: 20, letterSpacing: "0.16em", textTransform: "uppercase", color: "#14433B" }}>
              {eyebrow}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: size,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            color: "#1A1815",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "2px solid rgba(26,24,21,0.14)", paddingTop: 24 }}>
          <div style={{ fontSize: 22, color: "#564E43" }}>AI-konsult · Customer Success · Automation · SEO & GEO</div>
          <div style={{ fontSize: 22, color: "#14433B", fontWeight: 600 }}>{footer}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
