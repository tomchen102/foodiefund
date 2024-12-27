import Link from "next/link";
import { RiFacebookBoxFill, RiInstagramFill, RiLineFill } from "react-icons/ri";

import Logo from "../Logo";

import { SitemapType } from "./types";

const sitemap: SitemapType = [
  {
    mapTitle: "關於",
    mapList: [
      { title: "首頁", href: "/" },
      { title: "關於我們", href: "/about-us" },
      { title: "最新消息", href: "#" },
    ],
  },
  {
    mapTitle: "幫助",
    mapList: [
      { title: "常見問題", href: "#" },
      { title: "使用條款", href: "#" },
      { title: "隱私權政策", href: "#" },
    ],
  },
  {
    mapTitle: "更多內容",
    mapList: [
      { title: "探索專案", href: "/projects" },
      { title: "我要提案", href: "#" },
      { title: "募資提案經驗談", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#27272A]">
      <div className="container flex flex-col gap-10 px-3 py-8 md:mb-[7.5rem] md:mt-20 md:flex-row md:justify-between md:p-0">
        <div className="flex justify-between md:h-36 md:flex-col">
          <div className="relative">
            <Logo darkMode={true} />
          </div>
          <div className="flex gap-3">
            <Link className="flex h-7 w-7 items-center justify-center" href="#">
              <RiFacebookBoxFill className="h-6 w-6 text-white" />
            </Link>
            <Link className="flex h-7 w-7 items-center justify-center" href="#">
              <RiInstagramFill className="h-6 w-6 text-white" />
            </Link>
            <Link className="flex h-7 w-7 items-center justify-center" href="#">
              <RiLineFill className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between text-white md:gap-20">
          {sitemap.map((group) => {
            return (
              <div className="flex flex-col gap-4 text-lg" key={group.mapTitle}>
                <div className="font-bold">{group.mapTitle}</div>
                <div className="flex flex-col gap-4 text-base">
                  {group.mapList.map((item) => {
                    return (
                      <Link href={item.href} key={item.title}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
