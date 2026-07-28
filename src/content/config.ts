import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().default('Fiscus Max Team'),
    draft: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keyword: z.string().optional(),
  }),
});

export const collections = { blog };
