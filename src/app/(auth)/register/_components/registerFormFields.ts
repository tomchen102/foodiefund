import { FormFieldConfig } from "@/components/FormRenderer/types";
import { FormRegisterSchemaType } from "@/schema/UserAuth";

export const registerFormFields: FormFieldConfig<FormRegisterSchemaType>[] = [
  { label: "名稱", name: "name", type: "text", id: "name", placeholder: "請輸入您的名稱", required: true, key: "name" },
  {
    label: "密碼",
    name: "password",
    type: "password",
    id: "password",
    required: true,
    key: "password",
    placeholder: "請輸入您的密碼",
  },
  {
    label: "確認密碼",
    name: "confirmPassword",
    type: "password",
    id: "confirmPassword",
    required: true,
    key: "confirmPassword",
    placeholder: "請再次輸入您的密碼",
  },
  {
    label: "信箱",
    name: "email",
    type: "email",
    id: "email",
    placeholder: "請輸入您的電子郵件",
    required: true,
    key: "email",
  },
  {
    label: "註冊即表示您已閱讀、理解並同意遵守我們的[服務條款]和[隱私政策]。",
    name: "agree",
    type: "checkbox",
    id: "agree",
    text: "您可以隨時點擊查看條款的詳細內容",
    required: true,
    key: "agree",
  },
];
