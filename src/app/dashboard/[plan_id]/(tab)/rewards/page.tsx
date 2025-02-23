"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/Icons";
import SectionPadding from "@/components/SectionPadding";
import { buttonVariants } from "@/components/ui/button";

const Rewards = () => {
  const createRewardUrl = usePathname();
  return (
    <SectionPadding container>
      <div className="mb-5 flex items-center justify-between">
        <h1>計畫回饋</h1>
        <Link href={`${createRewardUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
          <Icons.Add dimension="s" className="text-white" />
          新增資料
        </Link>
      </div>
    </SectionPadding>
  );
};

export default Rewards;
