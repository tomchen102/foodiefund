import { getNews } from "@/api/services/news";
import { NewsQueryParams, newsResponseArraySchemaType } from "@/api/services/news/types";
import { newsResponseArraySchema } from "@/schema/newsSchema";
import { safeParseResponse } from "@/utils/zodUtils";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const fetchAndParseNews = async (queryParams: NewsQueryParams): Promise<newsResponseArraySchemaType> => {
  const response = await getNews(queryParams);
  const result = safeParseResponse(newsResponseArraySchema, response.data);
  return result;
};

export const useGetNews = (queryParams: NewsQueryParams) => {
  return useQuery<newsResponseArraySchemaType, Error>({
    queryKey: ["News", queryParams],
    queryFn: async () => fetchAndParseNews(queryParams),
  });
};

export const prefetchNews = async (queryClient: QueryClient, queryParams: NewsQueryParams) => {
  await queryClient.prefetchQuery({
    queryKey: ["News", queryParams],
    queryFn: async () => fetchAndParseNews(queryParams),
  });
};

export const initializeQueryNewsClient = async (queryParams: NewsQueryParams) => {
  const queryClient = new QueryClient();
  await prefetchNews(queryClient, queryParams);
  const dehydratedState = dehydrate(queryClient);
  return { queryClient, dehydratedState };
};
