"use client";
import { useParams } from "next/navigation";

import { Icons } from "@/components/Icons";
import { Progress } from "@/components/ui/progress";
import { useGetPlan } from "@/hooks/usePlan";

const FinancialPlan = () => {
  const params = useParams();
  const id = params.plan_id as string;
  const { data } = useGetPlan(id ?? "");

  return (
    <>
      <div className="mt-12 flex flex-col lg:mt-10 lg:flex-row">
        <div className="order-2 mt-4 flex flex-shrink-0 lg:order-1 lg:mr-6 lg:mt-0 lg:w-[23.28%] lg:flex-col">
          <div className="mr-4 w-full border bg-white p-4 lg:mb-6 lg:mr-0 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.ThumbUpOffAlt type="indicator" className="text-primary-hover" />
              <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">平均贊助金額</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">NT$ {data?.plan.avgAmount}</h4>
              <span className="ml-2 text-gray">元</span>
            </div>
          </div>
          <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
            <div className="mb-3 flex">
              <Icons.Time type="indicator" className="text-primary-hover" />
              <span className="ml-2 font-medium leading-6 text-gray">執行時間</span>
            </div>
            <div className="flex items-center">
              <h4 className="text-lg">{data?.plan.activeTime}</h4>
            </div>
          </div>
        </div>
        <div className="order-1 w-full border bg-white px-4 pb-4 pt-4 lg:px-6 lg:pb-10">
          <h6>募資進度</h6>
          <div className="mb-1 mt-4">
            <span className="font-medium leading-6 text-gray">累積金額</span>
          </div>
          <div className="mb-3 lg:mb-8 lg:flex lg:items-center">
            <div className="mb-3 mr-auto lg:mb-0">
              <h4>NT$ {data?.plan.targetAmount}</h4>
            </div>
            <span className="text-gray lg:ml-2">最後募資期限：{data?.plan.endAt}</span>
          </div>
          <Progress value={data?.plan.coverage ?? 0} type="backend" />
        </div>
      </div>
      <div className="my-4 grid grid-cols-2 gap-4 lg:my-6 lg:grid-cols-4 lg:gap-6">
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Bag type="indicator" className="text-primary-hover" />
            <span className="ml-2 font-medium leading-6 text-gray">回購率</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">{data?.plan.repurchaseRate}</h4>
            <span className="ml-2 text-gray">%</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.Coin type="indicator" className="text-primary-hover" />
            <span className="ml-2 font-medium leading-6 text-gray">平均捐款額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ {data?.plan.avgDonation}</h4>
            <span className="ml-2 text-gray">元</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.ListAlt type="indicator" className="text-primary-hover" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">累積訂單筆數</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">{data?.plan.totalOrders}</h4>
            <span className="ml-2 text-gray">筆</span>
          </div>
        </div>
        <div className="w-full border bg-white p-4 lg:px-6 lg:py-4">
          <div className="mb-3 flex">
            <Icons.KeyboardReturn type="indicator" className="text-primary-hover" />
            <span className="ml-2 flex-shrink-0 font-medium leading-6 text-gray">累積退款金額</span>
          </div>
          <div className="flex items-center">
            <h4 className="text-lg">NT$ {data?.plan.totalRefunds}</h4>
            <span className="ml-2 text-gray">元</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialPlan;
