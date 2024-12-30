import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userNewsApi } from "@/api/services/userNews";
import { UserNewsListQueryResponseType, UserNewsListResponseType } from "@/api/services/userNews/types";
import { initializeQueryClient, prefetchData } from "@/lib/reactQuery";
import { UserNewsListArrayResponseSchema, UserNewsListResponseSchema } from "@/schema/UserNewsSchema";
import { ClientType } from "@/types/clientTypes";
import { MutationResult } from "@/types/mutationTypes";
import { safeParseResponse } from "@/utils/zodUtils";

import { useToast } from "./use-toast";

const userNewsKeys = {
  key: ["UserNews"] as const,
};

export const useGetUserNews = (clientType: ClientType) => {
  return useQuery({
    queryKey: [userNewsKeys.key, clientType],
    queryFn: async () => {
      const response = await userNewsApi.getAll(clientType);
      console.log("getUserNewsList response:", response.data);
      const result = safeParseResponse(UserNewsListArrayResponseSchema, response.data);
      return result;
    },
  });
};

export const prefetchNewsListByClient = (queryClient: QueryClient) => {
  return prefetchData(queryClient, [userNewsKeys.key], async () => {
    const response = await userNewsApi.getAll("frontend");
    return safeParseResponse(UserNewsListArrayResponseSchema, response.data);
  });
};

export const initializeNewsListQueryClient = () => {
  return initializeQueryClient((queryClient) => prefetchNewsListByClient(queryClient));
};

export const useGetUserNewsId = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: [userNewsKeys.key, id],
    queryFn: async () => {
      const response = await userNewsApi.getById(id, "dashboard");
      const result = safeParseResponse(UserNewsListResponseSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(id),
  });
};

export const prefetchNewsById = (queryClient: QueryClient, id: string) => {
  return prefetchData(queryClient, [userNewsKeys.key, id], async () => {
    const response = await userNewsApi.getById(id, "frontend");
    return safeParseResponse(UserNewsListResponseSchema, response.data);
  });
};

export const initializeNewsByIdQueryClient = (id: string) => {
  return initializeQueryClient((queryClient) => prefetchNewsById(queryClient, id));
};

export const usePostUserNewsMutation = (): MutationResult<UserNewsListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userNewsApi.create,
    onSuccess: () => {
      toast({
        description: "新增成功!",
      });
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
    },
    onError: (error) => {
      console.error("Error creating News:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useUpdateUserNewsMutation = (): MutationResult<UserNewsListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userNewsApi.update,
    onSuccess: () => {
      toast({
        description: "修改成功!",
      });
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
    },
    onError: (error) => {
      console.error("Error creating News:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useDeleteUserNewsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userNewsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      toast({
        description: "刪除成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating News:", error.message);
      toast({
        variant: "destructive",
        description: "刪除失敗!",
      });
    },
  });
};

export const useUpdateNewsTableMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userNewsApi.update,
    onMutate: async (updatedData: UserNewsListResponseType) => {
      await queryClient.cancelQueries({ queryKey: userNewsKeys.key });
      const previousData = queryClient.getQueryData<UserNewsListResponseType[]>(userNewsKeys.key);

      if (!previousData) {
        console.warn("No data found in cache for key:", userNewsKeys.key);
        return { previousData: null };
      }
      queryClient.setQueryData<UserNewsListQueryResponseType>(userNewsKeys.key, (old) => {
        if (!old || !old.data) return old;
        return {
          ...old,
          data: old.data.map((item) => (item.id === updatedData.id ? { ...item, ...updatedData } : item)),
        };
      });
      return { previousData };
    },
    onError: (error, updatedData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(userNewsKeys.key, context.previousData);
      }
      console.log(error, updatedData);
      toast({
        variant: "destructive",
        description: "修改失敗!",
      });
    },
    onSuccess: () => {
      console.log("Update News Table Success");
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      toast({
        description: "修改成功!",
      });
    },
  });
};
