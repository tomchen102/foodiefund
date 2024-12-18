import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  MdAttachMoney,
  MdCheckCircle,
  MdClose,
  MdDeleteOutline,
  MdExitToApp,
  MdFavorite,
  MdFavoriteBorder,
  MdMenu,
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineAccountCircle,
  MdOutlineAdd,
  MdOutlineArrowDownward,
  MdOutlineArrowForward,
  MdOutlineCalendarMonth,
  MdOutlineEdit,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdOutlineFilterList,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineLocationOn,
  MdOutlineNotifications,
  MdOutlinePerson,
  MdOutlineRestaurant,
  MdOutlineSearch,
  MdOutlineSouthEast,
  MdRemoveRedEye,
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import { IconBaseProps } from "./type";

const iconVariants = cva("flex justify-center items-center", {
  variants: {
    mode: {
      light: "text-primary-dark",
      dark: "text-white",
    },
    dimension: {
      s: "size-9",
      m: "size-12",
    },
  },
  defaultVariants: {
    mode: "light",
    dimension: "m",
  },
});

export function createIconComponent(Icon: IconType) {
  return function IconComponent({ mode, dimension, size, className }: IconBaseProps) {
    return (
      <div className={cn(iconVariants({ mode, dimension }), className)}>
        <Icon size={size} className={size ? "" : dimension === "s" ? "size-6" : "size-7"} />
      </div>
    );
  };
}

export const Icons = {
  Account: createIconComponent(MdOutlinePerson),
  Avatar: createIconComponent(MdOutlineAccountCircle),
  Back: createIconComponent(MdNavigateBefore),
  Close: createIconComponent(MdClose),
  Exit: createIconComponent(MdExitToApp),
  Favorite: createIconComponent(MdFavoriteBorder),
  FavoriteFill: createIconComponent(MdFavorite),
  Menu: createIconComponent(MdMenu),
  Money: createIconComponent(MdAttachMoney),
  Next: createIconComponent(MdNavigateNext),
  Notify: createIconComponent(MdOutlineNotifications),
  Plan: createIconComponent(MdOutlineEdit),
  ArrowRight: createIconComponent(MdOutlineArrowForward),
  Location: createIconComponent(MdOutlineLocationOn),
  Filter: createIconComponent(MdOutlineFilterList),
  Search: createIconComponent(MdOutlineSearch),
  Expand: createIconComponent(MdOutlineExpandMore),
  Collapse: createIconComponent(MdOutlineExpandLess),
  ArrowDown: createIconComponent(MdOutlineArrowDownward),
  Calendar: createIconComponent(MdOutlineCalendarMonth),
  Add: createIconComponent(MdOutlineAdd),
  Delete: createIconComponent(MdDeleteOutline),
  Restaurant: createIconComponent(MdOutlineRestaurant),
  CheckCircleFill: createIconComponent(MdCheckCircle),
  ViewFill: createIconComponent(MdRemoveRedEye),
  ViewMore: createIconComponent(MdOutlineSouthEast),
  DoubleArrowLeft: createIconComponent(MdOutlineKeyboardDoubleArrowLeft),
  DoubleArrowRight: createIconComponent(MdOutlineKeyboardDoubleArrowRight),
};
