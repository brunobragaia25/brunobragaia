import type { Metadata } from "next";
import OrcamentoForm from "@/components/OrcamentoForm";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Solicite um orçamento para identidade visual ou branding. Vamos conversar sobre o seu projeto.",
};

export default function OrcamentoPage() {
  return <OrcamentoForm />;
}
