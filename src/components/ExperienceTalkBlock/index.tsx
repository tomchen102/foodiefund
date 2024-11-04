import MobileExperienceTalkCarousel from "@/components/ExperienceTalkBlock/MobileExperienceTalkCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ExperienceTalkList from "./ExperienceTalkList";
import { ExperienceTalkListType } from "@/types/ExperienceTalkListProps";
import { cn } from "@/lib/utils";

const ExperienceTalk = ({ data, className }: ExperienceTalkListType) => {
  return (
    <section className={cn("container px-3 pb-12 pt-8 md:pb-[120px] md:pt-20 xl:px-0", className)}>
      <div className="mb-3 flex md:mb-6">
        <h2 className="text-lg font-bold md:text-2xl">募資提案經驗談</h2>
        <Button className="ml-auto hidden items-center md:flex" variant="secondary" asChild>
          <Link href="/404">
            查看更多 <GoArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>

      <MobileExperienceTalkCarousel data={data} />
      <ExperienceTalkList data={data} />
      <Button className="ml-auto mt-3 flex items-center md:hidden" variant="secondary" asChild>
        <Link href="/404">
          查看更多 <GoArrowRight size={16} className="ml-1" />
        </Link>
      </Button>
    </section>
  );
};

export default ExperienceTalk;
