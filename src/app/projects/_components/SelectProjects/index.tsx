import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Link from "next/link";
import { BsFilterLeft } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

const navMenu = {
  projectNav: [
    { title: "全部", hrefUrl: "#" },
    { title: "群眾募資", hrefUrl: "#" },
    { title: "訂閱式專案", hrefUrl: "#" },
  ],
  areaNav: [
    { title: "全部", hrefUrl: "#" },
    { title: "北部", hrefUrl: "#" },
    { title: "中部", hrefUrl: "#" },
    { title: "南部", hrefUrl: "#" },
    { title: "東部", hrefUrl: "#" },
  ],
  cuisineNav: [
    { title: "全部", hrefUrl: "#" },
    { title: "中式料理", hrefUrl: "#" },
    { title: "日式料理", hrefUrl: "#" },
    { title: "泰式料理", hrefUrl: "#" },
    { title: "義式料理", hrefUrl: "#" },
    { title: "美式料理", hrefUrl: "#" },
    { title: "越式料理", hrefUrl: "#" },
  ],
  filterNav: [
    { title: "所有計畫", hrefUrl: "#" },
    { title: "現正熱門", hrefUrl: "#" },
    { title: "專案金額", hrefUrl: "#" },
    { title: "近期成功", hrefUrl: "#" },
    { title: "支持人次", hrefUrl: "#" },
    { title: "即將達標", hrefUrl: "#" },
    { title: "最新計畫", hrefUrl: "#" },
  ],
};

const SelectProjects = () => {
  return (
    <div className="container bg-[#FDFBF8] px-3 lg:px-0">
      <h1 className="mt-[28px] text-2xl font-bold lg:mt-[34px]">探索專案</h1>
      <div className="mt-6 flex flex-wrap">
        <div className="flex w-full md:mr-auto md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-4 flex w-full items-center justify-start gap-2 border border-solid border-gray-200 bg-[#fff] px-3 py-3 focus-visible:outline-none md:min-w-60">
              <span className="mr-auto text-sm md:ml-1">專案性質</span>
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.projectNav.map((item, index) => {
                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem className="border border-solid border-gray-200 hover:!bg-primary-light md:min-w-60">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-4 flex min-w-[106px] items-center justify-start gap-2 border border-solid border-gray-200 bg-[#fff] px-3 py-3 focus-visible:outline-none md:min-w-[120px]">
              <span className="mr-auto text-sm md:ml-1">區域</span>
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.areaNav.map((item, index) => {
                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem className="min-w-[106px] border border-solid border-gray-200 hover:!bg-primary-light md:min-w-60">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-auto flex min-w-[106px] items-center justify-start gap-2 border border-solid border-gray-200 bg-[#fff] px-3 py-3 focus-visible:outline-none md:min-w-[120px]">
              <span className="mr-auto text-sm md:ml-1">類別</span>
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.cuisineNav.map((item, index) => {
                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem className="min-w-[106px] border border-solid border-gray-200 hover:!bg-primary-light md:min-w-60">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-3 flex w-full md:mt-0 md:w-auto">
          <div className="relative mr-3 flex flex-grow items-center justify-start md:mr-4">
            <IoIosSearch className="absolute left-[18px] text-base" />
            <Input
              className="h-[46px] rounded-none bg-[#fff] pl-10 text-sm md:min-w-60"
              type="text"
              placeholder="搜尋專案"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-w-20 items-center justify-start gap-2 border border-solid border-gray-200 bg-[#fff] px-3 py-3 focus-visible:outline-none">
              <span className="text-sm md:ml-1">排序</span>
              <BsFilterLeft />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navMenu.filterNav.map((item, index) => {
                return (
                  <Link href={item.hrefUrl} key={index}>
                    <DropdownMenuItem className="min-w-60 border border-solid border-gray-200 hover:!bg-primary-light">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SelectProjects;
