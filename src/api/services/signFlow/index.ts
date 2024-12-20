import axiosClient from "@/api/axiosClient";
import { FormLoginSchemaType, FormRegisterSchemaType } from "@/schema/UserAuth";
import { DataResponse } from "./types";

export const signFlowApi = {
  getBaseUrl: "auth",
  signUp: async (user: FormRegisterSchemaType) => {
    const response = await axiosClient.post<DataResponse>(`${signFlowApi.getBaseUrl}/sign_up`, user);
    return response;
  },
  signIn: async (user: FormLoginSchemaType) => {
    const response = await axiosClient.post<DataResponse>(`${signFlowApi.getBaseUrl}/sign_in`, user);
    return response;
  },
};
