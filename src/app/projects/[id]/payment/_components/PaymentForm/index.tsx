"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getLocation } from "@/api/services/location";
import { AreaState, City, CityState } from "@/api/services/location/types";
import { PaymentFormType } from "@/api/services/payment/types";
import FormRenderer from "@/components/FormRenderer";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormPaymentSchema } from "@/schema/PaymentSchema";
import { useAuth } from "@/utils/providers/AuthProvider";

import { PaymentFormFields } from "./PaymentFormFields";

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
      vehicle: "/UD46KA5",
      remark: "",
      agree: false,
      color: "花色",
    },
  });

  const cityValue = form.watch("city");
  const areaValue = form.watch("area");

  const onSubmit = async (data: PaymentFormType) => {
    console.log(data);
    const productData = data;
    try {
      const response = await fetch("https://foodiefund.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "訂單建立失敗");
      }
      // 藍新金流參數
      const { MerchantID, TradeInfo, TradeSha, Version } = data;

      // 建立隱藏表單提交到藍新金流
      const newebpayUrl = "https://ccore.newebpay.com/MPG/mpg_gateway";
      const form = document.createElement("form");
      form.method = "POST";
      form.action = newebpayUrl;

      const fields = { MerchantID, TradeInfo, TradeSha, Version };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value as string;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("建立訂單錯誤:", error);
    }
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
