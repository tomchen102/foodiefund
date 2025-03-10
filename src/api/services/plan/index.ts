import axiosClientDashboard from "@/api/axiosClientDashboard";
import axiosClientFrontend from "@/api/axiosClientFrontend";

import { PlanFormSchemaType } from "./types";

export const planApi = {
  getBaseUrl: (planId = "default") => `/plan/${planId}`,
  MULTIPART_HEADERS: {
    "Content-Type": "multipart/form-data",
  },
  getAll: async (planId: string) => {
    const response = await axiosClientDashboard.get(planApi.getBaseUrl(planId));
    return response.data;
  },
  create: async (data: PlanFormSchemaType) => {
    const response = await axiosClientFrontend.post(`/plan`, data, {
      headers: planApi.MULTIPART_HEADERS,
    });
    return response.data;
  },
};
