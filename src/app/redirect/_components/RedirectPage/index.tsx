"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/utils/providers/AuthProvider";
import { useSetLoading } from "@/hooks/useSetLoading";
import Loading from "@/components/Loading";

const RedirectPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useSetLoading(isLoading);
  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");
    let photo = searchParams.get("photo");

    if (token && name) {
      photo = photo ? photo : "";
      Cookies.set("token", JSON.stringify({ name, photo, token }));
      setUser({ name, photo, token });
      router.push("/");
    } else {
      router.push("/Login");
    }
    setIsLoading(false);
  }, [searchParams, router, setUser]);

  return <Loading />;
};

const RedirectPage = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RedirectPageContent></RedirectPageContent>
    </Suspense>
  );
};

export default RedirectPage;
