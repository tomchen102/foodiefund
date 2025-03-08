import axiosClientDashboard from "@/api/axiosClientDashboard";
import { selectClient } from "@/api/extensions/selectClient";
import { ClientType } from "@/types/clientTypes";

import { RewardFormSchemaType } from "./types";

export const rewardApi = {
  getBaseUrl: (projectId: string) => `/plan/${projectId}/rewards`,
  MULTIPART_HEADERS: {
    "Content-Type": "multipart/form-data",
  },
  createFormData: (data: RewardFormSchemaType) => {
    const formData = new FormData();
    if (data.image) {
      formData.append("file", data.image);
    }
    return formData;
  },
  getAll: async (clientType: ClientType, projectId: string) => {
    const client = selectClient(clientType);
    const response = await client.get(rewardApi.getBaseUrl(projectId));
    return response.data;
  },
  getById: async (clientType: ClientType, projectId: string, id: string) => {
    const client = selectClient(clientType);
    const response = await client.get(`${rewardApi.getBaseUrl(projectId)}/${id}`);
    return response.data;
  },
  create: async (data: RewardFormSchemaType, projectId: string) => {
    rewardApi.createFormData(data);
    const response = await axiosClientDashboard.post(rewardApi.getBaseUrl(projectId), data, {
      headers: rewardApi.MULTIPART_HEADERS,
    });
    console.log("create response:", response);
    return response.data;
  },
  update: async (data: RewardFormSchemaType, projectId: string) => {
    rewardApi.createFormData(data);
    const response = await axiosClientDashboard.put(`${rewardApi.getBaseUrl(projectId)}/${data.id}`, data, {
      headers: rewardApi.MULTIPART_HEADERS,
    });
    console.log("updateUrl response:", response);
    return response.data;
  },
  delete: async (projectId: string, id: string) => {
    return axiosClientDashboard.delete(`${rewardApi.getBaseUrl(projectId)}/${id}`);
  },
};
