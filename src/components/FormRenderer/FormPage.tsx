import { FormProvider, useForm } from "react-hook-form";
import FormRenderer from ".";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserNewsListResponseSchema } from "@/schema/UserNewsSchema";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { FormPageProps } from "./types";

const FormPage = <T extends FieldValues>({
  initialValues,
  fetchedData,
  formFields,
  create,
  update,
  redirectUrl,
}: FormPageProps<T>) => {
  const params = useParams();
  const router = useRouter();
  const isCreateMode = params.id === "create";
  const [isMode] = useState<boolean>(isCreateMode);

  const methods = useForm<T>({
    resolver: zodResolver(UserNewsListResponseSchema),
    defaultValues: isCreateMode ? initialValues : fetchedData,
  });
  useEffect(() => {
    if (!isCreateMode && fetchedData) {
      methods.reset(fetchedData);
    }
  }, [fetchedData, methods, isCreateMode]);

  const onSubmit = async (formData: T) => {
    if (isCreateMode) {
      await create(formData);
    } else {
      await update(formData);
    }
    router.push(redirectUrl);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormRenderer<T> FormFields={formFields} methods={methods} />
        <div className="flex">
          <Button type="button" variant="outline" className="mr-auto" onClick={() => router.back()}>
            返回
          </Button>
          {isMode ? <Button type="submit">新增</Button> : <Button type="submit">修改</Button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default FormPage;
