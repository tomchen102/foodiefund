import Image from "next/image";
import { FaLine } from "react-icons/fa6";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import React from "react";
import Logo from "../Header/logo";
import { FooterProps } from "./types";
import Link from "next/link";

const fooMenu = {
  aboutNav:[
    { title: '首页', hrefUrl:'#' },
    { title: '關於我們', hrefUrl:'#' },
    { title: '最新消息', hrefUrl:'#' },
  ],
  helpNav:[
    { title: '常見問題', hrefUrl:'#' },
    { title: '使用條款', hrefUrl:'#' },
    { title: '隱私權政策', hrefUrl:'#' },
  ],
  moreNav:[
    { title: '探索專案', hrefUrl:'#' },
    { title: '我要提案', hrefUrl:'#' },
    { title: '募資提案經驗談', hrefUrl:'#' },
  ]
};

const FooterMenu = () => {
  return (
    <footer className="bg-[#27272A] ">
        <div className="container py-8 px-3 md:flex ">

          <div className="flex items-center md:items-start md:flex-col md:w-1/2 text-white">

           <Logo />
            <ul className="flex social-media gap-x-[13px] md:mt-auto ml-auto md:ml-0">
              <li><a href="#"><RiFacebookBoxFill className="text-white"/></a></li>
              <li><a href="#"><RiInstagramFill className="text-white"/></a></li>
              <li><a href="#" className=""><FaLine className="bg-white rounded-lg ring-2 ring-inset ring-[#27272A] overflow-hidden text-[#27272A]"/></a></li>
            </ul>
          </div>

          <div className="sitemap mt-10 md:mt-0 md:w-1/2 text-white w-full flex justify-between text-sm">
            <ul>
              <li className="font-bold mb-4">關於</li>
              {fooMenu.aboutNav.map((item, index) => (
                <li className="mb-4">
                  <Link href={item.hrefUrl} key={index}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className="font-bold mb-4">幫助</li>
              {fooMenu.helpNav.map((item, index) => (
                <li className="mb-4">
                  <Link href={item.hrefUrl} key={index}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul>
              <li className="font-bold mb-4">更多內容</li>
              {fooMenu.moreNav.map((item, index) => (
                <li className="mb-4">
                  <Link href={item.hrefUrl} key={index}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
    </footer>
  );
};

export default FooterMenu;
