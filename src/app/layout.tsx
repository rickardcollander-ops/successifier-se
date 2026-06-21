import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Successifier.se · Customer Success, AI & Automation",
  description: "Svensk konsult inom Customer Success, AI och automation. Vi driver SEO och marknadsföring, med vår egen plattform SAMA för AI-synlighet och GEO-readiness.",
  keywords: [
    "AI-konsult",
    "AI konsulting",
    "Automation",
    "Customer Success",
    "Contact Center",
    "AI-marknadsföring",
    "SEO med AI",
    "Google Ads",
    "LinkedIn Ads",
    "Meta Ads",
    "AI-verktyg",
    "SAMA",
    "AI-synlighet",
    "GEO readiness",
    "AI-omnämnande",
    "Sverige",
  ],
  metadataBase: new URL("https://successifier.se"),
  alternates: {
    canonical: "/",
    languages: {
      "sv-SE": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  openGraph: {
    title: "Successifier.se · Customer Success, AI, Automation & SAMA-plattformen",
    description: "Konsulting och egen plattform (SAMA) för AI-synlighet, SEO och content, samt Customer Success, Contact Center och AI-driven marknadsföring på Google, LinkedIn och Meta.",
    url: "https://successifier.se",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successifier.se · Customer Success, AI, Automation & SAMA-plattformen",
    description: "Konsulting och egen plattform SAMA för AI-synlighet, SEO och content-publicering på Google, LinkedIn och Meta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://successifier.se/#organization",
        name: "Successifier.se",
        url: "https://successifier.se",
        logo: "https://successifier.se/logo.svg",
        email: "rc@successifier.com",
        telephone: "+46722136422",
        sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
        areaServed: "SE",
      },
      {
        "@type": "WebSite",
        "@id": "https://successifier.se/#website",
        url: "https://successifier.se",
        name: "Successifier.se",
        inLanguage: "sv-SE",
        publisher: { "@id": "https://successifier.se/#organization" },
      },
    ],
  };

  return (
    <html lang="sv">
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9ZMLDNWJQN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ZMLDNWJQN');
          `}
        </Script>
      </head>
      <body
        className={`${spectral.variable} ${hanken.variable} ${plexMono.variable} antialiased`}
      >
        {/* Subtle paper grain across the whole site */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60]"
          style={{
            opacity: 0.05,
            mixBlendMode: "multiply",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        {children}
      </body>
    </html>
  );
}
