"use client";

import { FormFieldConfig } from "@/components/FormFieldItem/types";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LocalStorageService from "@/utils/LocalStorageService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormLoginSchema, FormLoginSchemaType } from "../../../../Schema/UserAuth";
import Oauth from "../Oauth";
import RememberUser from "../RememberUser";
import { useLogInMutation } from "@/hooks/useUserAuth";
import { useRouter } from "next/navigation";

const localStorageService = LocalStorageService.getInstance();

const loginFormFields: FormFieldConfig<keyof FormLoginSchemaType>[] = [
  { label: "會員帳號", name: "email", type: "text" },
  { label: "密碼", name: "password", type: "password" },
];

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const form = useForm<FormLoginSchemaType>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      email: email,
      password: "1q2w3e4r",
    },
  });

  const { mutate: logIn, result } = useLogInMutation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rememberUser = localStorageService.getItem("rememberUser");
      if (rememberUser) {
        setEmail(rememberUser);
        form.setValue("email", rememberUser);
      }
    }
  }, [form, email]);

  useEffect(() => {
    if (result) {
      console.log("User logged in successfully", result.data);
      router.push("/");
    }
  }, [result, router]);

  function onSubmit(data: FormLoginSchemaType) {
    console.log(data);
    logIn(data);

    localStorageService.setItem("rememberUser", data.email);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <h2 className="text-3xl font-bold">登入</h2>
        <Oauth />
        {loginFormFields.map(({ label, name, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input type={type} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
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
