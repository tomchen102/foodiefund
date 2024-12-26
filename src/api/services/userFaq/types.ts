import { userFaqQueryResponseSchema, userFaqResponseTypeSchema } from "@/schema/UserFaqSchema";
import { z } from "zod";

export type UserFaqListResponseType = z.infer<typeof userFaqResponseTypeSchema>;
export type UserFaqListQueryResponseType = z.infer<typeof userFaqQueryResponseSchema>;
