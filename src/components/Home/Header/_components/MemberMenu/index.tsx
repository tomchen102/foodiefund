import Link from "next/link";

import { Icons } from "@/components/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/utils/providers/AuthProvider";

import { MemberMenuType } from "../../types";
import AvatarCircle from "../AvatarCircle";

const memberMenu: MemberMenuType = [
  { title: "帳號設定", href: "#", icon: Icons.Account },
  { title: "贊助紀錄", href: "#", icon: Icons.Money },
  { title: "收藏紀錄", href: "#", icon: Icons.Favorite },
  { title: "提案紀錄", href: "/dashboard/64c5ae5c6f2d3e001c", icon: Icons.Plan },
];

const MemberMenu = () => {
  const { user, clearUser } = useAuth();
  const handleLogout = () => clearUser();

  return (
    <>
      {!user ? (
        <Link
          href="/login"
          className="ml-10 hidden h-full w-36 cursor-pointer items-center justify-center bg-primary text-base font-bold text-primary-dark hover:bg-primary-light md:flex"
        >
          登錄 / 註冊
        </Link>
      ) : (
        <div className="hidden h-full md:flex">
          <Link
            href="#"
            className="mx-8 flex h-full w-11 cursor-pointer items-center justify-center text-base text-primary-dark"
          >
            <Icons.Notify />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-36 items-center justify-center gap-2 bg-primary px-3 hover:bg-primary/80 focus-visible:outline-none">
              <AvatarCircle />
              <div className="truncate text-base font-bold capitalize text-primary-dark">{user.name}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 min-w-36 shadow-none">
              {memberMenu.map((item) => {
                return (
                  <Link href={item.href} key={item.title}>
                    <DropdownMenuItem className="flex h-12 gap-2 truncate pl-3 pr-5 text-base font-bold capitalize hover:!bg-primary-light hover:!text-primary-dark">
                      {<item.icon />}
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex h-12 gap-2 truncate pl-3 pr-5 text-base font-bold capitalize hover:!bg-primary-light hover:!text-primary-dark"
                onClick={handleLogout}
              >
                <Icons.Exit />
                登出
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
};

export default MemberMenu;
