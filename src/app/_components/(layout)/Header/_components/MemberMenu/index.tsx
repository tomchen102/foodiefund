import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/utils/providers/AuthProvider";
import { FaDollarSign, FaRegBell, FaRegHeart, FaRegUser } from "react-icons/fa";
import { ExitIcon, Pencil1Icon } from "@radix-ui/react-icons";
import AvatarCircle from "../AvatarCircle";
import { MemberMenuType } from "../../types";

const memberMenu: MemberMenuType = [
  { title: "帳號設定", href: "#", icon: FaRegUser },
  { title: "贊助紀錄", href: "#", icon: FaDollarSign },
  { title: "收藏紀錄", href: "#", icon: FaRegHeart },
  { title: "提案紀錄", href: "#", icon: Pencil1Icon },
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
            <FaRegBell className="h-6 w-6 text-primary-dark" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-36 items-center justify-center gap-2 bg-primary px-3 hover:bg-primary-light focus-visible:outline-none">
              <AvatarCircle />
              <div className="truncate text-base font-bold capitalize text-primary-dark">{user.name}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 min-w-36 shadow-none">
              {memberMenu.map((item) => {
                return (
                  <Link href={item.href} key={item.title}>
                    <DropdownMenuItem className="h-12 truncate text-base font-bold capitalize hover:!bg-primary-light hover:!text-primary-dark">
                      <div className="mr-2 flex size-5 items-center justify-center">
                        {<item.icon className="size-4" />}
                      </div>
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="h-12 truncate text-base font-bold capitalize hover:!bg-primary-light hover:!text-primary-dark"
                onClick={handleLogout}
              >
                <div className="mr-2 flex size-5 items-center justify-center">
                  <ExitIcon className="size-4 text-primary-dark" />
                </div>
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
