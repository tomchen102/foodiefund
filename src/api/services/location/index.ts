import axiosClient from "@/api/axiosClient";

export const getLocation = async () => {
  const response = await axiosClient(
    `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL}/CityCountyData.json`
  );
  return response.data;
};
