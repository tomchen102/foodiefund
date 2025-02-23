import { ReactNode } from "react";

import SectionPadding from "@/components/SectionPadding";

import LayoutContent from "./content";

interface LayoutProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <SectionPadding container adminContainer>
      <LayoutContent>{children}</LayoutContent>
    </SectionPadding>
  );
};

export default DashboardLayout;
