import { HydrationBoundary } from "@tanstack/react-query";

import { initializeUserFaqListQueryClient } from "@/hooks/useUserFaq";

import FaqContent from "./FaqContent";

const getData = async (projectId: string) => {
  const { dehydratedState } = await initializeUserFaqListQueryClient(projectId);
  return {
    dehydratedState,
  };
};

const Faq = async () => {
  const projectId = "66fb66d32bebc04b1d517eb0";
  const { dehydratedState } = await getData(projectId);
  return (
    <HydrationBoundary state={dehydratedState}>
      <FaqContent />
    </HydrationBoundary>
  );
};

export default Faq;
