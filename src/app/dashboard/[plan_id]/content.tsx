"use client";
import { ProviderProps } from "@/types/ProviderType";

import Navbar from "../_components/Navbar";
import MobileNavbar from "../_components/Navbar/MobileNavbar";
import PlanSelect from "../_components/PlanSelect";

const LayoutContent = ({ children }: ProviderProps) => {
  return (
    <div className="flex">
      <div className="mr-8">
        <Navbar />
        <MobileNavbar />
      </div>
      <div>
        <PlanSelect />
        {children}
      </div>
    </div>
  );
};

export default LayoutContent;
