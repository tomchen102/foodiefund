import { IconBaseProps } from "@/components/Icons/type";
import React from "react";

export type MenuType = {
  title: string;
  href: string;
}[];

export type MenuProps = {
  [key: string]: MenuType;
};

export type MemberMenuType = {
  title: string;
  href: string;
  icon: React.FC<IconBaseProps>;
}[];
