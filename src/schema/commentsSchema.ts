import { z } from "zod";

export const commentFormSchema = z.object({
  plan_id: z.string().optional(),
  content: z.string().trim().min(1, {
    message: "請輸入至少一個字",
  }),
  comment_id: z.string().optional(),
});

export const PaginationSchema = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
  pageSize: z.number(),
});

export const ReplySchema = z.object({
  id: z.string(),
  avatar: z.string(),
  name: z.string(),
  publicAt: z.string(),
  content: z.string(),
  commentRule: z.string().optional(),
});

export const CommentSchema = z.object({
  id: z.string(),
  avatar: z.string(),
  name: z.string(),
  publicAt: z.string(),
  content: z.string(),
  comment_id: z.string(),
  replies: z.array(ReplySchema),
});

export const CommentDataSchema = z.object({
  plan_id: z.string(),
  comments: z.array(CommentSchema),
  pagination: PaginationSchema,
});

export const CommentDataArraySchema = z.array(CommentDataSchema);

export const CommentQueryResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  code: z.number(),
  data: z.array(CommentDataSchema),
});
