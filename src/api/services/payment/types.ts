import { z } from "zod";

import { FormPaymentSchema } from "@/schema/PaymentSchema";

export type PaymentFormType = z.infer<typeof FormPaymentSchema>;
