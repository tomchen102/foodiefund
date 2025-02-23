"use client";

import { QueryClientProvider, QueryClient, QueryCache } from "@tanstack/react-query";
import { useState } from "react";

import { useToast } from "@/hooks/use-toast";
import { ChildrenProps } from "@/types/ProviderType";

const ReactQueryProvider = ({ children }: ChildrenProps) => {
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
            console.error("Global Query Error:", error.message);
            return toast({
              variant: "destructive",
              description: `${error.message}`,
            });
          },
        }),
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
