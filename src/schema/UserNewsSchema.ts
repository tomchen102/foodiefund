import { z } from "zod";

export const UserNewsListResponse = z.object({
  id: z.string().optional(),
  title: z.string().nonempty("標題不可為空"),
  content: z.string(),
  isActive: z.boolean(),
  isTop: z.boolean(),
  image: z
    .union([
      z.string().url().nullable(),
      z
        .instanceof(File)
        .refine((file) => file.type.startsWith("image/"), {
          message: "必须是有效的图片文件",
        })
        .optional(),
    ])
    .optional(),
  publicAt: z.string().optional(),
});

export const UserNewsListArrayResponse = z.array(UserNewsListResponse);

export const UserNewsListQueryResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(UserNewsListResponse),
  message: z.string(),
});
