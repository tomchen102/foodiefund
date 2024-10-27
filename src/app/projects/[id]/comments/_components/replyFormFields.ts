import { FormFieldConfig } from "@/components/FormRenderer/types";
import { replyFormSchemaType } from "@/schema/Reply";

export const replyFormFields: FormFieldConfig<replyFormSchemaType>[] = [
  {
    label: "",
    name: "comments",
    type: "textarea",
    placeholder: "留言...",
    id: "comments",
    className: "bg-white",
    key: "comments",
  },
];
