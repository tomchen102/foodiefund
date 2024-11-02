import { FormPaymentSchema } from "@/schema/Payment";
import { z } from "zod";

export type PaymentFormType = z.infer<typeof FormPaymentSchema>;
