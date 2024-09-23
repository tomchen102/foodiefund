import Image from "next/image";
import { FaLine } from "react-icons/fa6";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

const FooterMenu = () => {
  return (
    <footer className="bg-[#27272A] ">
      <div className="container py-8 px-3 md:flex ">
        <div className="flex items-center md:items-start md:flex-col md:w-1/2">
          <div className="flex font-bold text-white">
            {/* Add Hero Images Here */}
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=ee137cf0-70c5-40a2-b6cc-ec4cfb03c614"
              width={24}
              height={24}
              className="inline-block mr-2"
              alt="Screenshots of the dashboard project showing desktop version"
            />{" "}
            眾資成城
          </div>
          <ul className="flex social-media gap-x-[13px] md:mt-auto ml-auto md:ml-0">
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
                <FaLine className="bg-white rounded-lg ring-2 ring-inset ring-[#27272A] overflow-hidden text-[#27272A]" />
              </a>
            </li>
          </ul>
        </div>

        <div className="sitemap mt-10 md:mt-0 md:w-1/2">
          <ul>
            <li>關於</li>
            <li>
              <a href="#">首頁</a>
            </li>
            <li>
              <a href="#">關於我們</a>
            </li>
            <li>
              <a href="#">最新消息</a>
            </li>
          </ul>
          <ul>
            <li>幫助</li>
            <li>
              <a href="#">常見問題</a>
            </li>
            <li>
              <a href="#">使用條款</a>
            </li>
            <li>
              <a href="#">隱私權政策</a>
            </li>
          </ul>
          <ul>
            <li>更多內容</li>
            <li>
              <a href="#">探索專案</a>
            </li>
            <li>
              <a href="#">我要提案</a>
            </li>
            <li>
              <a href="#">募資提案經驗談</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
