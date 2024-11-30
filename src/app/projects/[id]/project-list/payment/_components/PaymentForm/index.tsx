"use client";
import { PaymentFormType } from "@/api/services/payment/types";
import FormRenderer from "@/components/FormRenderer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormPaymentSchema } from "@/schema/Payment";
import { useForm } from "react-hook-form";
import { PaymentFormFields } from "./PaymentFormFields";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/providers/AuthProvider";
import { useEffect, useState } from "react";
import { getLocation } from "@/api/services/location";
import { AreaState, City, CityState } from "@/api/services/location/types";
import { zodResolver } from "@hookform/resolvers/zod";

const PaymentForm = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [cities, setCities] = useState<CityState[]>([]);
  const [areas, setAreas] = useState<AreaState[]>([]);

  const form = useForm<PaymentFormType>({
    resolver: zodResolver(FormPaymentSchema),
    defaultValues: {
      paymentMethods: "creditCard",
      overweight: "",
      country: "taiwan",
      city: "臺北市",
      area: "中正區",
      address: "",
      zipCode: "100",
      recipient: "",
      phone: "",
      billType: "personal",
      vehicle: 0,
      remark: "",
      agree: false,
      color: "花色",
    },
  });

  const cityValue = form.watch("city");
  const areaValue = form.watch("area");

  const onSubmit = async (data: PaymentFormType) => {
    console.log(data);
    router.push("/payment-successful");
  };

  useEffect(() => {
    if (user?.name) {
      form.setValue("recipient", user.name);
    }
  }, [user, form]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getLocation();
      const cityOptions = data.map((city: City) => ({
        label: city.CityName,
        value: city.CityName,
        AreaList: city.AreaList,
      }));
      setCities(cityOptions);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      const selectedCity = cities.find((city) => city.value === cityValue);
      if (selectedCity) {
        const areaOptions = selectedCity.AreaList.map((area) => ({
          label: area.AreaName,
          value: area.AreaName,
          ZipCode: area.ZipCode,
        }));
        setAreas(areaOptions);
        form.setValue("area", areaOptions[0].value);
        form.setValue("zipCode", areaOptions[0].ZipCode);
      }
    }
  }, [cityValue, cities, form]);

  useEffect(() => {
    if (areas.length > 0 && !areaValue) {
      form.setValue("area", areas[0].value);
      form.setValue("zipCode", areas[0].ZipCode);
    }
  }, [areas, areaValue, form]);

  useEffect(() => {
    const selectedArea = areas.find((area) => area.value === areaValue);
    if (selectedArea) {
      form.setValue("zipCode", selectedArea.ZipCode);
    }
  }, [areaValue, areas, form]);

  const updatedPaymentFormFields = PaymentFormFields.map((field) => {
    if (field.name === "city") {
      return { ...field, options: cities };
    }
    if (field.name === "area") {
      return { ...field, options: areas };
    }
    return field;
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormRenderer<PaymentFormType> methods={form} FormFields={updatedPaymentFormFields} />
        <Button type="submit">立即付款</Button>
      </form>
    </Form>
  );
};

export default PaymentForm;
