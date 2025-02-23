import { z } from "zod";

export const RewardFormSchema = z.object({
  title: z.string().nonempty("請輸入計畫回饋名稱"),
  content: z.string().nonempty("請輸入計畫回饋內容"),
  isActive: z.boolean(),
  image: z
    .union([
      z.string().nullable(),
      z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
        message: "必須是有效的圖片文件",
      }),
    ])
    .optional(),
  unit: z.string().nonempty("請輸入計畫回饋單位"),
  qty: z.number({ message: "請輸入計畫回饋數量" }),
  origin_price: z.number({ message: "請輸入計畫回饋價錢" }),
  startedAt: z.string(),
  endAt: z.string(),
});

export const RewardListSchema = RewardFormSchema.extend({
  id: z.string(),
  purchased_qty: z.number(),
  remain_qty: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const RewardListArraySchema = z.array(RewardListSchema);
