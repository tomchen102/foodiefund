import axiosClientDashboard from "@/api/axiosClientDashboard";
import axiosClientFrontend from "@/api/axiosClientFrontend";
import { ClientType } from "@/types/clientTypes";

import { UserFaqListResponseType } from "./types";

export const userFaqApi = {
  getBaseUrl: (projectId: string) => `/plan/${projectId}/faqs`,
  getAll: async (clientType: ClientType, projectId: string) => {
    const client = clientType ? axiosClientFrontend : axiosClientDashboard;
    const response = await client.get(userFaqApi.getBaseUrl(projectId));
    return response.data;
  },
  getById: async (projectId: string, id: string) => {
    const response = await axiosClientDashboard.get(`${userFaqApi.getBaseUrl(projectId)}/${id}`);
    return response.data;
  },
  create: async (data: UserFaqListResponseType, projectId: string) => {
    console.log("createUrl", data);
    const response = await axiosClientDashboard.post(userFaqApi.getBaseUrl(projectId), data);
    console.log("createUrl response:", response);
    return response.data;
  },
  update: async (data: UserFaqListResponseType, projectId: string) => {
    console.log("updateUrl", data);
    const response = await axiosClientDashboard.put(`${userFaqApi.getBaseUrl(projectId)}/${data.id}`, data);
    console.log("updateUrl response:", response);
    return response.data;
  },
  delete: async (id: string, projectId: string) => {
    return axiosClientDashboard.delete(`${userFaqApi.getBaseUrl(projectId)}/${id}`);
  },
};
