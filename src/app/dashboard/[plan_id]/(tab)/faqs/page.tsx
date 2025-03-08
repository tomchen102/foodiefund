"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { useDeleteUserFaqMutation, useGetUserFaq } from "@/hooks/useUserFaq";
import { cn } from "@/lib/utils";

import FaqSkeleton from "./FaqSkeleton";

const UserFaqPage = () => {
  const createUserFaqUrl = usePathname();
  const params = useParams();
  const id = params.plan_id as string;
  const { data, isFetching } = useGetUserFaq("dashboard", id);
  const { mutate: DeleteUserFaqMutation } = useDeleteUserFaqMutation(id);

  const deleteItem = (id: string) => {
    console.log("Delete item", id);
    DeleteUserFaqMutation(id);
  };

  return (
    <>
      {isFetching ? (
        <FaqSkeleton />
      ) : (
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h1>常見問題</h1>
            <Link href={`${createUserFaqUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
              <Icons.Add dimension="s" className="text-white" />
              新增資料
            </Link>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(data) &&
                data.map((item) => (
                  <li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="line-clamp-2 h-[calc(2*1.75rem)] overflow-hidden text-ellipsis text-lg font-bold">
                        {item.questions}
                      </div>
                    </div>
                    <div className="mb-4 text-gray-600">建立時間：{item.createdAt}</div>
                    <div className="flex items-center space-x-4">
                      <div className="mr-auto flex gap-3">
                        <Link
                          className={cn("text-primary", buttonVariants({ variant: "outline" }))}
                          href={`${createUserFaqUrl}/${item.id}`}
                        >
                          <Icons.Plan dimension="s" className="text-primary-dark" />
                        </Link>
                        <AlertDialogTriggerDelete deleteData={() => deleteItem(item.id)} title={item.questions} />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserFaqPage;
