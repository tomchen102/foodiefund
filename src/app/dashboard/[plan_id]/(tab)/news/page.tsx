"use client";
import SectionPadding from "@/components/SectionPadding";
import { buttonVariants } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useDeleteUserNewsMutation, useGetUserNews } from "@/hooks/uesUserNews";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { format } from "date-fns";
import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const UserNewsPage = () => {
  const createUserNewsUrl = usePathname();

  const { data } = useGetUserNews();
  const { mutate: DeleteUserNewsMutation } = useDeleteUserNewsMutation();

  const deleteItem = (id: string) => {
    console.log("Delete item", id);
    DeleteUserNewsMutation(id);
  };
  return (
    <SectionPadding container>
      <div>
        <div className="mb-5 flex items-center">
          <h1 className="mr-auto">最新消息</h1>
          <Link href={`${createUserNewsUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
            <FiPlus size={20} className="mr-2" />
            新增資料
          </Link>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(data) &&
              data.map((item) => (
                <li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-lg font-bold">{item.title}</div>
                  </div>
                  <div className="mb-4 text-gray-600">發布日期：{format(item.publicAt!, "yyyy-MM-dd")}</div>
                  <div className="flex items-center space-x-4">
                    <div className="mr-auto flex">
                      <Link
                        className={cn("mr-3 text-primary", buttonVariants({ variant: "outline" }))}
                        href={`${createUserNewsUrl}/${item.id}`}
                      >
                        <Pencil1Icon />
                      </Link>
                      <AlertDialogTriggerDelete deleteData={() => deleteItem(item.id)} title={item.title} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox checked={item.isActive} id={item.id} />
                        <label
                          htmlFor={item.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          啟用
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </SectionPadding>
  );
};

export default UserNewsPage;
