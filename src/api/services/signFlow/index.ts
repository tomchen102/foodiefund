import axiosClient from "@/api/axiosClient";
import { FormLoginSchemaType, FormRegisterSchemaType } from "@/schema/UserAuth";
import { AxiosResponse } from "axios";
import { DataResponse } from "./types";

export const signUp = async (user: FormRegisterSchemaType): Promise<AxiosResponse<DataResponse>> => {
  const response = await axiosClient.post<DataResponse>("/auth/sign_up", user);
  return response;
};

export const signIn = async (user: FormLoginSchemaType): Promise<AxiosResponse<DataResponse>> => {
  const response = await axiosClient.post<DataResponse>("/auth/sign_in", user);
  return response;
};
