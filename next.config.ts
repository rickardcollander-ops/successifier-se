import type { NextConfig } from "next";

// Content-Security-Policy allowing the site's own assets plus Google
// Tag Manager / Analytics (loaded in src/app/layout.tsx).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src https://calendar.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Moderna format för next/image (hero- och produktbilder). Bloggbilderna
    // är redan WebP via scripts/localize-blog-images.mjs.
    formats: ["image/avif", "image/webp"],
  },
  // /en/blog/* serverade samma svenska text som /blog/* (ingen översättning
  // finns). Permanent omdirigering (301) samlar länkar och AI-citeringar på
  // den svenska URL:en. Täcker även /en/blog och artiklarnas OG-bilder.
  async redirects() {
    return [
      // Den avkortade sluggen (…-tillga) är rättad.
      {
        source: "/en/blog/ai-automation-i-kontaktcenter-sverige-fran-kostnadscenter-till-strategisk-tillga",
        destination: "/blog/ai-automation-i-kontaktcenter-sverige-fran-kostnadscenter-till-strategisk-tillgang",
        statusCode: 301,
      },
      { source: "/en/blog/:path*", destination: "/blog/:path*", statusCode: 301 },
      {
        source: "/blog/ai-automation-i-kontaktcenter-sverige-fran-kostnadscenter-till-strategisk-tillga",
        destination: "/blog/ai-automation-i-kontaktcenter-sverige-fran-kostnadscenter-till-strategisk-tillgang",
        statusCode: 301,
      },
      // Bilderna i /public är konverterade från PNG till WebP (okt 2026).
      {
        source: "/:name(Content|Insights|agentic-ai|ai-content|delad|ida-rosell|person-vid-skarm|shack|skrivbord|tre-skarmar).png",
        destination: "/:name.webp",
        statusCode: 301,
      },
      // Artiklar som konkurrerade om samma sökning är sammanslagna (okt 2026).
      {
        source: "/blog/ai-konsult-i-sverige-hur-hittar-du-ratt-partner-for-ditt-b2b-bolag",
        destination: "/blog/basta-ai-konsultbolag-i-sverige-2026-sa-valjer-du-ratt-partner",
        statusCode: 301,
      },
      {
        source: "/blog/ai-synlighet-i-marknadsforing-2026-allt-du-behover-veta",
        destination: "/blog/ai-synlighet-2026-hur-b2b-bolag-rankar-i-chatgpt-och-perplexity",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Bloggbilder och statiska tillgångar är innehållsadresserade per slug
        // och ändras sällan – låt CDN och webbläsare cacha dem länge.
        source: "/blog/:slug*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
