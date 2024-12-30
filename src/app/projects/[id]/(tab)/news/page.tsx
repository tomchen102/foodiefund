import { HydrationBoundary } from "@tanstack/react-query";

import { initializeNewsListQueryClient } from "@/hooks/uesUserNews";

import NewsContent from "./NewsContent";

const getData = async () => {
  const { dehydratedState } = await initializeNewsListQueryClient();
  return {
    dehydratedState,
  };
};

const News = async () => {
  const { dehydratedState } = await getData();
  return (
    <HydrationBoundary state={dehydratedState}>
      <NewsContent />
    </HydrationBoundary>
  );
};

export default News;
