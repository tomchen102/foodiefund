import Link from "next/link";

import MobileExperienceTalkCarousel from "@/components/ExperienceTalkBlock/MobileExperienceTalkCarousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExperienceTalkListType } from "@/types/ExperienceTalkListProps";

import { Icons } from "../Icons";

import ExperienceTalkList from "./ExperienceTalkList";

const ExperienceTalk = ({ data, className }: ExperienceTalkListType) => {
  return (
    <section className={cn("container px-3 pb-12 pt-8 md:pb-[120px] md:pt-20 xl:px-0", className)}>
      <div className="mb-3 flex items-center gap-3 md:mb-6">
        <h2 className="text-lg font-bold md:text-2xl">募資提案經驗談</h2>
        <Button size="iconButton" variant="secondary" className="hidden md:flex" asChild>
          <Link href="/404">
            查看更多
            <Icons.ArrowRightFill dimension="s" className="text-white" />
          </Link>
        </Button>
      </div>

      <MobileExperienceTalkCarousel data={data} />
      <ExperienceTalkList data={data} />
      <Button size="iconButton" variant="secondary" className="md:hidden" asChild>
        <Link href="/404">
          查看更多
          <Icons.ArrowRightFill dimension="s" className="text-white" />
        </Link>
      </Button>
    </section>
  );
};

export default ExperienceTalk;
