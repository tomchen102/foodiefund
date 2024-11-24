import axios from "axios";
import { UserQuestionsAndAnswersListResponseType } from "./types";

const baseUrl = "questionsAndAnswers";

export const getUserQuestionsAndAnswersList = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

export const postUserQuestionsAndAnswers = async (data: UserQuestionsAndAnswersListResponseType) => {
  const response = await axios.post(`${baseUrl}`, data);
  return response.data;
};

export const updateUserQuestionsAndAnswers = async (data: UserQuestionsAndAnswersListResponseType) => {
  const response = await axios.put(`${baseUrl}/${data.id}`, data);

  return response.data;
};

export const deleteUserQuestionsAndAnswers = async (id: string) => {
  return axios.delete(`${baseUrl}/${id}`);
};
