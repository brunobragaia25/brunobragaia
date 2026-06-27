import type { Metadata } from "next";
import QuemSou from "@/components/QuemSou";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[lang]/quem-sou">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.quemSou.title,
    description: dict.metadata.quemSou.description,
  };
}

export default async function QuemSouPage({ params }: PageProps<"/[lang]/quem-sou">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <QuemSou />;
}
