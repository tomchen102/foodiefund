import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const HeaderMenu = () => {
  return (
    <nav className="md:container">
      <div className="navbar flex flex-wrap items-center justify-between md:flex-nowrap">
        <div className="flex p-3 font-bold">
          {/* Add Hero Images Here */}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/foodiefund-7b103.appspot.com/o/logo.png?alt=media&token=ee137cf0-70c5-40a2-b6cc-ec4cfb03c614"
            width={24}
            height={24}
            className="mr-2 inline-block"
            alt="Screenshots of the dashboard project showing desktop version"
          />{" "}
          眾資成城
        </div>
        <div className="hamburger md:hidden">
          <input className="hidden" type="checkbox" id="mobileMenu"></input>
          <label
            htmlFor="mobileMenu"
            className="block bg-[#40E0D0] p-4 text-[#0F514E] hover:cursor-pointer"
          >
            <HamburgerMenuIcon className="menuOpen h-[16px] w-[16px]" />
            <Cross1Icon className="menuClose hidden h-[16px] w-[16px]" />
          </label>
        </div>
        <ul className="navbar-list hidden w-screen bg-white md:flex md:h-fit md:w-fit md:gap-x-10">
          {/* <UserMenu />  */}
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">我要提案</a>
          </li>
          <li>
            <a href="#">探索專案</a>
          </li>
          <li>
            <a href="#">問與答</a>
          </li>
          <li className="resgitration">
            <a href="#">登入 / 註冊</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderMenu;
