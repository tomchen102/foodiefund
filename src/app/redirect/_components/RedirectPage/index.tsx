"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/utils/providers/AuthProvider";

const RedirectPageContent = () => {
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

  return (
    <div>
      {/* Display the extracted search parameters */}
      <p>Token: {searchParams.get("token")}</p>
      <p>Name: {searchParams.get("name")}</p>
    </div>
  );
};

const RedirectPage = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RedirectPageContent></RedirectPageContent>
    </Suspense>
  );
};

export default RedirectPage;
