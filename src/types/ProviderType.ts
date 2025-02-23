import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
  className?: string;
  params?: {
    id: string;
  };
}

export interface SectionPaddingProps extends ProviderProps {
  container?: boolean;
  adminContainer?: boolean;
}
