import axiosClientFrontend from "@/api/axiosClientFrontend";

import { NewsQueryParamsType } from "./types";

export const NewsApi = {
  getBaseUrl: "/news",
  getAll: ({ keyWord = "", page, limit = 10 }: NewsQueryParamsType) => {
    return axiosClientFrontend.get(NewsApi.getBaseUrl, {
      params: { keyWord, page, limit },
    });
  },
};
