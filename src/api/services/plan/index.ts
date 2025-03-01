import axiosClientDashboard from "@/api/axiosClientDashboard";

export const planApi = {
  getBaseUrl: (planId = "default") => `/plan/${planId}`,
  getAll: async (planId: string) => {
    const response = await axiosClientDashboard.get(planApi.getBaseUrl(planId));
    return response.data;
  },
};
