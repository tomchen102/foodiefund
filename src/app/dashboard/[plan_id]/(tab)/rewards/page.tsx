"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { RewardFormSchemaType } from "@/api/services/reward/types";
import { AlertDialogTriggerDelete } from "@/components/DeleteDialog/AlertDialogTriggerDelete";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDeleteRewardMutation, useGetReward, useUpdateRewardTableMutation } from "@/hooks/useRewards";
import { cn } from "@/lib/utils";

const Rewards = () => {
  const createRewardUrl = usePathname();
  const params = useParams();
  const id = params.plan_id as string;
  const { mutate: deleteReward } = useDeleteRewardMutation(id);
  const { mutate: updateIsActive } = useUpdateRewardTableMutation(id);

  const { data } = useGetReward("dashboard", id);

  const deleteItem = (id: string) => {
    console.log("deleteItem", id);
    deleteReward(id);
  };

  const handleUpdateIsActive = (item: RewardFormSchemaType, checked: boolean) => {
    console.log("handleUpdateIsActive", checked);
    updateIsActive({
      id: item.id,
      isActive: checked,
    } as RewardFormSchemaType);
  };
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h1>計畫回饋</h1>
        <Link href={`${createRewardUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
          <Icons.Add dimension="s" className="text-white" />
          新增資料
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(data) &&
          data.map((item) => (
            <li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <div className="line-clamp-2 h-[calc(2*1.75rem)] overflow-hidden text-ellipsis text-lg font-bold">
                  {item.title}
                </div>
              </div>
              <div className="mb-4 text-gray-600">開始日期：{item.startedAt}</div>
              <div className="mb-4 text-gray-600">結束日期：{item.endAt}</div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex">
                  <Link
                    className={cn("mr-3 text-primary", buttonVariants({ variant: "outline" }))}
                    href={`${createRewardUrl}/${item.id}`}
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
                    className="cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    啟用
                  </label>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Rewards;
