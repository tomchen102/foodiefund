import axios from "axios";

export const getLocation = async () => {
  const response = await axios.get("http://localhost:3000/CityCountyData.json");
  return response.data;
};
