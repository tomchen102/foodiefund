import axiosClientFrontend from "@/api/axiosClientDashboard";
import { UserNewsListResponseType } from "./types";

export const userNewsApi = {
  getBaseUrl: (planId: string = "64c5ae5c6f2d3e001ccf9abc") => `/plan/${planId}/news`,
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
  getAll: async () => {
    const response = await axiosClientFrontend.get(userNewsApi.getBaseUrl());
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosClientFrontend.get(`${userNewsApi.getBaseUrl()}/${id}`);
    return response.data;
  },
  create: async (data: UserNewsListResponseType) => {
    userNewsApi.createFormData(data);
    const response = await axiosClientFrontend.post(userNewsApi.getBaseUrl(), data, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  update: async (data: UserNewsListResponseType) => {
    userNewsApi.createFormData(data);
    const response = await axiosClientFrontend.put(`${userNewsApi.getBaseUrl()}/${data.id}`, data, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  delete: async (id: string) => {
    return axiosClientFrontend.delete(`${userNewsApi.getBaseUrl()}/${id}`);
  },
};
