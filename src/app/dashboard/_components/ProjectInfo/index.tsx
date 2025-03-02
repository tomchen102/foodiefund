"use client";
import { useParams } from "next/navigation";

import Badges from "@/components/Badges";
import { Icons } from "@/components/Icons";
import { useGetPlan } from "@/hooks/usePlan";
import { cn } from "@/lib/utils";

const ProjectInfo = () => {
  const params = useParams();
  const id = params.plan_id as string;
  const { data } = useGetPlan(id ?? "");
  return (
    <div
      className={cn(
        "border bg-white p-4 lg:px-6 lg:py-4",
        `${data?.orders.length === 0 && data.comments.length === 0 ? "" : "mb-6"}`
      )}
    >
      <div className="mb-3 flex lg:mb-5">
        <div className="mr-3">
          <h6>{data?.plan.title}</h6>
        </div>
        <div className="hidden lg:flex">
          <Badges text="台北" />
          <Badges text="咖啡廳" />
        </div>
        <div className="ml-auto">
          <Icons.Plan type="indicator" />
        </div>
      </div>
      <div className="mb-4 flex lg:hidden">
        <Badges text="台北" />
        <Badges text="咖啡廳" />
      </div>
      <div className="lg:flex">
        <ul className="border-b pb-5 lg:mr-5 lg:border-b-0">
          <li className="mb-4 flex">
            <div className="mr-5 w-20">
              <span className="font-medium text-gray">提案人姓名</span>
            </div>
            <span className="font-medium">{data?.plan.proposer}</span>
          </li>
          <li className="mb-4 flex">
            <div className="mr-5 w-20">
              <span className="font-medium text-gray">聯絡信箱</span>
            </div>
            <span className="font-medium">{data?.plan.email}</span>
          </li>
          <li className="flex">
            <div className="mr-5 w-20">
              <span className="font-medium text-gray">聯絡電話</span>
            </div>
            <span className="font-medium">{data?.plan.phone}</span>
          </li>
        </ul>
        <div className="lg:border-l lg:pl-5">
          <div className="mb-2 pt-5 lg:pt-0">
            <span className="font-medium text-gray">專案簡介</span>
          </div>
          <div>{data?.plan.info}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
