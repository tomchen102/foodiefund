"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema, FormLoginSchemaType } from "@/schema/UserAuth";
import { useLogInMutation } from "@/hooks/useUserAuth";
import LocalStorageService from "@/utils/LocalStorageService";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import Oauth from "../Oauth";
import RememberUser from "../RememberUser";
import { useSetLoading } from "@/hooks/useSetLoading";
import FormRenderer from "@/components/FormRenderer";
import useHandleUserLogin from "@/hooks/useHandleUserLogin";

const localStorageService = LocalStorageService.getInstance();

const loginFormFields: FormFieldConfig<FormLoginSchemaType>[] = [
  { label: "會員帳號", name: "email", type: "email" },
  { label: "密碼", name: "password", type: "password" },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const form = useForm<FormLoginSchemaType>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      email: email,
      password: "11111111",
    },
  });

  const { mutate: logInMutation, data, isPending, error } = useLogInMutation();

  useSetLoading(isPending);
  useHandleUserLogin(data);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const rememberUser = localStorageService.getItem("rememberUser");
      if (rememberUser) {
        setEmail(rememberUser);
        form.setValue("email", rememberUser);
      }
    }
  }, [form, email]);

  const onSubmit = async (data: FormLoginSchemaType) => {
    logInMutation(data);
    localStorageService.setItem("rememberUser", data.email);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <h2 className="text-3xl font-bold">登入</h2>
        <Oauth />
        {loginFormFields.map((field) => (
          <FormRenderer<FormLoginSchemaType> control={form.control} key={field.name} {...field} id={field.name} />
        ))}
        {error && <FormMessage>{error.response?.data.message}</FormMessage>}
        <RememberUser username={form.watch("email")} localStorageService={localStorageService} />
        <Button type="submit" className="w-full">
          登入
        </Button>
        <p className="text-center">登入即表示同意[服務條款]和[隱私政策]。</p>
      </form>
    </Form>
  );
};

export default LoginForm;
