import { UserNewsListQueryResponseSchema, UserNewsListResponseSchema } from "@/schema/UserNewsSchema";
import { z } from "zod";

export type UserNewsListResponseType = z.infer<typeof UserNewsListResponseSchema>;
export type UserNewsListQueryResponseType = z.infer<typeof UserNewsListQueryResponseSchema>;
