"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../../Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetSubContent,
} from "@/components/ui/sheet";
import AvatarCircle from "../AvatarCircle";
import { useAuth } from "@/utils/providers/AuthProvider";
import { MemberMenuType, MenuProps } from "../../types";
import { Icons } from "@/components/Icons";

const memberMenu: MemberMenuType = [
  { title: "帳號設定", href: "#", icon: Icons.Account },
  { title: "贊助紀錄", href: "#", icon: Icons.Money },
  { title: "收藏紀錄", href: "#", icon: Icons.Favorite },
  { title: "提案紀錄", href: "#", icon: Icons.Plan },
];

const MobileNavbar = ({ menuList }: MenuProps) => {
  const { user, clearUser } = useAuth();
  const handleLogout = () => clearUser();
  const [isAllSheetsOpen, setIsAllSheetsOpen] = useState<boolean>(false);
  const [isChildSheetOpen, setIsChildSheetOpen] = useState<boolean>(false);

  const closeAllSheets = () => {
    setIsAllSheetsOpen(false);
    setIsChildSheetOpen(false);
  };

  return (
    <Sheet open={isAllSheetsOpen} onOpenChange={setIsAllSheetsOpen}>
      <SheetTrigger className="flex h-12 w-12 items-center justify-center md:hidden">
        <Icons.Menu dimension="s" />
      </SheetTrigger>
      <SheetContent className="h-full w-full p-0">
        <SheetHeader className="flex h-12 items-center justify-center pl-3">
          <Logo />
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        {user && (
          <Sheet open={isChildSheetOpen} onOpenChange={setIsChildSheetOpen}>
            <SheetTrigger className="flex h-11 w-full items-center bg-primary pl-3 hover:bg-primary-light">
              <AvatarCircle />
              <div className="w-16 truncate text-base font-bold capitalize text-primary-dark">{user.name}</div>
              <div className="absolute right-0 flex h-11 w-12 items-center justify-center">
                <Icons.Next dimension="s" />
              </div>
            </SheetTrigger>
            <SheetSubContent className="absolute top-12 size-full p-0">
              <SheetTitle className="hidden"></SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
              <Link
                href="/"
                className="absolute -top-12 left-0 h-12 w-28 bg-transparent"
                onClick={closeAllSheets}
              ></Link>
              <button className="absolute -top-12 right-0 size-12 bg-transparent" onClick={closeAllSheets}></button>
              <SheetClose className="flex h-11 w-full items-center bg-primary text-base font-bold text-primary-dark hover:bg-primary-light">
                <div className="flex h-11 w-14 items-center justify-center">
                  <Icons.Back dimension="s" />
                </div>
                返回
              </SheetClose>
              {memberMenu.map((item) => {
                return (
                  <div
                    className="w-full border-b border-gray-200 last:border-b-0"
                    key={item.title}
                    onClick={closeAllSheets}
                  >
                    <Link
                      className="flex h-12 min-h-[3.25rem] items-center gap-2 pl-3 text-base font-bold text-primary-dark"
                      href={item.href}
                      key={item.title}
                    >
                      {<item.icon dimension="s" />}
                      {item.title}
                    </Link>
                  </div>
                );
              })}
              <div className="w-full" onClick={closeAllSheets}>
                <div
                  className="flex h-11 w-full items-center justify-center bg-primary text-base font-bold text-primary-dark hover:bg-primary-light"
                  onClick={handleLogout}
                >
                  <Icons.Exit dimension="s" className="mr-2" />
                  登出
                </div>
              </div>
            </SheetSubContent>
          </Sheet>
        )}
        {menuList.map((item) => (
          <SheetClose className="w-full border-b border-gray-200 last:border-b-0" key={item.title} asChild>
            <Link
              key={item.title}
              className="flex min-h-[3.25rem] w-full items-center pl-3 font-bold text-primary-dark"
              href={item.href}
            >
              {item.title}
            </Link>
          </SheetClose>
        ))}
        {!user && (
          <SheetFooter>
            <SheetClose asChild>
              <Link
                href="/login"
                className="flex h-11 w-full cursor-pointer items-center justify-center bg-primary text-base font-bold text-primary-dark hover:bg-primary-light"
              >
                登錄 / 註冊
              </Link>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
