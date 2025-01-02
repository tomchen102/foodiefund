import Link from "next/link";

import MobileRecentProjectsCarousel from "@/components/RecentProjectsBlock/MobileRecentProjectsCarousel";
import PcRecentProjectsList from "@/components/RecentProjectsBlock/PcRecentProjectsList";
import { cn } from "@/lib/utils";
import { RecentProjectsBlockType } from "@/types/RecentProjectsListProps";

import { Icons } from "../Icons";
import { Button } from "../ui/button";

const RecentProjectsBlock = ({ data, title, className, gridType }: RecentProjectsBlockType) => {
  return (
    <section className={cn("py-5 md:pb-20 md:pt-[60px]", className)}>
      <div className="container px-3 xl:px-0">
        <div className="mb-3 flex md:mb-6">
          <h2 className="text-lg font-bold md:text-2xl">{title}</h2>
          <Button className="ml-auto hidden items-center md:flex" variant="secondary" size="iconButton" asChild>
            <Link href="/projects">
              查看更多
              <Icons.ArrowRightFill dimension="s" mode="dark" />
            </Link>
          </Button>
        </div>
        <MobileRecentProjectsCarousel data={data} />
        <PcRecentProjectsList data={data} gridType={gridType} />
        <Button className="ml-auto mt-3 flex items-center md:hidden" variant="secondary" size="iconButton" asChild>
          <Link href="/projects">
            查看更多
            <Icons.ArrowRightFill dimension="s" mode="dark" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default RecentProjectsBlock;
