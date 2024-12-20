import { safeParseResponse } from "@/utils/zodUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { CommentDataArraySchema } from "@/schema/commentsSchema";
import { commentApi } from "@/api/services/comments";

const commentKeys = {
  key: ["comment"] as const,
};
export const useGetCommentsList = () => {
  return useQuery({
    queryKey: commentKeys.key,
    queryFn: async () => {
      const response = await commentApi.getAll();
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
    mutationFn: commentApi.postComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentKeys.key });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating News:", error.message);
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
    mutationFn: commentApi.postReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentKeys.key });
      toast({
        description: "新增成功!",
      });
    },
    onError: (error) => {
      console.error("Error creating News:", error.message);
      toast({
        variant: "destructive",
        description: "新增失敗!",
      });
    },
  });
};
