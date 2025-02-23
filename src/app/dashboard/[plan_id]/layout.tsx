import SectionPadding from "@/components/SectionPadding";
import { ProviderProps } from "@/types/ProviderType";

import LayoutContent from "./content";
const DashboardLayout = ({ children }: ProviderProps) => {
  return (
    <SectionPadding container adminContainer>
      <LayoutContent>{children}</LayoutContent>
    </SectionPadding>
  );
};

export default DashboardLayout;
