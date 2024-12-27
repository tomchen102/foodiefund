import { useEffect } from "react";

import { useLoading } from "@/utils/providers/LoadingContext";

export const useSetLoading = (isLoading: boolean) => {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
};
