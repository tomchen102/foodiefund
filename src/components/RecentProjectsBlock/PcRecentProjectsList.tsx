"use client";
import Badges from "@/components/Badges";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { PiForkKnifeFill } from "react-icons/pi";
import { RecentProjectsListProps } from "@/types/RecentProjectsListProps";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const PcRecentProjectsList = ({ data, gridType }: RecentProjectsListProps) => {
  const currentPath = usePathname();
  return (
    <ul className={`hidden gap-6 md:grid md:grid-cols-2 ${gridType === "three" ? "xl:grid-cols-3" : "xl:grid-cols-4"}`}>
      {data.map((item) => {
        const href = currentPath.includes("projects") ? `/projects/${item.id}` : `/projects/${item.id}`;
        return (
          <li className="relative flex flex-col" key={item.id}>
            <div className="flex h-full flex-col rounded-lg border border-solid border-gray-200 bg-white">
              <Link scroll={true} href={href} className="group">
                <div className="flex flex-col">
                  <div className="relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="group-hover:scale-120 w-full rounded-tl-lg rounded-tr-lg duration-300 ease-in-out group-hover:scale-100"
                      width={376}
                      height={200}
                      priority
                    />
                    {item.projectType === "fundraising" && <Badges text="募資中" className="absolute left-3 top-3" />}
                    {item.projectType === "subscription" && <Badges text="訂閱式" className="absolute left-3 top-3" />}
                  </div>
                  <div className="flex h-full flex-col p-5">
                    <h3 className="group-hover:text-tertiary mb-2 font-bold group-hover:underline">{item.title}</h3>
                    <p className="mb-5 line-clamp-3 text-sm font-medium">{item.description}</p>
                    <div className="mt-auto flex">
                      {item.projectType === "fundraising" && (
                        <>
                          <TfiLocationPin size={20} className="mr-1" />
                          {gridType === "three" && (
                            <span className="mr-auto text-sm font-bold text-[#71717A]">{item.address}</span>
                          )}
                          {gridType === "four" && (
                            <>
                              <span className="mr-auto text-sm font-bold text-[#71717A]">{item.place}</span>
                              <span className="text-sm font-bold text-[#0F514E]">{item.percentage} %</span>
                            </>
                          )}
                        </>
                      )}
                      {item.projectType === "subscription" && (
                        <div className="mr-auto flex items-center gap-3">
                          <div className="flex items-center">
                            <TfiLocationPin size={20} className="mr-1" />
                            {gridType === "three" && (
                              <span className="mr-auto text-sm font-bold text-[#71717A]">{item.address}</span>
                            )}
                            {gridType === "four" && (
                              <span className="mr-auto text-sm font-bold text-[#71717A]">{item.place}</span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <TfiUser size={20} className="mr-1" />
                            <span className="text-sm">{item.subscriberCount} 人訂閱</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {gridType === "three" && (
                      <div className="my-3 flex items-center">
                        <PiForkKnifeFill size={20} className="mr-1" />
                        <span className="mr-auto text-sm font-bold text-[#71717A]">
                          {item.dishes} | {item.cuisine}
                        </span>
                      </div>
                    )}
                    {item.projectType === "fundraising" && gridType === "four" && (
                      <Progress value={item.percentage} className="my-5" />
                    )}
                    <div className="flex items-center">
                      {item.projectType === "fundraising" && (
                        <span className="mr-auto text-xl font-bold text-secondary">NT$ {item.currentAmount}</span>
                      )}
                      {item.projectType === "fundraising" && gridType === "four" && (
                        <span className="text-sm font-medium">
                          倒數 <span className="text-[#0F514E]">{item.reciprocal}</span> 天
                        </span>
                      )}
                      {gridType === "three" && (
                        <span className="text-sm font-medium">
                          <span className="text-[#0F514E]">{item.supporters}</span> 人支持
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
              </Link>
              {gridType === "three" && (
                <Button className="mr-5 mt-auto" variant="donateNow" size="lg" asChild>
                  <Link href={`/projects/${item.id}/projectlist`}>立即贊助</Link>
                </Button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PcRecentProjectsList;
