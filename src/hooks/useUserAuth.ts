import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { signFlowApi } from "@/api/services/signFlow";

export const useLogInMutation = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: signFlowApi.signIn,
    onError: (error) => {
      console.error("Error logging in user:", error.message);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useRegisterMutation = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: signFlowApi.signUp,
    onError: (error) => {
      console.error("Error logging in user:", error.message);
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};
