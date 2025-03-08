"use client";
import { useParams } from "next/navigation";

import AvatarCircle from "@/components/AvatarCircle";
import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useGetPlan } from "@/hooks/usePlan";

const DonateList = () => {
  const params = useParams();
  const id = params.plan_id as string;
  const { data } = useGetPlan(id ?? "");
  if (!data?.orders.length) return null;
  return (
    <div className="h-max-[705px] mb-4 w-full border bg-white p-4 lg:mb-0 lg:px-6 lg:py-4">
      <div className="mb-4 flex">
        <div className="mr-auto">
          <h6>近期贊助清單</h6>
        </div>
        <Button className="group text-gray" size="iconButton" variant="link">
          <span>查看更多</span>
          <Icons.ArrowRightFill dimension="s" className="text-gray" />
        </Button>
      </div>
      <ul>
        {data?.orders.map((order, index) => (
          <li className="py-4" key={order.id}>
            <div className={`flex pb-4 ${index !== data.orders.length - 1 ? "border-b border-[#D4D4D8]" : ""}`}>
              <div className="mr-3 flex items-center">
                <AvatarCircle src={order.customer.phone ?? ""} />
              </div>
              <div className="w-full">
                <div className="mb-1 flex">
                  <span className="font-medium text-gray">{order.customer.name}</span>
                  <div className="ml-auto">
                    <Badges text="付款成功" className="mr-0" />
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold">NT$ {order.donate}</span>
                  <div className="ml-auto">
                    <span className="text-gray">{order.order_date}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonateList;
