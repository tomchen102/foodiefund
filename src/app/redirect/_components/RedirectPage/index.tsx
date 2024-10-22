"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/utils/providers/AuthProvider";

const RedirectPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();

  console.log(searchParams);

  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");
    let photo = searchParams.get("photo");

    if (token && name) {
      photo = photo ? photo : "";
      Cookies.set("token", JSON.stringify({ name, photo, token }));
      setUser({ name, photo, token });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setTimeout(() => {
        router.push("/Login");
      }, 2000);
    }
  }, [searchParams, router, setUser]);

  return (
    <div>
      {/* Display the extracted search parameters */}
      {/*  <p>Token: {searchParams.get("token")}</p>
      <p>Name: {searchParams.get("name")}</p>
      <p>email: {searchParams.get("email")}</p>
      <p>photo: {searchParams.get("photo")}</p> */}
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
