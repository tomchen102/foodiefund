"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Cross1Icon, ExitIcon, HamburgerMenuIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import Logo from "./logo";
import { FaDollarSign, FaRegBell, FaRegHeart, FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "@/utils/providers/AuthProvider";

const HeaderMenu = () => {
  const { user, clearUser } = useAuth();

  // Handle login
  // const handleLogin = () => {
  //   const localStorageService = LocalStorageService.getInstance();
  //   localStorageService.login("dummyAuthToken"); // Replace with actual login logic
  //   setIsLoggedIn(true);
  // };

  // Handle logout
  const handleLogout = () => {
    clearUser();
  };

  const iconsMap = {
    FaRegUserCircle: FaRegUserCircle,
    FaRegUser: FaRegUser,
    FaDollarSign: FaDollarSign,
    FaRegHeart: FaRegHeart,
    FaRegBell: FaRegBell,
    Pencil1Icon: Pencil1Icon,
  };

  const navMenu = {
    mainNav: [
      { title: "首頁", hrefUrl: "/" },
      { title: "我要提案", hrefUrl: "#" },
      { title: "探索專案", hrefUrl: "#" },
      { title: "問與答", hrefUrl: "#" },
    ],
    userNav: [
      { title: "帳號設定", hrefUrl: "#", icon: "FaRegUser" },
      { title: "贊助紀錄", hrefUrl: "#", icon: "FaDollarSign" },
      { title: "收藏紀錄", hrefUrl: "#", icon: "FaRegHeart" },
      { title: "提案紀錄", hrefUrl: "#", icon: "Pencil1Icon" },
    ],
  };

  return (
    <header className="container flex justify-end">
      <Logo />
      {/* Navigation Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navMenu.mainNav.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link
                href={item.hrefUrl}
                className="px-1 py-4 hover:cursor-pointer hover:border-b-2 hover:border-secondary md:mr-10"
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {!user ? (
        // Render Login/Register button when not logged in
        <Link
          href="/login"
          className={
            buttonVariants({ variant: "default" }) +
            "hidden h-auto rounded-none bg-primary px-10 py-4 text-base leading-6 text-tertiary-foreground"
          }
        >
          登錄 / 註冊
        </Link>
      ) : null}

      {/* mobile menu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center bg-primary px-10 py-2 focus-visible:outline-none md:hidden">
          <HamburgerMenuIcon />
          <Cross1Icon className="hidden" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-screen w-screen p-0 md:hidden">
          {user && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-primary-dark justify-start bg-primary px-5 py-3 font-bold hover:no-underline">
                  <span>
                    <FaRegUserCircle className="mr-2 h-5 w-5" />
                  </span>
                  Lobinda
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  {navMenu.userNav.map((item, index) => {
                    // 动态选择图标组件
                    const IconComponent = iconsMap[item.icon as keyof typeof iconsMap];

                    return (
                      <Link href={item.hrefUrl} key={index}>
                        <DropdownMenuItem>
                          {/* 渲染图标 */}
                          {IconComponent && <IconComponent className="mr-2 h-5 w-5" />} {item.title}
                        </DropdownMenuItem>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {navMenu.mainNav.map((item, index) => (
            <Link href="#" key={index}>
              <DropdownMenuItem>{item.title}</DropdownMenuItem>
            </Link>
          ))}
          {!user ? (
            // onClick={handleLogin}
            <Link href="/login">
              <DropdownMenuItem>登錄 / 註冊</DropdownMenuItem>
            </Link>
          ) : (
            <DropdownMenuItem onClick={handleLogout}>
              <ExitIcon className="mr-2 h-5 w-5" />
              登出
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render .user_menu only when logged in */}
      {user && (
        <div className="user_menu hidden md:flex">
          <Button
            className="text-primary-dark flex h-auto items-center rounded-none px-4 py-4 text-base leading-6 shadow-none lg:px-10"
            variant="ghost"
            asChild
          >
            <Link href="#">
              <FaRegBell />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center bg-primary px-10 py-2 focus-visible:outline-none">
              <FaRegUserCircle className="mr-2 h-5 w-5" />
              {user.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.userNav.map((item, index) => {
                // 动态选择图标组件
                const IconComponent = iconsMap[item.icon as keyof typeof iconsMap];

                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem>
                      {/* 渲染图标 */}
                      {IconComponent && <IconComponent className="mr-2 h-5 w-5" />} {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
              <DropdownMenuItem onClick={handleLogout} className="border-t border-gray-200">
                <ExitIcon className="mr-2 h-5 w-5" /> 登出
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
