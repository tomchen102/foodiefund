import { z } from "zod";

import { planProject, planSteps, PlanFormSchema } from "@/schema/planSchema";

export type planStepsType = z.infer<typeof planSteps.element>;
export type planProjectType = z.infer<typeof planProject>;
export type PlanFormSchemaType = z.infer<typeof PlanFormSchema>;
