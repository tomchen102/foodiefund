import { FormPaymentSchema } from "@/schema/PaymentSchema";
import { z } from "zod";

export type PaymentFormType = z.infer<typeof FormPaymentSchema>;
