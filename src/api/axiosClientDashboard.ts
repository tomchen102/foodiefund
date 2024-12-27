"use client";
import axios from "axios";
import cookies from "js-cookie";

import { applyInterceptors } from "./applyInterceptors";

const userCookie = cookies.get("token");

let token = "";
if (userCookie) {
  const user = JSON.parse(userCookie);
  token = user.token;
}

const axiosClientDashboard = applyInterceptors(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_DASHBOARD_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
);

export default axiosClientDashboard;
