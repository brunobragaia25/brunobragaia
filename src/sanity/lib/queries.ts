import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    year,
    featured,
    coverImage,
    description,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    year,
    client,
    services,
    coverImage,
    description,
    intro,
    "order": order,
    gallery[] {
      asset,
      caption,
      fullWidth,
    },
  }
`;

export const adjacentProjectsQuery = groq`
{
  "prev": *[_type == "project" && order < $order] | order(order desc)[0] { title, slug, coverImage },
  "next": *[_type == "project" && order > $order] | order(order asc)[0] { title, slug, coverImage },
}
`;

export const allSlugsQuery = groq`
  *[_type == "project"] { "slug": slug.current }
`;

export const otherProjectsQuery = groq`
  *[_type == "project" && slug.current != $slug] {
    _id,
    title,
    slug,
    category,
    year,
    coverImage,
  }
`;
