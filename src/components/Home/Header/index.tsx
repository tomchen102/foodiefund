"use client";
import Logo from "../Logo";

import MemberMenu from "./_components/MemberMenu";
import Navbar from "./_components/Navbar";
import MobileNavbar from "./_components/Navbar/MobileNavbar";
import { MenuType } from "./types";

const navMenu: MenuType = [
  { title: "我要提案", href: "/proposal" },
  { title: "探索專案", href: "/projects" },
  { title: "關於我們", href: "/about-us" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white drop-shadow-sm">
      <div className="container flex h-12 pl-3 md:h-14 md:pl-0">
        <Logo />
        <Navbar menuList={navMenu} />
        <MemberMenu />
        <MobileNavbar menuList={navMenu} />
      </div>
    </header>
  );
};

export default Header;
