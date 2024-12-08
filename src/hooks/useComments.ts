import { safeParseResponse } from "@/utils/zodUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "./use-toast";
import { getCommentsList, postComments, postReply } from "@/api/services/comments";
import { CommentDataArraySchema } from "@/schema/commentsSchema";
import { ErrorResponse } from "@/types/errorResponse";

const commentKeys = {
  key: ["comment"] as const,
};
export const useGetCommentsList = () => {
  return useQuery({
    queryKey: commentKeys.key,
    queryFn: async () => {
      const response = await getCommentsList();
      console.log("getUserNewsList response:", response.data);
      const result = safeParseResponse(CommentDataArraySchema, response.data);
      return result;
    },
  });
};

export const usePostCommentsMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: postComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentKeys.key });
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

export const usePostReplyMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: postReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentKeys.key });
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
