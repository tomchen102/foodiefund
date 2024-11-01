import { z } from "zod";

export const FormPaymentSchema = z.object({
  paymentMethods: z.string(),
  overweight: z.number().optional(),
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
    .nonempty("電話號碼不得為空")
    .length(10, "電話號碼必須是10個數字")
    .regex(/^\d+$/, "電話號碼必須是數字且不能包含e"),
  color: z.string().optional(),
  billType: z.string(),
  vehicle: z.number(),
  remark: z.string(),
  agree: z.boolean().refine((val) => val === true, "您必須同意服務條款和隱私政策"),
});
