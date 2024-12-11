import React from "react";
import { IconType } from "react-icons/lib";
import { IconProps } from "@radix-ui/react-icons/dist/types";

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
  icon: IconType | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}[];
