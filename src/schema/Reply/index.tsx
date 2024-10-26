import { z } from "zod";

export const replyFormSchema = z.object({
  comments: z.string().trim().min(1, {
    message: "請輸入至少一個字",
  }),
});

export type replyFormSchemaType = z.infer<typeof replyFormSchema>;
