export interface BannerProps {
  data: {
    id: number;
    imageUrl: string;
    description: string;
    title: string;
  }[];
  queryParams: { page: number; limit: number };
}
