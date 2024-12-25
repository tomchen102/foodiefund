import { useGetUserNews, useDeleteUserNewsMutation, useUpdateNewsTableMutation } from "@/hooks/uesUserNews";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { format } from "date-fns";
import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { UserNewsListResponseType } from "@/api/services/userNews/types";
import { buttonVariants } from "@/components/ui/button";
import Loading from "./loading";

const NewsContent = () => {
  const pathname = usePathname();
  const { data, isFetching } = useGetUserNews();
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

  if (isFetching) {
    return <Loading />;
  }

  return (
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
                  href={`${pathname}/${item.id}`}
                >
                  <Icons.Plan dimension="s" className="text-primary" />
                </Link>
                <AlertDialogTriggerDelete deleteData={() => deleteItem(item.id)} title={item.title} />
              </div>
              <div className="flex items-center space-x-2">
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
            </div>
          </li>
        ))}
    </ul>
  );
};

export default NewsContent;
