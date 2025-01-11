"use client";
import { usePathname } from "next/navigation";

import SectionPadding from "@/components/SectionPadding";
import { ProviderProps } from "@/types/ProviderType";

import Navbar from "./_components/Navbar";
import Rewards from "./_components/Rewards";

const LayoutContent = ({ children }: ProviderProps) => {
  const pathname = usePathname();
  const isProjectList = pathname.includes("/project-list");

  return (
    <>
      {isProjectList ? (
        <>
          <SectionPadding container className="lg:pt-0">
            {children}
          </SectionPadding>
        </>
      ) : (
        <>
          <Navbar />
          <SectionPadding container>
            <div className="lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="mb-8 pr-0 lg:col-span-9 lg:pr-10">{children}</div>
              <div className="lg:col-span-3">
                <Rewards />
              </div>
            </div>
          </SectionPadding>
        </>
      )}
    </>
  );
};

export default LayoutContent;
