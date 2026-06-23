export const revalidate = 60; // revalida a cada 60 segundos

import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorksSection />
      <Footer />
    </main>
  );
}
