import { ZodSchema } from "zod";

export const safeParseResponse = <T, U>(schema: ZodSchema<T>, response: U): T => {
  const result = schema.safeParse(response);
  if (!result.success) {
    console.error("資料格式無效zod", result.error);
    throw new Error("目前資料有狀況，請重新整理");
  }
  return result.data;
};
