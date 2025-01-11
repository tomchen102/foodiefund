import axiosClientDashboard from "@/api/axiosClientDashboard";
import axiosClientFrontend from "@/api/axiosClientFrontend";
import { ClientType } from "@/types/clientTypes";

export const selectClient = (clientType: ClientType) => {
  return clientType === "frontend" ? axiosClientFrontend : axiosClientDashboard;
};
