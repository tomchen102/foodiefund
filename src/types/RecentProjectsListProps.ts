interface RecentProjectsProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  place: string;
  percentage: number;
  targetAmount: string;
  reciprocal: number;
}

export interface RecentProjectsListProps {
  data: RecentProjectsProps[];
}

export type RecentProjectsBlockType = RecentProjectsListProps & {
  title: "近期專案" | "熱門專案";
  className?: string;
};
