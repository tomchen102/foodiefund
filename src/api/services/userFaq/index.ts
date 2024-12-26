import { UserFaqListResponseType } from "./types";
import axiosClientDashboard from "@/api/axiosClientDashboard";

export const userFaqApi = {
  getBaseUrl: (planId: string = "64c5ae5c6f2d3e001ccf9abc") => `/plan/${planId}/faqs`,
  getAll: async () => {
    const response = await axiosClientDashboard.get(userFaqApi.getBaseUrl());
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosClientDashboard.get(`${userFaqApi.getBaseUrl()}/${id}`);
    return response.data;
  },
  create: async (data: UserFaqListResponseType) => {
    console.log("createUrl", data);
    const response = await axiosClientDashboard.post(userFaqApi.getBaseUrl(), data);
    console.log("createUrl response:", response);
    return response.data;
  },
  update: async (data: UserFaqListResponseType) => {
    console.log("updateUrl", data);
    const response = await axiosClientDashboard.put(`${userFaqApi.getBaseUrl()}/${data.id}`, data);
    console.log("updateUrl response:", response);
    return response.data;
  },
  delete: async (id: string) => {
    return axiosClientDashboard.delete(`${userFaqApi.getBaseUrl()}/${id}`);
  },
};
