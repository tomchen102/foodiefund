import { ProviderProps } from "@/types/ProviderType";
import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import ProjectSummary from "./_components/ProjectSummary";
import Navbar from "./@Navbar/page";
import Rewards from "./@Rewards/page";
import SectionPadding from "@/components/SectionPadding";
import { Metadata } from "next";
import { getProjectSummaryData } from "@/mock/getProjectSummaryData";
import { getRecentProjectsBlockData } from "@/mock/getRecentProjectsBlockData";

export const metadata: Metadata = {
  title: "眾資成城-在你心愛的餐廳成為合夥人",
  description:
    "在開發「眾資成城 - 在你心愛的餐廳成為合夥人」這個網站時，我們的理念是創造一個聚焦於美食愛好者和創業家之間合作的平台。",
  keywords: "眾資成城, 餐廳, 合夥人, 群眾募資, 美食",
  openGraph: {
    title: "眾資成城-在你心愛的餐廳成為合夥人",
    description:
      "在開發「眾資成城 - 在你心愛的餐廳成為合夥人」這個網站時，我們的理念是創造一個聚焦於美食愛好者和創業家之間合作的平台。",
    url: "https://foodiefund.vercel.app/projects/1",
    type: "website",
    siteName: "眾資成城",
    images: [
      {
        url: "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74960e77-27bb-4145-9c74-70c5c5b3c207.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PXtAq0TxkxLZMbGU1xWId8nHIEr9XEVfESbkhydEs0zzFn5x1rMLcDzUMRk%2BMyUkVSCtCow%2F8he37%2F8gbfU9NFGH7gUaoBQatqFQZwGwm4HuNXjPK5oVoxRA5IJRoV4k%2FvDyq3g51wmsC55mIqDxV5cWWPfaJMIKi3LFgKlKwXeNoN%2FqVeTE3OqbjvcGkRBV%2FylbgEqTgnG4keVpwzS2%2BhFIezUxUOWDyY23b%2FbMNLV9a9vXDvDWFsvcdeB0GkAW842rz5%2F9crT%2BJTKTnp6A2ViONMLMR743oUNA1597Cu9ZaIProsdR8nQfb7m97kNvyg81lfvh9oBBaL4c8ql7%2Fw%3D%3D",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "眾資成城-在你心愛的餐廳成為合夥人",
    description:
      "在開發「眾資成城 - 在你心愛的餐廳成為合夥人」這個網站時，我們的理念是創造一個聚焦於美食愛好者和創業家之間合作的平台。",
    images: [
      {
        url: "https://storage.googleapis.com/fir-express-80358.appspot.com/images/74960e77-27bb-4145-9c74-70c5c5b3c207.png?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=PXtAq0TxkxLZMbGU1xWId8nHIEr9XEVfESbkhydEs0zzFn5x1rMLcDzUMRk%2BMyUkVSCtCow%2F8he37%2F8gbfU9NFGH7gUaoBQatqFQZwGwm4HuNXjPK5oVoxRA5IJRoV4k%2FvDyq3g51wmsC55mIqDxV5cWWPfaJMIKi3LFgKlKwXeNoN%2FqVeTE3OqbjvcGkRBV%2FylbgEqTgnG4keVpwzS2%2BhFIezUxUOWDyY23b%2FbMNLV9a9vXDvDWFsvcdeB0GkAW842rz5%2F9crT%2BJTKTnp6A2ViONMLMR743oUNA1597Cu9ZaIProsdR8nQfb7m97kNvyg81lfvh9oBBaL4c8ql7%2Fw%3D%3D",
      },
    ],
  },
  appleWebApp: {
    title: "眾資成城-在你心愛的餐廳成為合夥人",
    startupImage: [
      {
        url: "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
      },
    ],
  },
};

export default async function ProjectsLayout({ children, params }: ProviderProps) {
  const id = params!.id;
  const data = await getRecentProjectsBlockData();
  const ProjectSummaryData = await getProjectSummaryData();

  metadata.title = ProjectSummaryData[id - 1].title;
  metadata.description = ProjectSummaryData[id - 1].description;
  metadata.keywords = `眾資成城, 餐廳, 合夥人, 群眾募資, 美食 ${ProjectSummaryData[id - 1].title}, ${ProjectSummaryData[id - 1].description}`;
  metadata.openGraph = metadata.openGraph ?? {};
  metadata.openGraph.title = ProjectSummaryData[id - 1].title;
  metadata.openGraph.description = ProjectSummaryData[id - 1].description;
  metadata.openGraph = metadata.openGraph ?? {};
  metadata.openGraph.url = `https://foodiefund.vercel.app/projects/${id}`;
  metadata.openGraph.images = [
    {
      url: ProjectSummaryData[id - 1].imageUrlLg,
      width: 800,
      height: 600,
      alt: "Og Image Alt",
    },
  ];
  metadata.twitter = metadata.twitter ?? {};
  metadata.twitter.title = ProjectSummaryData[id - 1].title;
  metadata.twitter.description = ProjectSummaryData[id - 1].description;
  metadata.twitter.images = [
    {
      url: ProjectSummaryData[id - 1].imageUrlLg,
    },
  ];
  metadata.appleWebApp = metadata.appleWebApp ?? {};
  if (typeof metadata.appleWebApp === "object") {
    metadata.appleWebApp.title = ProjectSummaryData[id - 1].title;
    metadata.appleWebApp.startupImage = [
      {
        url: ProjectSummaryData[id - 1].imageUrlLg,
      },
    ];
  }

  return (
    <>
      <ProjectSummary {...ProjectSummaryData.find((project) => project.id === id.toString())!} />
      <Navbar />
      <SectionPadding className="container px-3">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="mb-8 pr-10 lg:col-span-9">{children}</div>
          <Rewards />
        </div>
      </SectionPadding>
      <RecentProjectsBlock className="bg-[#F5E5CE]" data={data} title="近期專案" />
    </>
  );
}

export async function getStaticPaths() {
  const ProjectSummaryData = await getProjectSummaryData();
  const paths = ProjectSummaryData.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
