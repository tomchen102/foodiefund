import axiosClient from "@/api/axiosClient";
import { DataResponse } from "@/hooks/useUserAuth";
import { FormLoginSchemaType } from "@/schema/UserAuth";
import { AxiosResponse } from "axios";

export const signUp = (user: FormLoginSchemaType): Promise<AxiosResponse<FormLoginSchemaType>> => {
  return axiosClient.post("/auth/sign_up", user);
};

export const signIn = async (user: FormLoginSchemaType): Promise<AxiosResponse<DataResponse>> => {
  const response = await axiosClient.post<DataResponse>("/auth/sign_in", user);
  return response;
};
