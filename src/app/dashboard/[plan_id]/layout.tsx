import SectionPadding from "@/components/SectionPadding";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProviderProps } from "@/types/ProviderType";

import LayoutContent from "./content";

const navMenu = {
  projectNav: [
    { title: "金華火腿主題咖啡屋", hrefUrl: "#" },
    { title: "喵喵咖啡廳", hrefUrl: "#" },
    { title: "龍蝦盛宴", hrefUrl: "#" },
  ],
};
const ProjectsLayout = (props: ProviderProps) => {
  const { children } = props;

  return (
    <SectionPadding container>
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3"></div>
        <div className="mb-5">
          <Select>
            <SelectTrigger className="w-[255px]">
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
        </div>
      </div>
      <LayoutContent>{children}</LayoutContent>
    </SectionPadding>
  );
};

export default ProjectsLayout;
