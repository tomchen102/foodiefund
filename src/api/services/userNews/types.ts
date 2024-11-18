import { UserNewsListQueryResponseSchema, UserNewsListResponse } from "@/schema/UserNewsSchema";
import { z } from "zod";

export type UserNewsListResponseType = z.infer<typeof UserNewsListResponse>;
export type UserNewsListQueryResponseType = z.infer<typeof UserNewsListQueryResponseSchema>;
