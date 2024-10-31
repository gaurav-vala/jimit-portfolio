import { defineCollection, z } from "astro:content";

const posters = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    caption: z.string(),
    image: z.string(),
    img_type: z.string(),
  }),
  type: "data",
});
