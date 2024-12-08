import { CommentsReplyPostType } from "@/api/services/comments/types";
import { FormFieldConfig } from "@/components/FormRenderer/types";

export const replyFormFields: FormFieldConfig<CommentsReplyPostType>[] = [
  {
    label: "",
    name: "content",
    type: "textarea",
    placeholder: "留言...",
    id: "content",
    className: "bg-white",
    key: "content",
  },
];
