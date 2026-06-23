import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Bruno Bragaia Design",
  projectId: "gscelzaq",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
