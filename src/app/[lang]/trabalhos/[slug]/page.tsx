import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectBySlugQuery, adjacentProjectsQuery, allSlugsQuery, otherProjectsQuery } from "@/sanity/lib/queries";
import CaseStudy from "@/components/CaseStudy";
import { hasLocale } from "@/lib/dictionaries";

export async function generateStaticParams() {
  const slugs = await client.fetch(allSlugsQuery);
  const langs = ["pt-BR", "en"];
  return langs.flatMap((lang) =>
    slugs.map((s: { slug: string }) => ({ lang, slug: s.slug }))
  );
}

export default async function WorkPage({ params }: PageProps<"/[lang]/trabalhos/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const project = await client.fetch(projectBySlugQuery, { slug });
  if (!project) notFound();

  const adjacent = await client.fetch(adjacentProjectsQuery, { order: project.order ?? 0 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const otherProjectsRaw: any[] = await client.fetch(otherProjectsQuery, { slug });

  const coverUrl = project.coverImage ? urlFor(project.coverImage).width(2400).url() : "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const galleryItems = (project.gallery ?? []).map((img: any) => ({
    url: img.asset ? urlFor(img).width(1800).url() : "",
    caption: img.caption ?? null,
    fullWidth: img.fullWidth ?? false,
  }));

  const prevData = adjacent?.prev
    ? { title: adjacent.prev.title, slug: adjacent.prev.slug.current, image: adjacent.prev.coverImage ? urlFor(adjacent.prev.coverImage).width(800).url() : "" }
    : null;

  const nextData = adjacent?.next
    ? { title: adjacent.next.title, slug: adjacent.next.slug.current, image: adjacent.next.coverImage ? urlFor(adjacent.next.coverImage).width(800).url() : "" }
    : null;

  const otherProjects = [...otherProjectsRaw]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((p) => ({
      id: p._id,
      title: p.title,
      slug: p.slug.current,
      category: p.category,
      year: p.year,
      image: p.coverImage ? urlFor(p.coverImage).width(800).url() : "",
    }));

  return (
    <CaseStudy
      title={project.title}
      category={project.category}
      year={project.year}
      client={project.client ?? null}
      services={project.services ?? []}
      coverUrl={coverUrl}
      description={project.description ?? null}
      intro={project.intro ?? null}
      gallery={galleryItems}
      prev={prevData}
      next={nextData}
      otherProjects={otherProjects}
    />
  );
}
