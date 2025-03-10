export interface RecentProjectsProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  place: string;
  percentage?: number;
  currentAmount: string;
  reciprocal?: number;
  projectType: string;
  subscriberCount?: number;
  href: string;
  address?: string;
  cuisine?: string;
  dishes?: string;
  supporters?: number;
}
export interface RecentProjectsListProps {
  data: RecentProjectsProps[];
  gridType?: "three" | "four";
}

export type RecentProjectsBlockType = RecentProjectsListProps & {
  title?: "近期專案" | "熱門專案" | "訂閱式專案";
  className?: string;
};
