"use client";
import { useParams } from "next/navigation";

import { planStepsType } from "@/api/services/plan/types";
import { Icons } from "@/components/Icons";
import { useGetPlan } from "@/hooks/usePlan";

const ProgressPlan = () => {
  const params = useParams();
  const id = params.plan_id as string;
  console.log("id", id);

  const { data } = useGetPlan(id ?? "");

  return (
    <div className="relative flex w-full items-center justify-between lg:px-4">
      <ul className="relative flex w-full items-center justify-between">
        {data?.steps.map((step: planStepsType, index) => (
          <li key={index} className="relative flex flex-1 flex-col items-center">
            {/* 連接線 */}
            {index > 0 && (
              <div
                className={`absolute left-[-50%] top-6 h-0.5 w-full bg-[#D4D4D8] ${
                  step.status !== "pending" ? "bg-primary-hover" : ""
                }`}
              />
            )}
            {/* 圓圈 */}
            <div
              className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] bg-white ${
                step.status === "completed"
                  ? "border-primary-hover"
                  : step.status === "current"
                    ? "border-primary-hover"
                    : "border-[#D4D4D8]"
              }`}
            >
              {step.status === "completed" ? (
                <Icons.Check className="text-primary-hover" />
              ) : step.status === "current" ? (
                <div className="h-5 w-5 rounded-full bg-primary-hover"></div>
              ) : null}
            </div>
            {/* 文字 */}
            <span
              className={`mt-2 hidden lg:block ${
                step.status === "completed" || step.status === "current"
                  ? "font-bold text-black"
                  : "font-medium text-gray"
              }`}
            >
              {step.label}
            </span>
            <span className="absolute bottom-[-58%] text-sm lg:hidden">
              {step.status === "current" ? step.label : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressPlan;
