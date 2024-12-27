import { CommentsHandlers } from "./comments";
import { userNewsHandlers } from "./userNewsHandlers";

export const handlers = [...userNewsHandlers, ...CommentsHandlers];
