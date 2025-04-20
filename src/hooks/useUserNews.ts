import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userNewsApi } from "@/api/services/userNews";
import {
  UserNewsListQueryResponseType,
  UserNewsDetailResponseType,
  UserNewsListResponseType,
} from "@/api/services/userNews/types";
import { initializeQueryClient, prefetchData } from "@/lib/reactQuery";
import { UserNewsDetailResponseSchema, UserNewsListArrayResponseSchema } from "@/schema/UserNewsSchema";
import { ClientType } from "@/types/clientTypes";
import { MutationResult } from "@/types/mutationTypes";
import { safeParseResponse } from "@/utils/zodUtils";

import { useToast } from "./use-toast";

const userNewsKeys = {
  key: ["UserNews"] as const,
};

export const useGetUserNews = (clientType: ClientType, projectId: string) => {
  return useQuery({
    queryKey: [userNewsKeys.key, projectId],
    queryFn: async () => {
      const response = await userNewsApi.getAll(clientType, projectId);
      console.log("getUserNewsList response:", response.data);
      return safeParseResponse(UserNewsListArrayResponseSchema, response.data);
    },
  });
};

export const useGetUserNewsId = (
  clientType: ClientType,
  projectId: string,
  id: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: [userNewsKeys.key, projectId],
    queryFn: async () => {
      const response = await userNewsApi.getById(clientType, projectId, id);
      const result = safeParseResponse(UserNewsDetailResponseSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(id),
  });
};

export const prefetchNewsListByClient = async (queryClient: QueryClient, projectId: string) => {
  const response = await userNewsApi.getAll("frontend", projectId);
  const parsedData = safeParseResponse(UserNewsListArrayResponseSchema, response.data);
  console.log("Parsed API Data:", parsedData); // 🔍 檢查解析後的資料
  return prefetchData(queryClient, [userNewsKeys.key, projectId], async () => parsedData);
};

export const initializeNewsListQueryClient = (project: string) => {
  return initializeQueryClient((queryClient) => prefetchNewsListByClient(queryClient, project));
};

export const prefetchNewsById = (queryClient: QueryClient, id: string, projectId: string) => {
  return prefetchData(queryClient, [userNewsKeys.key, projectId], async () => {
    const response = await userNewsApi.getById("frontend", projectId, id);
    return safeParseResponse(UserNewsDetailResponseSchema, response.data);
  });
};

export const initializeNewsByIdQueryClient = (projectId: string, id: string) => {
  return initializeQueryClient((queryClient) => prefetchNewsById(queryClient, projectId, id));
};

export const usePostUserNewsMutation = (projectId: string): MutationResult<UserNewsDetailResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: UserNewsDetailResponseType) => {
      return userNewsApi.create(data, projectId);
    },
    onSuccess: () => {
      toast({
        description: "新增成功!",
      });
      queryClient.invalidateQueries({ queryKey: [userNewsKeys.key, projectId] });
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

export const useUpdateUserNewsMutation = (projectId: string): MutationResult<UserNewsDetailResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: UserNewsDetailResponseType) => {
      return userNewsApi.update(data, projectId);
    },
    onSuccess: () => {
      toast({
        description: "修改成功!",
      });
      queryClient.invalidateQueries({ queryKey: [userNewsKeys.key, projectId] });
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

export const useDeleteUserNewsMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (id: string) => {
      return userNewsApi.delete(id, projectId);
    },
    onSuccess: () => {
      toast({
        description: "刪除成功!",
      });
      queryClient.invalidateQueries({ queryKey: [userNewsKeys.key, projectId] });
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

export const useUpdateNewsTableMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: UserNewsDetailResponseType) => {
      return userNewsApi.update(data, projectId);
    },
    onMutate: async (updatedData: UserNewsListResponseType) => {
      await queryClient.cancelQueries({ queryKey: [userNewsKeys.key, projectId] });
      const previousData = queryClient.getQueryData<UserNewsListResponseType[]>([userNewsKeys.key, projectId]);

      if (!previousData) {
        console.warn("No data found in cache for key:", [userNewsKeys.key, projectId]);
        return { previousData: null };
      }
      queryClient.setQueryData<UserNewsListQueryResponseType>([userNewsKeys.key, projectId], (old) => {
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
        queryClient.setQueryData([userNewsKeys.key, projectId], context.previousData);
      }
      console.log(error, updatedData);
      toast({
        variant: "destructive",
        description: "修改失敗!",
      });
    },
    onSuccess: () => {
      console.log("Update News Table Success");
      queryClient.invalidateQueries({ queryKey: [userNewsKeys.key, projectId] });
      toast({
        description: "修改成功!",
      });
    },
  });
};
