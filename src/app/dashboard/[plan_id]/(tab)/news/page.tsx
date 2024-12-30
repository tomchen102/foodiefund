"use client";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserNewsListResponseType } from "@/api/services/userNews/types";
import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { Icons } from "@/components/Icons";
import SectionPadding from "@/components/SectionPadding";
import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDeleteUserNewsMutation, useGetUserNews, useUpdateNewsTableMutation } from "@/hooks/uesUserNews";
import { cn } from "@/lib/utils";

import NewsSkeleton from "./NewsSkeleton";

const UserNewsPage = () => {
  const createUserNewsUrl = usePathname();
  const { data, isFetching } = useGetUserNews("dashboard");
  const { mutate: deleteUserNews } = useDeleteUserNewsMutation();
  const { mutate: updateIsActive } = useUpdateNewsTableMutation();

  const deleteItem = (id: string) => {
    deleteUserNews(id);
  };

  const handleUpdateIsActive = (item: UserNewsListResponseType, checked: boolean) => {
    updateIsActive({
      ...item,
      isActive: checked,
    });
  };
  return (
    <SectionPadding container>
      {isFetching ? (
        <NewsSkeleton />
      ) : (
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h1>最新消息</h1>
            <Link href={`${createUserNewsUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
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
                        {item.title}
                      </div>
                    </div>
                    <div className="mb-4 text-gray-600">發布日期：{format(item.publicAt!, "yyyy-MM-dd")}</div>
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex">
                        <Link
                          className={cn("mr-3 text-primary", buttonVariants({ variant: "outline" }))}
                          href={`${createUserNewsUrl}/${item.id}`}
                        >
                          <Icons.Plan dimension="s" className="text-primary" />
                        </Link>
                        <AlertDialogTriggerDelete deleteData={() => deleteItem(item.id)} title={item.title} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={item.isActive}
                          id={item.id}
                          onCheckedChange={(checked) => handleUpdateIsActive(item, checked as boolean)}
                        />
                        <label
                          htmlFor={item.id}
                          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          啟用
                        </label>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </SectionPadding>
  );
};

export default UserNewsPage;
