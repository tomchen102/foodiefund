export interface ProviderProps {
  children: React.ReactNode;
  className?: string;
  params?: {
    id: number;
  };
}

export interface SectionPaddingProps extends ProviderProps {
  container?: boolean;
}
