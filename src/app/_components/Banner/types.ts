export interface BannerProps {
  id: number;
  imageUrl: string;
  description: string;
  title: string;
}

export type BannerPropsType = {
  data: BannerProps[];
  queryParams: { page: number; limit: number };
};
