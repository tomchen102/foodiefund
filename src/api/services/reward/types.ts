import { z } from "zod";

import { RewardFormSchema, RewardQueryResponseSchema } from "@/schema/RewardSchema";

export type RewardFormSchemaType = z.infer<typeof RewardFormSchema>;
export type RewardQuerySchemaType = z.infer<typeof RewardQueryResponseSchema>;
