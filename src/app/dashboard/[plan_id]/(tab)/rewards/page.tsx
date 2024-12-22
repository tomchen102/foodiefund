import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

const Rewards = () => {
  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div>
        <div className="mb-5 flex items-center">
          <h1 className="mr-3">計畫回饋</h1>
          <Button className="ml-auto" variant="donateNow">
            <FiPlus size={20} className="mr-2" />
            新增資料
          </Button>
        </div>
      </div>
    </SectionPadding>
  );
};

export default Rewards;
