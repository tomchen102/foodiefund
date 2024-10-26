import { ZodSchema } from "zod";

export const safeParseResponse = <T, U>(schema: ZodSchema<T>, response: U): T => {
  const result = schema.safeParse(response);
  if (!result.success) {
    console.error("資料格式無效zod", result.error);
    throw new Error("資料格式無效");
  }
  return result.data;
};
