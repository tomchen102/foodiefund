import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ChildrenProps extends LayoutProps {
  className?: string;
  params?: {
    id: string;
  };
}

export interface SectionPaddingProps extends ChildrenProps {
  container?: boolean;
  adminContainer?: boolean;
}
