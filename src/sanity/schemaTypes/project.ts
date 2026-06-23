import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: { list: ["Branding", "UI/UX", "Motion", "Print", "Web"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "year", title: "Ano", type: "string", validation: (r) => r.required() }),
    defineField({ name: "client", title: "Cliente", type: "string" }),
    defineField({
      name: "services",
      title: "Serviços",
      type: "array",
      of: [{ type: "string" }],
      description: "Ex: Identidade Visual, Motion Design, Estratégia de Marca",
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      type: "boolean",
      description: "Exibir como projeto em destaque (tamanho maior)",
      initialValue: false,
    }),
    defineField({ name: "coverImage", title: "Imagem de Capa", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Descrição curta", type: "text", rows: 3 }),
    defineField({
      name: "intro",
      title: "Texto de Introdução (página interna)",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "Legenda", type: "string" },
            { name: "fullWidth", title: "Largura total", type: "boolean", initialValue: false },
          ],
        },
      ],
    }),
    defineField({ name: "order", title: "Ordem", type: "number" }),
  ],
  orderings: [{ title: "Ordem", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", category: "category", year: "year", media: "coverImage" },
    prepare({ title, category, year, media }) {
      return { title, subtitle: `${category} · ${year}`, media };
    },
  },
});
