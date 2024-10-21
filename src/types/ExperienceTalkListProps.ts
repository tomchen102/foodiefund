export interface ExperienceTalkProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  avatarUrl: string;
  avatarAlt: string;
  avatarName: string;
  avatarRole: string;
}

export interface ExperienceTalkListProps {
  data: ExperienceTalkProps[];
}

export type ExperienceTalkListType = ExperienceTalkListProps & {
  className?: string;
};
