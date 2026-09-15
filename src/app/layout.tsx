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
  title: {
    default: "AI-konsult, Customer Success & automation i Sverige · Successifier",
    template: "%s · Successifier",
  },
  description:
    "Successifier är en svensk konsult inom AI, automation och Customer Success. Vi bygger och driftsätter AI-agenter, AI-kundtjänst och automationsflöden, och driver SEO, GEO och marknadsföring med vår egen plattform SAMA.",
  keywords: [
    "AI-konsult",
    "AI-konsult Sverige",
    "agentic AI",
    "AI-automation",
    "AI-kundtjänst",
    "Customer Success",
    "Contact Center",
    "AI-driven marknadsföring",
    "SEO-konsult B2B",
    "GEO",
    "AI-synlighet",
    "SAMA",
  ],
  metadataBase: new URL("https://www.successifier.se"),
  applicationName: "Successifier.se",
  authors: [{ name: "Rickard Collander", url: "https://www.linkedin.com/in/rickard-collander/" }],
  creator: "Rickard Collander",
  publisher: "Successifier.se",
  alternates: {
    canonical: "/",
    languages: {
      "sv-SE": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  openGraph: {
    title: "AI-konsult, Customer Success & automation i Sverige · Successifier",
    description:
      "Konsulting och egen plattform (SAMA) för AI-synlighet, SEO och content, samt AI-agenter, AI-kundtjänst, Customer Success och AI-driven marknadsföring på Google, LinkedIn och Meta.",
    url: "https://www.successifier.se",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-konsult, Customer Success & automation i Sverige · Successifier",
    description: "Konsulting och egen plattform SAMA för AI-synlighet, SEO och content, samt AI-agenter, AI-kundtjänst och Customer Success.",
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
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.successifier.se/#organization",
        name: "Successifier.se",
        alternateName: "Successifier",
        legalName: "Successifier",
        url: "https://www.successifier.se",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.successifier.se/#logo",
          url: "https://www.successifier.se/logo.svg",
          contentUrl: "https://www.successifier.se/logo.svg",
        },
        image: "https://www.successifier.se/opengraph-image",
        description:
          "Svensk konsult inom AI, automation, Customer Success och Contact Center. Bygger och driftsätter AI-agenter, AI-kundtjänst och automationsflöden, och driver SEO, GEO och marknadsföring med den egna plattformen SAMA.",
        slogan: "AI-konsulting som bygger och driftsätter, inte PowerPoint.",
        email: "rc@successifier.com",
        telephone: "+46722136422",
        address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
        areaServed: [{ "@type": "Country", name: "Sweden" }, "Nordics", "Europe"],
        founder: { "@id": "https://www.successifier.se/#rickard-collander" },
        employee: { "@id": "https://www.successifier.se/#rickard-collander" },
        knowsAbout: [
          "AI-konsulting",
          "Agentic AI",
          "AI-agenter",
          "AI-automation",
          "AI-kundtjänst",
          "Customer Success",
          "Contact Center",
          "Generative Engine Optimization",
          "SEO",
          "B2B-marknadsföring",
        ],
        knowsLanguage: ["sv", "en"],
        sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "rc@successifier.com",
          telephone: "+46722136422",
          availableLanguage: ["Swedish", "English"],
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.successifier.se/#rickard-collander",
        name: "Rickard Collander",
        givenName: "Rickard",
        familyName: "Collander",
        jobTitle: "Grundare, Successifier.se",
        description:
          "Grundare av Successifier med över tio års erfarenhet av att bygga och leda Customer Success- och supportfunktioner i SaaS- och scale-up-bolag. Hjälper svenska B2B-bolag från AI-strategi till driftsatta AI-agenter, automation och synlighet i Google och AI-sökmotorer.",
        url: "https://www.successifier.se/#om-oss",
        image: "https://www.successifier.se/rc2.jpg",
        email: "rc@successifier.com",
        worksFor: { "@id": "https://www.successifier.se/#organization" },
        knowsAbout: [
          "Customer Success",
          "AI-konsulting",
          "Agentic AI",
          "Automation",
          "Contact Center",
          "Generative Engine Optimization",
          "SEO",
        ],
        sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.successifier.se/#website",
        url: "https://www.successifier.se",
        name: "Successifier.se",
        description: "AI-konsult, Customer Success och automation för svenska B2B-bolag.",
        inLanguage: "sv-SE",
        publisher: { "@id": "https://www.successifier.se/#organization" },
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
