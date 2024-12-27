import { z } from "zod";

import { UserNewsListQueryResponseSchema, UserNewsListResponseSchema } from "@/schema/UserNewsSchema";

export type UserNewsListResponseType = z.infer<typeof UserNewsListResponseSchema>;
export type UserNewsListQueryResponseType = z.infer<typeof UserNewsListQueryResponseSchema>;
