"use client";
import Navbar from "./@Navbar/page";
import Rewards from "./@Rewards/page";
import SectionPadding from "@/components/SectionPadding";
import { usePathname } from "next/navigation";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectList = pathname.includes("/project-list");

  return (
    <>
      {isProjectList ? (
        <>
          <SectionPadding className="container px-3 lg:pt-0 xl:px-0">{children}</SectionPadding>
        </>
      ) : (
        <>
          <Navbar />
          <SectionPadding className="container px-3">
            <div className="lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="mb-8 pr-10 lg:col-span-9">{children}</div>
              <Rewards />
            </div>
          </SectionPadding>
        </>
      )}
    </>
  );
}

export default LayoutContent;
