export const revalidate = 60;

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectsQuery } from "@/sanity/lib/queries";
import { Project } from "@/components/WorksSection";
import AllWorksGrid from "@/components/AllWorksGrid";

const mockProjects: Project[] = [
  { _id: "1", title: "Marca Identidade", slug: { current: "marca-identidade" }, category: "Branding", year: "2024", featured: true, coverImage: { asset: { _ref: "" } } },
  { _id: "2", title: "Design System", slug: { current: "design-system" }, category: "UI/UX", year: "2024", featured: true, coverImage: { asset: { _ref: "" } } },
  { _id: "3", title: "Campanha Visual", slug: { current: "campanha-visual" }, category: "Motion", year: "2023", featured: false, coverImage: { asset: { _ref: "" } } },
  { _id: "4", title: "Brand Strategy", slug: { current: "brand-strategy" }, category: "Branding", year: "2023", featured: false, coverImage: { asset: { _ref: "" } } },
  { _id: "5", title: "App Interface", slug: { current: "app-interface" }, category: "UI/UX", year: "2023", featured: false, coverImage: { asset: { _ref: "" } } },
  { _id: "6", title: "Editorial Design", slug: { current: "editorial-design" }, category: "Print", year: "2022", featured: false, coverImage: { asset: { _ref: "" } } },
];

const mockImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80",
  "2": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  "3": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
  "4": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
  "5": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  "6": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
};

export default async function TrabalhosPaga() {
  let projects: Project[] = [];
  let imageMap: Record<string, string> = {};

  try {
    const data = await client.fetch(projectsQuery);
    if (data && data.length > 0) {
      projects = data;
      imageMap = Object.fromEntries(
        data.map((p: Project) => [
          p._id,
          p.coverImage?.asset?._ref ? urlFor(p.coverImage).width(1200).url() : "",
        ])
      );
    } else {
      projects = mockProjects;
      imageMap = mockImages;
    }
  } catch {
    projects = mockProjects;
    imageMap = mockImages;
  }

  return <AllWorksGrid projects={projects} imageMap={imageMap} />;
}
