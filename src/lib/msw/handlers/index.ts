import { CommentsHandlers } from "./comments";
import { userNewsHandlers } from "./userNewsHandlers";
import { userQuestionsAndAnswersHandlers } from "./userQuestionsAndAnswersHandlers";

export const handlers = [...userNewsHandlers, ...userQuestionsAndAnswersHandlers, ...CommentsHandlers];
