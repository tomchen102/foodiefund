import ReplyForm from "./_components/Reply";
import { getCommentsData } from "@/mock/getCommentsData";

const Comments = async () => {
  const commentsData = await getCommentsData();
  return <ReplyForm commentsData={commentsData} />;
};

export default Comments;
