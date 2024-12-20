import { UserNewsListResponseType } from "./types";
import axiosClient from "@/api/axiosClient";

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
    const response = await axiosClient.get(userNewsApi.getBaseUrl());
    return response.data;
  },
  create: async (data: UserNewsListResponseType) => {
    const formData = userNewsApi.createFormData(data);
    const response = await axiosClient.post(userNewsApi.getBaseUrl(), formData, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  update: async (data: UserNewsListResponseType) => {
    const formData = userNewsApi.createFormData(data);
    const response = await axiosClient.put(`${userNewsApi.getBaseUrl()}/${data.id}`, formData, {
      headers: userNewsApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
  delete: async (id: string) => {
    return axiosClient.delete(`${userNewsApi.getBaseUrl()}/${id}`);
  },
};
