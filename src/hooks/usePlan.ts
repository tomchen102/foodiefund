import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { planApi } from "@/api/services/plan";
import { PlanFormSchemaType } from "@/api/services/plan/types";
import { planApiSchema, PlanFormSchema } from "@/schema/planSchema";
import { safeParseResponse } from "@/utils/zodUtils";

const planKeys = {
  key: ["plan"] as const,
  single: (id: string) => ["plan", id] as const,
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

export const useGetPlanById = (id: string | null, options = {}) => {
  return useQuery({
    queryKey: id ? planKeys.single(id) : [],
    queryFn: async () => {
      if (!id) return null;
      const response = await planApi.getById(id);
      const result = safeParseResponse(PlanFormSchema, response.plan);
      return result;
    },
    enabled: !!id,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    ...options,
  });
};

export const usePostPlanMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: planApi.create,
    onSuccess: (response) => {
      router.push(`/dashboard/${response.id}`);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export const useUpdatePlanMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: PlanFormSchemaType }) => planApi.update(id, data),
    onSuccess: (response) => {
      router.push(`/dashboard/${response.id}`);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
