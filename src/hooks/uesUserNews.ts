import { UserNewsListQueryResponseType, UserNewsListResponseType } from "@/api/services/userNews/types";
import { UserNewsListArrayResponseSchema, UserNewsListResponseSchema } from "@/schema/UserNewsSchema";
import { safeParseResponse } from "@/utils/zodUtils";
import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { userNewsApi } from "@/api/services/userNews";
import { MutationResult } from "@/types/mutationTypes";

const userNewsKeys = {
  key: ["UserNews"] as const,
};
export const useGetUserNews = () => {
  return useQuery({
    queryKey: userNewsKeys.key,
    queryFn: async () => {
      const response = await userNewsApi.getAll();
      console.log("getUserNewsList response:", response.data);
      const result = safeParseResponse(UserNewsListArrayResponseSchema, response.data);
      return result;
    },
  });
};

export const useGetUserNewsId = (id: string, options?: { enabled?: boolean }, isFrontend: boolean = false) => {
  return useQuery({
    queryKey: [userNewsKeys.key, id, isFrontend],
    queryFn: async () => {
      const response = await userNewsApi.getById(id, isFrontend);
      const result = safeParseResponse(UserNewsListResponseSchema, response.data);
      return result;
    },
    enabled: options?.enabled !== false && Boolean(id),
  });
};

export const prefetchUserNewsId = async (queryClient: QueryClient, id: string, isFrontend: boolean = true) => {
  await queryClient.prefetchQuery({
    queryKey: [userNewsKeys.key, id, isFrontend],
    queryFn: async () => {
      const response = await userNewsApi.getById(id, isFrontend);
      return safeParseResponse(UserNewsListResponseSchema, response.data);
    },
  });
};

export const initializeQueryNewsClient = async (id: string) => {
  const queryClient = new QueryClient();
  await prefetchUserNewsId(queryClient, id);
  const dehydratedState = dehydrate(queryClient);
  return { queryClient, dehydratedState };
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
