import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: ["Branding", "UI/UX", "Motion", "Print", "Web"],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Ano",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      type: "boolean",
      description: "Exibir como projeto em destaque (tamanho maior)",
      initialValue: false,
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de Capa",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      description: "Controla a ordem de exibição (menor = primeiro)",
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      year: "year",
      media: "coverImage",
    },
    prepare({ title, category, year, media }) {
      return { title, subtitle: `${category} · ${year}`, media };
    },
  },
});
