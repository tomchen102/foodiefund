import { ChevronDownIcon, ChevronRightIcon, ExitIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { FaDollarSign, FaRegBell, FaRegHeart, FaRegUser, FaRegUserCircle } from "react-icons/fa";

const UserMenu = () => {
  return (
    <li className="flex md:order-last">
      <a href="" className="icon-notification">
        <FaRegBell />
      </a>
      <div className="navbar-login w-full bg-[#40E0D0] md:flex md:px-6">
        <input className="hidden" type="checkbox" id="userMenu"></input>
        <label
          htmlFor="userMenu"
          className="flex items-center justify-start bg-[#40E0D0] px-3 py-3 hover:cursor-pointer"
        >
          <FaRegUserCircle className="mr-2 h-5 w-5" />
          User001
          <ChevronRightIcon className="submenuOpen ml-auto h-4 w-4 md:hidden" />
          <ChevronDownIcon className="submenuClose ml-auto hidden h-4 w-4" />
        </label>

        <ul className="usermenu hidden bg-white">
          <li>
            <a href="#">
              <FaRegUser /> <span>帳號設定</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaDollarSign /> <span>贊助記錄</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegHeart /> <span>收藏紀錄</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Pencil1Icon />
              <span>提案紀錄</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ExitIcon />
              <span>登出</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default UserMenu;
