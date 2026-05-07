import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Successifier.se — Customer Success, AI, Automation & SAMA-plattformen",
  description: "Svensk konsultverksamhet inom Customer Success, Contact Center, AI och automation. Vi driver SEO och marknadsföring på Google, LinkedIn och Meta – med vår egen plattform SAMA för AI-synlighet, GEO-readiness och content-publicering.",
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
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  openGraph: {
    title: "Successifier.se — Customer Success, AI, Automation & SAMA-plattformen",
    description: "Konsulting och egen plattform (SAMA) för AI-synlighet, SEO och content – samt Customer Success, Contact Center och AI-driven marknadsföring på Google, LinkedIn och Meta.",
    url: "https://successifier.se",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successifier.se — Customer Success, AI, Automation & SAMA-plattformen",
    description: "Konsulting och egen plattform SAMA för AI-synlighet, SEO och content-publicering på Google, LinkedIn och Meta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
