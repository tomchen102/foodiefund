import {
  userQuestionsAndAnswersQueryResponseSchema,
  userQuestionsAndAnswersResponseTypeSchema,
} from "@/schema/userQuestionsAndAnswers";
import { z } from "zod";

export type UserQuestionsAndAnswersListResponseType = z.infer<typeof userQuestionsAndAnswersResponseTypeSchema>;
export type UserQuestionsAndAnswersListQueryResponseType = z.infer<typeof userQuestionsAndAnswersQueryResponseSchema>;
