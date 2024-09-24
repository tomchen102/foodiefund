"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormFieldConfig } from "@/components/FormFieldItem/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaLine } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FormLoginSchema, FormLoginSchemaType } from "../../Schema";

const loginFormFields: FormFieldConfig<keyof FormLoginSchemaType>[] = [
  { label: "會員帳號", name: "username", type: "text" },
  { label: "密碼", name: "password", type: "password" },
];

const LoginForm = () => {
  const form = useForm<FormLoginSchemaType>({
    resolver: zodResolver(FormLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: FormLoginSchemaType) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <h2 className="text-3xl font-bold">登入</h2>
        <div>
          <div className="flex justify-center pb-6">
            <a
              href="#"
              className="flex w-full justify-center rounded-full bg-[#F8F9FA] py-3 leading-[19.2px]"
            >
              <FcGoogle className="mr-3" />
              使用 Google 登入
            </a>
          </div>
          <div className="flex justify-center pb-6 ">
            <a
              href="#"
              className="flex w-full justify-center rounded-full bg-[#F8F9FA] py-3 leading-[19.2px]"
            >
              <FaLine className="mr-3" color="#06C755" />
              使用 Line 登入
            </a>
          </div>
          <div className="flex justify-center pb-6 md:pb-10">
            <a
              href="#"
              className="flex w-full justify-center rounded-full bg-[#F8F9FA] py-3 leading-[19.2px]"
            >
              <FaFacebook className="mr-3" color="#1877F2" />
              使用 Facebook 登入
            </a>
          </div>

          <div className="pr-3 text-center leading-6 tracking-wider">
            還未成為會員？
            <span>
              <a
                href="<%= base %>register.html"
                className="hover:text-primary-dark tracking-wider text-primary"
              >
                立即註冊
              </a>
            </span>
          </div>
        </div>
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
        <div className="flex items-center">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="ml-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            記住我
          </label>
          <div className="ml-auto">
            <a
              href="<%= base %>forgot-password.html"
              className="text-primary hover:text-primary-dark"
            >
              忘記密碼？
            </a>
          </div>
        </div>
        <Button type="submit" className="w-full">
          登入
        </Button>
        <p className="text-center">登入即表示同意[服務條款]和[隱私政策]。</p>
      </form>
    </Form>
  );
};

export default LoginForm;
