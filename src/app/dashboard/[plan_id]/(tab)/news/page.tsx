"use client";
import SectionPadding from "@/components/SectionPadding";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/Icons";
import { Suspense, lazy } from "react";
import Loading from "./loading";

const NewsContent = lazy(() => import("./NewsContent"));

const UserNewsPage = () => {
  const createUserNewsUrl = usePathname();
  return (
    <SectionPadding container>
      <div>
        <div className="mb-5 flex items-center">
          <h1 className="mr-auto">最新消息</h1>
          <Link href={`${createUserNewsUrl}/create`} className={buttonVariants({ variant: "donateNow" })}>
            <Icons.Add dimension="s" className="text-white" />
            新增資料
          </Link>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            <NewsContent />
          </Suspense>
        </div>
      </div>
    </SectionPadding>
  );
};

export default UserNewsPage;
