import { deleteUserNews, getUserNewsList, postUserNews, updateUserNews } from "@/api/services/userNews";
import { UserNewsListArrayResponse } from "@/schema/UserNewsSchema";
import { safeParseResponse } from "@/utils/zodUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const userNewsKeys = {
  key: ["UserNews"] as const,
};
export const useGetUserNews = () => {
  return useQuery({
    queryKey: userNewsKeys.key,
    queryFn: async () => {
      const response = await getUserNewsList();
      console.log("getUserNewsList response:", response);
      const result = safeParseResponse(UserNewsListArrayResponse, response);
      console.log("getUserNewsList response:", result);
      return result;
    },
  });
};

export const usePostUserNewsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      console.log("created successfully");
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
    },
  });
};

export const useUpdateUserNewsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
      console.log("User successfully");
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
    },
  });
};

export const useDeleteUserNewsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUserNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userNewsKeys.key });
    },
    onError: (error: AxiosError<AxiosError>) => {
      console.error("Error creating News:", error.response?.data.message);
    },
  });
};
