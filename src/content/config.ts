import { z, defineCollection } from 'astro:content';

const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    source: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  quotes,
};
