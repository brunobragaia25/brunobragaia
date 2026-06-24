import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Bruno Bragaia Design — Estúdio de Identidade Visual & Branding",
    template: "%s | Bruno Bragaia Design",
  },
  description:
    "Estúdio especializado em identidade visual e branding. Criamos marcas que ficam na memória — com posicionamento, propósito e design que fazem sentido de verdade.",
  metadataBase: new URL("https://brunobragaia.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://brunobragaia.vercel.app",
    siteName: "Bruno Bragaia Design",
    title: "Bruno Bragaia Design — Estúdio de Identidade Visual & Branding",
    description:
      "Estúdio especializado em identidade visual e branding. Criamos marcas que ficam na memória.",
    images: [
      {
        url: "/hero-portrait.png",
        width: 1200,
        height: 630,
        alt: "Bruno Bragaia Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Bragaia Design — Estúdio de Identidade Visual & Branding",
    description:
      "Estúdio especializado em identidade visual e branding. Criamos marcas que ficam na memória.",
    images: ["/hero-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0b0b0b] text-white antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
