import axios from "axios";
import cookies from "js-cookie";
import { CommentsReplyPostType } from "./types";

const baseUrl = "/comments";

export const getCommentsList = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

export const postComments = async (data: CommentsReplyPostType) => {
  const token = cookies.get("token");
  const response = await axios.post(`${baseUrl}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const postReply = async (data: CommentsReplyPostType) => {
  const token = cookies.get("token");
  const response = await axios.post(`/comments_reply`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
