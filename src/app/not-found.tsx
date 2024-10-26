import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <SectionPadding className="container px-3 xl:px-0">
      <div className="flex h-[60vh] items-center justify-center md:px-[110px]">
        <div className="flex h-[478px] w-[1076px] flex-col items-center justify-center rounded-[24px] border bg-[#EEEFEF] text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-[0.15em] text-primary md:text-[160px]">404</h1>
          <h2 className="mb-6 text-2xl font-bold tracking-[0.2em] text-tertiary">找不到頁面</h2>
          <p className="mb-8 text-tertiary">很抱歉，您所查找的頁面不存在。也許它已被移除或連結錯誤。</p>
          <div className="">
            <Button variant="secondary" className="mr-5">
              <Link href="/">返回首頁</Link>
            </Button>
            <Button variant="secondary">探索專案</Button>
          </div>
        </div>
      </div>
    </SectionPadding>
  );
};

export default NotFound;
