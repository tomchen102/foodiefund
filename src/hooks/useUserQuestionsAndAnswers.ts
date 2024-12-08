import { safeParseResponse } from "@/utils/zodUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "./use-toast";
import {
  deleteUserQuestionsAndAnswers,
  getUserQuestionsAndAnswersList,
  postUserQuestionsAndAnswers,
  updateUserQuestionsAndAnswers,
} from "@/api/services/userQuestionsAndAnswers";
import { UserQuestionsAndAnswersListArrayResponse } from "@/schema/userQuestionsAndAnswers";
import { ErrorResponse } from "@/types/errorResponse";

const UserQuestionsAndAnswersKeys = {
  key: ["UserQuestionsAndAnswers"] as const,
};
export const useGetUserQuestionsAndAnswers = () => {
  return useQuery({
    queryKey: UserQuestionsAndAnswersKeys.key,
    queryFn: async () => {
      const response = await getUserQuestionsAndAnswersList();
      console.log("getUserQuestionsAndAnswersList response:", response.data);
      const result = safeParseResponse(UserQuestionsAndAnswersListArrayResponse, response.data);
      return result;
    },
  });
};

export const usePostUserQuestionsAndAnswersMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: postUserQuestionsAndAnswers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UserQuestionsAndAnswersKeys.key });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error("Error creating News:", error.response?.data.message);
      toast({
        variant: "destructive",
        description: "新增失敗!",
      });
    },
  });
};

export const useUpdateUserQuestionsAndAnswersMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: updateUserQuestionsAndAnswers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UserQuestionsAndAnswersKeys.key });
      toast({
        description: "修改成功!",
      });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error("Error creating News:", error.response?.data.message);
      toast({
        variant: "destructive",
        description: "修改失敗!",
      });
    },
  });
};

export const useDeleteUserQuestionsAndAnswersMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: deleteUserQuestionsAndAnswers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: UserQuestionsAndAnswersKeys.key });
      toast({
        description: "刪除成功!",
      });
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error("Error creating News:", error.response?.data.message);
      toast({
        variant: "destructive",
        description: "刪除失敗!",
      });
    },
  });
};
