import { z } from "zod";

export const FormLoginSchema = z.object({
  username: z.string().min(2, {
    message: "使用者帳號必須至少有 2 個字符",
  }),
  password: z.string().min(8, {
    message: "密碼必須至少為 8 個字符",
  }),
});

export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>;
