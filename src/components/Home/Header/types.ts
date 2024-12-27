import React from "react";

import { IconBaseProps } from "@/components/Icons/type";

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
