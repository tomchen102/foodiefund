import { AxiosInstance } from "axios";

export type ClientType = "frontend" | "dashboard";

export type ApiClient = AxiosInstance;
export type BaseApi = { getBaseUrl: (...args: string[]) => string };
