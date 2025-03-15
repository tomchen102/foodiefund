import { useFormContext } from "react-hook-form";

import { PlanFormSchemaType } from "@/api/services/plan/types";
import { Button } from "@/components/ui/button";

const DemoButton = () => {
  const { setValue } = useFormContext<PlanFormSchemaType>();

  const fillDemoData = () => {
    setValue("activeType", "A");
    setValue("title", "匠人鮨道");
    setValue("location", "臺北市");
    setValue("restaurantType", "日本料理");
    setValue("image", null);
    setValue("address", "台北市信義區信義路五段 7 號");
    setValue("proposer", "佐藤一郎");
    setValue("email", "kenichi.tanaka@gmail.com");
    setValue("phone", "0912345678");
    setValue(
      "info",
      "我們計畫開設一家正宗的日式鮨店，堅持手握壽司的傳統工藝，並嚴選當季新鮮食材，為饕客帶來極致的味蕾享受！期待您的支持！"
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
