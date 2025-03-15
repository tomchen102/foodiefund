import { useFormContext } from "react-hook-form";

import { PlanFormSchemaType } from "@/api/services/plan/types";
import { Button } from "@/components/ui/button";

const DemoButton = () => {
  const { setValue } = useFormContext<PlanFormSchemaType>();

  const fillDemoData = () => {
    setValue("activeType", "A");
    setValue("title", "江戶前壽司");
    setValue("location", "臺北市");
    setValue("restaurantType", "日式料理");
    setValue("image", null);
    setValue("address", "台北市信義區信義路五段 7 號");
    setValue("proposer", "佐藤一郎");
    setValue("email", "kenichi.tanaka@gmail.com");
    setValue("phone", "0912345678");
    setValue(
      "info",
      "我們即將開設一家正宗的日式鮨店，秉持職人精神，專注於手握壽司的傳統技藝，並嚴選當季頂級食材，為每位饕客獻上最純粹的鮨味體驗。敬請期待，邀您一同品味匠心之作！"
    );
    setValue("startedAt", "2025-03-16");
    setValue("endAt", "2025-05-31");
    setValue("targetAmount", 800000);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={fillDemoData}
      className="fixed bottom-20 right-4 z-50 border border-gray-300 bg-white px-4 py-2 shadow-lg hover:bg-gray-100"
    >
      Demo
    </Button>
  );
};

export default DemoButton;
