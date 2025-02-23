import { cva } from "class-variance-authority";
import React from "react";
import { IconType } from "react-icons/lib";
import {
  MdArrowForward,
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
  MdOutlineSearch,
  MdOutlineSouthEast,
  MdRemoveRedEye,
  MdRestaurant,
  MdCheck,
  MdAccessTime,
  MdOutlineShoppingBag,
  MdOutlineMonetizationOn,
  MdThumbUpOffAlt,
  MdKeyboardReturn,
  MdListAlt,
} from "react-icons/md";

import { cn } from "@/lib/utils";

import { IconBaseProps } from "./type";

const iconVariants = cva("flex justify-center items-center transition-colors", {
  variants: {
    mode: {
      light: "text-primary-dark",
      dark: "text-white",
    },
    dimension: {
      s: "size-6",
      m: "size-8",
    },
    type: {
      action: "",
      indicator: "size-7 text-gray-500",
    },
  },
  defaultVariants: {
    mode: "light",
    dimension: "m",
    type: "action",
  },
});

export const createIconComponent = (Icon: IconType) => {
  const isOutline: boolean = Icon.name.includes("Outline");
  let assetSize: string = "size-6";
  const IconComponent = ({ mode, dimension, type, size, className }: IconBaseProps) => {
    assetSize = size
      ? ""
      : type === "indicator"
        ? isOutline
          ? "size-6"
          : "size-5"
        : dimension === "s"
          ? isOutline
            ? "size-5"
            : "size-4"
          : isOutline
            ? "size-7"
            : "size-6";
    return (
      <div className={cn(iconVariants({ mode, dimension, type }), className)}>
        <Icon size={size} className={assetSize} />
      </div>
    );
  };
  return IconComponent;
};

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
  ArrowRightFill: createIconComponent(MdArrowForward),
  Location: createIconComponent(MdOutlineLocationOn),
  Filter: createIconComponent(MdOutlineFilterList),
  Search: createIconComponent(MdOutlineSearch),
  Expand: createIconComponent(MdOutlineExpandMore),
  Collapse: createIconComponent(MdOutlineExpandLess),
  ArrowDown: createIconComponent(MdOutlineArrowDownward),
  Calendar: createIconComponent(MdOutlineCalendarMonth),
  Add: createIconComponent(MdOutlineAdd),
  Delete: createIconComponent(MdDeleteOutline),
  RestaurantFill: createIconComponent(MdRestaurant),
  CheckCircleFill: createIconComponent(MdCheckCircle),
  ViewFill: createIconComponent(MdRemoveRedEye),
  ViewMore: createIconComponent(MdOutlineSouthEast),
  DoubleArrowLeft: createIconComponent(MdOutlineKeyboardDoubleArrowLeft),
  DoubleArrowRight: createIconComponent(MdOutlineKeyboardDoubleArrowRight),
  Check: createIconComponent(MdCheck),
  Time: createIconComponent(MdAccessTime),
  ShoppingBag: createIconComponent(MdOutlineShoppingBag),
  Monetization: createIconComponent(MdOutlineMonetizationOn),
  ThumbUpOffAlt: createIconComponent(MdThumbUpOffAlt),
  KeyboardReturn: createIconComponent(MdKeyboardReturn),
  ListAlt: createIconComponent(MdListAlt),
};
