"use client";
import React from "react";
import { useLoading } from "@/utils/providers/LoadingContext";
import Loading from "@/components/Loading";
import { ProviderProps } from "@/types/ProviderType";

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
