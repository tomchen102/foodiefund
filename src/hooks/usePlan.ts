import { useMutation, useQuery } from "@tanstack/react-query";

import { planApi } from "@/api/services/plan";
import { planApiSchema } from "@/schema/planSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const planKeys = {
  key: ["plan"] as const,
};

export const useGetDefaultPlan = (options = {}) => {
  return useQuery({
    queryKey: [planKeys.key, "default"],
    queryFn: async () => {
      const response = await planApi.getAll("default");
      console.log("default plan response", response);
      const result = safeParseResponse(planApiSchema, response);
      return result;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};

export const useGetPlan = (id: string | null, options = {}) => {
  return useQuery({
    queryKey: [planKeys.key, id],
    queryFn: async () => {
      if (!id) return null;
      const response = await planApi.getAll(id);
      console.log(`plan ${id} response`, response);
      const result = safeParseResponse(planApiSchema, response);
      return result;
    },
    enabled: !!id,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};

export const usePostPlanMutation = () => {
  return useMutation({
    mutationFn: planApi.create,
    onSuccess: (response) => {
      console.log("新增成功", response);
      return response;
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
