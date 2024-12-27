import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { DataResponse } from "@/api/services/signFlow/types";
import { useAuth } from "@/utils/providers/AuthProvider";

const useHandleUserLogin = (axiosResponse: AxiosResponse<DataResponse, unknown> | undefined) => {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    if (axiosResponse) {
      console.log("User logged in successfully", axiosResponse);
      const { token, name, photo } = axiosResponse.data.user;
      Cookies.set("token", JSON.stringify({ name, photo, token }));
      setUser({ name, photo, token });
      router.push("/");
    }
  }, [axiosResponse, router, setUser]);
};

export default useHandleUserLogin;
