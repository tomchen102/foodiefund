import { z } from "zod";

export const newsResponseTypeSchema = z.object({
  _id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  isEnabled: z.boolean().optional(),
  isTop: z.boolean().optional(),
  publicAt: z.string().optional(),
  updateAt: z.string().optional(),
  id: z.string().optional(),
});

export const newsResponseArraySchema = z.array(newsResponseTypeSchema);

export const newsQueryParamsSchema = z.object({
  keyWord: z.string().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
});
