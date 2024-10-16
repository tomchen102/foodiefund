"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/utils/providers/AuthProvider";

const RedirectPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const photo = searchParams.get("photo");

    if (token && name && email && photo) {
      Cookies.set("token", JSON.stringify({ name, photo, token }));
      setUser({ name, photo, token });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [searchParams, router, setUser]);
  return null;
};

export default RedirectPage;
