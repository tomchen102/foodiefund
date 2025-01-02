import Image from "next/image";
import React from "react";

import { ExperienceTalkListProps } from "@/types/ExperienceTalkListProps";

import { Icons } from "../Icons";
const ExperienceTalkList = ({ data }: ExperienceTalkListProps) => {
  const ImageStyle = {
    width: "44px",
    height: "44px",
  };
  return (
    <ul className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <li key={item.id} className="relative">
          <div className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.15)]">
            <div className="clip-polygon mb-4 h-[440px] rounded-lg bg-white px-5 pt-5">
              <Image src={item.imageUrl} alt={item.title} className="mb-5 w-full" width={376} height={200} priority />
              <h3 className="mb-3 text-lg leading-6">{item.title}</h3>
              <p className="line-clamp-4">{item.description}</p>
            </div>
          </div>

          <div className="absolute -bottom-3 flex w-full">
            <Image
              src={item.avatarUrl}
              alt={item.avatarAlt}
              className="ml-6 mr-3"
              width={44}
              height={44}
              style={ImageStyle}
              priority
            />
            <div className="flex w-full items-center">
              <div className="mr-auto">
                <h4 className="mb-1 font-bold">{item.avatarName}</h4>
                <p className="text-gray">{item.avatarRole}</p>
              </div>
              <div className="flex items-center">
                <Icons.ViewFill type="indicator" />
                <p className="mr-3 text-gray">{item.views}人</p>
                <Icons.FavoriteFill type="indicator" />
                <p className="text-gray">{item.favorites}人</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTalkList;
