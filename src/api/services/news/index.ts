import axiosClient from "@/api/axiosClient";
import { NewsQueryParams, NewsResponseType } from "./types";

export const getNews = ({ keyWord = "", page, limit = 10 }: NewsQueryParams) => {
  return axiosClient.get<NewsResponseType>("/news", {
    params: { keyWord, page, limit },
  });
};
