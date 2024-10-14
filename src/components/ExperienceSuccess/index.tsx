import MobileRecentProjectsCarousel from "@/components/ExperienceSuccess/MobileCarousel";
/* import PcRecentProjectsList from "@/components/ExperienceSuccess/PcRecentProjectsList"; */
import { ExpierieceSuccessListType } from "@/types/ExpierieceSuccessListProps";
import { cn } from "@/lib/utils";

const ExperienceSuccess = ({ data, title, className }: ExpierieceSuccessListType) => {
  return (
    <section className={cn("pb-12 pt-8 md:pb-20 md:pt-[60px]", className)}>
      <div className="container px-3 xl:px-0">
        <div className="mb-3 text-center md:mb-6">
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        </div>
        <MobileRecentProjectsCarousel data={data} />
        {/* <PcRecentProjectsList data={data} /> */}
      </div>
    </section>
  );
};

export default ExperienceSuccess;
