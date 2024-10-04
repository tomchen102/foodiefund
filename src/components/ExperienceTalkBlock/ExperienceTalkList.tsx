import { ExperienceTalkListProps } from "@/types/ExperienceTalkListProps";
import Image from "next/image";
import React from "react";

const ExperienceTalkList = ({ data }: ExperienceTalkListProps) => {
  return (
    <ul className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <li key={item.id} className="relative">
          <div className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.15)]">
            <div className="clip-polygon mb-4 h-[440px] rounded-lg bg-[#E2E8E6] px-5 pt-5">
              <Image src={item.imageUrl} alt={item.title} className="mb-5 w-full" width={376} height={200} priority />
              <h3 className="mb-3 font-bold leading-6">{item.title}</h3>
              <p className="text-sm font-medium">{item.description}</p>
            </div>
          </div>

          <div className="absolute bottom-0 flex">
            <Image src={item.avatarUrl} alt={item.avatarAlt} className="ml-6 mr-3" width={44} height={44} priority />
            <div>
              <h4 className="mb-1 text-sm font-bold">{item.avatarName}</h4>
              <p className="text-sm text-gray">{item.avatarRole}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceTalkList;
