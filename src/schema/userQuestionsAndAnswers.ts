import { z } from "zod";

export const userQuestionsAndAnswersResponseTypeSchema = z.object({
  id: z.string(),
  questions: z.string(),
  answers: z.string(),
  publicAt: z.string().optional(),
});

export const UserQuestionsAndAnswersListArrayResponse = z.array(userQuestionsAndAnswersResponseTypeSchema);

export const userQuestionsAndAnswersQueryResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(userQuestionsAndAnswersResponseTypeSchema),
  message: z.string(),
});
