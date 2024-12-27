import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { NewsApi } from "@/api/services/news";
import { NewsQueryParamsType } from "@/api/services/news/types";
import { newsResponseArraySchema } from "@/schema/newsSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const newsKeys = {
  key: ["News"] as const,
};

const fetchAndParseNews = async (queryParams: NewsQueryParamsType) => {
  const response = await NewsApi.getAll(queryParams);
  const result = safeParseResponse(newsResponseArraySchema, response.data);
  return result;
};

export const useGetNews = (queryParams: NewsQueryParamsType) => {
  return useQuery({
    queryKey: [newsKeys.key, queryParams],
    queryFn: async () => fetchAndParseNews(queryParams),
  });
};

export const prefetchNews = async (queryClient: QueryClient, queryParams: NewsQueryParamsType) => {
  await queryClient.prefetchQuery({
    queryKey: [newsKeys.key, queryParams],
    queryFn: async () => fetchAndParseNews(queryParams),
  });
};

export const initializeQueryNewsClient = async (queryParams: NewsQueryParamsType) => {
  const queryClient = new QueryClient();
  await prefetchNews(queryClient, queryParams);
  const dehydratedState = dehydrate(queryClient);
  return { queryClient, dehydratedState };
};
