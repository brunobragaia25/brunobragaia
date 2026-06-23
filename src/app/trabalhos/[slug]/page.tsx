import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectBySlugQuery, adjacentProjectsQuery, allSlugsQuery } from "@/sanity/lib/queries";
import CaseStudy from "@/components/CaseStudy";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch(allSlugsQuery);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;

  const project = await client.fetch(projectBySlugQuery, { slug });
  if (!project) notFound();

  const adjacent = await client.fetch(adjacentProjectsQuery, {
    order: project.order ?? 0,
  });

  const coverUrl = project.coverImage
    ? urlFor(project.coverImage).width(2400).url()
    : "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const galleryItems = (project.gallery ?? []).map((img: any) => ({
    url: img.asset ? urlFor(img).width(1800).url() : "",
    caption: img.caption ?? null,
    fullWidth: img.fullWidth ?? false,
  }));

  const prevData = adjacent?.prev
    ? {
        title: adjacent.prev.title,
        slug: adjacent.prev.slug.current,
        image: adjacent.prev.coverImage
          ? urlFor(adjacent.prev.coverImage).width(800).url()
          : "",
      }
    : null;

  const nextData = adjacent?.next
    ? {
        title: adjacent.next.title,
        slug: adjacent.next.slug.current,
        image: adjacent.next.coverImage
          ? urlFor(adjacent.next.coverImage).width(800).url()
          : "",
      }
    : null;

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
    />
  );
}
