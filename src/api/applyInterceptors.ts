import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { ErrorResponse } from "@/types/errorResponse";

export const applyInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data && response.data.data) {
        response.data = response.data.data;
      }
      return response;
    },
    (error: AxiosError<ErrorResponse>) => {
      const status = error?.response?.status || null;
      if (status === 401) {
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
      return Promise.reject(error.response?.data);
    }
  );
  return instance;
};
