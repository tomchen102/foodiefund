"use client";
import { ErrorResponse } from "@/types/errorResponse";
import axios, { AxiosError, AxiosResponse } from "axios";
import cookies from "js-cookie";

const userCookie = cookies.get("token");

let token = "";
if (userCookie) {
  const user = JSON.parse(userCookie);
  token = user.token;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.data.data) {
      response.data = response.data.data;
    }
    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    console.log(error.response?.data);
    const status = error?.response?.status || null;
    console.log("status", status === 401);
    if (status == 401) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error.response?.data);
  }
);

export default axiosClient;
