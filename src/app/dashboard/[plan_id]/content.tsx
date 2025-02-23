"use client";
import { ChildrenProps } from "@/types/ProviderType";

import PlanSelect from "../_components/PlanSelect";
import Sidebar from "../_components/Sidebar";
import MobileNavbar from "../_components/Sidebar/MobileNavbar";

const LayoutContent = ({ children }: ChildrenProps) => {
  return (
    <div className="flex">
      <div className="lg:mr-8">
        <Sidebar />
        <MobileNavbar />
      </div>
      <div className="w-full">
        <PlanSelect />
        {children}
      </div>
    </div>
  );
};

export default LayoutContent;
