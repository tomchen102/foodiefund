import { HydrationBoundary } from "@tanstack/react-query";

import { initializeNewsListQueryClient } from "@/hooks/uesUserNews";

import NewsContent from "./NewsContent";

const getData = async (projectId: string) => {
  const { dehydratedState } = await initializeNewsListQueryClient(projectId);
  return {
    dehydratedState,
  };
};

const News = async () => {
  const projectId = "676cdded66e5be04cc208901";
  const { dehydratedState } = await getData(projectId);
  return (
    <HydrationBoundary state={dehydratedState}>
      <NewsContent />
    </HydrationBoundary>
  );
};

export default News;
