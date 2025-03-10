"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

import { PlanFormSchemaType } from "@/api/services/plan/types";
import FormRenderer from "@/components/FormRenderer";
import SectionPadding from "@/components/SectionPadding";
import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { usePostPlanMutation } from "@/hooks/usePlan";
import { useSetLoading } from "@/hooks/useSetLoading";
import { PlanFormSchema } from "@/schema/planSchema";

import { planFormFields } from "./planFormFields";

const CreatePlan = () => {
  const router = useRouter();
  const value = "A";
  const form = useForm<PlanFormSchemaType>({
    resolver: zodResolver(PlanFormSchema),
    defaultValues: {
      activeType: value,
      title: "",
      location: "",
      restaurantType: "",
      image: "",
      address: "",
      proposer: "",
      email: "",
      phone: "",
      info: "",
      activeTime: "",
      endAt: "",
      targetAmount: 0,
    },
  });

  const { mutateAsync: registerMutation, isPending, error } = usePostPlanMutation();

  useSetLoading(isPending);

  const onSubmit = async (data: PlanFormSchemaType) => {
    console.log(data);
    const res = await registerMutation(data);
    router.push(`/dashboard/${res.id}`);
  };
  return (
    <SectionPadding container>
      <div className="rounded border border-gray-200 bg-white-pure p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <div className="flex">
              <h2 className="mx-auto text-3xl font-bold">提案申請</h2>
            </div>
            <FormRenderer<PlanFormSchemaType> methods={form} FormFields={planFormFields} />
            {error && <FormMessage>{error.message}</FormMessage>}
            <Button type="submit" className="w-full">
              送出提案
            </Button>
          </form>
        </Form>
      </div>
    </SectionPadding>
  );
};

export default CreatePlan;
