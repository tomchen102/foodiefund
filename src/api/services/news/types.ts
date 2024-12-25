import { newsQueryParamsSchema, newsResponseArraySchema, newsResponseTypeSchema } from "@/schema/newsSchema";
import { z } from "zod";

export type NewsResponseType = z.infer<typeof newsResponseTypeSchema>;
export type newsResponseArraySchemaType = z.infer<typeof newsResponseArraySchema>;
export type NewsQueryParamsType = z.infer<typeof newsQueryParamsSchema>;
