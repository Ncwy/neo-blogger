import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


const postSchema = z.object({

  title: z.string(),

  description: z.string(),

  pubDate: z.coerce.date(),

  category: z.string(),

});


const blog = defineCollection({

  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),

  schema: postSchema,

});


const drafts = defineCollection({

  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/drafts",
  }),

  schema: postSchema,

});


export const collections = {

  blog,

  drafts,

};