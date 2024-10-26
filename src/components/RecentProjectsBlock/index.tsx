import Link from "next/link";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import MobileRecentProjectsCarousel from "@/components/RecentProjectsBlock/MobileRecentProjectsCarousel";
import PcRecentProjectsList from "@/components/RecentProjectsBlock/PcRecentProjectsList";
import { RecentProjectsBlockType } from "@/types/RecentProjectsListProps";
import { cn } from "@/lib/utils";

const RecentProjectsBlock = ({ data, title, className }: RecentProjectsBlockType) => {
  return (
    <section className={cn("py-5 md:pb-20 md:pt-[60px]", className)}>
      <div className="container px-3 xl:px-0">
        <div className="mb-3 flex md:mb-6">
          <h2 className="text-lg font-bold md:text-2xl">{title}</h2>
          <Button className="ml-auto hidden items-center md:flex" variant="secondary" asChild>
            <Link scroll={true} href="/404">
              查看更多 <GoArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        <MobileRecentProjectsCarousel data={data} />
        <PcRecentProjectsList data={data} />
        <Button className="ml-auto mt-3 flex items-center md:hidden" variant="secondary" asChild>
          <Link scroll={true} href="/404">
            查看更多 <GoArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default RecentProjectsBlock;
