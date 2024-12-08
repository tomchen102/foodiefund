import {
  CommentDataSchema,
  commentFormSchema,
  CommentQueryResponseSchema,
  CommentSchema,
  ReplySchema,
} from "@/schema/commentsSchema";
import { z } from "zod";

export type CommentsReplyPostType = z.infer<typeof commentFormSchema>;
export type CommentsType = z.infer<typeof CommentSchema>;
export type ReplyType = z.infer<typeof ReplySchema>;
export type CommentsListResponseType = z.infer<typeof CommentDataSchema>;
export type CommentsListQueryResponseType = z.infer<typeof CommentQueryResponseSchema>;
