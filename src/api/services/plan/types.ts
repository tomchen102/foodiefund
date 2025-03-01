import { z } from "zod";

import { planProject, planSteps } from "@/schema/planSchema";

export type planStepsType = z.infer<typeof planSteps.element>;
export type planProjectType = z.infer<typeof planProject>;
