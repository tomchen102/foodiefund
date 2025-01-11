"use client";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

import { CommentsType, CommentsReplyPostType, ReplyType } from "@/api/services/comments/types";
import Badges from "@/components/Badges";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { useGetCommentsList, usePostCommentsMutation, usePostReplyMutation } from "@/hooks/useComments";
import { useAuth } from "@/utils/providers/AuthProvider";

import ReplyFormComponent from "./ReplyFormComponent";

import "@/lib/msw/setup";

const ReplyForm = () => {
  const { user } = useAuth();
  const { data, isFetching } = useGetCommentsList();
  const { mutate: postComments } = usePostCommentsMutation();
  const { mutate: postReply } = usePostReplyMutation();

  const handleCommentSubmit = (data: CommentsReplyPostType) => {
    console.log("Comment submitted:", data);
    postComments({ ...data });
  };

  const handleReplySubmit = (data: CommentsReplyPostType, plan_id: string) => {
    console.log("Reply submitted to comment:", plan_id, data);
    postReply({ ...data });
  };

  if (isFetching) return <p>Loading...</p>;

  return (
    <>
      {/* 留言區標題 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold lg:text-2xl">留言 ({data?.[0]?.comments?.length ?? 0})</h2>
      </div>

      {/* 登入與留言表單 */}
      {user ? (
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex w-full items-center space-x-2">
            <ReplyFormComponent
              data={{
                plan_id: data?.[0]?.plan_id ?? "",
              }}
              onSubmit={handleCommentSubmit}
            />
          </div>
        </div>
      ) : (
        <div className="mb-5 bg-gray-100 p-5">
          成為會員才能留言，請先
          <Link href="/login" className={buttonVariants({ variant: "link" })}>
            登入
          </Link>
          或
          <Link href="/register" className={buttonVariants({ variant: "link" })}>
            註冊
          </Link>
          再進行留言。
        </div>
      )}

      {/* 留言列表 */}
      <ul>
        {data?.[0]?.comments.map((comment: CommentsType) => (
          <li key={comment.id} className="mb-5 bg-gray-100">
            <article className="rounded-lg bg-gray-100 p-4">
              <header className="mb-4 flex items-center">
                <Avatar className="mr-3">
                  <AvatarImage src={comment.avatar} alt={comment.name} />
                  <AvatarFallback>
                    <RxAvatar size={40} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{comment.name}</p>
                  <p className="text-gray">
                    <time dateTime={comment.publicAt}>{comment.publicAt}</time>
                  </p>
                </div>
              </header>
              <p className="text-gray-700">{comment.content}</p>

              {/* 回覆列表 */}
              {comment.replies?.length > 0 ? (
                <ul className="mt-4 space-y-4 border-gray-200">
                  {comment.replies.map((reply: ReplyType, index) => (
                    <li key={reply.id}>
                      <article className="rounded-lg bg-gray-50 p-2">
                        <header className="mb-2 flex items-center">
                          <Avatar className="mr-3">
                            <AvatarImage src={reply.avatar} alt={reply.name} />
                            <AvatarFallback>
                              <RxAvatar size={40} />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="flex items-center font-bold">
                              {reply.name}
                              {reply.commentRule && <Badges text={reply.commentRule} className="ml-2" />}
                            </p>
                            <p className="text-gray">
                              <time dateTime={comment.publicAt}>{comment.publicAt}</time>
                            </p>
                          </div>
                        </header>
                        <p className="text-gray-700">{reply.content}</p>
                      </article>
                      {index === comment.replies.length - 1 && (
                        <div className="mt-4">
                          <ReplyFormComponent
                            data={{
                              plan_id: data?.[0]?.plan_id ?? "",
                              comment_id: data?.[0]?.comments[index]?.comment_id ?? "",
                            }}
                            onSubmit={(data) => handleReplySubmit(data, comment.id)}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4">
                  <ReplyFormComponent
                    data={{
                      plan_id: data?.[0]?.plan_id ?? "",
                      comment_id: data?.[0]?.comments[0]?.comment_id ?? "",
                    }}
                    onSubmit={(data) => handleReplySubmit(data, comment.id)}
                  />
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReplyForm;
