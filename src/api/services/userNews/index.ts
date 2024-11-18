import axios from "axios";
import { UserNewsListResponseType } from "./types";

const baseUrl =
  process.env.NODE_ENV === "development" ? "https://673ae3a1339a4ce4451990f4.mockapi.io/mock/userNews" : "";

export const getUserNewsList = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

export const postUserNews = async (data: UserNewsListResponseType) => {
  const response = await axios.post(`${baseUrl}`, data);
  return response.data;
};

export const updateUserNews = async (data: UserNewsListResponseType) => {
  const response = await axios.put(`${baseUrl}/${data.id}`, data);
  return response.data;
};

export const deleteUserNews = async (id: string) => {
  return axios.delete(`${baseUrl}/${id}`);
};
