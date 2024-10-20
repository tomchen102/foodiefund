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
      // Save user details in cookies
      Cookies.set("token", JSON.stringify({ name, photo, token }));
      // Set user in authentication context
      setUser({ name, photo, token });

      // Optional: redirect after 2 seconds
      setTimeout(() => {
        //router.push("/"); // Uncomment or change this to your desired redirect path
      }, 2000);
    }
  }, [searchParams, router, setUser]);

  return (
    <div>
      {/* Display the extracted search parameters */}
      <p>Token: {searchParams.get("token")}</p>
      <p>Name: {searchParams.get("name")}</p>
      <p>Email: {searchParams.get("email")}</p>
      <p>Photo: {searchParams.get("photo")}</p>
    </div>
  );
};

export default RedirectPage;
