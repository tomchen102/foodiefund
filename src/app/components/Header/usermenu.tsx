import { ExitIcon, ChevronRightIcon, ChevronDownIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { FaRegUserCircle, FaRegUser, FaDollarSign, FaRegHeart, FaRegBell } from "react-icons/fa";
import React from "react";


const UserMenu = () => {
  return (
    <li className="flex md:order-last">
      <a href="" className="icon-notification"><FaRegBell/></a>
      <div className="md:flex w-full bg-[#40E0D0]  navbar-login  md:px-6">
          
          <input className="hidden" type="checkbox" id="userMenu"></input>
          <label htmlFor="userMenu" className="px-3 bg-[#40E0D0] flex justify-start items-center py-3 hover:cursor-pointer"><FaRegUserCircle className="w-5 h-5 mr-2"/>User001
            <ChevronRightIcon className="submenuOpen w-4 h-4 md:hidden ml-auto"/> 
            <ChevronDownIcon className="hidden submenuClose w-4 h-4  ml-auto"/> 
            </label>
        
          <ul className="bg-white hidden usermenu ">
            
            <li><a href="#"><FaRegUser/> <span>帳號設定</span></a></li>
            <li><a href="#"><FaDollarSign/> <span>贊助記錄</span></a></li>
            <li>
              <a href="#"><FaRegHeart/> <span>收藏紀錄</span></a>
            </li>
            <li>
              <a href="#"><Pencil1Icon/><span>提案紀錄</span></a>
            </li>
            <li>
              <a href="#"><ExitIcon/><span>登出</span></a>
            </li>
          </ul>
      </div>
    </li>
    


  
  );
};

export default UserMenu;
