import { z } from "zod";

export const planSteps = z.array(
  z.object({
    label: z.string(),
    status: z.enum(["completed", "current", "pending"]),
  })
);

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["pending", "resolve", "reject"]),
});

export const planProject = z.object({
  projects: z.array(projectSchema),
});

export const orderSchema = z.object({
  id: z.string(),
  order_no: z.string(),
  order_date: z.string(),
  discount: z.number(),
  donate: z.number(),
  subtotal: z.number(),
  shipping_fee: z.number(),
  total_amount: z.number(),
  currency: z.string(),
  payment_method: z.string(),
  status: z.enum(["pending", "resolve", "reject"]),
  customer: z.object({
    name: z.string(),
    phone: z.string().optional(),
  }),
});

export const commentSchema = z.object({
  id: z.string(),
  status: z.enum(["pending", "resolve"]),
  name: z.string(),
  content: z.string(),
  createdAt: z.string(),
});

export const planApiSchema = z.object({
  projects: z.array(projectSchema),
  steps: planSteps,
  plan: z.object({
    info: z.string(),
    email: z.string(),
    phone: z.string(),
    proposer: z.string(),
    activeTime: z.string(),
    repurchaseRate: z.number(),
    address: z.string(),
    endAt: z.string(),
    coverage: z.number(),
    avgAmount: z.number(),
    targetAmount: z.number(),
    totalOrders: z.number(),
    totalRefunds: z.number(),
    avgDonation: z.number(),
    title: z.string(),
  }),
  orders: z.array(orderSchema),
  comments: z.array(commentSchema),
});

export const planApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(planApiSchema),
  message: z.string(),
  code: z.number(),
});

export const PlanFormSchema = z
  .object({
    id: z.string().optional(),
    activeType: z.enum(["A", "B"]),
    title: z.string().min(1, "標題至少需要 1 個字").max(25, "標題不能超過 25 個字"),
    image: z
      .union([
        z.string().nullable().optional(),
        z
          .instanceof(File)
          .refine((file) => file.type.startsWith("image/"), {
            message: "必須是有效的圖片文件",
          })
          .refine((file) => file.size <= 3 * 1024 * 1024, {
            message: "圖片大小不能超過 3 MB",
          })
          .optional(),
      ])
      .optional(),
    location: z.string().min(1, "請選擇餐廳地區"),
    restaurantType: z.string().min(1, "請選擇餐廳類別"),
    address: z.string().min(5, "地址至少需要 5 個字").max(200, "地址不能超過 200 個字"),
    proposer: z.string().min(2, "提案者名稱至少需要 2 個字").max(50, "提案者名稱不能超過 50 個字"),
    email: z.string().email("請輸入有效的 Email 地址"),
    phone: z.string().regex(/^09\d{8}$/, "請輸入有效的台灣手機號碼 (09 開頭，共 10 位數)"),
    info: z.string().min(1, "請填寫活動資訊").max(200, "活動資訊不能超過 200 個字"),
    startedAt: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "請輸入有效的活動時間 (YYYY-MM-DD HH:mm)",
    }),
    endAt: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: "請輸入有效的結束時間 (YYYY-MM-DD HH:mm)",
    }),
    targetAmount: z.coerce
      .number()
      .min(10_000, "目標金額不能低於 10,000 元")
      .max(1_000_000, "目標金額不能超過 1,000,000 元"),
  })
  .superRefine((data, ctx) => {
    const startedAt = new Date(data.startedAt);
    const endAt = new Date(data.endAt);

    if (endAt <= startedAt) {
      ctx.addIssue({
        code: "custom",
        path: ["endAt"],
        message: "結束時間必須晚於活動時間",
      });
    }
  });
