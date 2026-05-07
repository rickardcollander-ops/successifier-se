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
  title: "Successifier.se — Konsult inom Customer Success, AI, Automation & AI-driven Marknadsföring",
  description: "Svensk konsultverksamhet inom Customer Success, Contact Center, AI och automation. Vi bygger AI-verktyg och driver SEO och marknadsföring med AI på Google, LinkedIn och Meta – för lägre churn, högre effektivitet och mätbar tillväxt.",
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
    "Sverige",
  ],
  metadataBase: new URL("https://successifier.se"),
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  openGraph: {
    title: "Successifier.se — Customer Success, AI, Automation & AI-driven Marknadsföring",
    description: "Konsulting och verktyg inom AI, automation, SEO och marknadsföring på Google, LinkedIn och Meta – samt Customer Success och Contact Center.",
    url: "https://successifier.se",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successifier.se — Customer Success, AI, Automation & AI-driven Marknadsföring",
    description: "Konsulting och verktyg inom AI, automation, SEO och AI-driven marknadsföring på Google, LinkedIn och Meta.",
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
