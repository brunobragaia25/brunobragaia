import type { Metadata } from "next";
import QuemSou from "@/components/QuemSou";

export const metadata: Metadata = {
  title: "Quem Sou",
  description:
    "Bruno Bragaia — designer especializado em identidade visual e branding. Conheça a história e a visão por trás do estúdio.",
};

export default function QuemSouPage() {
  return <QuemSou />;
}
