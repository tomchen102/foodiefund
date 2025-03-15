import { QueryClient, useQuery } from "@tanstack/react-query";

import { NewsApi } from "@/api/services/news";
import { NewsQueryParamsType } from "@/api/services/news/types";
import { initializeQueryClient, prefetchData } from "@/lib/reactQuery";
import { newsResponseArraySchema } from "@/schema/newsSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const newsKeys = {
  key: ["News"] as const,
};

export const useGetNews = (queryParams: NewsQueryParamsType) => {
  return useQuery({
    queryKey: [newsKeys.key, queryParams],
    queryFn: async () => {
      const response = await NewsApi.getAll(queryParams);
      const result = safeParseResponse(newsResponseArraySchema, response.data);
      return result;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const prefetchNewsOne = async (queryClient: QueryClient, queryParams: NewsQueryParamsType) => {
  const response = await NewsApi.getAll(queryParams);
  const parsedData = safeParseResponse(newsResponseArraySchema, response.data);
  console.log("Parsed API Data:", parsedData);
  return prefetchData(queryClient, [newsKeys.key, queryParams], async () => parsedData);
};

export const initializeHomeNewsQueryClient = async (queryParams: NewsQueryParamsType) => {
  return initializeQueryClient((queryClient) => prefetchNewsOne(queryClient, queryParams));
};
