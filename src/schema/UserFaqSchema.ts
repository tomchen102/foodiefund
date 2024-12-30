import { z } from "zod";

export const userFaqResponseTypeSchema = z.object({
  id: z.string(),
  questions: z.string(),
  answers: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const UserFaqListArrayResponseSchema = z.array(userFaqResponseTypeSchema);

export const userFaqQueryResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(userFaqResponseTypeSchema),
  message: z.string(),
});
