export const revalidate = 60; // revalida a cada 60 segundos

import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import ServicosSection from "@/components/ServicosSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorksSection />
      <ServicosSection />
      <Footer />
    </main>
  );
}
