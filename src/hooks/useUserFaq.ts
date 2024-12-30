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
export const useGetUserFaq = (clientType: ClientType) => {
  return useQuery({
    queryKey: userFaqKeys.key,
    queryFn: async () => {
      const response = await userFaqApi.getAll(clientType);
      console.log("getUserFaqList response:", response.data);
      const result = safeParseResponse(UserFaqListArrayResponseSchema, response.data);
      return result;
    },
  });
};

export const prefetchUserFaqClient = (queryClient: QueryClient) => {
  return prefetchData(queryClient, [userFaqKeys.key], async () => {
    const response = await userFaqApi.getAll("frontend");
    return safeParseResponse(UserFaqListArrayResponseSchema, response.data);
  });
};

export const initializeUserFaqListQueryClient = () => {
  return initializeQueryClient((queryClient) => prefetchUserFaqClient(queryClient));
};

export const useGetUserFaqId = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: userFaqKeys.key,
    queryFn: async () => {
      const response = await userFaqApi.getById(id);
      console.log("getUserFaqList response:", response.data);
      const result = safeParseResponse(userFaqResponseTypeSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(id),
  });
};

export const usePostUserFaqMutation = (): MutationResult<UserFaqListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userFaqApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userFaqKeys.key });
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

export const useUpdateUserFaqMutation = (): MutationResult<UserFaqListResponseType> => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userFaqApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userFaqKeys.key });
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

export const useDeleteUserFaqMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: userFaqApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userFaqKeys.key });
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
