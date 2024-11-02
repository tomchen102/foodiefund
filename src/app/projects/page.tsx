import RecentProjectsBlock from "@/components/RecentProjectsBlock";
import ExperienceTalkBlock from "@/components/ExperienceTalkBlock";
import { getRecentProjectsBlockHotData } from "@/mock/getRecentProjectsBlockHotData";
import { getExperienceTalkData } from "@/mock/getExperienceTalk";
import { getProjectsData } from "@/mock/getProjects";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProjectsBlock from "./_components/ProjectsBlock";
import SelectProjects from "./_components/SelectProjects";

async function getData() {
  const recentProjectsBlockHotData = await getRecentProjectsBlockHotData();
  const getExperienceTalk = await getExperienceTalkData();
  const projectsData = await getProjectsData();
  return {
    recentProjectsBlockHotData: recentProjectsBlockHotData.slice(0, 3),
    getExperienceTalk,
    projectsData,
  };
}

export default async function ProjectsList() {
  const { recentProjectsBlockHotData, getExperienceTalk, projectsData } = await getData();
  return (
    <section>
      <SelectProjects />
      <div className="mt-12 bg-[#D6F4F0] pb-8">
        <RecentProjectsBlock className="md:pb-0" data={recentProjectsBlockHotData} title="熱門專案" gridType="three" />
      </div>
      <div className="container mt-[27px] px-3 md:mt-12 xl:px-0">
        <ProjectsBlock data={projectsData} />
      </div>
      <div className="container mt-[31px] px-3 md:mt-[56px] xl:px-0">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="rounded-lg bg-primary-dark text-white hover:bg-primary-dark hover:text-white"
                href="#"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="rounded-lg hover:bg-primary-dark hover:text-white" href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden md:block">
              <PaginationLink className="rounded-lg hover:bg-primary-dark hover:text-white" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="hidden md:block">
              <PaginationLink className="rounded-lg hover:bg-primary-dark hover:text-white" href="#">
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="rounded-lg hover:bg-primary-dark hover:text-white" href="#">
                11
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="mt-12 bg-[#F5E5CE] pb-8">
        <ExperienceTalkBlock data={getExperienceTalk} />
      </div>
    </section>
  );
}
