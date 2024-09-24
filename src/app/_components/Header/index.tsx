"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LocalStorageService from "@/utils"; // Assuming you have LocalStorageService
import {
  Cross1Icon,
  ExitIcon,
  HamburgerMenuIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaRegBell,
  FaRegHeart,
  FaRegUser,
  FaRegUserCircle,
} from "react-icons/fa";
import Logo from "./logo";

const HeaderMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const localStorageService = LocalStorageService.getInstance();
    setIsLoggedIn(localStorageService.isAuthenticated());
  }, []);

  // Handle login
  const handleLogin = () => {
    const localStorageService = LocalStorageService.getInstance();
    localStorageService.login("dummyAuthToken"); // Replace with actual login logic
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    const localStorageService = LocalStorageService.getInstance();
    localStorageService.logout();
    setIsLoggedIn(false);
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
      { title: "首页", hrefUrl: "#" },
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
              <NavigationMenuLink className="hover:cursor-pointer hover:border-b-2 hover:border-secondary px-1 py-4 md:mr-10">
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {!isLoggedIn ? (
        // Render Login/Register button when not logged in
        <Button
          className="hidden md:flex items-center text-primary-dark rounded-none leading-6 text-base py-4 px-10 shadow-none h-auto"
          variant="default"
          onClick={handleLogin}
        >
          登錄 / 註冊
        </Button>
      ) : null}

      {/* mobile menu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden bg-primary py-2 px-10 flex items-center focus-visible:outline-none">
          <HamburgerMenuIcon />
          <Cross1Icon className="hidden" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen h-screen p-0 md:hidden">
          {isLoggedIn && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="justify-start px-5 py-3 bg-primary font-bold text-primary-dark hover:no-underline">
                  <span>
                    <FaRegUserCircle className="w-5 h-5 mr-2" />
                  </span>
                  Lobinda
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  {navMenu.userNav.map((item, index) => {
                    // 动态选择图标组件
                    const IconComponent =
                      iconsMap[item.icon as keyof typeof iconsMap];

                    return (
                      <Link href={item.hrefUrl} key={index}>
                        <DropdownMenuItem>
                          {/* 渲染图标 */}
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 mr-2" />
                          )}{" "}
                          {item.title}
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
          {!isLoggedIn ? (
            <DropdownMenuItem onClick={handleLogin}>
              登錄 / 註冊
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={handleLogout}>
              <ExitIcon className="w-5 h-5 mr-2" />
              登出
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render .user_menu only when logged in */}
      {isLoggedIn && (
        <div className="user_menu md:flex hidden">
          <Button
            className="flex items-center text-primary-dark rounded-none leading-6 text-base py-4 px-4 lg:px-10 shadow-none h-auto"
            variant="ghost"
            asChild
          >
            <Link href="#">
              <FaRegBell />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary py-2 px-10 flex items-center focus-visible:outline-none">
              <FaRegUserCircle className="w-5 h-5 mr-2" />
              User001
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.userNav.map((item, index) => {
                // 动态选择图标组件
                const IconComponent =
                  iconsMap[item.icon as keyof typeof iconsMap];

                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem>
                      {/* 渲染图标 */}
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 mr-2" />
                      )}{" "}
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
              <DropdownMenuItem
                onClick={handleLogout}
                className="border-t border-gray-200"
              >
                <ExitIcon className="w-5 h-5 mr-2" /> 登出
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
