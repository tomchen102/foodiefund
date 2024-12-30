"use client";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { Icons } from "@/components/Icons";
import SectionPadding from "@/components/SectionPadding";
import { buttonVariants } from "@/components/ui/button";
import { useDeleteUserFaqMutation, useGetUserFaq } from "@/hooks/useUserFaq";
import { cn } from "@/lib/utils";

import FaqCardSkeleton from "./_components/FaqCardSkeleton";

const UserFaqPage = () => {
  const createUserFaqUrl = usePathname();
  const { data, isFetching } = useGetUserFaq("dashboard");
  const { mutate: DeleteUserFaqMutation } = useDeleteUserFaqMutation();

  const deleteItem = (id: string) => {
    console.log("Delete item", id);
    DeleteUserFaqMutation(id);
  };

  return (
    <SectionPadding container>
      <div>
        <div className="mb-5 flex items-center">
          <h1 className="mr-auto">常見問題</h1>
          <Icons.Add dimension="s" className="text-white" />
          <Link href={`${createUserFaqUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
            新增資料
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isFetching ? (
              <FaqCardSkeleton />
            ) : (
              Array.isArray(data) &&
              data.map((item) => (
                <li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="line-clamp-2 h-[calc(2*1.75rem)] overflow-hidden text-ellipsis text-lg font-bold">
                      {item.questions}
                    </div>
                  </div>
                  <div className="mb-4 text-gray-600">建立時間：{format(item.createdAt!, "yyyy-MM-dd")}</div>
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
              ))
            )}
          </ul>
        </div>
      </div>
    </SectionPadding>
  );
};

export default UserFaqPage;
