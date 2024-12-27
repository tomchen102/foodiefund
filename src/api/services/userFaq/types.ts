import { z } from "zod";

import { userFaqQueryResponseSchema, userFaqResponseTypeSchema } from "@/schema/UserFaqSchema";

export type UserFaqListResponseType = z.infer<typeof userFaqResponseTypeSchema>;
export type UserFaqListQueryResponseType = z.infer<typeof userFaqQueryResponseSchema>;
