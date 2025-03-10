import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { rewardApi } from "@/api/services/reward";
import { RewardFormSchemaType, RewardQuerySchemaType } from "@/api/services/reward/types";
import { RewardFormSchema, RewardQueryResponseSchema } from "@/schema/RewardSchema";
import { ClientType } from "@/types/clientTypes";
import { safeParseResponse } from "@/utils/zodUtils";

import { useToast } from "./use-toast";

const rewardKeys = {
  key: ["reward"] as const,
};

export const useGetReward = (clientType: ClientType, projectId: string) => {
  return useQuery({
    queryKey: [rewardKeys.key, projectId],
    queryFn: async () => {
      const response = await rewardApi.getAll(clientType, projectId);
      console.log("useGetReward response", response);
      const result = safeParseResponse(RewardQueryResponseSchema, response.data);
      return result;
    },
    staleTime: 0,
  });
};

export const useGetRewardId = (
  clientType: ClientType,
  projectId: string,
  rewardId: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: [rewardKeys.key, projectId],
    queryFn: async () => {
      const response = await rewardApi.getById(clientType, projectId, rewardId);
      console.log("useGetReward response", response);
      const result = safeParseResponse(RewardFormSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(rewardId),
  });
};

export const usePostRewardMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: RewardFormSchemaType) => {
      return rewardApi.create(data, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [rewardKeys.key, projectId] });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Reward:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useUpdateRewardMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: RewardFormSchemaType) => {
      return rewardApi.update(data, projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [rewardKeys.key, projectId] });
      toast({
        description: "修改成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Reward:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useDeleteRewardMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (id: string) => {
      return rewardApi.delete(projectId, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [rewardKeys.key, projectId] });
      toast({
        description: "刪除成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating Reward:", error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useUpdateRewardTableMutation = (projectId: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: RewardFormSchemaType) => {
      return rewardApi.update(data, projectId);
    },
    onMutate: async (updatedData: RewardFormSchemaType) => {
      await queryClient.cancelQueries({ queryKey: [rewardKeys.key, projectId] });

      const previousData = queryClient.getQueryData<RewardQuerySchemaType[]>([rewardKeys.key, projectId]);
      if (!previousData) {
        return { previousData: null };
      }
      queryClient.setQueryData([rewardKeys.key, projectId], (old: RewardQuerySchemaType[] | undefined) => {
        if (!old) return old;
        return old.map((item) => {
          if ("id" in item && item.id === updatedData.id) {
            return { ...item, ...updatedData };
          }
          return item;
        });
      });

      return { previousData };
    },
    onError: (error, updatedData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([rewardKeys.key, projectId], context.previousData);
      }
      console.error("Update failed:", error);
      toast({
        variant: "destructive",
        description: "修改失敗!",
      });
    },
    onSuccess: () => {
      console.log("Update Reward Table Success");
      queryClient.invalidateQueries({ queryKey: [rewardKeys.key, projectId] });
      toast({
        description: "修改成功!",
      });
    },
  });
};
