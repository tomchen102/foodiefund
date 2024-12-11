import { UserNewsListResponseType } from "./types";
import axiosClient from "@/api/axiosClient";

export const getUserNewsList = async () => {
  const response = await axiosClient.get(`/plan/64c5ae5c6f2d3e001ccf9abc/news`);
  console.log("response", response);
  return response.data;
};

export const postUserNews = async (data: UserNewsListResponseType) => {
  const formData = new FormData();
  if (data.image) {
    formData.append("file", data.image);
  }
  const response = await axiosClient.post(`/plan/64c5ae5c6f2d3e001ccf9abc/news`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateUserNews = async (data: UserNewsListResponseType) => {
  const formData = new FormData();
  if (data.image) {
    formData.append("file", data.image);
  }
  const response = await axiosClient.put(`/plan/64c5ae5c6f2d3e001ccf9abc/news/${data.id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteUserNews = async (id: string) => {
  return axiosClient.delete(`/plan/64c5ae5c6f2d3e001ccf9abc/news/${id}`);
};
