import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import AboutUs from "./_components/AboutUsSection";
import ExperienceTalkBlock from "../components/ExperienceTalkBlock";
import ExperienceSuccess from "../components/ExperienceSuccess";
import Banner from "./_components/Banner";
import { HydrationBoundary } from "@tanstack/react-query";
import { initializeQueryNewsClient } from "@/hooks/useNews";
import { getRecentProjectsBlockData } from "@/mock/getRecentProjectsBlockData";
import { getRecentProjectsBlockHotData } from "@/mock/getRecentProjectsBlockHotData";
import { getExperienceTalkData } from "@/mock/getExperienceTalk";
import { getBanners } from "@/mock/getBanners";
import { getSuccess } from "@/mock/getSuccess";

async function getData() {
  const queryParams = { page: 1, limit: 1 };
  const { dehydratedState } = await initializeQueryNewsClient(queryParams);

  const recentProjectsBlockHotData = await getRecentProjectsBlockHotData();
  const recentProjectsBlockData = await getRecentProjectsBlockData();
  const ExperienceData = await getSuccess();
  const getExperienceTalk = await getExperienceTalkData();
  const banners = await getBanners();
  return {
    dehydratedState,
    recentProjectsBlockHotData,
    recentProjectsBlockData,
    ExperienceData,
    getExperienceTalk,
    queryParams,
    banners,
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function Home() {
  const {
    dehydratedState,
    recentProjectsBlockHotData,
    recentProjectsBlockData,
    ExperienceData,
    getExperienceTalk,
    queryParams,
    banners,
  } = await getData();
  return (
    <HydrationBoundary state={dehydratedState}>
      <main>
        <Banner data={banners} queryParams={queryParams} />
        <div className="bg-gradient-to-top-mobile md:bg-gradient-to-top-desktop">
          <RecentProjectsBlock className="md:pb-0" data={recentProjectsBlockHotData} title="熱門專案" />
        </div>
        <RecentProjectsBlock className="bg-[#d6f4f0] md:pt-20" data={recentProjectsBlockData} title="近期專案" />
        <ExperienceSuccess className="bg-[#F5E5CE] md:pt-20" data={ExperienceData} title="成功案例" />
        <ExperienceTalkBlock data={getExperienceTalk} />
        <AboutUs />
      </main>
    </HydrationBoundary>
  );
}
