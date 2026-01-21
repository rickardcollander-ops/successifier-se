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
  title: "Successifier.se — Konsult inom Contact Center & Customer Success",
  description: "Svensk konsultverksamhet inom Contact Center och Customer Success. Struktur, processer och AI-stöd som ger bättre kundupplevelse, lägre churn och högre effektivitet.",
  metadataBase: new URL("https://successifier.se"),
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  openGraph: {
    title: "Successifier.se — Konsult inom Contact Center & Customer Success",
    description: "Svensk konsultverksamhet inom Contact Center och Customer Success. Struktur, processer och AI-stöd som ger bättre kundupplevelse, lägre churn och högre effektivitet.",
    url: "https://successifier.se",
    siteName: "Successifier.se",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successifier.se — Konsult inom Contact Center & Customer Success",
    description: "Svensk konsultverksamhet inom Contact Center och Customer Success.",
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
