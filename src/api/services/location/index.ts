import axiosClient from "@/api/axiosClient";

export const getLocation = async () => {
  const response = await axiosClient(
    `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""}/CityCountyData.json`
  );
  return response.data;
};
