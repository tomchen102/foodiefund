"use client";

import { useToast } from "@/hooks/use-toast";
import { ProviderProps } from "@/types/ProviderType";
import { QueryClientProvider, QueryClient, QueryCache } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: ProviderProps) => {
  const { toast } = useToast();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            console.error("Global Query Error:", error);
            return toast({
              variant: "destructive",
              description: `${error}`,
            });
          },
        }),
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
