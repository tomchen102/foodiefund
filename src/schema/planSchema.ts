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

export const PlanFormSchema = z.object({
  // id: z.string(),
  activeType: z.enum(["A", "B"]),
  title: z.string(),
  image: z
    .union([
      z.string().nullable().optional(),
      z
        .instanceof(File)
        .refine((file) => file.type.startsWith("image/"), {
          message: "必須是有效的圖片文件",
        })
        .optional(),
    ])
    .optional(),
  location: z.string(),
  restaurantType: z.string(),
  address: z.string(),
  proposer: z.string(),
  email: z.string(),
  phone: z.string(),
  info: z.string(),
  activeTime: z.string(),
  endAt: z.string(),
  targetAmount: z.number(),
});
