"use client";
import React from "react";

import Loading from "@/components/Loading";
import { ProviderProps } from "@/types/ProviderType";
import { useLoading } from "@/utils/providers/LoadingContext";

const ClientLoadingWrapper = ({ children }: ProviderProps) => {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};

export default ClientLoadingWrapper;
