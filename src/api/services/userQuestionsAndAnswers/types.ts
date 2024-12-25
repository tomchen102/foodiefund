import {
  userQuestionsAndAnswersQueryResponseSchema,
  userQuestionsAndAnswersResponseTypeSchema,
} from "@/schema/userQuestionsAndAnswersSchema";
import { z } from "zod";

export type UserQuestionsAndAnswersListResponseType = z.infer<typeof userQuestionsAndAnswersResponseTypeSchema>;
export type UserQuestionsAndAnswersListQueryResponseType = z.infer<typeof userQuestionsAndAnswersQueryResponseSchema>;
