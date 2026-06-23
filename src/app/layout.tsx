import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bruno Bragaia Design",
  description: "Transformamos marcas em experiências memoráveis.",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
