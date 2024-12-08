import axiosClient from "@/api/axiosClient";
import { NewsQueryParams } from "./types";

export const getNews = ({ keyWord = "", page, limit = 10 }: NewsQueryParams) => {
  return axiosClient.get("/news", {
    params: { keyWord, page, limit },
  });
};
