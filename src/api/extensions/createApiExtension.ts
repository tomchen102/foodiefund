import axiosClientDashboard from "@/api/axiosClientDashboard";
import axiosClientFrontend from "@/api/axiosClientFrontend";
import { ApiClient, BaseApi, ClientType } from "@/types/clientTypes";

const createClientSelector = (frontendClient: ApiClient, dashboardClient: ApiClient) => {
  return (clientType: ClientType): ApiClient => (clientType ? frontendClient : dashboardClient);
};

const createApiExtensionFactory = <T extends BaseApi>(frontendClient: ApiClient, dashboardClient: ApiClient) => {
  const selectClient = createClientSelector(frontendClient, dashboardClient);
  return (baseApi: T) => ({
    ...baseApi,
    getAll: async (clientType: ClientType) => {
      const client = selectClient(clientType);
      const response = await client.get(baseApi.getBaseUrl());
      return response.data;
    },
    getById: async (id: string, clientType: ClientType) => {
      const client = selectClient(clientType);
      const response = await client.get(`${baseApi.getBaseUrl()}/${id}`);
      return response.data;
    },
  });
};

export const apiExtensionFactory = createApiExtensionFactory(axiosClientFrontend, axiosClientDashboard);
