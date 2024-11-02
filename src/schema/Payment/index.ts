import { z } from "zod";

export const FormPaymentSchema = z.object({
  paymentMethods: z.string(),
  overweight: z
    .string()
    .optional()
    .refine((value) => value === undefined || /^\d*$/.test(value), {
      message: "只能輸入數字",
    }),
  country: z.string(),
  city: z.string(),
  area: z.string(),
  address: z.string(),
  zipCode: z
    .string()
    .length(3, "郵遞區號必須為 3 位數")
    .regex(/^\d{3}$/, "請輸入有效的郵遞區號"),
  recipient: z.string().nonempty("收件人不得為空"),
  phone: z
    .string()
    .length(10, "手機長度必須為 10 位數")
    .optional()
    .refine((value) => value === undefined || /^\d*$/.test(value), {
      message: "請輸入正確的手機號碼",
    }),
  color: z.string().optional(),
  billType: z.string(),
  vehicle: z.number(),
  remark: z.string(),
  agree: z.boolean().refine((val) => val === true, "您必須同意服務條款和隱私政策"),
});
