export const revalidate = 60; // revalida a cada 60 segundos

import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import ServicosSection from "@/components/ServicosSection";
import ProcessoSection from "@/components/ProcessoSection";
import MarcasSection from "@/components/MarcasSection";
import Footer from "@/components/Footer";

export default function Home() {
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
