"use client";
import { useParams } from "next/navigation";

import { UserNewsDetailResponseType } from "@/api/services/userNews/types";
import FormPage from "@/components/FormRenderer/FormPage";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import SectionPadding from "@/components/SectionPadding";
import { useGetUserNewsId, usePostUserNewsMutation, useUpdateUserNewsMutation } from "@/hooks/useUserNews";
import { UserNewsDetailResponseSchema } from "@/schema/UserNewsSchema";

const initialValues = {
  id: "",
  title: "",
  intro: "",
  content: "",
  isTop: false,
  isActive: false,
  image: null,
};

const userNewsFormFields: FormFieldConfig<UserNewsDetailResponseType>[] = [
  { label: "標題", name: "title", type: "text", key: "title", required: true },
  { label: "圖片", name: "image", type: "file", key: "image" },
  { label: "簡介", name: "intro", type: "textarea", key: "intro", required: true },
  { label: "內容", name: "content", type: "editor", key: "content", required: true },
  { label: "是否置頂", name: "isActive", type: "switch", key: "isActive", id: "isTop" },
  { label: "是否啟用", name: "isTop", type: "switch", key: "isTop", id: "isTop" },
];

const NewsId = () => {
  const params = useParams();
  const id = params.id as string;
  const projectId = params.plan_id as string;
  const isCreateMode = id === "create";

  const { data: userNewsIdData } = useGetUserNewsId("dashboard", projectId, id, {
    enabled: !isCreateMode,
  });
  const { mutate: create } = usePostUserNewsMutation(projectId);
  const { mutate: update } = useUpdateUserNewsMutation(projectId);

  return (
    <SectionPadding container>
      <FormPage<UserNewsDetailResponseType>
        initialValues={initialValues}
        fetchedData={userNewsIdData!}
        formFields={userNewsFormFields}
        create={create}
        update={update}
        redirectUrl={`/dashboard/${params.plan_id}/news`}
        schema={UserNewsDetailResponseSchema}
      />
    </SectionPadding>
  );
};

export default NewsId;
