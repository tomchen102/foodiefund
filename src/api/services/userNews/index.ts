import axiosClientDashboard from "@/api/axiosClientDashboard";
import { selectClient } from "@/api/extensions/selectClient";
import { ClientType } from "@/types/clientTypes";

import { UserNewsListResponseType, UserNewsDetailResponseType } from "./types";

export const userNewsApi = {
  getBaseUrl: (projectId: string) => `/plan/${projectId}/news`,
  MULTIPART_HEADERS: {
    "Content-Type": "multipart/form-data",
  },
  createFormData: (data: UserNewsListResponseType) => {
    const formData = new FormData();
    if (data.image) {
      formData.append("file", data.image);
    }
    return formData;
  },
  getAll: async (clientType: ClientType, projectId: string) => {
    const client = selectClient(clientType);
    const response = await client.get(userNewsApi.getBaseUrl(projectId));
    return response.data;
  },
  getById: async (clientType: ClientType, projectId: string, id: string) => {
    const client = selectClient(clientType);
    const response = await client.get(`${userNewsApi.getBaseUrl(projectId)}/${id}`);
    return response.data;
  },
  create: async (data: UserNewsDetailResponseType, projectId: string) => {
    userNewsApi.createFormData(data);
    const response = await axiosClientDashboard.post(userNewsApi.getBaseUrl(projectId), data, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  update: async (data: UserNewsDetailResponseType, projectId: string) => {
    userNewsApi.createFormData(data);
    const response = await axiosClientDashboard.put(`${userNewsApi.getBaseUrl(projectId)}/${data.id}`, data, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  delete: async (id: string, projectId: string) => {
    return axiosClientDashboard.delete(`${userNewsApi.getBaseUrl(projectId)}/${id}`);
  },
};
