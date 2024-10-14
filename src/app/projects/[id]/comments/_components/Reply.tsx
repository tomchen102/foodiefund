"use client";
import FormRenderer from "@/components/FormRenderer";
import { FormFieldConfig } from "@/components/FormRenderer/types";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { replyFormSchema, replyFormSchemaType } from "@/schema/Reply";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const replyFormFields: FormFieldConfig<replyFormSchemaType>[] = [
  { label: "", name: "comments", type: "textarea", placeholder: "留言...", id: "comments", className: "bg-white" },
];

const ReplyForm = () => {
  const form = useForm<replyFormSchemaType>({
    resolver: zodResolver(replyFormSchema),
    defaultValues: {
      comments: "",
    },
  });

  const onSubmit = (data: replyFormSchemaType) => {
    console.log(data);
    form.reset();
  };
  return (
    <div className="mt-4 flex items-center space-x-4">
      <div className="flex w-full items-center space-x-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 w-full space-y-6">
            {replyFormFields.map((field) => (
              <FormRenderer<replyFormSchemaType> control={form.control} key={field.name} {...field} id={field.name} />
            ))}
            <Button type="submit">送出</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReplyForm;
