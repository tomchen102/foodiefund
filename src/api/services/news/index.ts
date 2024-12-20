import axiosClient from "@/api/axiosClient";
import { NewsQueryParams } from "./types";

export const NewsApi = {
  getBaseUrl: "/news",
  getAll: ({ keyWord = "", page, limit = 10 }: NewsQueryParams) => {
    return axiosClient.get(NewsApi.getBaseUrl, {
      params: { keyWord, page, limit },
    });
  },
};
