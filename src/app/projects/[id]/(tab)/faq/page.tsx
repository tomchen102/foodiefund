import { HydrationBoundary } from "@tanstack/react-query";

import { initializeUserFaqListQueryClient } from "@/hooks/useUserFaq";

import FaqContent from "./FaqContent";

const getData = async () => {
  const { dehydratedState } = await initializeUserFaqListQueryClient();
  return {
    dehydratedState,
  };
};

const Faq = async () => {
  const { dehydratedState } = await getData();
  return (
    <HydrationBoundary state={dehydratedState}>
      <FaqContent />
    </HydrationBoundary>
  );
};

export default Faq;
