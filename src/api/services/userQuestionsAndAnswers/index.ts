import axios from "axios";
import { UserQuestionsAndAnswersListResponseType } from "./types";

export const faqApi = {
  getBaseUrl: "questionsAndAnswers",
  getAll: async () => {
    const response = await axios.get(faqApi.getBaseUrl);
    return response.data;
  },
  create: async (data: UserQuestionsAndAnswersListResponseType) => {
    const response = await axios.post(faqApi.getBaseUrl, data);
    return response.data;
  },
  update: async (data: UserQuestionsAndAnswersListResponseType) => {
    const response = await axios.put(`${faqApi.getBaseUrl}/${data.id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    return axios.delete(`${faqApi.getBaseUrl}/${id}`);
  },
};
