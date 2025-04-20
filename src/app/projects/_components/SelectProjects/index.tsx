import React from "react";
import { IoIosSearch } from "react-icons/io";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className="container bg-white px-3 lg:px-0">
      <h1 className="mt-[28px] text-2xl font-bold lg:mt-[34px]">探索專案</h1>
      <div className="mt-6 flex flex-wrap">
        <div className="flex w-full md:mr-auto md:w-auto">
          <Select>
            <SelectTrigger className="mr-4 min-w-[106px] gap-2 border border-solid border-gray-200 py-6 md:min-w-60">
              <SelectValue placeholder="專案性質" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {navMenu.projectNav.map((item) => (
                  <SelectItem
                    key={item.title}
                    value={item.title}
                    className="border-b border-gray-200 py-3 hover:!bg-primary-light md:min-w-60"
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mr-4 min-w-[106px] gap-2 border border-solid border-gray-200 py-6 md:min-w-[120px]">
              <SelectValue placeholder="區域" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {navMenu.areaNav.map((item) => (
                  <SelectItem
                    key={item.title}
                    value={item.title}
                    className="min-w-[106px] border-b border-gray-200 py-3 hover:!bg-primary-light md:min-w-[120px]"
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mr-4 min-w-[106px] gap-2 border border-solid border-gray-200 py-6 md:min-w-[120px]">
              <SelectValue placeholder="類別" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {navMenu.cuisineNav.map((item) => (
                  <SelectItem
                    key={item.title}
                    value={item.title}
                    className="min-w-[106px] border-b border-gray-200 py-3 hover:!bg-primary-light md:min-w-[120px]"
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3 flex w-full md:mt-0 md:w-auto">
          <div className="relative mr-3 flex flex-grow items-center justify-start md:mr-4">
            <IoIosSearch className="absolute left-[18px] text-lg" />
            <Input className="h-[46px] rounded-none bg-[#fff] pl-10 md:min-w-60" type="text" placeholder="搜尋專案" />
          </div>
          <Select>
            <SelectTrigger className="w-[106px] gap-2 border border-solid border-gray-200 py-6 md:min-w-[120px]">
              <SelectValue placeholder="排序" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {navMenu.filterNav.map((item) => (
                  <SelectItem
                    key={item.title}
                    value={item.title}
                    className="min-w-[106px] border-b border-gray-200 py-3 hover:!bg-primary-light md:min-w-[120px]"
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectProjects;
