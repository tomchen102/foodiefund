import { z } from "zod";

export const RewardFormSchema = z.object({
  id: z.string(),
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
  price: z.number({ message: "請輸入計畫回饋價錢" }),
  startedAt: z.string().nonempty("請輸入計畫回饋開始時間"),
  endAt: z.string().nonempty("請輸入計畫回饋結束時間"),
  remain_qty: z.number(),
  purchased_qty: z.number(),
});

export const RewardListSchema = RewardFormSchema.extend({
  updatedAt: z.string(),
});

export const RewardQueryResponseSchema = z.array(RewardListSchema);
