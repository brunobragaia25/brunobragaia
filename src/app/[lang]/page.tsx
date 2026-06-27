export const revalidate = 60;

import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import ServicosSection from "@/components/ServicosSection";
import ProcessoSection from "@/components/ProcessoSection";
import MarcasSection from "@/components/MarcasSection";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <main>
      <HeroSection />
      <WorksSection />
      <ServicosSection />
      <ProcessoSection />
      <MarcasSection />
      <Footer />
    </main>
  );
}
