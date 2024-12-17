"use client";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiPlus } from "react-icons/fi";
import { useDeleteUserNewsMutation, useGetUserNews } from "@/hooks/uesUserNews";
import { UserNewsListResponseType } from "@/api/services/userNews/types";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { TrashIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Test = () => {
  const { data, isFetching } = useGetUserNews();
  const { mutate: DeleteUserNewsMutation } = useDeleteUserNewsMutation();

  const deleteItem = (item: UserNewsListResponseType) => {
    console.log("Delete item", item);
    DeleteUserNewsMutation(item.id!);
  };
  console.log(deleteItem);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div>
        <div className="mb-5">
          <Select disabled={isFetching}>
            <SelectTrigger className="w-[255px]">
              <SelectValue placeholder="金華火腿主題咖啡屋" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="金華火腿主題咖啡屋">金華火腿主題咖啡屋</SelectItem>
              <SelectItem value="喵喵咖啡廳">喵喵咖啡廳</SelectItem>
              <SelectItem value="綠意盎然">綠意盎然</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-5 flex items-center">
          <h1 className="mr-3">最新消息</h1>
          <Button className="ml-auto" variant="donateNow" disabled={isFetching}>
            <FiPlus size={20} className="mr-2" />
            新增資料
          </Button>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-lg font-bold">{item.title}</div>
                </div>
                <div className="mb-4 text-gray-600">發布日期：{formatDate(item.publicAt!)}</div>
                <div className="flex items-center space-x-4">
                  <div className="mr-auto flex">
                    <Button className="mr-3 text-primary" variant="outline">
                      <Pencil1Icon />
                    </Button>
                    <Button variant="outline" className="text-red-500">
                      <TrashIcon />
                    </Button>
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

export default Test;
