export interface ProviderProps {
  children: React.ReactNode;
  className?: string;
  params?: {
    id: string;
  };
}

export interface SectionPaddingProps extends ProviderProps {
  container?: boolean;
}

export type ProviderLayoutProps = ProviderProps & {
  Navbar?: React.ReactNode;
  Rewards?: React.ReactNode;
};
