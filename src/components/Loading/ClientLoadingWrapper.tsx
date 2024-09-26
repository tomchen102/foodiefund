"use client";
import React from "react";
import { useLoading } from "@/utils/providers/LoadingContext";
import Loading from "@/components/Loading";

const ClientLoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};

export default ClientLoadingWrapper;
