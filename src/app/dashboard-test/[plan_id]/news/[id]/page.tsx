"use client";
import { UserNewsListResponseType } from "@/api/services/userNews/types";
import FormRenderer from "@/components/FormRenderer";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { UserNewsListResponse } from "@/schema/UserNewsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const initialValues = {
  id: "",
  title: "",
  content: "",
  isTop: false,
  isActive: false,
  image: null,
};

const userNewsFormFields: FormFieldConfig<UserNewsListResponseType>[] = [
  { label: "標題", name: "title", type: "text", key: "title", required: true },
  { label: "圖片", name: "image", type: "file", key: "image" },
  { label: "內容", name: "content", type: "editor", key: "content", required: true },
  { label: "是否置頂", name: "isActive", type: "switch", key: "isActive", id: "isTop" },
  { label: "是否啟用", name: "isTop", type: "switch", key: "isTop", id: "isTop" },
];

const NewsId = () => {
  const methods = useForm<UserNewsListResponseType>({
    resolver: zodResolver(UserNewsListResponse),
    defaultValues: initialValues,
  });

  return (
    <SectionPadding className="container px-3 xl:px-0">
      <FormProvider {...methods}>
        <form>
          <FormRenderer<UserNewsListResponseType> FormFields={userNewsFormFields} methods={methods} />
          <div className="flex">
            <Button type="submit" variant="outline" className="mr-auto">
              返回
            </Button>
            <Button type="submit">新增</Button>
          </div>
        </form>
      </FormProvider>
    </SectionPadding>
  );
};

export default NewsId;
