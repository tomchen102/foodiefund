import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userFaqApi } from "@/api/services/userFaq";
import { UserFaqListResponseType } from "@/api/services/userFaq/types";
import { initializeQueryClient, prefetchData } from "@/lib/reactQuery";
import { UserFaqListArrayResponseSchema, userFaqResponseTypeSchema } from "@/schema/UserFaqSchema";
import { ClientType } from "@/types/clientTypes";
import { MutationResult } from "@/types/mutationTypes";
import { safeParseResponse } from "@/utils/zodUtils";

import { useToast } from "./use-toast";

const userFaqKeys = {
  key: ["UserFaq"] as const,
};
export const useGetUserFaq = (clientType: ClientType, projectId: string) => {
  return useQuery({
    queryKey: [userFaqKeys.key, projectId],
    queryFn: async () => {
      const response = await userFaqApi.getAll(clientType, projectId);
      console.log("getUserFaqList response:", response.data);
      const result = safeParseResponse(UserFaqListArrayResponseSchema, response.data);
      return result;
    },
    staleTime: 0,
  });
};

export const prefetchUserFaqClient = (queryClient: QueryClient, projectId: string) => {
  return prefetchData(queryClient, [userFaqKeys.key, projectId], async () => {
    const response = await userFaqApi.getAll("frontend", projectId);
    return safeParseResponse(UserFaqListArrayResponseSchema, response.data);
  });
};

export const initializeUserFaqListQueryClient = (projectId: string) => {
  return initializeQueryClient((queryClient) => prefetchUserFaqClient(queryClient, projectId));
};

export const useGetUserFaqId = (projectId: string, id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: [userFaqKeys.key, projectId],
    queryFn: async () => {
      const response = await userFaqApi.getById(projectId, id);
      console.log("getUserFaqList response:", response.data);
      const result = safeParseResponse(userFaqResponseTypeSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(id),
  });
};

export const usePostUserFaqMutation = (projectId: string): MutationResult<UserFaqListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: UserFaqListResponseType) => {
      return userFaqApi.create(data, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userFaqKeys.key, projectId] });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Faq:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useUpdateUserFaqMutation = (projectId: string): MutationResult<UserFaqListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: UserFaqListResponseType) => {
      return userFaqApi.update(data, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userFaqKeys.key, projectId] });
      toast({
        description: "修改成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Faq:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useDeleteUserFaqMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (id: string) => {
      return userFaqApi.delete(id, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [userFaqKeys.key, projectId] });
      toast({
        description: "刪除成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Faq:", error.message);
      toast({
        variant: "destructive",
        description: "刪除失敗!",
      });
    },
  });
};
