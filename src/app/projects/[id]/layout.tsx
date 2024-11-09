import { ProviderProps } from "@/types/ProviderType";
import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import ProjectSummary from "./_components/ProjectSummary";
import { Metadata } from "next";
import { getProjectSummaryData } from "@/mock/getProjectSummaryData";
import { getRecentProjectsBlockData } from "@/mock/getRecentProjectsBlockData";
import LayoutContent from "./content";
import { createMetadata } from "@/utils/metadata";

export default async function ProjectsLayout(props: ProviderProps) {
  const params = await props.params;

  const { children } = props;

  const id = params!.id;
  const data = await getRecentProjectsBlockData();
  const ProjectSummaryData = await getProjectSummaryData();

  return (
    <>
      <ProjectSummary {...ProjectSummaryData.find((project) => project.id === id.toString())!} />
      <LayoutContent>{children}</LayoutContent>
      <RecentProjectsBlock className="bg-[#F5E5CE]" data={data} title="近期專案" gridType="four" />
    </>
  );
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const id = params.id;
  const ProjectSummaryData = await getProjectSummaryData();
  const project = ProjectSummaryData.find((project) => project.id === id);
  if (!project) {
    return createMetadata({});
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    keywords: `眾資成城, 餐廳, 合夥人, 群眾募資, 美食 ${project.title}, ${project.description}`,
    images: {
      url: project.imageUrlLg,
      width: 800,
      height: 600,
      alt: "Og Image Alt",
    },
  });
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

export async function generateStaticParams() {
  const ProjectSummaryData = await getProjectSummaryData();
  return ProjectSummaryData.map((project) => ({
    id: project.id.toString(),
  }));
}
