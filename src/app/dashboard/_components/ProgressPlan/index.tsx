import { Icons } from "@/components/Icons";

const steps = [
  { label: "填寫提案內容", status: "completed" }, // ✅ 已完成
  { label: "設定金流", status: "current" }, // 🟢 進行中
  { label: "完善計畫回饋", status: "completed" }, // ✅ 已完成
  { label: "提交送審", status: "pending" }, // ⚪ 未完成
  { label: "開始募資", status: "pending" }, // ⚪ 未完成
];

const ProgressPlan = () => {
  return (
    <div className="relative flex w-full items-center justify-between lg:px-4">
      <ul className="relative flex w-full items-center justify-between">
        {steps.map((step, index) => (
          <li key={index} className="relative flex flex-1 flex-col items-center">
            {/* 連接線 */}
            {index > 0 && (
              <div
                className={`absolute left-[-50%] top-6 h-0.5 w-full bg-[#D4D4D8] ${
                  steps[index - 1].status !== "pending" ? "bg-[#079A91]" : ""
                }`}
              />
            )}

            {/* 圓圈 */}
            <div
              className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] bg-white ${
                step.status === "completed"
                  ? "border-[#079A91]"
                  : step.status === "current"
                    ? "border-[#079A91]"
                    : "border-[#D4D4D8]"
              }`}
            >
              {step.status === "completed" ? (
                <Icons.Check className="text-[#079A91]" />
              ) : step.status === "current" ? (
                <div className="h-5 w-5 rounded-full bg-[#079A91]"></div>
              ) : null}
            </div>

            {/* 文字 */}
            <span
              className={`mt-2 hidden lg:block ${
                step.status === "completed" || step.status === "current"
                  ? "font-bold text-black"
                  : "font-medium text-[#71717A]"
              }`}
            >
              {step.label}
            </span>
            <span className="absolute bottom-[-58%] lg:hidden"> {step.status === "current" ? step.label : null}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressPlan;
