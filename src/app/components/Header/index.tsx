import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import UserMenu from "./usermenu";
import Link from "next/link";
import React from "react";



const HeaderMenu = () => {
  return (
 
    <nav className="md:container">
      <div className="navbar flex justify-between items-center flex-wrap md:flex-nowrap">

        <div className="flex font-bold p-3">
          {/* Add Hero Images Here */}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=ee137cf0-70c5-40a2-b6cc-ec4cfb03c614"
            
            width={24}
            height={24}
            className="inline-block mr-2"
            alt="Screenshots of the dashboard project showing desktop version"
          /> 眾資成城
        </div>
        <div className="hamburger md:hidden">
          <input className="hidden" type="checkbox" id="mobileMenu"></input>
          <label htmlFor="mobileMenu" className="p-4 bg-[#40E0D0] text-[#0F514E] block hover:cursor-pointer">
            <HamburgerMenuIcon className="menuOpen w-[16px] h-[16px]"/>
            <Cross1Icon className="menuClose hidden w-[16px] h-[16px]"/>
          </label>
        </div>
        <ul className="navbar-list bg-white hidden w-screen md:w-fit md:flex md:h-fit md:gap-x-10">
          {/* <UserMenu />  */}
          <li><a href="#">首页</a></li>
          <li><a href="#">我要提案</a></li>
          <li><a href="#">探索專案</a></li>
          <li><a href="#">問與答</a></li>
          <li className="resgitration"><a href="#">登入 / 註冊</a></li>
      </ul>
      </div>
      
    </nav>


  
  );
};

export default HeaderMenu;
