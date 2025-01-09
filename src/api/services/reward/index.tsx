import { z } from "zod";

import { RewardFormSchema } from "@/schema/RewardSchema";

export type RewardFormSchemaType = z.infer<typeof RewardFormSchema>;
