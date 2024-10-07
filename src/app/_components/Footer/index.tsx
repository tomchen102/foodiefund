import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import Logo from "../Header/logo";

const fooMenu = {
  aboutNav: [
    { title: "首頁", hrefUrl: "#" },
    { title: "關於我們", hrefUrl: "#" },
    { title: "最新消息", hrefUrl: "#" },
  ],
  helpNav: [
    { title: "常見問題", hrefUrl: "#" },
    { title: "使用條款", hrefUrl: "#" },
    { title: "隱私權政策", hrefUrl: "#" },
  ],
  moreNav: [
    { title: "探索專案", hrefUrl: "#" },
    { title: "我要提案", hrefUrl: "#" },
    { title: "募資提案經驗談", hrefUrl: "#" },
  ],
};

const FooterMenu = () => {
  return (
    <footer className="bg-[#27272A]">
      <div className="container px-3 py-8 md:flex">
        <div className="flex items-center text-white md:w-1/2 md:flex-col md:items-start">
          <Logo />
          <ul className="social-media ml-auto flex gap-x-[13px] md:ml-0 md:mt-auto">
            <li>
              <a href="#">
                <RiFacebookBoxFill className="text-white" />
              </a>
            </li>
            <li>
              <a href="#">
                <RiInstagramFill className="text-white" />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <FaLine className="overflow-hidden rounded-lg bg-white text-[#27272A] ring-2 ring-inset ring-[#27272A]" />
              </a>
            </li>
          </ul>
        </div>

        <div className="sitemap mt-10 flex w-full justify-between text-sm text-white md:mt-0 md:w-1/2">
          <ul>
            <li className="mb-4 font-bold">關於</li>
            {fooMenu.aboutNav.map((item, index) => (
              <li className="mb-4" key={item.title}>
                <Link href={item.hrefUrl} key={index}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="mb-4 font-bold">幫助</li>
            {fooMenu.helpNav.map((item, index) => (
              <li className="mb-4" key={item.title}>
                <Link href={item.hrefUrl} key={index}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="mb-4 font-bold">更多內容</li>
            {fooMenu.moreNav.map((item, index) => (
              <li className="mb-4" key={item.title}>
                <Link href={item.hrefUrl} key={index}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
