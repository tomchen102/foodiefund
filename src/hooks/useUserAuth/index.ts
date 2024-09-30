import { signIn } from "@/api/services/LoginService";
import { FormLoginSchemaType } from "@/schema/UserAuth";
import { ErrorResponse } from "@/types/errorResponse";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export interface DataResponse {
  data: {
    name: string;
    user: {
      name: string;
      photo: string;
      token: string;
    };
  };
  status: string;
}

export const useLogInMutation = () => {
  return useMutation<AxiosResponse<DataResponse>, AxiosError<ErrorResponse>, FormLoginSchemaType>({
    mutationFn: async (user: FormLoginSchemaType) => await signIn(user),
    onError: (error: AxiosError<ErrorResponse>) => {
      console.log(123);
      console.error("Error logging in user:", error.response?.data.message);
    },
  });
};
