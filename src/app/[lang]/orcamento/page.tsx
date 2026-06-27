import type { Metadata } from "next";
import OrcamentoForm from "@/components/OrcamentoForm";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[lang]/orcamento">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.orcamento.title,
    description: dict.metadata.orcamento.description,
  };
}

export default async function OrcamentoPage({ params }: PageProps<"/[lang]/orcamento">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <OrcamentoForm />;
}
