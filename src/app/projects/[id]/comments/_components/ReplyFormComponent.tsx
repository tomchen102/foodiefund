"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormRenderer from "@/components/FormRenderer";
import { commentFormSchema } from "@/schema/commentsSchema";
import { replyFormFields } from "./replyFormFields";
import { CommentsReplyPostType } from "@/api/services/comments/types";

interface ReplyFormComponentProps {
  onSubmit: (data: CommentsReplyPostType) => void;
  data: {
    plan_id?: string;
    comment_id?: string;
  };
}

const ReplyFormComponent = ({ onSubmit, data }: ReplyFormComponentProps) => {
  const form = useForm<CommentsReplyPostType>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      content: "",
      comment_id: data.comment_id,
      plan_id: data.plan_id,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          onSubmit(data);
          form.reset();
        })}
        className="mb-5 w-full space-y-6"
      >
        <FormRenderer<CommentsReplyPostType> methods={form} FormFields={replyFormFields} />
        <Button type="submit">送出</Button>
      </form>
    </Form>
  );
};

export default ReplyFormComponent;
