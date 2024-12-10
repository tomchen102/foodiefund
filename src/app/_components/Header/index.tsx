"use client";
import Logo from "../Logo";
import Navbar from "./Navbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import MemberMenu from "./MemberMenu";
import { MenuType } from "./types";

const navMenu: MenuType = [
  { title: "首頁", href: "/" },
  { title: "我要提案", href: "#" },
  { title: "探索專案", href: "/projects" },
  { title: "問與答", href: "#" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
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
