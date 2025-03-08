"use client";
import { useParams } from "next/navigation";
import React from "react";

import { UserFaqListResponseType } from "@/api/services/userFaq/types";
import FormPage from "@/components/FormRenderer/FormPage";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import SectionPadding from "@/components/SectionPadding";
import { useGetUserFaqId, usePostUserFaqMutation, useUpdateUserFaqMutation } from "@/hooks/useUserFaq";
import { userFaqResponseTypeSchema } from "@/schema/UserFaqSchema";

const initialValues = {
  id: "",
  questions: "",
  answers: "",
};

const userFaqFormFields: FormFieldConfig<UserFaqListResponseType>[] = [
  { label: "問題", name: "questions", type: "text", key: "questions", required: true },
  { label: "答覆", name: "answers", type: "textarea", key: "answers", required: true },
];

const FaqId = () => {
  const params = useParams();
  const id = params.id as string;
  const projectId = params.plan_id as string;
  const isCreateMode = id === "create";

  const { data: userFaqIdData } = useGetUserFaqId(projectId, id, {
    enabled: !isCreateMode,
  });
  const { mutate: create } = usePostUserFaqMutation(projectId);
  const { mutate: update } = useUpdateUserFaqMutation(projectId);

  return (
    <SectionPadding container>
      <FormPage<UserFaqListResponseType>
        initialValues={initialValues}
        fetchedData={userFaqIdData!}
        formFields={userFaqFormFields}
        create={create}
        update={update}
        redirectUrl={`/dashboard/${params.plan_id}/faqs`}
        schema={userFaqResponseTypeSchema}
      />
    </SectionPadding>
  );
};

export default FaqId;
