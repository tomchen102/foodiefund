interface ExpierieceSuccessProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  tag: string[];
  total: number;
}

export interface ExpierieceSuccessListProp {
  data: ExpierieceSuccessProps[];
}

export type ExpierieceSuccessListType = ExpierieceSuccessListProp & {
  title?: string;
  className?: string;
};
