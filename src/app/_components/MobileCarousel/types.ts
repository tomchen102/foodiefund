interface CarouselProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  avatarUrl: string;
  avatarAlt: string;
  avatarName: string;
  avatarRole: string;
}

export interface MobileCarouselProps {
  data: CarouselProps[];
}
