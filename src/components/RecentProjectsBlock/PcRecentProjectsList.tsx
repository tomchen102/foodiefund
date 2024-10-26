import Badges from "@/components/Badges";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { RecentProjectsListProps } from "@/types/RecentProjectsListProps";

const PcRecentProjectsList = ({ data }: RecentProjectsListProps) => {
  return (
    <ul className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => (
        <li className="relative flex flex-col" key={item.id}>
          <div className="flex h-full flex-col rounded-lg bg-white">
            <div className="relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-full rounded-tl-lg rounded-tr-lg"
                width={376}
                height={200}
                priority
              />
              {item.projectType === "fundraising" && <Badges text="募資中" className="absolute left-3 top-3" />}
              {item.projectType === "subscription" && <Badges text="訂閱式" className="absolute left-3 top-3" />}
            </div>
            <div className="flex h-full flex-col p-5">
              <h3 className="mb-2 font-bold">
                <Link href="#">{item.title}</Link>
              </h3>
              <p className="mb-5 text-sm font-medium">{item.description}</p>
              <div className="mt-auto flex">
                {item.projectType === "fundraising" && <TfiLocationPin size={20} className="mr-1" />}
                {item.projectType === "fundraising" && (
                  <span className="mr-auto text-sm font-bold text-[#71717A]">{item.place}</span>
                )}
                {item.projectType === "fundraising" && (
                  <span className="text-sm font-bold text-[#0F514E]">{item.percentage} %</span>
                )}

                {item.projectType === "subscription" && (
                  <div className="mr-auto flex items-center gap-3">
                    <div className="flex items-center">
                      <TfiLocationPin size={20} className="mr-1" />
                      <span className="mr-auto text-sm font-bold text-[#71717A]">{item.place}</span>
                    </div>
                    <div className="flex items-center">
                      <TfiUser size={20} className="mr-1" />
                      <span className="text-sm">{item.subscriberCount} 人訂閱</span>
                    </div>
                  </div>
                )}
              </div>
              {item.projectType === "fundraising" && <Progress value={item.percentage} className="my-5" />}
              <div className="flex items-center">
                {item.projectType === "fundraising" && (
                  <span className="mr-auto text-xl font-bold text-secondary">NT$ {item.currentAmount}</span>
                )}
                {item.projectType === "fundraising" && (
                  <span className="text-sm font-medium">
                    倒數 <span className="text-[#0F514E]">{item.reciprocal}</span> 天
                  </span>
                )}
                {item.projectType === "subscription" && (
                  <div className="mr-auto mt-3 flex items-center gap-3">
                    <span className="text-xl font-bold text-[#0F514E]">NT$ {item.currentAmount}</span>
                    <span className="text-sm font-medium">/ 每月</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PcRecentProjectsList;
