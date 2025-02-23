export interface ProviderProps {
  children: React.ReactNode;
  className?: string;
  params?: {
    id: string;
  };
  Navbar?: React.ReactNode;
  Rewards?: React.ReactNode;
}

export interface SectionPaddingProps extends ProviderProps {
  container?: boolean;
  adminContainer?: boolean;
}
