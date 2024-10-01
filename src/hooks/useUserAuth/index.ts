import { signIn, signUp } from "@/api/services/signFlow";
import { DataResponse } from "@/api/services/signFlow/types";
import { FormLoginSchemaType, FormRegisterSchemaType } from "@/schema/UserAuth";
import { ErrorResponse } from "@/types/errorResponse";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export const useLogInMutation = (): UseMutationResult<
  AxiosResponse<DataResponse>,
  AxiosError<ErrorResponse>,
  FormLoginSchemaType
> => {
  return useMutation<AxiosResponse<DataResponse>, AxiosError<ErrorResponse>, FormLoginSchemaType>({
    mutationFn: async (user: FormLoginSchemaType) => await signIn(user),
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error("Error logging in user:", error.response?.data.message);
    },
  });
};

export const useRegisterMutation = (): UseMutationResult<
  AxiosResponse<DataResponse>,
  AxiosError<ErrorResponse>,
  FormRegisterSchemaType
> => {
  return useMutation<AxiosResponse<DataResponse>, AxiosError<ErrorResponse>, FormRegisterSchemaType>({
    mutationFn: async (user: FormRegisterSchemaType) => await signUp(user),
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error("Error logging in user:", error.response?.data.message);
    },
  });
};
