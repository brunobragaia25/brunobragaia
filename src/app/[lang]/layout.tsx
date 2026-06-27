import type { Metadata } from "next";
import "../globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { DictProvider } from "@/context/DictContext";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "pt-BR" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    metadataBase: new URL("https://brunobragaia.vercel.app"),
    title: {
      default: isEn
        ? "Bruno Bragaia Design — Visual Identity & Branding Studio"
        : "Bruno Bragaia Design — Estúdio de Identidade Visual & Branding",
      template: "%s | Bruno Bragaia Design",
    },
    description: isEn
      ? "Studio specialized in visual identity and branding. We create brands that stay in memory — with positioning, purpose and design that truly make sense."
      : "Estúdio especializado em identidade visual e branding. Criamos marcas que ficam na memória — com posicionamento, propósito e design que fazem sentido de verdade.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "pt_BR",
      url: "https://brunobragaia.vercel.app",
      siteName: "Bruno Bragaia Design",
      images: [{ url: "/hero-portrait.png", width: 1200, height: 630, alt: "Bruno Bragaia Design" }],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0b0b0b] text-white antialiased">
        <DictProvider dict={dict} lang={lang}>
          {children}
          <BackToTop />
          <WhatsAppButton />
        </DictProvider>
        <Analytics />
      </body>
    </html>
  );
}
