"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getLocation } from "@/api/services/location";
import { City, CityState } from "@/api/services/location/types";
import { PlanFormSchemaType } from "@/api/services/plan/types";
import FormRenderer from "@/components/FormRenderer";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { useGetPlanById, usePostPlanMutation, useUpdatePlanMutation } from "@/hooks/usePlan";
import { useSetLoading } from "@/hooks/useSetLoading";
import { PlanFormSchema } from "@/schema/planSchema";

import DemoButton from "./DemoButton";
import { planFormFields } from "./planFormFields";

const getToday = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const PlanForm = () => {
  const [cities, setCities] = useState<CityState[]>([]);
  const [activeType, setActiveType] = useState<"A" | "B">("A");

  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.plan_id as string;
  const isEditMode = Boolean(id);

  const { data: planData } = useGetPlanById(isEditMode ? id : null);

  useEffect(() => {
    const paramValue = searchParams.get("activeType");
    if (paramValue === "A" || paramValue === "B") {
      setActiveType(paramValue);
    }
  }, [searchParams]);

  const form = useForm<PlanFormSchemaType>({
    resolver: zodResolver(PlanFormSchema),
    defaultValues: {
      activeType,
      title: "",
      location: "臺北市",
      restaurantType: "",
      image: null,
      address: "",
      proposer: "",
      email: "",
      phone: "",
      info: "",
      startedAt: getToday(),
      endAt: "",
      targetAmount: 0,
    },
  });

  const { mutateAsync: createPlanMutation, isPending: isCreating, error: createError } = usePostPlanMutation();
  const { mutateAsync: updatePlanMutation, isPending: isUpdating, error: updateError } = useUpdatePlanMutation();
  const isPending = isCreating || isUpdating;
  useSetLoading(isPending);

  useEffect(() => {
    const subscription = form.watch((_, { name }) => {
      if (name === "endAt") {
        form.trigger("endAt");
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    form.reset((prevValues) => ({
      ...prevValues,
      activeType,
    }));
  }, [activeType, form]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getLocation();
      const cityOptions = data.map((city: City) => ({
        label: city.CityName,
        value: city.CityName,
      }));
      setCities(cityOptions);
    };
    fetchCities();
  }, []);

  const updatedFormFields = planFormFields.map((field) => {
    if (field.name === "location") {
      return { ...field, options: cities };
    }
    return field;
  });

  useEffect(() => {
    if (planData && Object.keys(planData).length > 0) {
      form.reset(planData);
    }
  }, [planData, form]);

  const onSubmit = async (data: PlanFormSchemaType) => {
    if (isEditMode && id) {
      await updatePlanMutation({ id, data });
      console.log(data);
    } else {
      await createPlanMutation(data);
    }
  };
  return (
    <div className="rounded border border-gray-200 bg-white-pure p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="flex">
            <h2 className="mx-auto text-3xl font-bold">提案申請</h2>
          </div>
          <FormRenderer<PlanFormSchemaType> methods={form} FormFields={updatedFormFields} />
          {createError && <FormMessage>{createError.message}</FormMessage>}
          {updateError && <FormMessage>{updateError.message}</FormMessage>}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "提交中..." : isEditMode ? "更新提案" : "送出提案"}
          </Button>
          {isEditMode || <DemoButton />}
        </form>
      </Form>
    </div>
  );
};

export default PlanForm;
