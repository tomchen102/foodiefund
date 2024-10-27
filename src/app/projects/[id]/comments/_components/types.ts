interface Reply {
  id: number;
  avatar: string;
  name: string;
  date: string;
  content: string;
  badge?: string;
}

export interface CommentProps {
  id: number;
  avatar: string;
  name: string;
  date: string;
  content: string;
  replies: Reply[];
}

export interface CommentDataProps {
  commentsData: CommentProps[];
}
