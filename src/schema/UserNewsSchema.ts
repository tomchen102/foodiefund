import { z } from "zod";

export const UserNewsListResponseSchema = z.object({
  id: z.string(),
  title: z.string().nonempty("標題不可為空"),
  intro: z.string(),
  content: z.string(),
  isActive: z.boolean(),
  isTop: z.boolean(),
  image: z
    .union([
      z.string().nullable().optional(),
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

export const UserNewsListArrayResponseSchema = z.array(UserNewsListResponseSchema);

export const UserNewsListQueryResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(UserNewsListResponseSchema),
  message: z.string(),
});
