import { deleteUserNews, getUserNewsList, postUserNews, updateUserNews } from "@/api/services/userNews";
import { UserNewsListQueryResponseType, UserNewsListResponseType } from "@/api/services/userNews/types";
import { UserNewsListArrayResponse } from "@/schema/UserNewsSchema";
import { safeParseResponse } from "@/utils/zodUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "./use-toast";

const userNewsKeys = {
  key: ["UserNews"] as const,
};
export const useGetUserNews = (options = {}) => {
  return useQuery({
    queryKey: userNewsKeys.key,
    queryFn: async () => {
      const response = await getUserNewsList();
      console.log("getUserNewsList response:", response.data);
      const result = safeParseResponse(UserNewsListArrayResponse, response.data);
      return result;
    },
    ...options,
  });
};

export const usePostUserNewsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: postUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
      toast({
        variant: "destructive",
        description: "新增失敗!",
      });
    },
  });
};

export const useUpdateUserNewsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: updateUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      toast({
        description: "修改成功!",
      });
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
      toast({
        variant: "destructive",
        description: "修改失敗!",
      });
    },
  });
};

export const useDeleteUserNewsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: deleteUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      toast({
        description: "刪除成功!",
      });
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
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
    mutationFn: updateUserNews,
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
