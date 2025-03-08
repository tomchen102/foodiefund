"use client";
import { useParams } from "next/navigation";
import { z } from "zod";

import { RewardFormSchemaType } from "@/api/services/reward/types";
import FormPage from "@/components/FormRenderer/FormPage";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { useGetRewardId, usePostRewardMutation, useUpdateRewardMutation } from "@/hooks/useRewards";
import { RewardFormSchema } from "@/schema/RewardSchema";

const initialValues: z.infer<typeof RewardFormSchema> = {
  id: "",
  isActive: false,
  startedAt: new Date().toISOString(),
  endAt: new Date().toISOString(),
  title: "",
  price: 0,
  qty: 0,
  image: null,
  content: "",
  unit: "",
};

const rewardFormFields: FormFieldConfig<RewardFormSchemaType>[] = [
  { label: "標題", name: "title", type: "text", key: "title", required: true },
  { label: "發布日期", name: "startedAt", type: "date", key: "startedAt", required: true },
  { label: "結束日期", name: "endAt", type: "date", key: "endAt", required: true },
  { label: "金額", name: "price", type: "tel", key: "price", required: true },
  { label: "限量", name: "qty", type: "tel", key: "qty", required: true },
  { label: "單位", name: "unit", type: "text", key: "unit", required: true },
  { label: "圖片", name: "image", type: "file", key: "image" },
  {
    label: "內容",
    name: "content",
    type: "editor",
    key: "content",
    required: true,
    buttonList: [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "list"],
      ["fullScreen", "preview"],
    ],
  },
  { label: "是否啟用", name: "isActive", type: "switch", key: "isActive" },
];

const NewsId = () => {
  const params = useParams();
  const id = params.id as string;
  const isCreateMode = id === "create";

  const { data: userNewsIdData } = useGetRewardId("dashboard", params.plan_id as string, id, {
    enabled: !isCreateMode,
  });
  const { mutate: createMutation } = usePostRewardMutation(params.plan_id as string);
  const create = (data: RewardFormSchemaType) => createMutation(data);
  const { mutate: updateMutation } = useUpdateRewardMutation(params.plan_id as string);
  const update = (data: RewardFormSchemaType) => updateMutation(data);

  return (
    <>
      <FormPage<RewardFormSchemaType>
        initialValues={initialValues}
        fetchedData={userNewsIdData ?? initialValues}
        formFields={rewardFormFields}
        create={create}
        update={update}
        redirectUrl={`/dashboard/${params.plan_id}/rewards`}
        schema={RewardFormSchema}
      />
    </>
  );
};

export default NewsId;
