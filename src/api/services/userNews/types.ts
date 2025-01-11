import { z } from "zod";

import {
  UserNewsDetailResponseSchema,
  UserNewsListQueryResponseSchema,
  UserNewsListResponseSchema,
} from "@/schema/UserNewsSchema";

export type UserNewsListResponseType = z.infer<typeof UserNewsListResponseSchema>;
export type UserNewsDetailResponseType = z.infer<typeof UserNewsDetailResponseSchema>;
export type UserNewsListQueryResponseType = z.infer<typeof UserNewsListQueryResponseSchema>;
