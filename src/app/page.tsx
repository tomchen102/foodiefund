import { HydrationBoundary } from "@tanstack/react-query";

import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import { initializeHomeNewsQueryClient } from "@/hooks/useNews";
import { getBanners } from "@/mock/getBanners";
import { getExperienceTalkData } from "@/mock/getExperienceTalk";
import { getRecentProjectsBlockData } from "@/mock/getRecentProjectsBlockData";
import { getRecentProjectsBlockHotData } from "@/mock/getRecentProjectsBlockHotData";
import { getRecentProjectsBlockSubscriptionData } from "@/mock/getRecentProjectsBlockSubscriptionData";
import { getSuccess } from "@/mock/getSuccess";

import ExperienceSuccess from "../components/ExperienceSuccess";
import ExperienceTalkBlock from "../components/ExperienceTalkBlock";
import AboutUs from "../components/Home/AboutUsSection";
import Banner from "../components/Home/Banner";

async function getData() {
  const queryParams = { page: 1, limit: 1 };
  const { dehydratedState } = await initializeHomeNewsQueryClient(queryParams);
  const recentProjectsBlockHotData = await getRecentProjectsBlockHotData();
  const recentProjectsBlockData = await getRecentProjectsBlockData();
  const recentProjectsBlockSubscriptionData = await getRecentProjectsBlockSubscriptionData();
  const ExperienceData = await getSuccess();
  const getExperienceTalk = await getExperienceTalkData();
  const banners = await getBanners();
  return {
    dehydratedState,
    recentProjectsBlockHotData,
    recentProjectsBlockData,
    recentProjectsBlockSubscriptionData,
    ExperienceData,
    getExperienceTalk,
    queryParams,
    banners,
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
const Home = async () => {
  const {
    dehydratedState,
    recentProjectsBlockHotData,
    recentProjectsBlockData,
    recentProjectsBlockSubscriptionData,
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
          <RecentProjectsBlock className="md:pb-0" data={recentProjectsBlockHotData} title="熱門專案" gridType="four" />
        </div>
        <RecentProjectsBlock
          className="bg-[#d6f4f0] md:pt-20"
          data={recentProjectsBlockData}
          title="近期專案"
          gridType="four"
        />
        <RecentProjectsBlock
          className="md:pt-20"
          data={recentProjectsBlockSubscriptionData}
          title="訂閱式專案"
          gridType="four"
        />
        <ExperienceSuccess className="bg-[#F5E5CE] md:pt-20" data={ExperienceData} title="成功案例" />
        <ExperienceTalkBlock data={getExperienceTalk} />
        <AboutUs />
      </main>
    </HydrationBoundary>
  );
};

export default Home;
