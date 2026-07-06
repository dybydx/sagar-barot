import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    date: z.date(),
    readTime: z.string(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };
