"use client";
import FormRenderer from "@/components/FormRenderer";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import useHandleUserLogin from "@/hooks/useHandleUserLogin";
import { useSetLoading } from "@/hooks/useSetLoading";
import { useRegisterMutation } from "@/hooks/useUserAuth";
import { FormRegisterSchemaType, FormRegisterSchema } from "@/schema/UserAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const registerFormFields: FormFieldConfig<FormRegisterSchemaType>[] = [
  { label: "名稱", name: "name", type: "text", id: "name" },
  { label: "密碼", name: "password", type: "password", id: "password" },
  { label: "確認密碼", name: "confirmPassword", type: "password", id: "confirmPassword" },
  { label: "信箱", name: "email", type: "email", id: "email" },
  {
    label: "註冊即表示您已閱讀、理解並同意遵守我們的[服務條款]和[隱私政策]。",
    name: "agree",
    type: "checkbox",
    id: "agree",
    text: "您可以隨時點擊查看條款的詳細內容",
  },
];
const RegisterForm = () => {
  const form = useForm<FormRegisterSchemaType>({
    resolver: zodResolver(FormRegisterSchema),
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      agree: false,
    },
  });

  const { mutate: registerMutation, data, isPending, error } = useRegisterMutation();

  useSetLoading(isPending);
  useHandleUserLogin(data);

  const onSubmit = async (data: FormRegisterSchemaType) => {
    registerMutation(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex">
          <h2 className="mr-auto text-3xl font-bold">註冊</h2>
          <p className="text-sm">
            已經有帳號了嗎?
            <Link scroll={true} href="/login" className={buttonVariants({ variant: "link" })}>
              登入
            </Link>
          </p>
        </div>
        {registerFormFields.map((field) => (
          <FormRenderer<FormRegisterSchemaType> control={form.control} key={field.name} {...field} id={field.name} />
        ))}
        {error && <FormMessage>{error.response?.data.message}</FormMessage>}
        <Button type="submit" className="w-full">
          立即註冊
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
