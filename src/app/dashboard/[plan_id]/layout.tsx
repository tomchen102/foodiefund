import SectionPadding from "@/components/SectionPadding";
import { LayoutProps } from "@/types/ProviderType";

import LayoutContent from "./content";
const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <SectionPadding container adminContainer>
      <LayoutContent>{children}</LayoutContent>
    </SectionPadding>
  );
};

export default DashboardLayout;
