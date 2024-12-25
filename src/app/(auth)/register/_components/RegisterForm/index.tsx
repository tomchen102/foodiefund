"use client";
import FormRenderer from "@/components/FormRenderer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import useHandleUserLogin from "@/hooks/useHandleUserLogin";
import { useSetLoading } from "@/hooks/useSetLoading";
import { useRegisterMutation } from "@/hooks/useUserAuth";
import { FormRegisterSchema } from "@/schema/UserAuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerFormFields } from "../registerFormFields";
import { FormRegisterSchemaType } from "@/api/services/signFlow/types";

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
            <Link href="/login" className={buttonVariants({ variant: "link" })}>
              登入
            </Link>
          </p>
        </div>
        <FormRenderer<FormRegisterSchemaType> methods={form} FormFields={registerFormFields} />
        {error && <FormMessage>{error.message}</FormMessage>}
        <Button type="submit" className="w-full">
          立即註冊
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
