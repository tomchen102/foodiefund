export interface Category {
  title: string;
  imageUrl: string;
  feature: string[];
  color: string;
}

export type CategoryProps = { category: Category };

export interface Step {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export type StepProps = { step: Step };

export interface Brand {
  logoUrl: string;
  area: string;
  fee: boolean;
}

export type BrandHeadMap = {
  [K in keyof Omit<Brand, "logoUrl">]: string;
};

export type ComparisonTableProps = {
  brand: Brand[];
  headMap: BrandHeadMap;
};

export interface FaqData {
  question: string;
  answer: string;
  timestamp: string;
}

export type FaqItemProps = { item: FaqData };
