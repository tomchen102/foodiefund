import axios from "axios";

import { CommentsReplyPostType } from "./types";

export const commentApi = {
  getBaseUrl: "/comments",
  getAll: async () => {
    const response = await axios.get(commentApi.getBaseUrl);
    return response.data;
  },
  postComments: async (data: CommentsReplyPostType) => {
    const response = await axios.post(commentApi.getBaseUrl, data);
    return response.data;
  },
  postReply: async (data: CommentsReplyPostType) => {
    const response = await axios.post(`/comments_reply`, data);
    return response.data;
  },
};
