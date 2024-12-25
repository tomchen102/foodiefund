import { useMutation } from "@tanstack/react-query";
import { signFlowApi } from "@/api/services/signFlow";

export const useLogInMutation = () => {
  return useMutation({
    mutationFn: signFlowApi.signIn,
    onError: (error) => {
      console.error("Error logging in user:", error.message);
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: signFlowApi.signUp,
    onError: (error) => {
      console.error("Error logging in user:", error.message);
    },
  });
};
