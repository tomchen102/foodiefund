import axios from "axios";

export const getLocation = async () => {
  const response = await axios.get(
    `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""}/CityCountyData.json`
  );
  return response.data;
};
