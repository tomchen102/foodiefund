import axiosClientFrontend from "@/api/axiosClientFrontendFrontend";
import { DataResponse, FormLoginSchemaType, FormRegisterSchemaType } from "./types";

export const signFlowApi = {
  getBaseUrl: "auth",
  signUp: async (user: FormRegisterSchemaType) => {
    const response = await axiosClientFrontend.post<DataResponse>(`${signFlowApi.getBaseUrl}/sign_up`, user);
    return response;
  },
  signIn: async (user: FormLoginSchemaType) => {
    const response = await axiosClientFrontend.post<DataResponse>(`${signFlowApi.getBaseUrl}/sign_in`, user);
    return response;
  },
};
