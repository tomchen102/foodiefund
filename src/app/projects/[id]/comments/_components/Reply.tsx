"use client";
import FormRenderer from "@/components/FormRenderer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { replyFormSchema, replyFormSchemaType } from "@/schema/Reply";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { replyFormFields } from "./replyFormFields";
import { useAuth } from "@/utils/providers/AuthProvider";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Badges from "@/components/Badges";
import { CommentDataProps } from "./types";

const ReplyForm = ({ commentsData }: CommentDataProps) => {
  const { user } = useAuth();
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
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold lg:text-2xl">留言 (8)</h2>
      </div>
      {user ? (
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex w-full items-center space-x-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 w-full space-y-6">
                <FormRenderer<replyFormSchemaType> methods={form} FormFields={replyFormFields} />
                <Button type="submit">送出</Button>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <div className="mb-5 bg-gray-100 p-5">
          成為 眾資成城 會員才能留言。請先進行
          <Link scroll={true} href="/login" className={buttonVariants({ variant: "link" })}>
            登入
          </Link>
          或者
          <Link scroll={true} href="/register" className={buttonVariants({ variant: "link" })}>
            註冊
          </Link>
          再進行留言。
        </div>
      )}
      <ul>
        {commentsData.map((comment) => (
          <li key={comment.id} className="mb-5 bg-gray-100">
            <article className="mx-6 rounded-lg bg-gray-100 py-6 lg:p-6">
              <footer className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={comment.avatar} alt={comment.name} />
                    <AvatarFallback>大頭貼</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="mb-2 font-bold">{comment.name}</p>
                    <p className="text-sm">
                      <time dateTime={comment.date} title={comment.date} className="text-gray">
                        {comment.date}
                      </time>
                    </p>
                  </div>
                </div>
              </footer>
              <p className="text-gray-500">{comment.content}</p>
              {comment.replies.length
                ? null
                : user && (
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex w-full items-center space-x-2">
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 w-full space-y-6">
                            <FormRenderer<replyFormSchemaType> methods={form} FormFields={replyFormFields} />
                            <Button type="submit">送出</Button>
                          </form>
                        </Form>
                      </div>
                    </div>
                  )}
            </article>
            {comment.replies.map((reply, index) => (
              <article key={reply.id} className="mx-6 ml-6 rounded-lg bg-gray-100 pb-6 lg:ml-12">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage src={reply.avatar} alt={reply.name} />
                      <AvatarFallback>大頭貼</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="mb-2 flex items-center font-bold">
                        {reply.name} {reply.badge && <Badges text={reply.badge} className="ml-2" />}
                      </p>
                      <p className="text-sm">
                        <time dateTime={reply.date} title={reply.date} className="text-gray">
                          {reply.date}
                        </time>
                      </p>
                    </div>
                  </div>
                </footer>
                <p className="text-gray-500">{reply.content}</p>
                {index === comment.replies.length - 1 && user && (
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex w-full items-center space-x-2">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5 w-full space-y-6">
                          <FormRenderer<replyFormSchemaType> methods={form} FormFields={replyFormFields} />
                          <Button type="submit">送出</Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReplyForm;
