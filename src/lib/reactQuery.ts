import { dehydrate, QueryClient } from "@tanstack/react-query";

export const prefetchData = async <T>(queryClient: QueryClient, queryKey: unknown[], queryFn: () => Promise<T>) => {
  return queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
};

export const initializeQueryClient = async (prefetchFn: (queryClient: QueryClient) => Promise<void>) => {
  const queryClient = new QueryClient();
  await prefetchFn(queryClient);
  const dehydratedState = dehydrate(queryClient);
  return { queryClient, dehydratedState };
};
