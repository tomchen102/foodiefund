"use client";
import React, { createContext, useContext, useState } from "react";

import ClientLoadingWrapper from "@/components/Loading/ClientLoadingWrapper";
import { ChildrenProps } from "@/types/ProviderType";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      <ClientLoadingWrapper>{children}</ClientLoadingWrapper>
    </LoadingContext.Provider>
  );
};
