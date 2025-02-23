import Badges from "@/components/Badges";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const navMenu = {
  projectNav: [
    { title: "金華火腿主題咖啡屋", hrefUrl: "#" },
    { title: "喵喵咖啡廳", hrefUrl: "#" },
    { title: "龍蝦盛宴", hrefUrl: "#" },
  ],
};
const PlanSelect = () => {
  return (
    <div className="lg:mb-10 lg:flex lg:items-center">
      <div className="mb-6 lg:mr-6">
        <h5>募資監控中心</h5>
      </div>
      <div className="mb-5 flex items-center">
        <Select>
          <SelectTrigger className="w-[192px]">
            <SelectValue placeholder="金華火腿主題咖啡屋" />
          </SelectTrigger>
          <SelectContent>
            {navMenu.projectNav.map((item, index) => (
              <SelectItem key={index} value={item.title}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="ml-3">
          <Badges text="審核中" />
        </div>
      </div>
    </div>
  );
};

export default PlanSelect;
