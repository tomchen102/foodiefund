import { HydrationBoundary } from "@tanstack/react-query";

import { initializeNewsByIdQueryClient } from "@/hooks/uesUserNews";

import DetailContent from "./DetailContent";

const getData = async (projectId: string) => {
  const { dehydratedState } = await initializeNewsByIdQueryClient(projectId, "project");
  return {
    dehydratedState,
  };
};

const Detail = async () => {
  const projectId = "676cdded66e5be04cc208901";
  const { dehydratedState } = await getData(projectId);

  return (
    <HydrationBoundary state={dehydratedState}>
      <DetailContent />
    </HydrationBoundary>
  );
};

export default Detail;
