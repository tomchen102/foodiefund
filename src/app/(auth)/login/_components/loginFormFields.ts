import { FormLoginSchemaType } from "@/api/services/signFlow/types";
import { FormFieldConfig } from "@/components/FormRenderer/types";

export const loginFormFields: FormFieldConfig<FormLoginSchemaType>[] = [
  { label: "會員帳號", name: "email", type: "email", required: true, placeholder: "請輸入您的電子郵件", key: "email" },
  { label: "密碼", name: "password", type: "password", required: true, placeholder: "請輸入您的密碼", key: "password" },
];
