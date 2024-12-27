import { HydrationBoundary } from "@tanstack/react-query";

import { initializeQueryNewsClient } from "@/hooks/uesUserNews";

import DetailContent from "./DetailContent";

const DUMMY_ID = "676cdded66e5be04cc208901";

const getData = async () => {
  const { dehydratedState } = await initializeQueryNewsClient(DUMMY_ID);
  return {
    dehydratedState,
  };
};

const Detail = async () => {
  const { dehydratedState } = await getData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <DetailContent id={DUMMY_ID} />
    </HydrationBoundary>
  );
};

export default Detail;
