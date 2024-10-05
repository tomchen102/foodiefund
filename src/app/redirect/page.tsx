"use client"; // 這個聲明必須加上來表明這是一個 Client Component

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { useAuth } from "@/utils/providers/AuthProvider";

const RedirectPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useAuth();
  const token = searchParams.get("token");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const photo = searchParams.get("photo");

  if (token && name && email && photo) {
    Cookies.set("token", JSON.stringify({ name, photo, token }));
    setUser({ name, photo, token });
    router.push("/");
  }
};

export default RedirectPage;
